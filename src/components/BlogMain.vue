<template>
    <main>
        <div class="posts">
            <postSummary v-for="post in posts"></postSummary>
        </div>
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
  //  import foot from './Footer.vue'
  export default{
    name: 'blogMain',
    data(){
      return {
        posts: [1, 2, 3, 4, 5, 6, 7, 8],
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
        padding-left: 400px;
        padding-top: 30px;
        padding-bottom: 80px;
    }

</style>