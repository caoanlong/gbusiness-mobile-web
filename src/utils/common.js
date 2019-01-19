// 获取地址栏参数
export const getQueryString = function (name) {
    const reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)")
    const r = window.location.search.substr(1).match(reg)
    if(r != null) return unescape(r[2])
    return null
}

// 判断是否为微信浏览器
export const isWeixin = function () {
    const u = window.navigator.userAgent.toLowerCase() 
    return u.match(/MicroMessenger/i) == "micromessenger"
}