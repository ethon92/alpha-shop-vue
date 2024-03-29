import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shippingFee: '',
    stepInfos: [],
    isShippingForm: false,
    isPaymentForm: false,
    darkMode: false,
  },
  getters: {
  },
  mutations: {
    setShippingFee(state, payload) {
      state.shippingFee = payload
    },
    setStepInfos(state, payload) {
      state.stepInfos = payload
    },
    setIsShippingForm(state, status) {
      state.isShippingForm = status
    },
    setIsPaymentForm(state, status) {
      state.isPaymentForm = status
    },
    setDarkMode(state, status) {
      state.darkMode = status
    }
  },
  actions: {
  },
  modules: {
  }
})
