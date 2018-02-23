<template lang="pug">
  div
    .page-title {{title}}
    .page-content
      .page-detail
        h2.title {{title}}
        h3.second-title —— {{secondTitle}}
        p.article-info
          span.time
          | {{time}}
          span.author 文章作者：{{author}}
        .content-detail(v-html="")

        .share-wrap
          .share 分享：
            span.share-item.share-wx
            span.share-item.share-wb
            span.share-item.share-qq
            span.share-item.share-leave
            span.share-item.share-more
          .keys-list
            router-link.link(:to="{name: '1'}" v-for="(item,i) in keys" ,:key="i") {{item}}
          .recommend-relative
            .order-title  相关推荐
            .detail-list
              router-link.item(:to="{name: '1'}" v-for="(item,i) in recommendList" ,:key="i")
                .img-box
                  img(:src="item.img")
                .img-desc {{item.desc}}
      .common-recent-topic
        recent-topic
</template>
<script>
  import RecentTopic from '../components/RecentTopic'
  export default {
    components: {
      RecentTopic
    },
    data () {
      return {
        page: '搜索结果',
        title: '利乐包装：紧抓趋势，实现产品创新让其循环再利用',
        secondTitle: '紧抓趋势，实现产品创新让其循环再利用',
        time: '2018-01-23',
        author: '名称',
        recommendList: [
          {
            img: '/../static/demo/recommend.png',
            desc: '过期的面霜、牛奶的逆天用处，以后再也不舍得扔了'
          },
          {
            img: '/../static/demo/recommend.png',
            desc: '过期的面霜、牛奶的逆天用处，以后再也不舍得扔了'
          },
          {
            img: '/../static/demo/recommend.png',
            desc: '过期的面霜、牛奶的逆天用处，以后再也不舍得扔了'
          }
        ],
        keys: [
          '关键词',
          '关键词',
          '关键词',
          '关键词',
          '关键词'
        ]
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .page-title{
    width: 1200px;
    font-size: 12px;
    color: #4162C1;
    margin: 20px auto 35px auto;
  }
  .page-content{
    display: flex;
    width:1200px;
    margin: 0 auto;
    .page-detail{
      width: 740px;
      margin-right: 170px;
      h2.title {
        color: #2C2C2C;
        font-size: 24px;
        letter-spacing: 1.5px;
        line-height: 32px;
        font-weight: 400;
      }
      h3.second-title{
        font-weight: 400;
        color: #2C2C2C;
        font-size: 16px;
        line-height: 32px;
        letter-spacing: 1px;
      }
      .article-info{
        margin-top: 30px;
        font-size: 12px;
        color: #787878;
        span.time{
          display: inline-block;
          vertical-align: sub;
          margin-bottom: 1px;
          margin-right: 1px;
          width: 16px;
          height: 14px;
          background: url(../../static/img.png) no-repeat;
          background-position: -100px -50px;
        }
        .author{
          margin-left: 20px;
        }
      }
      .share-wrap{
        margin-top: 20px;
        .share{
          font-size: 12px;
          color: #424345;
          span.share-item{
            display: inline-block;
            vertical-align: middle;
            width: 28px;
            height: 28px;
            margin-left: 14px;
          }
          .share-wx{
            background: url("../../static/img.png") no-repeat;
            background-position: -250px -100px;
          }
          .share-wb{
            background: url("../../static/img.png") no-repeat;
            background-position: -300px -100px;
          }
          .share-qq{
            background: url("../../static/img.png") no-repeat;
            background-position: -250px 0;
          }
          .share-leave{
            background: url("../../static/img.png") no-repeat;
            background-position: -300px 0;
          }
          .share-more{
            background: url("../../static/img.png") no-repeat;
            background-position: -350px 0;
          }
        }
      }
      .keys-list{
        margin-top: 20px;
        padding: 27px 0;
        border-bottom: 1px solid #EAEAEA;
        border-top: 1px solid #EAEAEA;
        .link{
          display: inline-block;
          vertical-align: middle;
          background:#EAF4FC;
          color: #2C2C2C;
          margin-right: 10px;
          height: 23px;
          line-height: 23px;
          padding: 0 8px;
        }
      }
    }
  }
  .recommend-relative{
    .order-title {
      font-size: 16px;
      letter-spacing: 2px;
      border-left: 4px solid #787878;
      text-indent: 18px;
      margin-bottom: 20px;
      margin-top: 28px;
    }
    .detail-list{
      display: flex;
      .item{
        width: 232px;
        margin-right: 22px;
        .img-box{
          width: 100%;
          max-height: 170px;
          overflow: hidden;
          img{width: 100%}
        }
        .img-desc{
          color: #2C2C2C;
          margin-top: 4px;
        }
      }
    }
  }
</style>
