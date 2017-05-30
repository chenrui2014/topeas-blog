<template>
  <div class="post">
    <div class="post-meta">
      <h1 class="title">{{post.title}}</h1>
    </div>
    <div class="entry-content" v-html="post.content"></div>
    <div class="summary">本文发表于{{post.create_at}}，添加到{{post.tab}}下</div>
  </div>
</template>

<script>
  import content from '../mock/db'
  import { mapGetters } from 'vuex'
  import '../style/markdown.css'

  const fetchItem = async (store, {id}) => {
    return await store.dispatch('FETCH_ITEM', {id})
  }

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
    created(){
      console.log(this.$store.state.route.params)
      const {id} = this.$store.state.route.params
      console.log(id)
      fetchItem(this.$store, {id})
    },
    computed: {
      ...mapGetters({
        post: 'GET_ITEM'
      })
    },
//    mounted(){
//      console.log(this.$store.state.route.params.id)
//    },
    methods: {}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
  @import "../style/highlight-theme.css";
  @import "../style/markdown.css";

  .post {
    margin-left: 310px;
    margin-top: 40px;
    padding-bottom: 80px;
    h1{
      font-size:36px;
    }
  }

  .summary {
    font-size: 18px;
    margin-top: 40px;
  }

  .entry-content {
    margin-top: 30px;
  }
</style>
