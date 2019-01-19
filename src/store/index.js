import Vue from 'vue'
import Vuex from 'vuex'

import member from './modules/member'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		member
	},
	getters
})

export default store