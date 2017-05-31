<template>
  <div class="index">
    <blog-main></blog-main>
  </div>
</template>

<script>
  import panel from '../components/SideBar.vue'
  import post from '../components/Post.vue'
  import postSummary from '../components/PostSummary.vue'
  import foot from '../components/Footer.vue'
  import blogMain from '../components/BlogMain.vue'
  import { mapGetters } from 'vuex'

  const fetchItems = async (store, config = {page: 1}) => {
    let {page} = config
    return store.dispatch('FETCH_ITEMS', {page})
  }

  export default {
    name: 'index',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        posts: [1, 2, 3, 4, 5, 6, 7, 8],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    },
    components: {
      panel,
      post,
      foot,
      postSummary,
      blogMain,
    },
    mounted() {
//      console.log(this)
      fetchItems(this.$store, {page: 1})
    },
    computed: {
      ...mapGetters({
        item: 'GET_ITEMS',
      })
    },
    methods: {
      send(){
        console.log(marked(this.content))
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  };
</script>
