<template>
    <div class="right-tools">
        <div class="item contact-merchant" @click="showAlert">
            <div class="icon">
                <svg-icon icon-class="home"></svg-icon>
            </div>
            <div class="txt">联系商家</div>
        </div>
        <router-link tag="div" class="item my-order" to="myorder">
            <div class="icon">
                <svg-icon icon-class="order"></svg-icon>
            </div>
            <div class="txt">我的订单</div>
        </router-link>
        <router-link tag="div" class="item add-alliance" to="createalliance">
            <div class="icon">
                <svg-icon icon-class="add"></svg-icon>
            </div>
            <div class="txt">创建联盟</div>
        </router-link>
    </div>
</template>

<script>
export default {
    methods: {
        showAlert() {
            this.$createDialog({
                type: 'alert',
                title: '温馨提示',
                confirmBtn: {
                    text: '我知道了',
                    active: true
                }
            }, createElement => {
                return [
                    createElement('div', {
                        slot: 'content',
                        class: {
                            'contact-content-tips': true
                        }
                    }, [
                        createElement('p', {
                            class: {
                                'contact-content-tips-from': true
                            }
                        }, '本活动由XX联盟 发起'),
                        createElement('p', {
                            class: {
                                'contact-content-tips-mobile': true
                            }
                        }, '电话：13904568768'),
                        createElement('p', {
                            class: {
                                'contact-content-tips-address': true
                            }
                        }, '地址：龙华区清湖地铁站附近交汇处')
                    ])
                ]
            }).show()
        }
    }
}
</script>

<style lang="stylus">
.contact-content-tips
    padding 15px
    .contact-content-tips-from
        color #ff6900
        font-size 15px
        margin-bottom 10px
    .contact-content-tips-mobile, .contact-content-tips-address
        font-size 14px
</style>

<style lang="stylus" scoped>
$blue = #1ac9e9
$orange = #ff6900
$green = #44bb00
.right-tools
    position fixed
    right 0
    top 250px
    z-index 5
    .item
        width 80px
        height 48px
        background-color #ffffff
        border-top-left-radius 24px
        border-bottom-left-radius 24px
        padding 8px
        margin-bottom 10px
        border 1px solid #ddd
        border-right none
        display flex
        .icon
            flex 0 0 32px
            height 32px
            line-height 32px
            color #ffffff
            border-radius 100%
            text-align center
        .txt
            flex 1
            font-size 12px
            line-height 1.4
            padding-left 7px
        &.contact-merchant
            .icon
                background-color $blue
            .txt
                color $blue
        &.my-order
            .icon
                background-color $orange
            .txt
                color $orange
        &.add-alliance
            .icon
                background-color $green
            .txt
                color $green
</style>
