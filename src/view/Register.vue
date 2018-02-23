<template lang="pug">
  div.account-register
    div.title-wrap
      h2.title 注册
      p.desc 如需获取更多信息并能使我们为您提供更好的服务，请注册
        span.to-login 如已注册，请
          span.login-btn(@click="setLoginLayer(true)") 立即登录
    register-component
</template>
<script>
  import {mapMutations} from 'vuex'
  import RegisterComponent from '@/components/Register'
  export default {
    components: {
      RegisterComponent
    },
    data () {
      return {
      }
    },
    methods: {
      ...mapMutations(['setLoginLayer'])
    }
  }
</script>

<style lang="scss" scoped>
  .account-register{
    height: 100%;
  }
  .title-wrap{
    width: 770px;
    height: 90px;
    margin: 0 auto;
    overflow: hidden;
    .title{
      font-size: 20px;
      margin-top: 30px;
      margin-bottom: 4px;
    }
    .desc{
      font-size: 12px;
      color: #787878;
      .to-login{
        float: right;
        .login-btn{
          cursor: pointer;
          color: #4162C1;
          text-decoration: underline;
        }
      }
    }
  }
</style>
