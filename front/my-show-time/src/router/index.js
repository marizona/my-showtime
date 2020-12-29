import Vue from 'vue'
import VueRouter from 'vue-router'
import Registration from '../views/Registration.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home'
import Concert from '../views/Components/Concert'
import admin from '../views/admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registration/',
    name: 'registration',
    component: Registration
  },
  {
    path: '/concert/:concertId',
    name: 'Single Concert',
    component: Concert,
  },
  {
    path: '/admin/',
    name: 'admin',
    component: admin
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
