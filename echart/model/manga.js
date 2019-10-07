const fs = require('fs')

const mangaFilePath = 'db/manga.json'

const loadMangas = () => {
    let content = fs.readFileSync(mangaFilePath, 'utf8')
    let ms = JSON.parse(content)
    return ms
}

const m = {
    data: loadMangas()
}

m.all = function() {
    let ms = this.data
    return ms
}

// 导出一个对象
module.exports = m
