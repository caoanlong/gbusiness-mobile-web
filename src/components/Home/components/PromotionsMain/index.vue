<template>
    <div class="wrapper">
        <img class="product-img" src="../../../../assets/imgs/main-img.jpg" alt="">
        <div class="product-info">
            <div class="product-info-title">【疯抢中...】龙华区XX联盟千人狂抢，不超值，拿锤砸！！！</div>
            <div class="product-control">
                <div class="product-time">截止：2018-12-10 08:30</div>
                <div class="product-price">￥29.99</div>
                <div class="product-buy">
                    <div class="product-buy-btn">抢购</div>
                </div>
            </div>
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
.wrapper
    width 100%
    background-color #ffffff
    .product-img
        width 100%
    .product-info
        padding 10px
        .product-info-title
            color #333
            font-size 14px
            line-height 1.8
        .product-control
            display flex
            height 30px
            line-height 30px
            border-left 2px solid $blue
            .product-time
                flex 1
                font-size 12px
                color #999
                padding-left 5px
            .product-price
                flex 0 0 80px
                font-size 15px
                font-weight bold
                color $orange
            .product-buy
                flex 0 0 70px
                .product-buy-btn
                    color $blue
                    font-size 13px
                    text-align center
                    border 1px solid $blue
</style>
