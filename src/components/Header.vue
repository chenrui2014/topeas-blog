<template>
  <header class="header">
    <div class="container">
      <h1>
        <router-link to="/"><img src="../assets/logo.png" width="50px" height="50px"></router-link>
      </h1>
      <div class="nav">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                 @select="handleSelect">
          <el-menu-item index="1" class="nav-item">处理中心</el-menu-item>
          <el-menu-item index="2" class="nav-item">处理中心</el-menu-item>
          <el-menu-item index="3" class="nav-item"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
        <div class="line"></div>
      </div>
    </div>
  </header>
</template>


<script>
  export default {
    name: 'navHeader',
    data(){
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="less" scoped="">
  .header {
    width: 100%;
    height: 80px;
    line-height: 80px;
    background-color: #24292e;
  }

  h1 {
    margin: 0;
    float: left;
    line-height: 80px;
    font-size: 32px;
  }

  .nav {
    float: right;
  }

  .el-menu {
    background-color: #24292e;
    .el-menu-item {
      height: 80px;
      font-size: 20px;
      line-height: 80px;
    }
  }

  @media screen and (min-width: 768px) {
    .container {
      margin: 0 auto;
      width: 1140px;
    }

  }


</style>
