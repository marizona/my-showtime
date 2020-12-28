<template>

  <div id="app">
    <div class="container">
      <Header/>
        <router-view/>
      <Footer/>
    </div>
    
    
  </div>
</template>




<script>
import Header from './views/Header.vue'
import Footer from './views/Footer.vue'

export default {
  components:{
    Header,
    Footer
  }
  
}
</script>


<style>
.container{
  max-width: 85%;
 /*  height: 1000px; */
  /* margin: auto; */
  box-shadow: 3px 3px 30px 3px rgba(0, 0, 0, 0.1);
  background-color: #edf1f1;
}

</style>
