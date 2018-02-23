<template lang="pug">
  #app
    header-top
    div.main-content
      router-view
    footer-bottom
    login-layer
</template>

<script>
import HeaderTop from './components/Header'
import FooterBottom from './components/Footer'
import LoginLayer from './components/Login'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    HeaderTop,
    FooterBottom,
    LoginLayer
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.main-content{
  padding-top: 63px;
  min-height: calc(100% - 155px);
}
</style>
