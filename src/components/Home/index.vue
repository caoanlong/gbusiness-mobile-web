<template>
    <div class="container">
        <promotions-main :info="info"></promotions-main>
        <buy-record></buy-record>
        <promotions-info :list="info.merchants"></promotions-info>
        <buy-notes :notes="info.notes" :introduction="info.introduction"></buy-notes>
        <buy-record-info></buy-record-info>
        <add-promotion-flash-button></add-promotion-flash-button>
        <bottom-action></bottom-action>
        <right-tools></right-tools>
    </div>
</template>

<script>
import PromotionsMain from './components/PromotionsMain'
import BuyRecord from './components/BuyRecord'
import PromotionsInfo from './components/PromotionsInfo'
import BuyNotes from './components/BuyNotes'
import BuyRecordInfo from './components/BuyRecordInfo'
import AddPromotionFlashButton from './components/AddPromotionFlashButton'
import BottomAction from './components/BottomAction'
import RightTools from './components/RightTools'
import Activity from '../../api/Activity'
export default {
    components: { 
        PromotionsMain, 
        BuyRecord, 
        PromotionsInfo, 
        BuyNotes, 
        BuyRecordInfo, 
        AddPromotionFlashButton,
        BottomAction,
        RightTools
    },
    data() {
        return {
            info: {}
        }
    },
    created() {
        const activityId = this.$route.query.activityId
        this.getInfo(activityId)
    },
    methods: {
        getInfo(activityId) {
            Activity.findDetail({ activityId }).then(res => {
                this.info = res
            })
        }
    },
}
</script>

<style lang="stylus" scoped>
.container
    width 100%
    padding-bottom 50px
    background-color #f2f2f2
</style>
