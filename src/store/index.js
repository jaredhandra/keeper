import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user.js'
import superAdmin from './modules/superAdmin.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    superAdmin
  }
})
