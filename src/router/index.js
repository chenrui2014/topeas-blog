import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Post from '@/components/Post'
import List from '@/components/List'
import About from '@/components/About'

Vue.use(Router)

// const scrollBehavior = to => {
//   const position = {}
//
// }

const scrollBehavior = (to, from, savedPosition) => {
  if (to.hash) {
    return {
      selector: to.hash
    }
  }
  if (savedPosition) {
    return savedPosition
  } else {
    return {x: 0, y: 0}
  }
}

function beforeRouterEnter (to, from) {

}

const router = new Router({
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
router.beforeEach(function (to, from, next) {
  scrollBehavior(...arguments)
  next()
})

export default router
