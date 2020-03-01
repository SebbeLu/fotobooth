import Vue from 'vue'
import Buefy from 'buefy'
import Router from 'vue-router'
import Start from '@/components/start'
import Countdown from '@/components/countdown'
import Gallery from '@/components/gallery'
import socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

export const SocketInstance = socketio('http://192.168.4.1:8081/')

Vue.use(VueSocketIO, SocketInstance)
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
