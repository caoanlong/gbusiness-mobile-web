<template>
    <div class="right-tools">
        <div class="item contact-merchant">
            <div class="icon">
                <svg-icon icon-class="home"></svg-icon>
            </div>
            <div class="txt">联系商家</div>
        </div>
        <div class="item my-order">
            <div class="icon">
                <svg-icon icon-class="order"></svg-icon>
            </div>
            <div class="txt">我的订单</div>
        </div>
        <div class="item add-alliance">
            <div class="icon">
                <svg-icon icon-class="add"></svg-icon>
            </div>
            <div class="txt">创建联盟</div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

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
