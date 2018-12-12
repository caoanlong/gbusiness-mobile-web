<template>
    <div class="nav-bar-wrapper">
        <div class="nav-bar-left" @click="back">
            <i :class="'cubeic-'+ left" v-if="left"></i>
        </div>
        <div class="nav-bar-center">{{title}}</div>
        <div class="nav-bar-right">
            <i :class="'cubeic-' + right" v-if="right"></i>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            left: String,
            right: String,
            title: {
                type: String,
                default: '导航'
            }
        },
        methods: {
            back() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="stylus" scoped>
.nav-bar-wrapper
    position fixed
    left 0
    top 0
    right 0
    z-index 99
    height 46px
    line-height 46px
    background-color #ffffff
    box-shadow 0 1px 2px rgba(0,0,0,.15)
    display flex
    .nav-bar-left
        flex 0 0 50px
        text-align center
    .nav-bar-center
        flex 1
        text-align center
    .nav-bar-right
        flex 0 0 50px
        text-align center
</style>
