import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Post from '@/components/Post'
import List from '@/components/List'
import About from '@/components/About'

Vue.use(Router)

const scrollBehavior = to => {
  const position = {}

}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/post/:id',
      name: 'post',
      component: Post,
    },

    {
      path: '/lists',
      name: 'list',
      component: List,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})
