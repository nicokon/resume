import Api from './api'

class TodoApi extends Api {
    add(data, callback) {
        let path = '/add'
        this.post(path, data, callback)
    }

    delete(todoId, callback) {
        let path = '/delete/' + String(todoId)
        this.get(path, callback)
    }

    update(todoId, data, callback) {
        let path = '/update/' + String(todoId)
        this.post(path, data, callback)
    }

    all(callback) {
        let path = '/all'
        this.get(path, callback)
    }

    detail(todoId, callback) {
        let path = '/' + String(todoId)
        this.get(path, callback)
    }
}

export default TodoApi
