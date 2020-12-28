import Vue from 'vue'
import VueRouter from 'vue-router'
import Registration from '../views/Registration.vue'
import Login from '../views/Login.vue'








Vue.use(VueRouter)

const routes = [
 
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

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
