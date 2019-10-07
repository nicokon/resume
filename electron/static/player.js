const fs = require('fs')
const path = require('path')

const log = console.log.bind(console)

const appendHtml = (element, html) => element.insertAdjacentHTML('beforeend', html)
const removeClassAll = function (className) {
    let selector = '.' + className
    let elements = es(selector)
    for (let i = 0; i < elements.length; i++) {
        let e = elements[i]
        e.classList.remove(className)
    }
}

// $('.shuffle').click(function () {
//     $(this).toggleClass('clicked');
// });
// $('.loop1').click(function () {
//     $(this).toggleClass('clicked');
// });

$('#player').dblclick(function () {
    $('.info').toggleClass('up');
});

$('.pause').hide();

// 把 fs.readdir 封装成 promise 的形式
const readdir = (path) => {
    let p = new Promise((resolve, reject) => {
        fs.readdir(path, (error, files) => {
            if (error !== null) {
                reject(error)
            } else {
                resolve(files)
            }
        })
    })
    return p
}

const e = (selector) => document.querySelector(selector)
const es = function (selector) {
    let elements = document.querySelectorAll(selector)
    if (elements.length === 0) {
        return []
        //es(selector)
    } else {
        return elements
    }

}
var playlist = [
    {
        name: 'フロントメモリー',
        player: '鈴木瑛美子',
        imgsrc: 'http://p2.music.126.net/Ly-KSo2384afdnsasuX2lw==/109951163547869525.jpg',
    },

    {
        name: '檄!帝国华撃団(改)',
        player: '横山智佐',
        imgsrc: 'http://p1.music.126.net/RUP_2O1sTKLQommloR_yOg==/71468255831030.jpg',
    },
    {
        name: '空に星が綺麗~悲しい吉祥寺~',
        player: '斉藤和義',
        imgsrc: 'http://p1.music.126.net/kqQkCyASnwo7eddZG7_2bg==/644313813916598.jpg',
    },

]
const templateAudio = (audio) => {

    let t = `
        <li class="my-song">
            <a href="#" data-href="${audio}" data-indi="">${audio.split('.')[0]}
            </a>
        </li>
    `
    return t
}

const insertAudio = (audio) => {
    let container = e('#id-ul-song-list')
    let html = templateAudio(audio)
    appendHtml(container, html)
}

const insertAudios = (audios) => {
    for (let a of audios) {
        insertAudio(a)
    }
}

const loadAudio = () => {
    let dir = 'audios'
    let pathname = path.join(__dirname, dir)
    readdir(pathname).then((files) => {
        let audios = files.filter((e) => e.endsWith('.mp3'))
        insertAudios(audios)
        addIndex()
    })
}

const actionPlay = (player, event) => {
    let self = event.target
    let href = self.dataset.href
    let src = path.join(__dirname, 'audios', href)
    player.src = src
    player.play()
    $('.play').hide();
    $('.pause').show();
    showName(href)
    // addPlaying(player)

}
const addIndex = () => {
    let a = es('.my-song')
    for (let i = 0; i < a.length; i++) {
        a[i].querySelector('a').dataset.indi = i
    }
}
const showName = (info) => {
    let songName = e('.song-name')
    let artist = e('.artist-name')
    let img = e('img')
    let audio = e('audio')
    info = info.split('.')[0]
    for (let i = 0; i < playlist.length; i++) {
        let name = playlist[i].name
        let player = playlist[i].player
        let imgsrc = playlist[i].imgsrc
        let index = i
        if (name === info.split(' - ')[0]) {
            log("songName.value")
            songName.innerHTML = name
            artist.innerHTML = player
            img.src = imgsrc
            audio.dataset.index = index
        }
    }
}
const actionChange = (player) => {
    let control = e('.controls')
    log("control", control)
    control.addEventListener('click', (event) => {
        let self = event.target
        log("self", self)
        if (self.className === 'fa fa-play') {
            log("play")
            player.play()
            $('.play').hide();
            $('.pause').show();
        } else if (self.className === 'fa fa-pause') {
            log("pause")
            player.pause()
            $('.play').show();
            $('.pause').hide();
        }

    })
}

const zfill = function (n, width) {
    let nstr = String(n)
    let nlen = nstr.length
    let result = ''
    for (let i = 0; i < width - nlen; i++) {
        result += '0'
    }
    if (nstr.length < width) {
        nstr = result + nstr
    }
    return nstr
}
const timeTransfer = function (time) {
    time = parseInt(time)
    let min = parseInt(time / 60)
    let sec = time % 60
    //log(typeof sec)
    if (sec < 10) {
        sec = zfill(sec, 2)
    }
    let template = `${min}` + ':' + `${sec}`
    return template
}
//进度条控制
let myAudio = $('audio')[0]
setInterval(present, 500); //每0.5秒计算进度条长度

