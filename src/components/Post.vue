<template>
    <div class="post">
        <div class="psot-meta"><h1 class="title">{{title}}</h1></div>
        <div class="entry-content" v-html="content"></div>
        <div class="summary">本文发表于{{date}}，添加到{{category}}下，并被添加了以下的标签</div>
    </div>
</template>

<script>
  import content from '../mock/db'
  import '../style/markdown.css'
  export default {
    name: 'post',
    data() {
      return {
        title: 'vue2服务端渲染：按需分块加载的首屏优化策略',
        content: content.content,
        date: '2017-05-14',
        category: '前端开发',
        tag: [1, 2, 23, 33, 3, 3,]
      }
    },
    components: {},
    computed: {
      md(){
        return marked(this.content)
      }
    },
    methods: {}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    @import "../style/highlight-theme.css";
    @import "../style/markdown.css";

    .post {
        padding-left: 400px;
        padding-bottom: 80px;
    }

    .summary {
        font-size: 18px;
        margin-top: 40px;
    }
</style>
