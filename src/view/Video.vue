<template lang="pug">
  div
    .video-top-wrap
      .title {{title}}
      .seTitle {{seTitle}}
      .top-video-list
        .list-top-left
          .top-video-common.top-video-1
            router-link.top-link(:to="{name:'1'}")
              .video-img
                img(:src="topList[0].img")
                span.play-icon
                span.title {{topList[0].desc}}
        .list-top-right
          .top-video-common.top-video-2
            router-link.top-link(:to="{name:'1'}")
              .video-img
                img(:src="topList[1].img")
                span.play-icon
                span.title {{topList[1].desc}}
          .list-right-bottom
            .top-video-common.top-video-3
              router-link.top-link(:to="{name:'1'}")
                .video-img
                  img(:src="topList[2].img")
                  span.play-icon
                  span.title {{topList[2].desc}}
            .top-video-common.top-video-3.top-video-4
              router-link.top-link(:to="{name:'1'}")
                .video-img
                  img(:src="topList[3].img")
                  span.play-icon
                  span.title {{topList[3].desc}}

      .link-label-wrap
        router-link.link-label(:to="{name:'videoLabel'}" exact-active-class="active") 标签
        router-link.link-label(:to="{name:'videoColumn'}" exact-active-class="active") 栏目
      router-view
</template>
<script>
  import VideoLabel from '../components/VideoLabel'
  export default {
    components: {
      VideoLabel
    },
    data () {
      return {
        title: '搜索结果',
        seTitle: '利乐视角',
        topList: [
          {
            img: '/../static/demo/video.png',
            desc: '利乐视角视频'
          },
          {
            img: '/../static/demo/video.png',
            desc: '利乐视角视频'
          },
          {
            img: '/../static/demo/video.png',
            desc: '利乐视角视频'
          },
          {
            img: '/../static/demo/video.png',
            desc: '利乐视角视频'
          }
        ]
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .video-top-wrap{
    width: 1200px;
    margin: 0 auto;
    .title{
      font-size: 12px;
      color: #4162C1;
      margin: 20px auto 14px auto;
    }
    .seTitle{
      color: #424345;
      font-size: 24px;
      margin-bottom: 7px;
    }
    .top-video-list{
      display: flex;
      flex-flow: wrap;
      .list-top-right{
        margin-left: 10px;
      }
      .list-right-bottom{
        margin-top: 10px;
        .top-video-4{
          margin-left: 10px;
        }
      }
      .top-video-common{
        .top-link{display: block;width: 100%;height: 100%;}
        .video-img{
          position: relative;
          width: 100%;
          height: 100%;
          img{
            width: 100%;
            height: 100%;
          }
          .play-icon{
            position: absolute;
            width: 40px;
            height: 40px;
            bottom: 18px;
            left:30px;
            background: url("../../static/icon_player.png") center no-repeat;
          }
          span.title{
            font-size: 20px;
            color: #ffffff;
            position: absolute;
            bottom: 10px;
            left: 90px;
          }
        }
        &.top-video-1{
          width: 780px;
          height: 430px;
        }
        &.top-video-2{
          width: 410px;
          height: 226px;
        }
        &.top-video-3{
          width: 200px;
          height: 194px;
          .play-icon{
            left: 20px;
            bottom: 60px;
          }
          span.title{
            font-size: 14px;
            color: #ffffff;
            position: absolute;
            bottom: 16px;
            left: 20px;
          }
        }
      }
      .list-right-bottom{
        display: flex;
      }
    }
  }
  .link-label-wrap{
    width: 200px;
    height: 40px;
    border-radius: 92px;
    background: #EAF4FC;
    line-height: 40px;
    margin:50px 0 40px 0;
    display: flex;
    .link-label{
      width: 80px;
      color: #2C2C2C;
      text-align: center;
    }
    .active{
      font-size: 20px;
      color: #ffffff;
      width:120px;
      border-radius: 92px;
      background: #4162C1;
    }
  }
</style>
