<template>
  <div id="app">
    <siderBar></siderBar>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
  import siderBar from './components/SiderBar.vue'
  import foot from './components/Footer.vue'
  export default {
    name: 'app',
    components: {
      siderBar,
      foot,
    }
  };
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  a {
    text-decoration: none;
    color: #5c6370;

  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    overflow-x: hidden;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0;
  }

  li {
    list-style: none;
  }

  ul {
    padding: 0;
  }

  img {
    width: 100%;
    height: auto;
    max-width: 100% !important;
  }


</style>
