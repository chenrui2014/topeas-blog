/**
 * Created by Martox on 2017/5/28.
 */

import api from '../../api/axios'

const state = {
  post: {},
  lists: []
}

const actions = {
  async ['FETCH_ITEMS']({ commit, state }, payload){
    const page = payload.page || 1
    const limit = payload.limit || 15
    const type = payload.type || ''
    const posts = await api.get('/posts', {
      page, limit, type
    }).then(res => res.data)
    // console.log('-------',)
    // console.log('', posts)
    commit('SET_ITEMS', { posts, page })
  },
  async ['FETCH_ITEM']({ commit, state }, payload){
    const { id } = payload
    const post = await api.get(`/posts/${id}`).then(res => res.data)
    commit('SET_ITEM', { post })
  },
}

const mutations = {
  ['SET_ITEMS'](state, payload){
    let { page, posts } = payload
    // console.log('', page)
    if (page === 1) {
      state.lists = posts.lists
    } else {
      // console.log('', posts.lists)
      state.lists.concat(posts.lists)
    }
  },
  ['SET_ITEM'](state, payload){
    const { post } = payload
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
