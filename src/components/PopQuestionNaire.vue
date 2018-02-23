<template lang="pug">
  .pop-question-naire-wrap
    .pop-content-wrap
      .pop-title 打扰您2分钟，以便让我们做的更好
      span.close-icon
      .content
        .join-questionnaire(v-if="first")
          h2.title 以下是问卷摘要的文字内容，可用来做问卷开场文字
          p.desc 随着食品和饮料行3发展迅猛,包装方案也日新月异。在企3努力提高产品F值和满足0断追求变化的消费者需求时,创新1适应能力已成为头等要务,而D下的包装趋o和创新理念也许可D随着食品和饮料行3发展迅猛,包装方案也日新月异。在企3努力提高产品F值和满足0断追求变化的2时,创新1适应能 带领大家脑洞大开。
          .join-btn-wrap
            span.do-not-join-btn 暂时不，谢谢
            span.join-btn(@click="join") 参加问卷
        .thanks-join-wrap(v-if="thanks")
          .end-txt 感谢你的支持与参与！
          span.no 不，谢谢
          span.others 看看大家都选了什么

        .question-nair-wrap(v-if="attend")
          .question-wrap
            el-carousel.carousel(:autoplay="false",arrow="never",trigger="click",ref="carousel",indicator-position="none")
              el-carousel-item(v-for="(item,n) in list",:key="n")
                .assess-index 第{{item.index}}题
                  span.mutiple(v-if="item.ismutiple") 【多选题】
                  span.total : (共{{item.total}}题)
                .question {{item.title}}
                div(v-if="!item.ismutiple")
                  el-radio-group.radio-wrap(v-model="item.checkeditemids",@change="change")
                    el-radio.common-radio(v-for="(radio,index) in item.items",:label="radio.itemId",:key="radio.itemId") {{radio.text}}
                div(v-if="item.ismutiple")
                  el-checkbox-group.radio-wrap(v-model="check[n]",@change="change")
                    el-checkbox.common-radio(v-for="(radio,index) in item.items",:label="radio.itemId",:key="radio.itemId") {{radio.text}}

            span.prev(@click="prev")
              |上一题
            span.next(@click="next")
              |下一题
</template>
<script>
  export default {
    data () {
      return {
        attend: false,
        first: true,
        thanks: false,
        list: [
          {
            index: 1,
            title: '此段为假设性的文字,此段为假设性的文字,此段为假设性的文字。',
            total: 5,
            questionId: 1,
            ismutiple: false,
            items: [
              {
                itemId: 11,
                text: 'A:   此段为假设性的文字'
              },
              {
                itemId: 12,
                text: 'B:   此段为假设性的文字此段为假设性的文字此段为假设性的文字此段为假设性的文字此段为假设性的文字此段为假设性的文字此段为假设性的文字此段为假设性的文字此段为假设性的文字此段为假设性的文字'
              },
              {
                itemId: 13,
                text: 'C:   此段为假设性的文字'
              },
              {
                itemId: 14,
                text: 'D:   此段为假设性的文字'
              }
            ]
          },
          {
            index: 2,
            title: '此段为假设性的文字,此段为假设性的文字,此段为假设性的文字。',
            total: 5,
            questionId: 2,
            ismutiple: true,
            items: [
              {
                itemId: 15,
                text: 'A:   此段为假设性的文字'
              },
              {
                itemId: 16,
                text: 'B:   此段为假设性的文字1'
              },
              {
                itemId: 17,
                text: 'C:   此段为假设性的文字2'
              },
              {
                itemId: 18,
                text: 'D:   此段为假设性的文字3'
              }
            ]
          }
        ],
        check: [[], []]
      }
    },
    methods: {
      join () {
        this.attend = true
        this.first = false
      },
      prev () {
        this.$refs.carousel.prev()
        this.index = this.$refs.carousel.activeIndex
      },
      next () {
        this.$refs.carousel.next()
        this.index = this.$refs.carousel.activeIndex
      },
      change (value) {
        console.log(value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pop-question-naire-wrap{
    width: 100%;
    height: calc(100% - 60px);
    position: fixed;
    top:60px;
    left:0;
    background: rgba(255,255,255,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    .pop-title{
      width: 700px;
      height: 40px;
      line-height: 40px;
      background: #EAF4FC;
      font-size: 16px;
      color: #424345;
      text-indent: 22px;
      border-left: 4px solid #4162C1;
      margin: 44px 0 0 30px;
    }
    .pop-content-wrap{
      width:800px;
      min-height: 500px;
      background: rgba(255,255,255,1);
      border-radius: 8px;
      box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
      .title{
        font-size: 16px;
        color: #424345;
        margin-left: 52px;
        font-weight: 400;
        margin-top: 60px;
      }
      .desc{
        width: 680px;
        font-size: 14px;
        color: #424345;
        line-height: 28px;
        margin-top: 50px;
        margin-left: 52px;
      }
    }
    .join-btn-wrap{
      margin-top: 106px;
      margin-left: 52px;
      display: flex;
      span{
        width: 120px;
        height: 42px;
        background: #787878;
        color: #CDCDCD;
        line-height: 42px;
        text-align: center;
        cursor: pointer;
        letter-spacing: 1.75px;
        &.join-btn{
          color: #ffffff;
          background: #4162C1;
          margin-left: 20px;
        }
      }
    }
  }
  .thanks-join-wrap{
    .end-txt{line-height: 330px;letter-spacing: 2px;margin-left: 52px;}
    span.no{
      display: inline-block;
      width: 140px;
      height: 42px;
      background: #787878;
      color: #CDCDCD;
      text-align: center;
      line-height: 42px;
      letter-spacing: 1.75px;
      cursor: pointer;
      margin-left: 52px;
    }
    span.others{
      display: inline-block;
      width: 210px;
      height: 42px;
      background: #4162C1;
      color: #ffffff;
      text-align: center;
      line-height: 42px;
      letter-spacing: 1.75px;
      cursor: pointer;
      margin-left: 20px;
    }
  }
  .question-nair-wrap{
    width: 700px;
    margin: 0 auto;
  }
  .question-wrap {
    margin-left: 20px;
    .common-radio{
      display: table;
      margin-left: 0;
      height: 30px;
      line-height: 30px;
      margin-bottom: 20px;
      /*max-width: 740px;*/
      padding: 0 20px;
      clear: both;
      border-radius: 15px;
      background: #F0F0F0;
      &.is-checked{
        background: #EAF4FC;
      }
    }
    .prev,.next{
      margin-top: 30px;
      display: inline-block;
      width: 140px;
      height: 42px;
      background: #787878;
      color: #CDCDCD;
      text-align: center;
      line-height: 42px;
      letter-spacing: 1.75px;
      cursor: pointer;
      &.active{
        background: #4162C1;
        color: #ffffff;
      }
    }
    .next{
      margin-left: 20px;
    }
    .assess-index{
      color: #2C2C2C;
      margin: 38px 0 10px 0;
      .total{
        color: #8C8C8C;
      }
    }
    .question{
      color: #2C2C2C;
      margin-bottom: 25px;
    }
  }
</style>
