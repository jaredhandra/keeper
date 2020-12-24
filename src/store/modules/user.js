const state = () => ({
  authState: false,
  userInfo: {}
})

const getters = {
  getAuthState: (state) => {
    return state.authState
  },
  getUserInfo: (state) => {
    return state.user
  }
}

const actions = {
  setAuthState: ({ commit }, authState) => commit('setAuthState', authState),
  setUserInfo: ({ commit }, userInfo) => commit('setUserInfo', userInfo)
}

const mutations = {
  setAuthState (state, payload) {
    state.authState = payload
  },
  setUserInfo (state, payload) {
    state.userInfo = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
