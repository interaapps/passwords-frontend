import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/security-check',
    name: 'SecurityCheck',
    component: () => import('../views/SecurityCheck.vue')
  },
  {
    path: '/notes',
    name: 'Notes',
    component: () => import('../views/Notes.vue')
  },
  {
    path: '/auth',
    name: 'Authentication',
    component: () => import('../views/auth/IAAuthLogin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
