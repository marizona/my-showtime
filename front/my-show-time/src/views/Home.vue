<template>
  <div class="Home">
  <head>
<!--    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">-->
  </head>
    <div class="container">
        <div class="row">
          <div v-for="concert in allConcerts" :key="concert._id">
            <ConcertCard v-bind:concert="concert"></ConcertCard>
          </div>
         </div>
    </div>
  </div>


</template>

<script>
import ConcertCard from './Components/ConcertCard.vue'
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'home',
  components: {
    ConcertCard,
  },
  methods: {
    ...mapActions(["fetchConcerts"]),
  },
  computed: mapGetters(['allConcerts']),

  created() {
    this.fetchConcerts();
  },

  data() {
    return {
      concerts : [{}]
    }
  }

}

</script>

<style src="./app.css"></style>