<template>
    <div class="buy-record">
        <title-pannel title="购买记录"></title-pannel>
        <div class="buy-wrapper">
            <div class="buy-items" ref="con" :class="{trans: animate == true}">
                <BuyItem v-for="(item, i) in list" :key="i" :buy="item"></BuyItem>
            </div>
        </div>
    </div>
</template>

<script>
import BuyItem from './components/BuyItem'
export default {
    components: { BuyItem },
    data() {
        return {
            animate: false,
            timer: null,
            list: [
                {
                    name: '刘老师',
                    mobile: '139***256',
                    time: '2018-12-26 20:36'
                },{
                    name: '张老师',
                    mobile: '139***256',
                    time: '2018-12-26 20:36'
                },{
                    name: '王老师',
                    mobile: '139***256',
                    time: '2018-12-26 20:36'
                },{
                    name: '李老师',
                    mobile: '139***256',
                    time: '2018-12-26 20:36'
                },{
                    name: '陈老师',
                    mobile: '139***256',
                    time: '2018-12-26 20:36'
                }
            ]
        }
    },
    created() {
        this.timer = setInterval(this.scroll, 3000)
    },
    destroyed() {
        clearInterval(this.timer)
        this.timer = null
    },
    methods: {
        scroll() {
            const con = this.$refs.con
            con.style.marginTop = '-60px'
            this.animate = true
            setTimeout(() => {
                this.list.push(this.list[0])
                this.list.shift()
                con.style.marginTop = '0px'
                this.animate = false
            }, 500)
        }
    }
}
</script>

<style lang="stylus" scoped>
.buy-record
    margin-top 15px
    .buy-wrapper
        height 180px
        overflow hidden
.trans
    transition all 0.5s
</style>
