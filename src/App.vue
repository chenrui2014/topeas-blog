<template>
  <div id="app">
    <sideBar></sideBar>
    <router-view class="router-view"></router-view>
    <foot></foot>
  </div>
</template>

<script>
  import sideBar from './components/SideBar.vue'
  import foot from './components/Footer.vue'
  export default {
    name: 'app',
    components: {
      sideBar,
      foot,
    }
  };
</script>
