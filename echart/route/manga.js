const manga = require('../model/manga')

const all = {
    path: '/api/manga/all',
    method: 'get',
    func: function(request, response) {
        let ms = manga.all()
        let r = JSON.stringify(ms)
        response.send(r)
    }
}

const routes = [
    all,
]

module.exports.routes = routes
