import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import authority from './modules/authority'
import commonData from './modules/commonData'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    authority,
    commonData,
  },
  getters
})

export default store
