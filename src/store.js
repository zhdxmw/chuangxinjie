import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showLogin: false,
    nowPage: '',
    userInfo: '',
    title: '登录'
  },
  getters: {
    showLogin: state => state.showLogin,
    nowPage: state => state.nowPage,
    userInfo: state => state.userInfo,
    title: state => state.title
  },
  mutations: {
    setLoginLayer (state, layerState) {
      state.showLogin = layerState
    },
    setNowPage (state, page) {
      state.nowPage = page
    },
    setTitle (state, title) {
      state.title = title
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    }
  }
})

export default store
