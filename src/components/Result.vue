<template lang="pug">
  .question-result-wrap
    .nair-title 查看问卷结果
    .question-wrap
      el-carousel.carousel(:autoplay="false",arrow="never",trigger="click",ref="result",indicator-position="none" ,height="400px")
        el-carousel-item(v-for="(item,n) in list",:key="n")
          .assess-index 第{{item.index}}题
            span.mutiple(v-if="item.ismutiple") 【多选题】
            span.total : (共{{item.total}}题)
          .question {{item.title}}
          .question-item(v-for="(radio,index) in item.items" ,:key="index" ,:class='{"sel-item": radio.selected}')
            .item-title {{radio.text}}
              span.num {{radio.num}}票
            .item-process
              .sel-process(:style="{width:'20%'}")
      span.prev(@click="prev")
        |上一题
      span.next(@click="next")
        |下一题
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
                num: 67,
                selected: true,
                text: 'A:   此段为假设性的文字'
              },
              {
                itemId: 12,
                num: 12,
                selected: false,
                text: 'B:   此段为假设性的文字此段为假设性的文字'
              },
              {
                itemId: 13,
                num: 52,
                selected: false,
                text: 'C:   此段为假设性的文字'
              },
              {
                itemId: 14,
                num: 39,
                selected: false,
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
                num: 12,
                selected: true,
                text: 'A:   此段为假设性的文字'
              },
              {
                itemId: 16,
                num: 52,
                selected: false,
                text: 'B:   此段为假设性的文字1'
              },
              {
                itemId: 17,
                num: 39,
                selected: false,
                text: 'C:   此段为假设性的文字2'
              },
              {
                itemId: 18,
                num: 67,
                selected: false,
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
        this.$refs.result.prev()
        this.index = this.$refs.result.activeIndex
      },
      next () {
        this.$refs.result.next()
        this.index = this.$refs.result.activeIndex
      },
      mounted () {
      },
      change (value) {
        console.log(value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .question-result-wrap{
    width: 740px;
    margin-bottom: 60px;
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
        max-width: 840px;
        padding: 0 20px;
        clear: both;
        border-radius: 15px;
        background: #F0F0F0;
        &.is-checked{
          background: #EAF4FC;
        }
      }
      .prev,.next{
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
    .question-item{
      margin-bottom: 30px;
      .item-title{
        margin-bottom: 7px;
        color:#2C2C2C;
        .num{
          margin-left: 30px;
        }
      }
      .item-process{
        width: 500px;
        height: 14px;
        border: 1px solid #E7E7E7;
        border-radius: 14.5px;
        box-sizing: border-box;
        .sel-process{
          height: 100%;
          background: #D7D7D7;
          border-radius: 14.5px;
        }
      }
      &.sel-item{
        .item-process{
          .sel-process{
            background: #4162C1;
          }
        }
      }
    }
  }
</style>
