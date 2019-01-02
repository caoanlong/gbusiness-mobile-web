<template>
    <div class="wrapper">
        <title-pannel title="购买须知"></title-pannel>
        <div class="content" v-html="notes"></div>
        <div class="content">{{introduction}}</div>
    </div>
</template>

<script>
export default {
    props: {
        notes: String,
        introduction: String
    }
}
</script>

<style lang="stylus" scoped>
.wrapper
    margin-top 15px
    .content
        padding 10px
        font-size 14px
        line-height 1.8
        background-color #ffffff
</style>
