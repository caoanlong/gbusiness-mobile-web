class Base {
    constructor(baseUrl, request) {
        this._find = "/findList"
        this._findById = "/findById"
        this._add = "/add"
        this._update = "/update"
        this._del = "/del"
        this.baseUrl = baseUrl
        this.request = request
        this.isClick = true
        this.delay = 1500
    }
    find(params) {
        return new Promise((resolve, reject) => {
            this.request({
                url: this.baseUrl + this._find,
                params
            }).then(res => {
                resolve(res.data.data || res.data || res)
            })
        })
    }
    findById(params) {
        return new Promise((resolve, reject) => {
            this.request({
                url: this.baseUrl + this._findById,
                params
            }).then(res => {
                resolve(res.data.data || res.data || res)
            })
        })
    }
    add(data) {
        if (!this.isClick) return Promise.reject('重复提交！')
        this.isClick = false
        setTimeout(() => { this.isClick = true }, this.delay)
        return this.request({
            url: this.baseUrl + this._add,
            method: 'post',
            data
        })
    }
    update(data) {
        if (!this.isClick) return Promise.reject('重复提交！')
        this.isClick = false
        setTimeout(() => { this.isClick = true }, this.delay)
        return this.request({
            url: this.baseUrl + this._update,
            method: 'post',
            data
        })
    }
    del(data) {
        if (!this.isClick) return Promise.reject('重复提交！')
        this.isClick = false
        setTimeout(() => { this.isClick = true }, this.delay)
        return this.request({
            url: this.baseUrl + this._del,
            method: 'post',
            data
        })
    }
}

export default Base