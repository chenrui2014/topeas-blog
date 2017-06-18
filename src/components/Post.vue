<template>

  <section class="post">
    <div v-if="post">
      <div class="post-meta">
        <h1 class="title">{{post.title}}</h1>
      </div>
      <article v-if="post" class="entry-content" v-html="post.content"></article>
      <div class="summary">
        本文发表于
        <span class="create-time">{{post.createTime | date }}</span>
        更新于
        <span class="update-time">{{post.updateTime | date}}</span>
        添加到『
        <span class="category">{{ post.category && post.category.categoryName }}</span>
        』下
      </div>
    </div>
    <div v-else>文章还没有加载完</div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import '../style/markdown.less'

  const fetchItem = async (store, { id }) => {
//    console.log('---', id)
    return await store.dispatch('FETCH_ITEM', { id })
  }

  export default {
    name: 'post',
    data() {
      return {
        title: 'vue2服务端渲染：按需分块加载的首屏优化策略',
        date: '2017-05-14',
        category: '前端开发',
        tag: [1, 2, 23, 33, 3, 3,]
      }
    },
    components: {},
    created(){
      const id = this.$store.state.route.params.id
      fetchItem(this.$store, { id })
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
