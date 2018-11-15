import Vue from 'vue'
import Router from 'vue-router'
import Shots from './views/Shots.vue'
import Analytics from './views/Analytics.vue'
import Settings from './views/Settings.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/shots',
      name: 'shots',
      component: Shots
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: Analytics
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/',
      redirect: '/shots'
    }
  ]
})
