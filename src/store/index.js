/**
 * Created by Martox on 2017/5/28.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import article from './modules/posts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    article,
  }
})
