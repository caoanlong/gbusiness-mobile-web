<template>
    <div class="create-alliance-wrapper">
        <nav-bar left="back" title="创建联盟"></nav-bar>
        <div class="create-alliance-form">
            <cube-form :model="model" @validate="validateHandler" @submit="submitHandler">
                <div class="create-alliance-bg">
                    <div class="create-alliance-title">营销活动&舍我其谁</div>
                    <div class="create-alliance-desc">需要创建活动请填写以下内容</div>
                </div>
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
                    },
                    messages: {
                        required: '请输入您的姓名'
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
                    },
                    messages: {
                        required: '请输入您的手机'
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
                    },
                    messages: {
                        required: '请输入您的所在行业'
                    }
                }
            ]
        }
    },
    methods: {
        submitHandler(e) {
            e.preventDefault()
            console.log('submit', e)
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
    background-color #efeff4
    padding-top 46px
    .create-alliance-form
        padding 10px
        .create-alliance-bg
            padding-top 50px
            padding-bottom 50px
            background-image -webkit-linear-gradient(45deg, #9018bd, #511acc)
            .create-alliance-title
                font-size 24px
                height 50px
                line-height 50px
                color #fff
                font-weight bold
                text-align center
            .create-alliance-desc
                font-size 16px
                height 50px
                line-height 50px
                color #fff
                text-align center
        .sign-up-btn
            padding 10px
</style>
