<template>
  <section class="category">
    <h1>所有的分类都在这里了</h1>
    <ul class="category-items">
      <li v-for="item in category">
        <router-link :to="{ name: 'post', params: { id: item._id }}">
          {{item.title}}
        </router-link>
      </li>
    </ul>
  </section>
</template>
<script>
  import { mapGetters } from 'vuex'
  import '../style/categories.less'

  const fetchItem = async (store, id) => {
    return await store.dispatch('FETCH_CATEGORY', { id })
  }

  export default {
    name: 'category',
    data(){
      return {}
    },
    created(){
      const id = this.$store.state.route.params.id
      fetchItem(this.$store, id)
    },
    computed: {
      ...mapGetters({
        category: 'GET_CATEGORY'
      })
    }

  }
</script>
