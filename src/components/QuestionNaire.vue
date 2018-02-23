<template lang="pug">
  .question-nair-wrap
    .nair-title 打扰您2分钟，以便让我们做的更好
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

    .question-end
      .end-txt 感谢你的支持与参与！
      span.no 不，谢谢
      span.others 看看大家都选了什么
</template>
<script>
  export default {
    data () {
      return {
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
  .question-nair-wrap{
    width: 740px;
    margin-bottom: 60px;
    overflow: hidden;
    .nair-title{
      height: 40px;
      background: #EAF4FC;
      line-height: 40px;
      text-indent: 22px;
      border-left: 4px solid #4162C1;
      font-size: 16px;
      color: #424345;
      letter-spacing: 2px;
    }
    .question-wrap {
      width: 100%;
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
    .question-end{
      margin-left: 22px;
      .end-txt{line-height: 220px;letter-spacing: 2px;}
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
  }
</style>
