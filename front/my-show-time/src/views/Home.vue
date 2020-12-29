<template>
  <div class="Home">
  <head>
<!--    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">-->
  </head>

<ConcertCard></ConcertCard>
  </div>



</template>

<script>
import ConcertCard from './Components/ConcertCard.vue'

export default {
  name: 'home',
  components: {
    ConcertCard,
  }
}

</script>

<style src="./app.css"></style>