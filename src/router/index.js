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
		}
	]
})

export default router
