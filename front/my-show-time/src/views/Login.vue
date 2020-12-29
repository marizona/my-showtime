<template>
    <div class="row login">
      <div class="col-md-3"></div>
      <div class="col-md-6">

            <h1>Login here !</h1>
            <hr />
            <input v-model="email"
              type="text"
              placeholder="Email"
              name="email"
              id="email"
              required
            />

            <input
                v-model='password'
              type="password"
              placeholder="Password"
              name="psw"
              id="psw"
              required
            />
            <hr />

            <div class="connexion">
                <button @click.prevent="logUser({email,  password})" class="btn btn-info">Login</button>
            </div>
            
        </div>

          <div class="signin">
            <p>Not already registered ? <a href="/registration">Register</a></p>
          </div>
        
      </div>


</template>

<script>

import { mapActions } from 'vuex';

export default {
    name: 'login',
  props: {
      email: String,
    password: String,
  },

  methods: {
      ...mapActions(["logUser"]),
  }
}
</script>

<style src='./app.css'>

</style>
