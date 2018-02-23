<template lang="pug">
  .recommend-toptic-wrap
    .source-order-wrap
      .order-title  资讯订阅
      .order-email-wrap
        input.email(type="text" placeholder="请输入邮箱")
        button.order-btn(@click="") 订阅
      p.extra-txt 方便您通过邮件定期获取感兴趣的资讯
    .recent-toptic-list
      .order-title  最新话题
      .toptic-item(v-for="(item,i) in toptic" ,:key="i")
        router-link.item-link(:to='{name:1}')
          .item-img
            img(:src="item.src")
            label.label-common {{item.label}}
          .img-info
            div.recommend-info
              h3.title {{item.title}}
              div.time
                span
                | {{item.time}}
              p.desc {{item.desc}}

</template>
<script>
  export default {
    data () {
      return {
        toptic: [
          {
            src: '/../static/demo/bitmap-1.png',
            link: 'https://www.baidu.com',
            title: '过期的面霜、牛奶的逆天用处，以后再也不舍得扔了',
            time: '2018-01-23',
            desc: '一些图片描述文字',
            label: '趋势与机遇',
            type: 1
          },
          {
            src: '/../static/demo/bitmap-2.png',
            link: 'https://www.baidu.com',
            title: '过期的面霜、牛奶的逆天用处，以后再也不舍得扔了',
            time: '2018-01-23',
            desc: '一些图片描述文字',
            label: '趋势与机遇',
            type: 1
          }
        ]
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .order-title {
    font-size: 16px;
    letter-spacing: 2px;
    border-left: 4px solid #787878;
    text-indent: 18px;
    margin-bottom: 20px;
  }
  .extra-txt{
    font-size: 12px;
    text-indent: 20px;
    margin-top: 10px;
    margin-bottom: 42px;
  }
  .order-email-wrap{
    width: 285px;
    height: 40px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    .email{
      width: 200px;
      height: 38px;
      background: transparent;
      outline: none;
      border: none;
      font-size: 12px;
      text-indent: 20px;
    }
    .order-btn{
      cursor: pointer;
      float: right;
      margin: 1px;
      width: 80px;
      height: 38px;
      background: #4162C1;
      color: #ffffff;
      font-size: 14px;
      letter-spacing: 2px;
      border-radius: 0;
      border: none;
      outline: none;
    }
  }
  .recommend-toptic-wrap{
    .recent-toptic-list{
      width: 285px;
      .toptic-item{
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        margin-bottom: 20px;
        .item-link{
          .item-img{
            position: relative;
            .label-common{
              position: absolute;
              width: 96px;
              height: 24px;
              left: 0;
              bottom: 0;
              color: #ffffff;
              font-size: 12px;
              text-align: center;
              line-height: 24px;
              background: #4162C1;
            }
          }
          .img-info{
            padding: 20px;
          }
        }
      }
    }
  }
</style>
