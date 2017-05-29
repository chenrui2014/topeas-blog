<template>
    <div class="index">
        <blog-main></blog-main>
    </div>
</template>

<script>
  import panel from '../components/Panel.vue'
  import post from '../components/Post.vue'
  import postSummary from '../components/PostSummary.vue'
  import foot from '../components/Footer.vue'
  import blogMain from '../components/BlogMain.vue'


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
    computed: {
      md(){
        return marked(this.content)
      }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
    /*.posts {*/
    /*padding-left: 400px;*/
    /*padding-bottom: 80px;*/
    /*}*/
    /*.pagination{*/
    /*padding-bottom: 80px;*/
    /*padding-left: 400px;*/
    /*}*/
</style>
