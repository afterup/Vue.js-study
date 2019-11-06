import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import(/* webpackChunkName: "about" */ './views/Shop.vue')
    },
    {
      path:'/order',
      name: 'order',
      component: () => import('./views/Order.vue')
    }
  ]
})
