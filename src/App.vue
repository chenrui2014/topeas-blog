<template>
    <div id="app">
        <panel></panel>
        <router-view></router-view>
        <foot></foot>
    </div>
</template>

<script>
  import panel from './components/Panel.vue'
  import foot from './components/Footer.vue'
  export default {
    name: 'app',
    components: {
      panel,
      foot,
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

    a {
        text-decoration: none;
        color: #5c6370;

    }

    *, *::after, *::before {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
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
</style>
