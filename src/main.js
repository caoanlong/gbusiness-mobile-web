// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Cube from 'cube-ui'
import App from './App'
import router from './router'

import './assets/css/reset.css'
// icons
import './assets/icons'


import TitlePannel from './components/Common/TitlePannel'
import NavBar from './components/Common/NavBar'

Vue.config.productionTip = false

Vue.use(Cube)


Vue.component('title-pannel', TitlePannel)
Vue.component('nav-bar', NavBar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
