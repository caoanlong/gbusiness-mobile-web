<template>
    <div class="wrapper" @click="createalliance">
        我也要创建活动
    </div>
</template>

<script>
export default {
    methods: {
        createalliance() {
            this.$router.push({name: 'createalliance'})
        }
    }
}
</script>

<style lang="stylus" scoped>
@keyframes fadebg
    from
        background-color #f1235a
    to
        background-color #bf1c47
.wrapper
    width 100%
    height 56px
    line-height 56px
    color #ffffff
    text-align center
    font-size 16px
    animation fadebg 0.3s
    animation-iteration-count infinite
    animation-direction alternate
</style>
