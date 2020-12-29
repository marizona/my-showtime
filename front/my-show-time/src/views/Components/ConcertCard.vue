<template>
<div class="ConcertCard">

    <div class="card m-2" style="width: 18rem;">
      <img class="card-img-top" src="https://source.unsplash.com/400x400/?concert" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title text-capitalize text-center">{{ concert.band }}</h5>
        <p class="card-text">Genre : {{ concert.genre }}</p>
        <p class="card-text">Location : {{ concert.location }}</p>
        <p class="card-text">Date : {{concert.date}}</p>
        <p class="card-text">Hour : {{ concert.hour }}</p>
        <p class="card-text">Price : {{ concert.price }}</p>
        <a @click="bookConcert(concert._id)" class="btn btn-primary">Book this concert</a>
      </div>
    </div>

</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ConcertCard",
  props: {
    concert: Object
  },
  methods: {
    ...mapActions(['bookConcert']),
  },

};
</script>

<style scoped>

</style>