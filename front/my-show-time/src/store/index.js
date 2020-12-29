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
    }
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
  }
  //  CONCERTS


  }



});