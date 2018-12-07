<template>
    <div class="buy-record">
        <title-pannel title="购买记录"></title-pannel>
        <div class="buy-items">
            <BuyItem v-for="(item, i) in 5" :key="i"></BuyItem>
        </div>
    </div>
</template>

<script>
import BuyItem from './components/BuyItem'
export default {
    components: { BuyItem }
}
</script>

<style lang="stylus" scoped>
.buy-record
    margin-top 15px
</style>
