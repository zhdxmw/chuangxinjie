import axios from 'axios'
import {Loading, Message} from 'element-ui'
import store from 'store'
import config from './config'
import router from './router'

const http = axios.create({
  baseURL: config.api,
  timeout: 20000
})
let loadingInstance
http.interceptors.request.use(function (config) {
  let token = store.get('token')
  config.headers['token'] = token
  loadingInstance = Loading.service({
    fullscreen: true,
    text: 'loading'
  })
  return config
}, function (error) {
  return Promise.reject(error)
})

http.interceptors.response.use(function (response) {
  loadingInstance.close()
  return response.data
}, function (error) {
  loadingInstance.close()

  console.log(error.response)
  var errorMsg = error.response.data.resultNote
  Message({message: errorMsg, type: 'error'})

  if (error.response.status === 401) {
    router.push({
      name: 'login'
    })
  }

  return Promise.reject(error)
})
export default http
