import Base from './Base'
import request from '../utils/request'

class Member extends Base {
    findByToken(params) {
        return new Promise((resolve, reject) => {
            this.request({
                url: this.baseUrl + '/findByToken',
                params
            }).then(res => {
                resolve(res.data.data || res.data || res)
            }).catch(err => {
                reject(err)
            })
        })
    }
}

export default new Member('/member', request)