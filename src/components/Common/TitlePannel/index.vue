<template>
    <div class="wrapper">
        {{title}}
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style lang="stylus" scoped>
.wrapper
    height 36px
    line-height 36px
    padding 0 10px
    font-size 14px
    color #333
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
</style>
