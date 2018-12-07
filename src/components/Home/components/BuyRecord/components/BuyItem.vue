<template>
    <div class="buy-item">
        <div class="avatar">
            <img class="avatar-img" src="../../../../../assets/imgs/avatar.gif" alt="">
        </div>
        <div class="info">
            <div class="name">刘老师</div>
            <div class="bottom">
                <div class="mobile">139***256</div>
                <div class="time">2018-12-26 20:36</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
$orange = #ff6900
.buy-item
    display flex
    padding 10px
    background-color #ffffff
    &:after
        position absolute
        bottom 0
        left 0
        content " "
        display block
        height 1px
        width 100%
        border-bottom 1px solid #e2e2e2
        -webkit-transform-origin 0 100%
        transform-origin 0 100%
        -webkit-transform scaleY(0.5)
        transform scaleY(0.5)
    .avatar
        flex 0 0 40px
        .avatar-img
            display block
            width 100%
            height 40px
            border-radius 100%
    .info
        flex 1
        padding-left 10px
        .name
            height 20px
            line-height 20px
            font-size 14px
            color #333
        .bottom
            height 20px
            line-height 20px
            display flex
            .mobile
                flex 1
                font-size 14px
                color $orange
                font-weight bold
            .time
                flex 1
                text-align right
                font-size 12px
                color #999
</style>
