<template lang="pug">
  div
    .list-wrap
      .list-section(v-for="(plate,p) in list" ,:key="plate.title")
        h3.plate-title {{plate.title}}
          span.more-video 更多视频
            span.more-icon +
        .video-list
          .video-item(v-for="(item,i) in plate.imgList")
            router-link.video-link(:to="{name:'1'}")
              .img-box
                img(:src="item.img")
                span.time {{item.time}}
                span.num 播放次数：{{item.num}}次
              .img-info {{item.desc}}

</template>
<script>
  export default {
    data () {
      return {
        title: '搜索结果',
        list: [
          {
            title: '视频板块A',
            imgList: [
              {
                img: '/../static/demo/video.png',
                time: 1200,
                num: 1625,
                desc: '过期的面霜、牛奶的逆天用处，以后再也不舍得扔了'
              },
              {
                img: '/../static/demo/video.png',
                time: 1200,
                num: 1625,
                desc: '过期的面霜、牛奶的逆天用处，以后再也不舍得扔了'
              },
              {
                img: '/../static/demo/video.png',
                time: 1200,
                num: 1625,
                desc: '过期的面霜、牛奶的逆天用处，以后再也不舍得扔了'
              },
              {
                img: '/../static/demo/video.png',
                time: 1200,
                num: 1625,
                desc: '过期的面霜、牛奶的逆天用处，以后再也不舍得扔了'
              },
              {
                img: '/../static/demo/video.png',
                time: 1200,
                num: 1625,
                desc: '过期的面霜、牛奶的逆天用处，以后再也不舍得扔了'
              }
            ]
          },
          {
            title: '视频板块B',
            imgList: [
              {
                img: '/../static/demo/video.png',
                time: 1200,
                num: 1625,
                desc: '过期的面霜、牛奶的逆天用处，以后再也不舍得扔了'
              },
              {
                img: '/../static/demo/video.png',
                time: 1200,
                num: 1625,
                desc: '过期的面霜、牛奶的逆天用处，以后再也不舍得扔了'
              },
              {
                img: '/../static/demo/video.png',
                time: 1200,
                num: 1625,
                desc: '过期的面霜、牛奶的逆天用处，以后再也不舍得扔了'
              },
              {
                img: '/../static/demo/video.png',
                time: 1200,
                num: 1625,
                desc: '过期的面霜、牛奶的逆天用处，以后再也不舍得扔了'
              },
              {
                img: '/../static/demo/video.png',
                time: 1200,
                num: 1625,
                desc: '过期的面霜、牛奶的逆天用处，以后再也不舍得扔了'
              }
            ]
          }
        ]
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .plate-title{
    font-size: 20px;
    margin-bottom: 30px;
    .more-video{
      cursor: pointer;
      float: right;
      font-size: 14px;
      .more-icon{
        display: inline-block;
        vertical-align: middle;
        margin-left: 6px;
        margin-bottom: 2px;
        width: 14px;
        height: 14px;
        background: #95C6F1;
        border-radius: 50%;
        color: #ffffff;
        text-align: center;
        line-height: 14px;
      }
    }
  }
  .video-list{
    display: flex;
    width: 1200px;
    overflow: hidden;
    flex-flow: wrap;
    margin: 0 auto;
    padding: 2px;
    .video-item{
      margin-right: 20px;
      margin-bottom: 40px;
      width: 285px;
      height: 280px;
      box-shadow: 0 0 4px rgba(0,0,0,0.4);
      &:nth-child(4n){
        margin-right: 0px;
      }
      .video-link{
        display: inline-block;
        width: 100%;
        height: 100%;
        .img-box{
          position: relative;
          width: 100%;
          min-height: 203px;
          overflow: hidden;
          font-size: 12px;
          color: #ffffff;
          span.time{
            position: absolute;
            bottom: 10px;
            left: 20px;
          }
          span.num{
            position: absolute;
            bottom: 10px;
            right: 20px;
          }
        }
        .img-info{
          padding: 18px;
          color: #2C2C2C;
        }
      }
    }
  }
</style>
