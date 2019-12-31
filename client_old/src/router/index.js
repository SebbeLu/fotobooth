import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Router from 'vue-router'
import Start from '@/components/start'
import Countdown from '@/components/countdown'
import Gallery from '@/components/gallery'

Vue.use(Router)
Vue.use(Buefy)

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
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    }
  ]
})
