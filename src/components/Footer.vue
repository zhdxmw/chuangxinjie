<template lang="pug">
  .footer
    .content-wrap
      img.footer-logo(src="/../static/logo-footer.png")
      span.desc 前往官方网站了解更多利乐资讯
      a.link(href="www.terapak.com/cn") www.terapak.com/cn
      p.code © 2017 Copyright  沪ICP备090****3
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {
      }
    }
  }
</script>
<style scoped lang="scss">
.footer{
  width: 100%;
  height: 85px;
  line-height: 90px;
  background: #F5F9FD;
  .footer-logo{
    width: 60px;
    display: inline-block;
    vertical-align: middle;
  }
  span.desc{
    margin-left: 10px;
    font-size: 16px;
    color: #424345;
  }
  a.link{
    margin-left: 10px;
    font-size: 16px;
    color: #3169B2;
  }
  p.code{
    float: right;
    font-size: 12px;
    color: #424345;
  }
}
</style>
