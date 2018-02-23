<template lang="pug">
  div.header
    div.header-wrap
      div.header-link-wrap
        router-link.home(:to='{name:"home"}')
          img(src="/../static/logo.png")
        div.head-link
          router-link.trend.active.link-href(:to='{name:1}') 趋势与机遇
          router-link.market.link-href(:to='{name:1}') 市场与创新
          router-link.quality.link-href(:to='{name:1}') 效率与质量
          router-link.perspective.link-href(:to='{name:1}') 利乐视角
          router-link.download.link-href(:to='{name:1}') 资料下载
        div.user-deal-wrap(v-if="!search")
          div.user-info-wrap
            div.account(@click="setLoginLayer(true)")
              span.account-img
              span.account-info 个人账户
            span.span-border |
            div.query(@click="toggleSearch")
              span.query-img
              span.query-txt 搜索
          div.deal-wrap
            span.wx
            a.wb(href="http://weibo.com/tetrapakcorporate")
            span.star
        div.search-wrap(v-if="search")
          div.search-input-wrap
            span.cancel-search(@click="toggleSearch")
            div.search
              input.query(type="text" v-model="query" placeholder="搜  索" maxlength="15")
              span.query-btn(@click="queryData")
          div.label-wrap
            div.label-content-wrap
              div.choice
                el-radio.el-radio(v-model="type" label="0") 全部
                el-radio.el-radio(v-model="type" label="1") 文章
                el-radio.el-radio(v-model="type" label="2") 视频
                el-radio.el-radio(v-model="type" label="3") 资料下载
              div.label-lsit
                h3.title 热门关键词：
                ul.list
                  li.label-item(v-for="(item,i) in labels" ,@click="select(item)" ,:key="i") {{item.name}}

</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    name: 'Header',
    data () {
      return {
        search: false,
        query: '',
        type: '0',
        labels: [
          {
            name: '效率',
            code: 1
          },
          {
            name: '市场',
            code: 1
          },
          {
            name: '趋势',
            code: 1
          },
          {
            name: '利乐佳',
            code: 1
          },
          {
            name: '生态盖',
            code: 1
          },
          {
            name: '技术',
            code: 1
          },
          {
            name: '再利用',
            code: 1
          },
          {
            name: '环保',
            code: 1
          },
          {
            name: '一步到位技术',
            code: 1
          },
          {
            name: '质量',
            code: 1
          },
          {
            name: '果汁',
            code: 1
          },
          {
            name: '包装',
            code: 1
          },
          {
            name: '安全',
            code: 1
          },
          {
            name: '牛奶',
            code: 1
          }
        ]
      }
    },
    methods: {
      toggleSearch () {
        this.search = !this.search
      },
      select (item) {
        this.query = item.name
      },
      queryData () {
        //
      },
      ...mapMutations(['setLoginLayer'])
    }
  }
</script>
<style scoped lang="scss">
  .header{
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 11;
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(70,70,70,0.6);
    .header-wrap{
      width: 1200px;
      height: 60px;
      margin: 0 auto;
      .header-link-wrap{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        .head-link{
          display: flex;
          height: 100%;
          .link-href{
            width: 100px;
            text-decoration: none;
            font-size: 14px;
            color: #4A4A4A;
            height: 100%;
            line-height: 60px;
            text-align: center;
            margin-right: 16px;
          }
          .trend{
            &.active{
              border-bottom: 4px solid #4076BA;
            }
          }
          .market{
            &.active{
              border-bottom: 4px solid #DE2823;
            }
          }
          .quality{
            &.active{
              border-bottom: 4px solid #147D28;
            }
          }
          .perspective{
            &.active{
              border-bottom: 4px solid #95C6F1;
            }
          }
          .download{
            &.active{
              border-bottom: 4px solid #95C6F1;
            }
          }
        }
        .user-deal-wrap{
          display: flex;
          align-items: center;
          .user-info-wrap{
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #4076BA;
            .account,.query{
              cursor: pointer;
            }
            .account-img{
              margin-right: 10px;
              display: inline-block;
              vertical-align: middle;
              width: 30px;
              height: 30px;
              background: url("/static/img.png") no-repeat;
              background-position: 0 0;
            }
            .query-img{
              margin-right: 10px;
              display: inline-block;
              vertical-align: middle;
              width: 30px;
              height: 30px;
              background: url("/static/img.png") no-repeat;
              background-position: -50px 0;
            }
            .account-info,.query-txt{
              display: inline-block;
              vertical-align: middle;
            }
            .span-border{margin: 0 20px;}
          }
          .deal-wrap{
            margin-left: 25px;
            .wx,.wb,.star{
              display: inline-block;
              vertical-align: middle;
              width: 30px;
              height: 30px;
              cursor: pointer;
              margin-left: 10px;
              background: url("/static/img.png") no-repeat;
            }
            .wx{
              background-position: -100px 0;
            }
            .wb{
              background-position: -150px 0;
            }
            .star{
              background-position: -200px 0;
            }
          }
        }
        .search-wrap{
          position: relative;
          .search-input-wrap{
            display: flex;
            align-items: center;
            .cancel-search{
              width: 40px;
              height: 40px;
              cursor: pointer;
              background: url("/static/img.png") no-repeat;
              background-position: -287px -37px;
            }
            .search{
              display: flex;
              align-items: center;
              width: 340px;
              height: 30px;
              border:1px solid #DDDDDD;
              border-radius: 50px;
              .query{
                width: 276px;
                height: 28px;
                border: none;
                outline: none;
                background: transparent;
                text-indent: 16px;
                font-size: 14px;
              }
              .query-btn{
                width: 60px;
                height: 26px;
                cursor: pointer;
                background:#4162C1 url("/static/img.png") no-repeat;
                background-position: -230px -45px;
                border-radius: 50px;
              }
            }
          }
          .label-wrap{
            width: 370px;
            height: 370px;
            background: #EFF7FD;
            position: absolute;
            top: 50px;
            left: 10px;
            .label-content-wrap{
              height: 100%;
              padding-left: 46px;
              .choice{
                margin: 40px 0 60px 0;
              }
              .title{
                margin: 0 0 18px 0;
                font-weight: 400;
              }
              .list{
                .label-item{
                  display: inline-block;
                  height: 30px;
                  line-height: 30px;
                  margin-right: 10px;
                  margin-bottom: 10px;
                  color: #424345;
                  cursor: pointer;
                  padding: 0 16px;
                  background: #ffffff;
                  border-radius: 50px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
