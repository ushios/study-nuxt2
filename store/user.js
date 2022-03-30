export const state = () => ({
  user: {},
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
}

export const actions = {
  setUserData({ commit }) {
    const obj = {
      name: 'Ushio Shugo',
    }

    commit('setUser', obj)
    console.log('set user')
  },
}

export const getters = {
  getUserData(state) {
    return {
      name: state.user.name,
    }
  },
}
