import Vue from 'vue'
import Vuex from 'vuex'
import actions from '@/vuex/actions.js'
import getters from '@/vuex/getters.js'
import mutations from '@/vuex/mutations.js'
import state from '@/vuex/state.js'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state
})