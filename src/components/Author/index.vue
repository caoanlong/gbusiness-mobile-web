<template>
    <div>

    </div>
</template>

<script>
import { getQueryString, isWeixin } from '../../utils/common'
export default {
    data() {
        return {
            wxUserInfo: {},
            link: window.location.href
        }
    },
    created() {
        // 检测会员是否登录
        if (localStorage.getItem('authorization')) {
            this.$store.dispatch('getMemberInfo')
        } else {
            if (isWeixin()) {
                const openid = localStorage.getItem('openid')
                if (!openid) {
                    const code = getQueryString('code')
                    if (code) {
                        this.getWxOpenID()
                    } else {
                        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize
                            ?appid=${APPID}
                            &redirect_uri=${encodeURIComponent(this.link)}
                            &response_type=code
                            &scope=snsapi_userinfo
                            &state=index
                            #wechat_redirect`
                    }
                }
            }
        }
    },
    methods: {
        getWxOpenID() {
			Weixin.getOpenID({
				code: getQueryString('code')
			}).then(res => {
                const { openid, access_token } = res
				if (openid && access_token) {
					this.getWxUserInfo(openid, access_token)
					localStorage.setItem('openid', openid)
					localStorage.setItem('accessToken', access_token)
				}
			})
		},
		getWxUserInfo( openid, access_token ) {
			Weixin.getUserInfo({ openid, access_token }).then(res => {
				this.wxUserInfo = res
			})
		}
    }
}
</script>

<style lang="stylus" scoped>

</style>
