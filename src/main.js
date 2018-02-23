import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import './element.scss'
import './global.scss'
/* eslint-disable */
import http from './http'

/* eslint-disable */
import $ from 'jquery'
Vue.prototype.$http = http
Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
