<template>
  <div class="post-summary">
    <div class="meta">
      <span class="create-date">{{post.create_at}}</span>
    </div>
    <h1 class="title">
      <router-link :to="'/post/' + post.id">{{post.title}}</router-link>
      <el-tag type="gray" v-for="tag in post.tab">{{tag}}</el-tag>
    </h1>
    <div class="entry-content" v-html="post.content">
    </div>
    <router-link :to="'/post/' + post.id">查看更多>></router-link>
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
        default: () => {},
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

<style lang="less">
  @import "../style/highlight-theme.css";
  @import "../style/markdown.css";

  .post-summary {
    position: relative;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px dotted #5c6370;

  }

  .entry-content {
    margin-top: 14px;
  }

  .meta {
    position: absolute;
    top: 12px;
    right: 24px;
  }

  h1 {
    vertical-align: middle;
  }

  .categories {
    font-size: 14px;
    padding: 8px 14px;
  }

</style>
