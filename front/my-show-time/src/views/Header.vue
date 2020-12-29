<template>

<div class="header">
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Concert</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
         <ul >
         
         <li class="navlink">
           <a @click="$router.push('/')">Home</a>
         </li>
      <div v-if="!getLog.log">
         <li class="navlink">
           <a @click="$router.push('/login')">Login</a>
         </li >
      </div>
      <div v-if="getLog.log">
        <li class="navlink">
          <a @click="logOut">Log Out</a>
        </li >
      </div>
           <li class="navlink">
           <a @click="$router.push('/registration')">Registration</a>
         </li>
         <li class="navlink">
           <a @click="$router.push('/admin')">admin</a>
         </li>
          
          
      </ul>
    </div>
  </div>
</nav>

    </div>
    
   


</template>



<script>
import { mapActions, mapGetters } from "vuex";

export default {
  // props: {
  //   logged: Boolean,
  // },

  methods: {
    ...mapActions(['logOut']),
  },
  computed: mapGetters(['getLog', 'getUser']),


}
</script>

<style  src='./app.css' scoped>
</style>
