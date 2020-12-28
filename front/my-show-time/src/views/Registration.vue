<template>
  <div class="row register">
    <div class="col-md-3"></div>
    <div class="col-md-6 formRegister">

            <h1>Register here !</h1>
            <input v-model="username"
              type="text"
              placeholder="Username"
              name="email"
              id="email"
              required
            />

            <input v-model="email"
              type="text"
              placeholder="Email"
              name="email"
              id="email"
              required
            />

            <input v-model="password"
              type="password"
              placeholder="Password"
              name="psw"
              id="psw"
              required
            />

            <input v-model="passwordConfirmation"
              type="password"
              placeholder="Password Confirmation"
              name="psw-repeat"
              id="psw-repeat"
              required
            />
          

          <div class="connexion">
            <button @click="this.register" class="btn btn-info">Register</button>
          </div>


            <p>Already registered ?
              <a href="/login">Login</a>.</p>


        
      </div>
  </div>



</template>

<script>


import router from "@/router";
import axios from "axios";

export default {
  name: 'registration',
  components: {
    
  },
  props: {
    username: String,
    email: String,
    password: String,
    passwordConfirmation: String,
  },

  methods: {
    async register() {
      // if (this.username !== undefined && this.email !== undefined && this.password !== undefined && this.passwordConfirmation !== undefined) {
      //   const reg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      //   const pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/i;
      //   if(!reg.test(this.email)) {
      //     alert("Please enter a valid email")
      //   } else {
      //     if (!pass.test(this.password)) {
      //       alert("Your password must be at least 8 characters long, have at least 1 uppercase, 1 number and 1 special character")
      //     } else {
      //
      //     if (this.passwordConfirmation !== this.password) {
      //       alert('The two passwords aren\'t the same ')
      //     } else {
      //       const user = {
      //         'username': this.username,
      //         'email': this.email,
      //         'password': this.password,
      //       }
      //       console.log(user);
            const response = await this.get()
            console.log(response);
            console.log(router);
            // router.push('/');
            // alert('You have successfully registered !')
        //   }
        // }
        // }
      // } else {
      //   alert("Please fill all fields")
      // }
    },

    async post(user) {
      console.log('ENTREE dans POST');
      console.log(user);
      try {
        const response = await fetch('http://localhost:3000/users/', {
          method: 'POST',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            // 'Accept': 'application/json',
          },
          body: JSON.stringify(user)
        });
        return response.json();
      } catch (e) {
        console.log(e);
      }
    },
     get() {
      try {
        console.log('ENTREE GET');
        axios.get('http://127.0.0.1:3000/concerts', {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }
        }).then(
            (response) => {
             console.log(response);
            }, (error) => {
              console.log(error)
            }
        );
        // return response;
      } catch (e) {
        console.log(e);
      }
    }
  }
}
</script>
