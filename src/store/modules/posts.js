/**
 * Created by Martox on 2017/5/28.
 */

import api from '../../api/axios'

const state = {
  post: {},
  lists: {}
}

const actions = {
  async ['FETCH_ITEMS']({commit, state}, payload){
    const {page} = payload
    const blogs = await api.get('/topics', {page,}).then(res => res.data)
    commit('SET_ITEMS', {blogs, page})
  },
  async ['FETCH_ITEM']({commit, state}, payload){
    const {id} = payload
    const post = await api.get(`/topic/${id}`).then(res => res.data)
    commit('SET_ITEM', {post})
  },
}

const mutations = {
  ['SET_ITEMS'](state, payload){
    let {page, blogs} = payload
    if (page === 1) {
      state.lists = blogs
    } else {
      state.lists.concat(blogs)
    }
  },
  ['SET_ITEM'](state, payload){
    const {post} = payload
    state.post = post
  },
}

const getters = {
  ['GET_ITEMS'](state){
    return state.lists
  },
  ['GET_ITEM'](state){
    return state.post
  }

}

export default {
  actions,
  getters,
  mutations,
  state
}
