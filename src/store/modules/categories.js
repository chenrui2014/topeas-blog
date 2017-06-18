/**
 * Created by topeas on 2017/6/18.
 */

import api from '../../api/axios'

const state = {
  categories: [],
  posts_intro: [],

}

const actions = {
  async ['FETCH_CATEGORIES']({ commit, state }, payload){
    const categories = await api.get('/categories').then(res => res.data)
    commit('SET_CATEGORIES', { categories })
  },
  async ['FETCH_CATEGORY']({ commit }, payload){
    console.log('', payload)
    const category = await api.get(`/category/${payload.id}`).then(res => res.data)
    commit('SET_CATEGORY', { category })
  }
}

const mutations = {
  ['SET_CATEGORIES'](state, payload){
    let { categories } = payload
    state.categories = categories
  },
  ['SET_CATEGORY'](state, payload){
    let { category } = payload
    state.posts_intro = category
  },
}

const getters = {
  ['GET_CATEGORIES'](state){
    return state.categories
  },
  ['GET_CATEGORY'](state){
    return state.posts_intro
  },

}

export default {
  actions,
  getters,
  mutations,
  state
}
