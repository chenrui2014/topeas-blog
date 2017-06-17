<template>
  <div class="post-summary">
    <div class="meta">
      <span class="create-date">{{post.createTime | date}}</span>
    </div>
    <h1 class="title">
      <router-link :to="'/post/' + post._id">{{post.title}}</router-link>
    </h1>
    <article class="entry-content" v-html="post.content"></article>
    <router-link :to="'/post/' + post._id">查看更多>></router-link>
  </div>
</template>

<script>
  import content from '../mock/db'
  import api from '../api/axios'

  export default {
    name: 'postSummary',
    props: {
      post: {
        type: Object,
        default: () => {
        },
      }
    },
    data(){
      return {
        date: '2017-05-28',
        title: "我是标题阿萨德撒打算打算打算的",
        content: content.summary,
      }
    },
    mounted(){

    },

  };
</script>
