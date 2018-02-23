<template lang="pug">
  div.register-wrap
    div.register-content
      div.register-L
        div.register-common
          label.name 电子邮件：
          input.email(type="text")
        div.register-common
          label.name 姓 &nbsp&nbsp&nbsp&nbsp 名：
          input.email(type="text")
        div.register-common
          label.name 登录密码：
          input.email(type="text")
        div.register-common
          label.name 图形验证：
          input.email(type="text")
        div.register-common
          label.name 手机号码：
          input.email(type="text")
        div.register-common
          label.name 公司名称：
          input.email(type="text")
        div.register-btn 注 &nbsp&nbsp&nbsp&nbsp 册
        div.link-wrap
          a.jump(href="#") 跳过

      div.register-R
        div.register-checkbox-wrap
          input.accept(type="checkbox" id="accept")
          label.checkbox(for="accept")
          label.txt(for="accept") 接收来自本网站的订阅信息
        div.register-checkbox-wrap
          el-radio.el-radio(v-model="sex" label="0") 男
          el-radio.el-radio(v-model="sex" label="1") 女
        div.register-common
          label.name 密码确认：
          input.email(type="text")
        div.register-common
          label.name 输入字母：
          input.email(type="text")
        div.register-code
          div.register-common
            label.name 验证码：
            input.checkcode(type="text")
          button.getcode-btn() 获取验证码
        div.register-common
          label.name 你的职位：
          input.email(type="text")

</template>
<script>
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    data () {
      return {
        sex: '0'
      }
    },
    computed: {
      ...mapGetters(['showLogin', 'title'])
    },
    methods: {
      login () {
      },
      ...mapMutations(['setLoginLayer'])
    },
    mounted () {
      // this.$store.commit('setTitle', 'title')
      this.$store.commit('setLoginLayer', false)
    }
  }
</script>

<style lang="scss" scoped>
  .register-wrap{
    width: 100%;
    min-width: 1200px;
    height: calc(100% - 90px);
    background: rgba(149, 198, 241,0.15);
    overflow: hidden;
    .register-content{
      display: flex;
      width: 770px;
      height: 100%;
      margin: 0 auto;
      align-items: center;
      .register-common{
        width: 320px;
        height: 40px;
        margin-bottom: 20px;
        line-height: 40px;
        background: #ffffff;
        input[type="text"]{
          width: 236px;
          height: 100%;
          border: none;
          outline: none;
          background: transparent;
        }
        label.name{
          display: inline-block;
          width: 70px;
          margin-left: 10px;
        }
      }
      .register-checkbox-wrap{
        width: 320px;
        height: 40px;
        margin-bottom: 20px;
        .accept{
          display: none;
        }
        .accept + label {
          margin-right: 7px;
          cursor: pointer;
          display: inline-block;
          vertical-align: middle;
          width: 14px;
          height: 14px;
          border: 1px solid #3D3D3D;
          box-sizing: border-box;
          margin-bottom: 3px;
          margin-right: 10px;
        }
        .accept:checked + label {
          background: url("../../static/checked-icon-2.png") no-repeat;
        }
      }
      .register-btn{
        width: 320px;
        height: 40px;
        color: #ffffff;
        margin-top: 40px;
        text-align: center;
        line-height: 40px;
        background: #4162C1;
      }
      .register-L{
        width: 400px;
      }
      .register-R{
        padding-left: 50px;
        padding-bottom: 94px;
      }
    }
    .register-code{
      display: flex;
      .register-common{
        width: 210px;
      }
      .getcode-btn{
        width: 100px;
        height: 40px;
        margin-left: 10px;
        background: #95C6F1;
        font-size: 14px;
        border:none;
        outline: none;
        border-radius: 0;
      }
    }
    .link-wrap{
      width: 320px;
      text-align: center;
      margin-top: 16px;
      .jump{
        color: #4162C1;
        text-decoration: underline;
      }
    }
  }
</style>
