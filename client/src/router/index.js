import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/start'
import Countdown from '@/components/countdown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/countdown',
      name: 'Countdown',
      component: Countdown
    }
  ]
})
