import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'
import { getQueryString, isWeixin } from '../utils/common'
import { APPID } from '../utils/consts'
import Weixin from '../api/Weixin'
import Member from '../api/Member'

Vue.use(Router)

const router = new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			meta: { title: '首页' },
			component: () => import('../components/Home')
		},{
			path: '/createalliance',
			name: 'createalliance',
			meta: { title: '创建联盟' },
			component: () => import('../components/CreateAlliance')
		}, {
			path: '/myorder',
			name: 'myorder',
			meta: { title: '我的订单' },
			component: () => import('../components/MyOrder')
		}
	]
})

router.beforeEach(async (to, from, next) => {
	// if (!store.state.member.authorization && to.path != 'author') {
	// 	// 第一次进入，保存用户准备进入的url
	// 	localStorage.setItem('beforeLoginUrl', to.fullPath)
	// 	next('/author')
	// 	return
	// }
	// next()
	if (to.matched.some(recode => recode.meta.noAuth)) {
		next()
	} else {
		// 如果store已经存在用户信息
		if (store.state.member.mobile) {
			next()
			return
		}
		// 如果在微信中打开
		if (isWeixin()) {
			const code = getQueryString('code')
			if (code) {
				const { openid, access_token } = await Weixin.getOpenID(code)
				const res = await Weixin.getWxInfo(openid, access_token)
			} else {
				const openid = localStorage.getItem('openid')
				if (!openid) {
					const redirectUrl = window.location.href
					window.location.href = 
						`https://open.weixin.qq.com/connect/oauth2/authorize
						?appid=${APPID}
						&redirect_uri=${encodeURIComponent(redirectUrl)}
						&response_type=code
						&scope=snsapi_userinfo
						&state=index
						#wechat_redirect`
				}
			}
		}
	}
})

export default router