$('.progress-bar').on('click mousemove', function (ev) {
    //拖拽进度条控制进度
    let self = $(this),
        totalWidth = self.width(),
        offsetX = ev.offsetX,
        offsetPercentage = offsetX / totalWidth;
    if (ev.type === 'click') {
        myAudio.currentTime = myAudio.duration * offsetPercentage;
    }
});

function present() {
    let length = myAudio.currentTime / myAudio.duration * 100;
    $('.fill').width(length + '%'); //设置进度条长度
    $('.time--current').text(timeTransfer(myAudio.currentTime))
    $('.time--total').text(timeTransfer(myAudio.duration))
}

const actionEnded = (player, mode) => {
    log("播放结束, 当前播放模式是", mode)
    if (mode === 'loop0') {
        player.play()
    } else if (mode === 'loop1') {
        nextSong(player)
    } else if (mode === 'random') {
        randomSong(player)
    }
}

const bindEventPlay = (player) => {
    let container = e('#id-ul-song-list')
    container.addEventListener('click', (event) => {
        let self = event.target
        if (self.tagName.toLowerCase() === 'a') {
            event.preventDefault()
            actionPlay(player, event)
        }
    })
}

const bindEventEnded = (player) => {
    player.addEventListener('ended', (event) => {
        let mode = player.dataset.mode
        actionEnded(player, mode)
    })
}
const offset = (offset) => {
    let index = Number(myAudio.dataset.index)
    let num = Number(playlist.length)
    let p = (index + num + offset) % num
    log("pre", p)
    return p
}
const choice = () => {
    let a = Math.random()
    a = a * playlist.length
    let index = Math.floor(a)
    log('index', index)
    return index
}
const randomSong = (player) => {
    let p = choice()
    changeSong(player, p)
}
const bindEventPrev = (player) => {
    let prevbtn = e('.previous')
    prevbtn.addEventListener('click', (event) => {
        let p = offset(-1)
        changeSong(player, p)
    })
}
const nextSong = (player) => {
    let p = offset(1)
    changeSong(player, p)
}
const changeSong = (player, offset) => {
    let indi = document.getElementsByClassName('my-song')
    let href = indi[offset].querySelector('a').dataset.href
    let src = path.join(__dirname, 'audios', href)
    player.src = src
    showName(href)
    player.play()
    $('.play').hide();
    $('.pause').show();
    // addPlaying(player)
}

const bindEventNext = (player) => {
    let nextbtn = e('.next')
    nextbtn.addEventListener('click', (event) => {
        nextSong(player)
    })
}

const bindEventRepeat = (player) => {
    let repeat = e('.loop1')
    repeat.addEventListener('click', (event) => {
        let self = event.target
        let m = 'loop1'
        changeMode(player, self, m)
    })
}
const bindEventRandom = (player) => {
    let random = e('.shuffle')
    random.addEventListener('click', (event) => {
        let self = event.target
        let m = 'random'
        changeMode(player, self, m)
    })
}
const changeMode = (player, self, m) => {
    let mode = player.dataset.mode
    if (mode !== m) {
        let flag = e('.clicked')
        player.dataset.mode = m
        if (flag === []) {
            self.classList.add('clicked')
        } else {
            removeClassAll('clicked')
            self.classList.add('clicked')
        }
    } else {
        removeClassAll('clicked')
        player.dataset.mode = 'loop0'
    }

}
const bindEventList = () => {
    let btn = e('.option')
    btn.addEventListener('click', (event) => {

        let list = e('#player')
        let flag = e('.show')

        if (flag === null) {
            log("add show")
            list.classList.add('show')
        } else {
            removeClassAll('show')
        }

    })
}
// const addPlaying = (player) => {
//     // let player = e('#id-audio-player')
//     let index = player.dataset.index
//     let list = document.getElementsByClassName('my-song')

//     for (let i = 0; i < list.length; i++) {
//         let mysong = list[i].querySelector('a')
//         let indi = mysong.dataset.indi
//         log("mysong,inid", indi, mysong)
//         if (index === indi) {
//             let flag = e('.playing')
//             if (flag == null) {
//                 list[i].classList.add('playing')
//             } else {
//                 removeClassAll('playing')
//                 list[i].classList.add('playing')
//             }
//         }
//     }


// }

const bindEvents = () => {
    let player = e('#id-audio-player')
    bindEventPlay(player)
    bindEventEnded(player)
    actionChange(player)
    bindEventPrev(player)
    bindEventNext(player)
    bindEventRepeat(player)
    bindEventRandom(player)
    bindEventList()
}
const __main = () => {
    loadAudio()
    bindEvents()
}

__main()
