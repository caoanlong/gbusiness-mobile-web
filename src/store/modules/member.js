import Member from '../../api/Member'

const member = {
    state: {
        headImgUrl: localStorage.getItem('headImgUrl'),
        mobile: localStorage.getItem('mobile'),
        nickName: localStorage.getItem('nickName'),
        sex: localStorage.getItem('sex'),
        openid: localStorage.getItem('openid'),
        unionid: localStorage.getItem('unionid'),
        authorization: localStorage.getItem('authorization')
    },
    mutations: {
        SET_HEADIMGURL: (state, headImgUrl) => {
            state.headImgUrl = headImgUrl
            localStorage.setItem('headImgUrl', headImgUrl)
        },
        SET_MOBILE: (state, mobile) => {
            state.mobile = mobile
            localStorage.setItem('mobile', mobile)
        },
        SET_NICKNAME: (state, nickName) => {
            state.nickName = nickName
            localStorage.setItem('nickName', nickName)
        },
        SET_SEX: (state, sex) => {
            state.sex = sex
            localStorage.setItem('sex', sex)
        },
        SET_OPENID: (state, openid) => {
            state.openid = openid
            localStorage.setItem('openid', openid)
        },
        SET_UNIONID: (state, unionid) => {
            state.unionid = unionid
            localStorage.setItem('unionid', unionid)
        },
        SET_AUTHORIZATION: (state, authorization) => {
            state.authorization = authorization
            localStorage.setItem('authorization', authorization)
        }
    },
    actions: {
        login: ({ commit }, authorization) => {
            commit('SET_AUTHORIZATION', authorization)
        },
        logout: ({ commit }) => {
            commit('SET_HEADIMGURL', null)
            commit('SET_MOBILE', null)
            commit('SET_NICKNAME', null)
            commit('SET_SEX', null)
            commit('SET_OPENID', null)
            commit('SET_UNIONID', null)
            commit('SET_AUTHORIZATION', null)
            localStorage.clear()
        },
        getMemberInfo: ({ commit }) => {
            return new Promise((resolve, reject) => {
                Member.findByToken().then(res => {
                    const { headImgUrl, mobile, nickName, sex, openid, unionid } = res
                    commit('SET_HEADIMGURL', headImgUrl)
                    commit('SET_MOBILE', mobile)
                    commit('SET_NICKNAME', nickName)
                    commit('SET_SEX', sex)
                    commit('SET_OPENID', openid)
                    commit('SET_UNIONID', unionid)
                    resolve()
                }).catch(err => {
					reject(err)
				})
            })
        }
    }
}

export default member