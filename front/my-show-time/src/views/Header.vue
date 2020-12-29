<template>

<div class="header">
  <div class="nav row">
    <div class="imgNavbar">
      <img src="../assets/logo.png" />
    </div>
    
    <ul >
         <li class="navlink">
           <a @click="$router.push('/')">Home</a>
         </li>
      <div v-if="!this.$store.state.logged">
         <li class="navlink">
           <a @click="$router.push('/login')">Login</a>
         </li >
      </div>
      <div v-if="this.$store.state.logged">
        <li class="navlink">
          <a @click="logOut">Log Out</a>
        </li >
      </div>
           <li class="navlink">
           <a @click="$router.push('/registration')">Registration</a>
         </li>
          
      </ul>
  </div>
</div>


</template>



<script>
import { mapActions } from 'vuex';

export default {
  props: {
    logged: Boolean,
  },

  methods: {
    ...mapActions(['logOut']),
  },


}
</script>

<style  src='./app.css' scoped>

</style>
