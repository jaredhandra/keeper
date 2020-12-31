import { fetchFacilities, createNewFacility } from '../../api/facilities'

const state = () => ({
  facilities: [],
  users: []
})

const getters = {
  getFacilities: (state) => {
    return state.facilities
  },
  getUsers: (state) => {
    return state.users
  }
}

const actions = {
  fetchFacilities ({ commit }) {
    fetchFacilities().then((value) => {
      commit('SET_FACILITIES', value.data.listFacilitys.items)
    })
  },
  addFacility ({ commit }, payload) {
    commit('ADD_FACILITY', payload)
    createNewFacility(payload.name, payload.location)
  }
}

const mutations = {
  SET_FACILITIES (state, payload) {
    state.facilities = payload
  },
  ADD_FACILITY (state, payload) {
    state.facilities.push(payload)
  },
  SET_USERS (state, payload) {
    state.users = payload
  },
  ADD_USER (state, payload) {
    state.users.push(payload)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
