<template lang="pug">
  div.login-layer(v-if="showLogin")
    div.login-wrap
      span.close(@click="setLoginLayer(false)")
      div.login
        h2.title {{title}}
        div.qr-code-wrap
          img(src="/../static/code.png")
        div.qr-desc
          span.wx
          | 微信扫一扫，快速登录
      div.login-content
        router-link.to-register(:to='{name: "register"}') 我要注册
        div.login-info-wrap
          div.phone-wrap
            label 手机号码：
            input.phone(type="text")
          div.pwd-wrap
            label 密 &nbsp &nbsp&nbsp 码：
            input.pwd(type="password")
          div.operate-wrap
            input.repwd(type="checkbox" id="repwd")
            label.checkbox(for="repwd")
            label.txt(for="repwd") 记住密码
            router-link.forget-pwd(:to='{name:1}') 忘记密码
          button.login-btn(@click="login") 登 录
</template>
<script>
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    data () {
      return {
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
    }
  }
</script>

<style lang="scss" scoped>
  .login-layer{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top:0px;
    left: 0;
    z-index: 11;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.5);
    .login-wrap{
      position: relative;
      display: flex;
      width:630px;
      height: 387px;
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0px 0px 10px rgba(70,70,70,0.7);
      span.close{
        position: absolute;
        right: 0;
        top:0;
        height: 50px;
        width: 58px;
        cursor: pointer;
        background: url("../../static/img.png") no-repeat;
        background-position: -130px -35px;
      }
      .login{
        margin: 60px 0 0 50px;
        .title{
          font-size: 20px;
          color: #2C2C2C;
          font-weight: 300;
        }
        .qr-code-wrap{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 166px;
          height: 166px;
          margin: 23px 0 13px 0;
          background: url("../../static/qrcode.png") no-repeat;
        }
        .qr-desc{
          .wx{
            display: inline-block;
            vertical-align: top;
            margin-right: 10px;
            width:20px;
            height: 20px;
            background: url("../../static/wechat.png") no-repeat;
          }
          font-size: 14px;
          color: #2C2C2C;
        }
      }
      .login-content{
        width: 312px;
        margin-left: 53px;
        .to-register{
          color: #4162C1;
          font-size: 12px;
          float: right;
          margin-top: 60px;
          border-bottom: 1px solid #4162C1;
        }
        .login-info-wrap{
          margin-top: 112px;
          padding-left: 52px;
          box-sizing: border-box;
          border-left:1px solid #E4E4E4;
          .phone-wrap{
            width: 258px;
            height: 39px;
            margin-bottom: 30px;
            border:1px solid #D8D8D8;
            line-height: 39px;
            label{
              display: inline-block;
              margin-left: 10px;
              width: 70px;
              font-size: 14px;
              color: #2C2C2C;
              font-weight: 400;
            }
            .phone{
              width: 174px;
              height: 39px;
              text-indent: 10px;
              border: none;
              outline: none;
              background: transparent;
            }
          }
          .pwd-wrap{
            width: 258px;
            height: 39px;
            border:1px solid #D8D8D8;
            line-height: 39px;
            label{
              display: inline-block;
              margin-left: 10px;
              width: 70px;
              font-size: 14px;
              color: #2C2C2C;
              font-weight: 400;
            }
            .pwd{
              width: 174px;
              height: 39px;
              text-indent: 10px;
              border: none;
              outline: none;
              background: transparent;
            }
          }
          .operate-wrap{
            margin-top: 7px;
            letter-spacing: 2px;
            .repwd{
              display: none;
            }
            .repwd + label {
              margin-right: 7px;
              cursor: pointer;
              display: inline-block;
              vertical-align: middle;
              width: 14px;
              height: 14px;
              border: 1px solid #3D3D3D;
              box-sizing: border-box;
              margin-bottom: 3px;
            }
            .repwd:checked + label {
              background: url("../../static/checked-icon-2.png") no-repeat;
            }
            .txt{
              font-size: 12px;
              color: #2C2C2C;
              cursor: pointer;
            }
            .forget-pwd{
              float: right;
              font-size: 12px;
              color: #767676;
            }
          }
          .login-btn{
            cursor: pointer;
            display: block;
            width: 260px;
            height: 37px;
            background: #4162C1;
            color: #ffffff;
            font-size: 14px;
            font-weight: 300;
            border-radius: 0;
            border: none;
            outline: none;
            margin-top: 26px;
          }
        }
      }
    }
  }
</style>
