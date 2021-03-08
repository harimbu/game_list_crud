import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fireUser: null
  },
  mutations: {
    setUser (state, user) {
      state.fireUser = user
    }
  },
  actions: {
  },
  modules: {
  }
})
