import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({

  state: {

  //  USERS
  users: [{}],
  logged: {
    log: localStorage.getItem('token') || null,
  },
  //  CONCERTS
  concerts: [{}],

  },
  actualConcert: [{}],

  getters: {

  //  USERS
  getUser: state => state.users,
  getLog: state => state.logged,
  //  CONCERTS
  allConcerts: state => state.concerts,
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

   async fetchConcerts({commit}) {
      console.log("API CONCERT");
      const response = await axios.get('http://127.0.0.1:3000/concerts');
      if (response.status === 200) {
        commit('stateConcerts', response.data);
      } else {
        alert("Something's gone wrong")
      }
    },

    async refreshUser({commit}) {
      console.log("REFRESH USER");
      console.log(localStorage.getItem('id'));
      const url = 'http://127.0.0.1:3000/users/' + localStorage.getItem('id');
      const response = await axios.get(url, {
        'authorization': localStorage.getItem('token')
      });

      console.log(response);
      commit('stateRefreshUser', response.data)
    },


  //  CONCERTS

    async bookConcert({ commit }, concert) {
      const url = 'http://127.0.0.1:3000/booking/' + concert._id;
      const body = {};
      console.log(url);
      const response = await axios.post(url, body, {
        headers: {
        'Authorization': localStorage.getItem('token')
        }
      } )
      if (response.status === 201) {
        commit("updateUser", concert)
      } else {
        alert("Something's gone wrong")
      }
    }

  },

  mutations: {

  //  USERS
  stateLogin(state, data) {
    console.log("MUTATION");
    console.log(data);
    state.users = data;
    // state.logged = true;
    localStorage.setItem('token', data.access_token);
    localStorage.setItem('id', data.id);
    localStorage.setItem('username', data.username);
    localStorage.setItem('email', data.email);
    alert(`You are now connected as ${data.username}`);
    router.push('/');
    window.location.reload();
  },

  stateLogout(state) {
    console.log(state);
    localStorage.clear();

  },

  async userCreated() {
    await router.push('/');
  },

  updateUser(state, concert) {
    alert("Concert booked !")
    state.users.booking += concert._id;
    router.push('/' + concert._id);
  },

    stateRefreshUser(state, user){
    state.users = user;
    },

  //  CONCERTS
  stateConcerts(state, data) {
    state.concerts = data;
  },


  }



});