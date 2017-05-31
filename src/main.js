// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import progressBar from './components/Progress.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import { sync } from 'vuex-router-sync'
import store from './store'
import * as filters from  './filter/filter'

import './style/main.less'
Vue.use(ElementUI)

const bar = Vue.prototype.$bar = new Vue(progressBar).$mount()

document.body.appendChild(bar.$el)

sync(store, router)

Vue.config.productionTip = false

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App},
})
