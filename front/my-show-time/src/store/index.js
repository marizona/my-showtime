import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";
import router from "@/router";


Vue.use(Vuex);

export default new Vuex.Store({

  state: {

  //  USERS
  users: [{}],
  logged: false,
  //  CONCERTS

  },

  getters: {

  //  USERS
  getLog() {
    return this.logged();
  }
  //  CONCERTS


  },

  actions: {

  //  USERS
    async logUser({ commit }, user) {
      if (user.email === undefined && user.password === undefined) {
        return alert('Please fill all fields');
      }
      const response = await axios.post('http://127.0.0.1:3000/users/login', {
        'email': user.email,
        'password': user.password,
      })
      commit('stateLogin', response.data)
    },

    logOut({commit}) {
      commit("stateLogout")
    },

    async register({commit}, user) {
      if (user.username !== undefined && user.email !== undefined && user.password !== undefined && user.passwordConfirmation !== undefined) {
        const reg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        const pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/i;
        if(!reg.test(user.email)) {
          alert("Please enter a valid email")
        } else {
          if (!pass.test(user.password)) {
            alert("Your password must be at least 8 characters long, have at least 1 uppercase, 1 number and 1 special character")
          } else {

            if (user.passwordConfirmation !== user.password) {
              alert('The two passwords aren\'t the same ')
            } else {
              const response = await axios.post('http://localhost:3000/users', {
                'username': user.username,
                'password': user.password,
                'email': user.email,
              });
              if (response.status === 201) {
                alert("User created, please log in")
                commit('userCreated')
              } else {
                alert("Something's gone wrong...")
              }
            }
          }
        }
      } else {
        alert("Please fill all fields")
      }},




  //  CONCERTS
  },

  mutations: {

  //  USERS
  stateLogin(state, data) {
    console.log("MUTATION");
    console.log(data);
    state.users = data;
    localStorage.setItem('token', data.access_token);
    localStorage.setItem('id', data.id);
    localStorage.setItem('username', data.username);
    localStorage.setItem('email', data.email);
    state.logged = true;
    alert(`You are now connected as ${data.username}`);
    router.push('/');
  },

  stateLogout(state) {
    state.logged = false;
    localStorage.clear();
  },

  async userCreated() {
    await router.push('/');
  }

  //  CONCERTS


  }



});