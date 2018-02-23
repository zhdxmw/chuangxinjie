<template lang="pug">
  div
    .video-lable-wrap
      h2.title 全部标签：
      .label-list
        el-checkbox-group(v-model="selected" ,@change="handleCheckedCitiesChange")
          el-checkbox(v-for="(key,i) in keys" ,:label="key" ,:key="key") {{key}}
          button.select-btn 筛选
      video-list(:list="list")
</template>
<script>
  import VideoList from './VideoList'
  export default {
    components: {
      VideoList
    },
    data () {
      return {
        title: '搜索结果',
        list: [
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
        ],
        keys: ['关键词', '关键词2', '关键词3', '关键词4'],
        selected: []
      }
    },
    methods: {
      handleCheckedCitiesChange (value) {
        let checkedCount = value.length
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.keys.length
      }
    }
  }
</script>

<style lang="scss" scoped>
  .video-lable-wrap{
    width: 1200px;
    margin: 0 auto;
    .title{
      margin-top: 40px;
      font-size: 14px;
    }
    .select-btn{
      display: inline-block;
      vertical-align: baseline;
      margin-left: 36px;
      letter-spacing: 2px;
      width: 60px;
      height: 30px;
      background: #4076BA;
      color: #ffffff;
      border-radius: 18px;
      outline: none;
      border: none;
    }
    .label-list{
      margin-bottom: 40px;
    }
  }
</style>
