/**
 * Created by Martox on 2017/5/28.
 */


const state = {
  list: 'asd'
}

const actions = {
  async ['getActions']({ commit, state }, payload){
    const { id } = payload
    commit('getMutations', id)
  }
}

const mutations = {
  ['getMutations'](state, payload){
    state.list = payload
  }
}

const getters = {
  ['getGetters'](state){
    return state.list
  }

}


export default {
  actions,
  getters,
  mutations,
  state

}