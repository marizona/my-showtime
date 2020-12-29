<template>
  <div id="app">
    <div>
      <Header />
      <div class="container">
        <router-view />
      </div>
      <Footer />
    </div>
  </div>
</template>




<script>
import Header from './views/Header.vue';
import Footer from './views/Footer.vue';
import { mapActions } from 'vuex';


export default {
  components: {
    Header,
    Footer
  },

  methods: {
    ...mapActions(['refreshUser']),
  },

  created() {
    this.refreshUser();
  },
  updated() {
    this.refreshUser();
  },

}
</script>


<style>
</style>