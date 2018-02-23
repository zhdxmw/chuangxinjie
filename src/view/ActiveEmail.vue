<template lang="pug">
  div.acitve-wrap
    div.active-email-wrap
      .active-email-content
        .email-active
          span.email
          | 邮箱激活
        p.desc 为了您能顺利的收到我们的订阅信息，请登录{{email}}完成激活。
        div.not-received-wrap
          p.title 没有收到激活邮件？
          p.desc - 该封邮件可能被误识别为了垃圾邮件，请前往垃圾邮件箱进行检查。
          p.desc - 请确认您填写的邮箱地址是否正确，如需修改请
            a(href="#") 点击这里。
          p.desc - 若仍未收到激活邮件，请尝试
            a(href="#") 重新发送
            | 该邮件。

</template>
<script>
  export default {
    data () {
      return {
        email: 'xxx@xxx.com'
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .acitve-wrap{
    width: 100%;
    height: 100%;
    min-width: 1200px;
    background: rgba(149, 198, 241,0.15);
    .active-email-wrap{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      .active-email-content{
        width: 500px;
        letter-spacing: 1px;
        .email-active{
          font-size: 18px;
          letter-spacing: 4px;
          line-height: 50px;
          span.email{
            display: inline-block;
            vertical-align: baseline;
            margin-bottom: -6px;
            margin-right: 20px;
            width: 50px;
            height: 50px;
            background: url("../../static/img.png") no-repeat;
            background-position: -50px -100px;
          }
        }
        p.desc {
          color: #3D3D3D;
          font-size: 14px;
          margin-top: 22px;
        }
        .not-received-wrap{
          margin-top: 84px;
          .desc{
            color: #767676;
            margin-top: 6px;
            a{
              color: #4162C1;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
</style>
