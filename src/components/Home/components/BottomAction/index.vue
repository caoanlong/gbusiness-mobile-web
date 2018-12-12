<template>
    <div class="wrapper">
        <div class="item promotions" @click="showAlert">活动秘籍</div>
        <div class="item snatch">抢购</div>
    </div>
</template>

<script>
export default {
    methods: {
        showAlert() {
            this.$createDialog({
                type: 'alert',
                title: 'XX教育联盟',
                confirmBtn: {
                    text: '我知道了',
                    active: true
                }
            }, createElement => {
                return [
                    createElement('div', {
                        slot: 'content',
                        class: {
                            'edu-qrcode-tips': true
                        }
                    }, [
                        createElement('p', {
                            class: {
                                'edu-qrcode-desc': true
                            }
                        }, '29.99抢万元大礼包'),
                        createElement('div', {
                            class: {
                                'edu-qrcode-img': true
                            }
                        }),
                        createElement('p', {
                            class: {
                                'edu-qrcode-bottom-desc': true
                            }
                        }, '数量有限速来抢购'),
                        createElement('hr'),
                        createElement('p', {
                            class: {
                                'edu-qrcode-bottom-a': true
                            }
                        }, '好友购买后您还有'),
                        createElement('p', {
                            class: {
                                'edu-qrcode-bottom-b': true
                            }
                        }, '3.88-88.88元红包'),
                        createElement('p', {
                            class: {
                                'edu-qrcode-bottom-c': true
                            }
                        }, '一秒到账哦'),
                        createElement('p', {
                            class: {
                                'edu-qrcode-bottom-d': true
                            }
                        }, '您也可以长按保存此二维码'),
                    ])
                ]
            }).show()
        }
    }
}
</script>

<style lang="stylus">
.edu-qrcode-tips
    padding 15px
    .edu-qrcode-desc
        text-align center
        font-size 13px
        color #ff6900
    .edu-qrcode-img
        width 160px
        height 160px
        margin 0 auto
        background-image url('../../../../assets/imgs/xx-edu-qrcode.png')
        background-size 100%
        background-repeat no-repeat
    .edu-qrcode-bottom-desc
        font-size 13px
        color #666
        text-align center
    .edu-qrcode-bottom-a
        text-align center
        color #999
    .edu-qrcode-bottom-b
        text-align center
        color red
        font-size 16px
        font-weight bold
    .edu-qrcode-bottom-c
        text-align center
        font-size 16px
        color #666
    .edu-qrcode-bottom-d
        text-align center
        font-size 12px
        color #999
</style>

<style lang="stylus" scoped>
.wrapper
    position fixed
    left 0
    bottom 0
    z-index 5
    width 100%
    height 50px
    line-height 50px
    color #ffffff
    font-size 15px
    display flex
    .item
        flex 1
        text-align center
        &.promotions
            background-color #44bb00
        &.snatch
            background-color #ff6900
</style>
