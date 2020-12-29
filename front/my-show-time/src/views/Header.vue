<template>

<div class="header">
  <div class="nav row">
    <div class="imgNavbar">
      <img src="../assets/logo.png" />
    </div>
<!--    <h1>{{getLog}}</h1>-->
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

      </ul>
  </div>
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
