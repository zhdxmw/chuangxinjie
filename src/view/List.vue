<template lang="pug">
  div
    .list-title {{title}}
    .common-list-wrap
      .common-list-wrap
        common-list
      .common-recent-topic
        recent-topic
</template>
<script>
  import CommonList from '../components/List'
  import RecentTopic from '../components/RecentTopic'
  export default {
    components: {
      CommonList,
      RecentTopic
    },
    data () {
      return {
        title: '搜索结果'
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .list-title{
    width: 1200px;
    font-size: 12px;
    color: #4162C1;
    margin: 20px auto 35px auto;
  }
  .common-list-wrap{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    .common-list-wrap{
      width:840px;
      margin-left: 0px;
    }
    .common-recent-topic{
      width: 300px;
    }
  }
</style>
