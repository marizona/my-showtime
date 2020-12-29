<template>
  <div>
    <crudConcert></crudConcert>

    <div>
      <h1>Booking statistics</h1>
    </div>

    <stat></stat>
    <crudUser></crudUser>
  </div>
</template>

<script>
import crudUser from '../components/crudUser';
import crudConcert from '../components/crudConcert.vue';
import stat from '../components/stat.vue';

export default {
  components: {
    crudUser,
    stat,
    crudConcert,
  },
};
</script>