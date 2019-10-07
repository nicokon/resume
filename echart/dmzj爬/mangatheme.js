const fs = require('fs')

const request = require('syncrequest')
const cheerio = require('cheerio')

const log = console.log.bind(console)

class Manhua {
    constructor() {
        // 分别是名字/作者/类型/排名/封面图片/分类/更新
        this.name = ''
        this.author = ''
        this.no = 0
        this.class = ''
        this.theme = ''
        this.coverUrl = ''
    }
}

const manhuaFromDivs = (div) => {
    let e = cheerio.load(div)
    let manhua = new Manhua()
    let img = e('.righter-img')
    manhua.coverUrl = img.find('img').attr('src')
    manhua.no = e('.righter-no').text()
    manhua.name = e('.title').text()
    let a = e('.righter-mr').eq(0).text()
    let index = a.indexOf('最新更新')
    manhua.update = a.slice(index + 5)
    let b = e('.righter-mr').eq(1).text()
    log(b)
    let index1 = b.indexOf('作者')
    let index2 = b.indexOf('状态')
    let index3 = b.indexOf('分类')
    let index4 = b.indexOf('题材')
    manhua.author = b.slice(index1 + 3, index2)
    manhua.status = b.slice(index2 + 3, index3)
    manhua.class = b.slice(index3 + 3, index4)
    manhua.theme = b.slice(index4 + 3, -1)
    return manhua
}

const ensurePath = (dir) => {
    let exists = fs.existsSync(dir)
    if (!exists) {
        // 创建目录
        fs.mkdirSync(dir)
    }
}

const cachedUrl = (url) => {
    let dir = 'cached'
    ensurePath(dir)
    let cacheFile = dir + '/' + url.split('-')[2]
    if (url.indexOf('.shtml') === -1) {
        cacheFile = dir + '/' + '1' + '.html'
    }
    let exists = fs.existsSync(cacheFile)
    if (exists) {
        let s = fs.readFileSync(cacheFile)
        return s
    } else {
        let r = request.get.sync(url)
        let body = r.body
        fs.writeFileSync(cacheFile, body)
        return body
    }
}

const manhuasFromUrl = (url) => {
    let body = cachedUrl(url)
    // log('body', typeof body)
    let e = cheerio.load(body)
    let manhuaDivs = e('.middlerighter1')
    let manhuas = []
    for (let i = 0; i < manhuaDivs.length; i++) {
        let div = manhuaDivs[i]
        let m = manhuaFromDivs(div)
        manhuas.push(m)
    }
    return manhuas
}

const saveManhua = (manhuas) => {
    let s = JSON.stringify(manhuas, null, 2)
    // 把 json 格式字符串写入到 文件 中
    let path = 'manhua.json'
    fs.writeFileSync(path, s)
}

const downloadCovers = (manhuas) => {
    let dir = 'covers'
    ensurePath(dir)
    const request = require('request')
    for (let i = 0; i < manhuas.length; i++) {
        let m = manhuas[i]
        let url = m.coverUrl
        // 保存图片的路径
        let path = dir + '/' + m.ranking + '_' + m.name.split('/')[0] + '.jpg'
        // 下载并且保存图片
        request(url).pipe(fs.createWriteStream(path))
    }
}

const __main = () => {
    let manhuas = []
    let url = ''
    for (let i = 1; i <= 10; i++) {
        let index = i
        if (index === 1) {
            url = 'http://manhua.dmzj.com/rank/'
        } else {
            url = `http://manhua.dmzj.com/rank/total-block-${index}.shtml`
        }
        let manhuasInPage = manhuasFromUrl(url)
        // manhuas = manhuas.concat(manhuasInPage)
        manhuas = [...manhuas, ...manhuasInPage]

    }
    saveManhua(manhuas)
    // downloadCovers(manhuas)
    log('抓取成功, 数据已经写入到 manhua.json 中')
}

// http://manhua.dmzj.com/rank/total-block-2.shtml

console.time('main')
__main()
console.timeEnd('main')

