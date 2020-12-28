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
                <button @click="this.login" class="btn btn-info">Login</button>
            </div>
            
        </div>

          <div class="signin">
            <p>Not already registered ? <a href="/registration">Register</a></p>
          </div>
        
      </div>


</template>

<script>

import axios from 'axios';
import router from "@/router";

export default {
    name: 'login',
  props: {
      email: String,
    password: String,
  },

  methods: {
      async login() {
        if (this.email !== undefined && this.password !== undefined) {
          const user = {
            'email' : this.email,
            'password': this.password,
          }
          await this.apiLogin(user);
          await router.push('/');
          this.logged = true
        }
      },

      async apiLogin(user) {
        axios.post('http://127.0.0.1:3000/users/login', {
          'email': user.email,
          'password': user.password,
        }).then((response) => {
          console.log(response);
          alert('You are now logged in')
          localStorage.setItem("token", response.data.access_token)
          localStorage.setItem("id", response.data.id)
          localStorage.setItem("email", response.data.email)
          this.store.login();
        }, (error) => {
          alert(error)
        });
      }
  }
}
</script>

<style src='./app.css'>

</style>
