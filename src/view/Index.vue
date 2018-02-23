<template lang="pug">
  div.home-wrap
    div.swiper-wrap
      div.swiper-left
        span.arrow(@click="prev")
      el-carousel.carousel-wrap(indicator-position="outside",:autoplay="false",height="500px",arrow="never",ref="carousel")
        el-carousel-item.item-wrap(v-for="(item,i) in banners" ,:key="i")
          div.item
            a(:href="item.link")
              img(:src="imgUrl + item.image")
      div.swiper-right
        span.arrow(@click="next")
    div.content
      div.contain-wrap
        vue-waterfall-easy(:imgsArr="imgsArr",@scrollLoadImg="fetchImgsData" ,:maxCols="maxCols" ,:imgWidth="imgWidth")
          template( slot-scope="props")
            div.recommend-info
              h3.title {{props.value.title}}
              div.time
                span
                | {{props.value.time}}
              p.desc {{props.value.desc}}
        div.loadding-wrap
          div.loadding
            img(src="/../static/loadding.gif")
            p 正在加载
</template>

<script>
  import vueWaterfallEasy from 'vue-waterfall-easy'
  import config from '../config'
  export default {
    name: 'Home',
    components: {
      vueWaterfallEasy
    },
    data () {
      return {
        imgUrl: config.imgUrl,
        banners: [
        ],
        imgsArr: [],
        fetchImgsArr: [],
        maxCols: 4,
        imgWidth: 285
      }
    },
    methods: {
      prev () {
        this.$refs.carousel.prev()
      },
      next () {
        this.$refs.carousel.next()
      },
      // 假数据
      initImgsArr (n, m) {
        var arr = []
        for (var i = n; i < m; i++) {
          arr.push({ src: `/../static/demo/bitmap-${i + 1}.png`, link: 'https://www.baidu.com', title: '过期的面霜、牛奶的逆天用处，以后再也不舍得扔了', time: '2018-01-23', desc: '一些图片描述文字', label: '趋势与机遇', type: 1 })
        }
        return arr
      },
      fetchImgsData () {
        this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)
      }
    },
    mounted () {
      this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)
      this.$http.get('/api/public/banner').then(res => {
        this.banners = res.data.pc
      })
    },
    created () {
      this.imgsArr = this.initImgsArr(0, 6)
      this.fetchImgsArr = this.initImgsArr(6, 12) // 模拟每次请求的新的图片的数据数据
    }
  }
</script>

<style scoped lang="scss">
.swiper-wrap{
  display: flex;
  .swiper-left,.swiper-right{
    width: calc((100% - 1044px)/2);
    height: 501px;
    display: flex;
  }
  .swiper-left{
    background: url("../../static/banner-L.png") no-repeat;
    background-size: auto 100%;
    background-position-x: 100%;
    margin-right: 10px;
    align-items: center;
    justify-content: flex-end;
    .arrow{
      width: 35px;
      height: 35px;
      border-radius: 50%;
      cursor: pointer;
      background:url("../../static/arrow-L.png");
      margin-right: 37px;
      &:hover{
        background:url("../../static/arrow-L-active.png");
      }
    }
  }
  .swiper-right{
    background: url("../../static/banner-R.png") no-repeat;
    background-size: auto 100%;
    margin-left: 10px;
    align-items: center;
    justify-content: flex-start;
    .arrow{
      width: 35px;
      height: 35px;
      border-radius: 50%;
      cursor: pointer;
      background: url("../../static/arrow-R.png");
      margin-left: 37px;
      &:hover{
        background:url("../../static/arrow-R-active.png");
      }
    }
  }
  .carousel-wrap{
    width: 1024px;
    min-width: 1024px;
    .item{
      a{
        width: 100%;
        height: 500px;
        img{
          width: 100%;
        }
      }
    }
  }
}
.content{margin-top: 10px;}

</style>
