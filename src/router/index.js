import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../layouts/Landing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Landing,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
