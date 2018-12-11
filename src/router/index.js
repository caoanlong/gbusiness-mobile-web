import Vue from 'vue'
import Router from 'vue-router'

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
		}
	]
})

export default router
