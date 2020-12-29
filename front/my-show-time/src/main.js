import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

Window.Vue=require('vue')

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Window.forEvent=new Vue()


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

