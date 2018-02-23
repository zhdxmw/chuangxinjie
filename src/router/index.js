import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '@/components/Header'
import Home from '@/view/Index'
import Register from '@/view/Register'
import Order from '@/view/Order'
import ActiveEmail from '@/view/ActiveEmail'
import List from '@/view/List'
import Detail from '@/view/Detail'
import Video from '@/view/Video'
import VideoLabel from '@/components/VideoLabel'
import VideoColumn from '@/components/VideoColumn'
import VideoDetail from '@/view/VideoDetail'
import QuestionNaire from '@/components/QuestionNaire'
import Result from '@/components/Result'
import SignUp from '@/components/SignUp'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/header',
      name: 'header',
      component: Header
    },
    {
      path: '/account/register',
      name: 'register',
      component: Register
    },
    {
      path: '/account/order',
      name: 'order',
      component: Order
    },
    {
      path: '/active',
      name: 'active',
      component: ActiveEmail
    },
    {
      path: '/article/:id?',
      name: 'list',
      component: List
    },
    {
      path: '/article/detail/:id?',
      name: 'detail',
      component: Detail
    },
    {
      path: '/video',
      name: 'video',
      component: Video,
      children: [
        {
          path: '/videoColumn',
          name: 'videoColumn',
          component: VideoColumn
        },
        {
          path: '/videoLabel',
          name: 'videoLabel',
          component: VideoLabel
        }
      ]
    },
    {
      path: '/video/detail/:id?',
      name: 'videoDetail',
      component: VideoDetail
    },
    {
      path: '/questionnair',
      name: 'questionNaire',
      component: QuestionNaire
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    }
  ]
})
