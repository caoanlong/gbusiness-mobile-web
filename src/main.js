// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Cube from 'cube-ui'
import App from './App'
import router from './router'
import store from './store'

import './assets/css/reset.css'
// icons
import './assets/icons'


import TitlePannel from './components/Common/TitlePannel'
import NavBar from './components/Common/NavBar'

Vue.config.productionTip = false

Vue.prototype.IMGURL = process.env.IMG_API

Vue.use(Cube)


Vue.component('title-pannel', TitlePannel)
Vue.component('nav-bar', NavBar)

// global filters
import * as filters from './filters'

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
