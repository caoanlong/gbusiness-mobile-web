<template>
    <div class="wrapper">
        <div class="title">
            <div class="title-txt">购买记录</div>
            <div class="total">总计：1217 人</div>
        </div>
        <table class="table">
            <tr>
                <th>姓名</th>
                <th>手机号</th>
                <th>购买状态</th>
            </tr>
            <tr>
                <td>王*静</td>
                <td>135***021</td>
                <td>已购买</td>
            </tr>
            <tr>
                <td>王*静</td>
                <td>135***021</td>
                <td>已购买</td>
            </tr>
            <tr>
                <td>王*静</td>
                <td>135***021</td>
                <td>已购买</td>
            </tr>
            <tr>
                <td>王*静</td>
                <td>135***021</td>
                <td>已购买</td>
            </tr>
            <tr>
                <td>王*静</td>
                <td>135***021</td>
                <td>已购买</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
.wrapper
    margin-top 15px
    color #ffffff
    background-color #f58daf
    .title
        display flex
        height 44px
        line-height 44px
        border-bottom 1px solid #ffffff
        .title-txt
            flex 1
            font-size 15px
            font-weight bold
            padding-left 10px
        .total
            flex 1
            font-size 13px
            text-align right
            padding-right 10px
    .table
        width 100%
        font-size 14px
        tr
            height 32px
            line-height 32px
            th
                font-weight bold
            td
                text-align center
</style>
