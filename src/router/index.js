import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/Index';
import Post from '@/components/Post';
import List from '@/components/List';
import About from '@/components/About';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/post',
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
});
