<template>
    <div class="wrapper">
        <div class="item promotions">活动秘籍</div>
        <div class="item snatch">抢购</div>
    </div>
</template>

<script>
export default {
    
}
</script>

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
