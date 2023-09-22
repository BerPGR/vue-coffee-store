import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartAmount: 0
  },
  getters: {
    getCartAmount(state) {
      if (state.cartAmount > 0) {
        return state.cartAmount
      }
    }
  },
  mutations: {
    addCartAmount(state) {
      state.cartAmount += 1
    }
  },
  actions: {
  },
  modules: {
  }
})
