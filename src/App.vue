<template>
  <div id="app">
    <nav-header></nav-header>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
  import NavHeader from './components/Header.vue'
  export default {
    name: 'app',
    components:{
      NavHeader,
    }
  };
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
  *,*::after,*::before{
    box-sizing: border-box;
  }
  html,body{
    margin: 0;
  }

</style>
