import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Static from '@/components/Static'
import FireChatroom from '@/components/FireChatroom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/static',
      name: 'Static',
      component: Static
    },
    {
      path: '/FireChatroom',
      name: 'FireChatroom',
      component: FireChatroom
    }
  ]
})
