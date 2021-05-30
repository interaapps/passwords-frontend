import Vue from 'vue'
import VueRouter from 'vue-router'
import PasswordList from '../views/PasswordList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Passwords',
    component: PasswordList
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
  },
  {
    path: '/f/:folderId',
    name: 'Passwords',
    component: PasswordList
  },
  {
    path: '/:id',
    name: 'Passwords',
    component: PasswordList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
