const getters = {
	headImgUrl: state => state.member.headImgUrl,
	mobile: state => state.member.mobile,
	nickName: state => state.member.nickName,
	sex: state => state.member.sex,
	openid: state => state.member.openid,
	unionid: state => state.member.unionid,
	authorization: state => state.member.authorization
}
export default getters