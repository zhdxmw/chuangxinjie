<template lang="pug">
  .sign-up-wrap
    h2.title 报名参加
    .sign-up-info(v-if="!subState")
      .sign-up-choice
        .choice-item
          span.time 2018-02-23  15:30-16:30
          span.choice-title 全球包装生态
          span.choice-person 发言人：包装委员会
          input.sign-radio(type="radio" id="sign" name="sign-radio")
          label(for="sign")
        .choice-item.is-checked
          span.time 2018-02-23  15:30-16:30
          span.choice-title 全球包装生态
          span.choice-person 发言人：包装委员会
          input.sign-radio(type="radio" id="sign2" name="sign-radio")
          label(for="sign2")
      .sign-user-wrap
        .not-signed(v-if="")
          .sign-title 如果您是创新界会员，您可以
            span.login-btn(@click="setLoginLayer(true)") 点击此处
            |快速登录
          .sign-user-info
            .sign-common
              label.label 姓&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp名：
              input.name(type="text")
            .sign-common.sign-sex
              label.label 性&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp别：
              div.register-checkbox-wrap
                el-radio.el-radio(v-model="sex" label="0") 男
                el-radio.el-radio(v-model="sex" label="1") 女
            .sign-common
              label.label 手机号码：
              input.phone(type="text")
            .sign-common.code-wrap
              .get-code
                label.label 验证码：
                input.code(type="text")
              button.getCode-btn  获取验证码
            .sign-common
              label.label 公司名称：
              input.company(type="text")
            .sign-common
              label.label 您的职位：
              input.postion(type="text")
            .sign-common
              label.label 电子邮件：
              input.email(type="text")
            .sign-common
              label.label 重复电子邮件：
              input.re-email(type="text")
            .sign-desc 我们将通过电子邮件通知您报名的确认信息，请确保所填电子邮件的正确与有效

        .signed(v-if="")
          .remark-desc 确认一下信息无误后，提交参加报名
          .sign-user-info
            .sign-common
              label.label 姓&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp名：
              input.name(type="text" ,v-model="form.name")
            .sign-common.sign-sex
              label.label 性&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp别：
              div.register-checkbox-wrap
                el-radio.el-radio(v-model="form.sex" label="0") 男
                el-radio.el-radio(v-model="form.sex" label="1") 女
            .sign-common
              label.label 手机号码：
              input.phone(type="text" ,v-model="form.phone")
            .sign-common
              label.label 电子邮箱：
              input.company(type="text" ,v-model="form.email")
            .sign-common
              label.label 公司名称：
              input.postion(type="text" ,v-model="form.company")
            .sign-common
              label.label 您的职位：
              input.email(type="text" ,v-model="form.position")
            .sign-desc
              input.update(type="checkbox" id="update")
              label.checkbox(for="update")
              label.txt(for="update") 将此信息同事更新会员注册信息
        .sub-btn() 提交

    .sub-success-wrap(v-if="subState")
      h2.sub-title 报名申请已成功提交
      p.desc 完成密码设置成为创新界会员，参与更多活动，了解更多创新咨询

      .continue-register-wrap
        .register-common
          label.label 登录账号：
          input.postion(type="text" ,v-model="sub.account")
        .register-common
          label.label 登录密码：
          input.postion(type="password" ,v-model="sub.pwd")
        .register-common
          label.label 重复密码：
          input.postion(type="password" ,v-model="sub.repwd")
        .register-common-btn
          .cancel-register-btn 暂不注册
          .sub-register-btn 提交完成注册
</template>
<script>
  import {mapMutations} from 'vuex'
  export default {
    data () {
      return {
        sex: '1',
        subState: false,
        form: [],
        sub: {
          account: 1380000000,
          pwd: '',
          repwd: ''
        }
      }
    },
    mounted () {
      this.form = {
        name: '张三',
        phone: 13761548888,
        sex: '1',
        email: 'zhangsan@163.com',
        company: '假设的名字有限公司',
        position: '假设职位'
      }
    },
    methods: {
      ...mapMutations(['setLoginLayer'])
    }
  }
</script>

