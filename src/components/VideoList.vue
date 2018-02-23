<template lang="pug">
  div.video-list-wrap
    .video-list
      .video-item(v-for="(item,i) in list")
        router-link.video-link(:to="{name:'1'}")
          .img-box
            img(:src="item.img")
            span.time {{item.time}}
            span.num 播放次数：{{item.num}}次
          .img-info {{item.desc}}
    .loadding-wrap
      .loadding
        img(src="/../static/loadding.gif")
        p 正在加载

</template>
<script>
  export default {
    props: {
      list: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
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
