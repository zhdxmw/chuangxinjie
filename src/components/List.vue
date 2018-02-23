<template lang="pug">
  .list-wrap
    .list-item(v-for="(item,i) in list")
      router-link.item-link(:to='{name:1}')
        .item-img
          img(:src="item.img")
        .item-info
          .item-title {{item.title}}
          .item-time
            span.time
            | {{item.time}}
          .item-desc {{item.desc}}
</template>
<script>
  export default {
    data () {
      return {
        list: [
          {
            title: '利乐包装：紧抓趋势，实现产品创新 让其循环再利用',
            time: '2018-01-23',
            desc: '最近，在FBIF2017食品饮料创新论坛包装创新分论坛上，利乐公司分享自己食品包装创新发展理念。利乐公司一直致力于投资资源研究消费者的趋势',
            img: '/../static/demo/timg.png'
          },
          {
            title: '利乐包装：紧抓趋势，实现产品创新 让其循环再利用',
            time: '2018-01-23',
            desc: '最近，在FBIF2017食品饮料创新论坛包装创新分论坛上，利乐公司分享自己食品包装创新发展理念。利乐公司一直致力于投资资源研究消费者的趋势',
            img: '/../static/demo/timg.png'
          },
          {
            title: '利乐包装：紧抓趋势，实现产品创新 让其循环再利用',
            time: '2018-01-23',
            desc: '最近，在FBIF2017食品饮料创新论坛包装创新分论坛上，利乐公司分享自己食品包装创新发展理念。利乐公司一直致力于投资资源研究消费者的趋势',
            img: '/../static/demo/timg.png'
          },
          {
            title: '利乐包装：紧抓趋势，实现产品创新 让其循环再利用',
            time: '2018-01-23',
            desc: '最近，在FBIF2017食品饮料创新论坛包装创新分论坛上，利乐公司分享自己食品包装创新发展理念。利乐公司一直致力于投资资源研究消费者的趋势',
            img: '/../static/demo/timg.png'
          },
          {
            title: '利乐包装：紧抓趋势，实现产品创新 让其循环再利用',
            time: '2018-01-23',
            desc: '最近，在FBIF2017食品饮料创新论坛包装创新分论坛上，利乐公司分享自己食品包装创新发展理念。利乐公司一直致力于投资资源研究消费者的趋势',
            img: '/../static/demo/timg.png'
          }
        ]
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .list-wrap{
    width: 820px;
    .list-item{
      width: 100%;
      height: 240px;
      margin-bottom: 40px;
      box-shadow: 3px 0 4px rgba(0,0,0,0.4);
      &:hover{
        box-shadow: 0px 0 14px rgba(0,0,0,0.7);
      }
      .item-link{
        width: 100%;
        height: 100%;
        display: flex;
        .item-img{
          width:300px;
          height: 100%;
          overflow: hidden;
          img{
            width: 100%;
          }
        }
        .item-info{
          width: 420px;
          height: 100%;
          margin-left: 48px;
          .item-title {
            font-size: 16px;
            color: #2C2C2C;
            line-height: 32px;
            margin-top: 60px;
          }
          .item-time{
            margin-top: 20px;
            font-size: 12px;
            color: #787878;
            .time{
              display: inline-block;
              vertical-align: sub;
              margin-bottom: 1px;
              width: 16px;
              height: 14px;
              background: url(../../static/img.png) no-repeat;
              background-position: -100px -50px;
            }
          }
          .item-desc{
            color: #787878;
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
