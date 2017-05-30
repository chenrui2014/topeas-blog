<template>
  <main>
    <postSummary v-for="post in posts" :key="post" :post="post"></postSummary>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400" class="pagination">
    </el-pagination>
  </main>
</template>

<script>
  import post from './Post.vue'
  import postSummary from './PostSummary.vue'
  import { mapGetters } from 'vuex'
  //  import foot from './Footer.vue'
  export default{
    name: 'blogMain',
    data(){
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }

    },
    components: {
      post,
      postSummary,
    },
    computed: {
      ...mapGetters({
        posts: 'GET_ITEMS'
      })
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }

  }


</script>


<style lang="less" scoped>
  main {
    max-width: 1040px;
    margin-left: 310px;
    padding-bottom: 45px;
  }

</style>