<style lang="scss" scoped>
  .sign-up-wrap{
    h2.title{
      border-left: 4px solid #787878;
      font-size: 16px;
      text-indent: 22px;
      font-weight: 400;
    }
    .sign-up-info{
      width: 740px;
      padding-top: 50px;
      margin-top: 20px;
      background: rgba(149,198,241,0.15);
      .sign-up-choice{
        font-size: 12px;
        color: #3D3D3D;
        .choice-item{
          width: 660px;
          height: 60px;
          background: #ffffff;
          margin: 1px auto;
          line-height: 60px;
          &.is-checked{
            background: rgba(255,255,255,0.5);
          }
          .time{margin-left: 10px;}
          .choice-title{margin-left: 20px;}
          .choice-person{margin-left: 20px;}
          .sign-radio{
            display: none;
          }
          .sign-radio + label {
            margin-right: 7px;
            cursor: pointer;
            display: inline-block;
            vertical-align: middle;
            width: 20px;
            height: 20px;
            border: 1px solid #787878;
            box-sizing: border-box;
            float: right;
            margin: 20px 24px 0 0;
          }
          .sign-radio:checked + label{
            width: 31px;
            height: 24px;
            border:none;
            margin: 16px 13px 0 0;
            background: url("../../static/checked.png") no-repeat;
          }
        }
      }
    }
    .sign-user-wrap{
      margin-top: 36px;
      overflow: hidden;
      .not-signed{
        padding-left: 38px;
        .sign-title{
          font-size: 12px;
          color: #3D3D3D;
          margin-bottom: 20px;
          .login-btn{
            cursor: pointer;
            color: #4162C1;
            font-size: 12px;
            border-bottom: 1px solid #4162C1;
          }
        }
      }
      .sign-user-info{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .sign-common{
          margin-right: 20px;
          margin-bottom: 20px;
          width: 320px;
          height: 40px;
          line-height: 40px;
          background: #ffffff;
          .label{margin-left: 10px;}
          input[type="text"]{
            font-size: 14px;
            color: #424345;
            width: 200px;
            height: 100%;
            border: none;
            outline: none;
            background: transparent;
          }
          &.sign-sex{
            background: transparent;
            display: flex;
            .register-checkbox-wrap{
              margin-left: 18px;
            }
          }
          &.code-wrap{
            display: flex;
            background: none;
            .get-code{
              width: 210px;
              background: #ffffff;
              .code{
                width: 140px;
              }
            }
            .getCode-btn{
              width: 100px;
              height: 40px;
              border: none;
              outline: none;
              background: #95C6F1;
              border-radius: 0;
              margin-left: 10px;
              font-size: 14px;
              cursor: pointer;
            }
          }
        }
        .sign-desc{
          font-size: 12px;
          color: #3D3D3D;
          margin-top: -10px;
          margin-bottom: 24px;
        }
      }
      .signed{
        padding-left: 38px;
        .remark-desc{
          font-size: 14px;
          color: #3D3D3D;
          margin-bottom: 20px;
        }
      }
      .sub-btn{
        width: 320px;
        height: 40px;
        background: #4162C1;
        color: #ffffff;
        font-size: 14px;
        cursor: pointer;
        letter-spacing: 20px;
        text-align: center;
        line-height: 40px;
        margin-left: 38px;
        margin-bottom: 40px;
      }
    }
    .update{
      display: none;
    }
    .update + label {
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
    .update:checked + label {
      background: url("../../static/checked-icon-2.png") no-repeat;
    }
    .txt{
      font-size: 12px;
      color: #2C2C2C;
      cursor: pointer;
    }
  }

  .sub-success-wrap{
    overflow: hidden;
    width: 740px;
    padding-top: 50px;
    margin-top: 20px;
    background: rgba(149,198,241,0.15);
    .sub-title{
      color: #3D3D3D;
      font-size: 20px;
      font-weight: 500;
      margin-left: 50px;
    }
    .desc{
      font-size: 12px;
      margin-left: 50px;
      color: #3D3D3D;
      line-height: 24px;
    }
    .continue-register-wrap{
      padding-left: 40px;
      margin-top: 37px;
      .register-common{
        width: 320px;
        height: 40px;
        background: #ffffff;
        margin-bottom: 20px;
        line-height: 40px;
        .label{margin-left: 10px;}
        input[type="text"],input[type="password"]{
          font-size: 14px;
          color: #424345;
          width: 200px;
          height: 100%;
          border: none;
          outline: none;
          background: transparent;
        }
      }
      .register-common-btn{
        display: flex;
        color: #ffffff;
        margin-bottom: 40px;
        .cancel-register-btn{
          width: 150px;
          height: 40px;
          background: #787878;
          cursor: pointer;
          letter-spacing: 2.8px;
          line-height: 40px;
          text-align: center;
        }
        .sub-register-btn{
          width: 150px;
          height: 40px;
          background: #4162C1;
          margin-left: 20px;
          cursor: pointer;
          letter-spacing: 2.8px;
          line-height: 40px;
          text-align: center;
        }
      }
    }
  }

</style>
