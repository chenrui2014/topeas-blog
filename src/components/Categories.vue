<template>
  <section class="categories">
    <h1>所有的分类都在这里了</h1>
    <div class="categories-items">
      <div class="items" v-for="category in tags">
        <router-link :to="'category/'+ category._id">
          {{category.categoryName}}
        </router-link>
      </div>
    </div>
  </section>
</template>
<script>
  import { mapGetters } from 'vuex'
  import '../style/categories.less'

  const fetchItem = async (store) => {
    return await store.dispatch('FETCH_CATEGORIES')
  }

  export default {
    name: 'categories',
    data(){
      return {}
    },
    created(){
      fetchItem(this.$store)
    },
    computed: {
      ...mapGetters({
        tags: 'GET_CATEGORIES'
      })
    }

  }
</script>
