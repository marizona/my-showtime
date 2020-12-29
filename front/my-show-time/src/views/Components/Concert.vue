<template>
  <div class="concert">
    <div v-for="concert in allConcerts" :key="concert._id">
      <div v-if="concert._id === id">
        <div class="row">
          <div class="col-sm-6">
        <div class="card m-4" style="width: 30rem;">
          <img class="card-img-top 50 h-50" :src="'https://source.unsplash.com/400x400/?concert.band'" :alt=concert.band>
          <div class="card-body">
          <h2 class="text-center cart-title">{{concert.band}}</h2>
            <p class="card-text">Genre : {{ concert.genre }}</p>
            <p class="card-text">Location : {{ concert.location }}</p>
            <p class="card-text">Date : {{concert.date}}</p>
            <p class="card-text">Hour : {{ concert.hour }}</p>
            <p class="card-text">Price : {{ concert.price }}</p>

            <div v-for="booking in getUser.booking" :key="booking">
              <div v-if="booking === concert._id">
            <p class="alert-success">You have booked this concert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Concert",
  methods: {
    ...mapActions(["fetchConcerts"]),

    getConcert() {
      console.log("DEBUG");
      const concertArray = this.allConcerts()
      console.log(concertArray[0]._id);
      console.log("FIN DEBUG");
      // for(const singleConcert in concertArray) {
        // console.log(singleConcert.band);
        // if (concertArray[i]._id === this.$route.params._id) {
        //   console.log(concertArray[i]);
        // }
      // }
    }
  },
  computed: mapGetters(['allConcerts', 'getUser']),

  created() {
    this.fetchConcerts();
  },
  data() {
    return {
    concerts: [{}],
      id: this.$route.params.concertId,
    }
  }

};

</script>

<style scoped>

</style>