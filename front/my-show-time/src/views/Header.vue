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
      <div v-if="!logged">
         <li class="navlink">
           <a @click="$router.push('/login')">Login</a>
         </li >
      </div>
      <div v-if="logged">
        <li class="navlink">
          <a @click="logout">Log Out</a>
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
export default {
  props: {
    logged: Boolean,
  },

  methods: {
    checkLog() {
      this.logged = localStorage.getItem('token') !== null;
    },
    logout() {
      this.logged = false;
    }
  },
  created() {
   this.checkLog();
  },
  computed() {
    this.checkLog();
  },
  login() {
    this.logged = true;
  }


}
</script>

<style  src='./app.css' scoped>

</style>
