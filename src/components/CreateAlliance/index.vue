<template>
    <div class="create-alliance-wrapper">
        <cube-form :model="model" @validate="validateHandler" @submit="submitHandler">
            <cube-form-group>
                <div class="create-alliance-title">营销活动&舍我其谁</div>
                <div class="create-alliance-desc">需要创建活动请填写以下内容</div>
            </cube-form-group>
            <cube-form-group>
                <cube-form-item :field="fields[0]"></cube-form-item>
                <cube-form-item :field="fields[1]"></cube-form-item>
                <cube-form-item :field="fields[2]"></cube-form-item>
            </cube-form-group>
            <cube-form-group class="sign-up-btn">
                <cube-button :primary="true" type="submit">立即报名</cube-button>
            </cube-form-group>
        </cube-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            validity: {},
            valid: undefined,
            model: {
                name: '',
                mobile: '',
                industry: ''
            },
            fields: [
                {
                    type: 'input',
                    modelKey: 'name',
                    label: '姓名',
                    props: {
                        placeholder: '您的姓名'
                    },
                    rules: {
                        required: true
                    }
                },{
                    type: 'input',
                    modelKey: 'mobile',
                    label: '手机',
                    props: {
                        placeholder: '您的手机'
                    },
                    rules: {
                        required: true
                    }
                },{
                    type: 'input',
                    modelKey: 'industry',
                    label: '行业',
                    props: {
                        placeholder: '您的所在行业'
                    },
                    rules: {
                        required: true
                    }
                }
            ]
        }
    },
    methods: {
        submitHandler(e) {
            console.log('submit')
        },
        validateHandler(result) {
            this.validity = result.validity
            this.valid = result.valid
            console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
        }
    }
}
</script>

<style lang="stylus" scoped>
.create-alliance-wrapper
    height 100%
    padding 10px
    background-color #efeff4
    .create-alliance-title
        font-size 24px
        height 50px
        line-height 50px
        color #666
        font-weight bold
        text-align center
        margin-top 50px
    .create-alliance-desc
        font-size 16px
        height 50px
        line-height 50px
        color #999
        text-align center
        margin-bottom 50px
    .sign-up-btn
        padding 10px
</style>
