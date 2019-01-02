import Base from './Base'
import request from '../utils/request'

class Activity extends Base {
    findDetail(params) {
        return new Promise((resolve, reject) => {
            this.request({
                url: this.baseUrl + '/findDetail',
                params
            }).then(res => {
                resolve(res.data.data || res.data || res)
            })
        })
    }
}

export default new Activity('/activity', request)