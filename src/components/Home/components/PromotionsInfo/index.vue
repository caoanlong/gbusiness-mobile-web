<template>
    <div class="wrapper">
        <title-pannel title="活动介绍"></title-pannel>
        <img 
            v-for="(item,i) in list" 
            :key="i"
            class="product-img" 
            :src="IMGURL + item.merchantImage" 
            alt="">
    </div>
</template>

<script>
export default {
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
.wrapper
    margin-top 15px
    .product-img
        width 100%
</style>
