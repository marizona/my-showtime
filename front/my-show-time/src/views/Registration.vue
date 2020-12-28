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
    register() {
      if (this.username !== undefined && this.email !== undefined && this.password !== undefined && this.passwordConfirmation !== undefined) {
        const reg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        // const pass =
        if(!reg.test(this.email)) {
          alert("Please enter a valid email")
        } else {
          if (this.passwordConfirmation !== this.password) {
            alert('The two passwords aren\'t the same ')
          } else {
            router.push('/');
            alert('Registration done !')
          }
        }

      } else {
        alert("Please fill all fields")
      }
    }
  }
}
</script>
