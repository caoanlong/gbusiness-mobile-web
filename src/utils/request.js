import axios from 'axios'
import { Toast } from 'cube-ui'

export const baseURL = process.env.BASE_API

// create an axios instance
const service = axios.create({
	baseURL, // api的base_url
	timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
	if (localStorage.getItem('token')) {
		config.headers['Authorization'] = localStorage.getItem('token')
	}
	return config
}, error => {
	// Do something with request error
	console.log(error) // for debug
	Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
	response => {
		if (response.data.code != 200) {
			if (   response.data.code == 104
				|| response.data.code == 105
				|| response.data.code == 106 ) {
				localStorage.clear()
				Toast.$create({
					txt: response.data.msg,
        			type: 'error'
				})
				window.location.href = '/#/login'
				return Promise.reject('error')
			}
			Toast.$create({
				txt: response.data.msg,
				type: 'error'
			})
			return Promise.reject('error')
		}
		return response
	},
	error => {
		Toast.$create({
			txt: error.message.toString(),
			type: 'error'
		})
		return Promise.reject(error)
	})

export default service
