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
         <li class="navlink">
           <a @click="$router.push('/login')">Login</a>
         </li >
           <li class="navlink">
           <a @click="$router.push('/registration')">Registration</a>
         </li>
          
      </ul>
  </div>
</div>


</template>



<script>
export default {
  
}
</script>

<style  src='./app.css' scoped>

</style>
