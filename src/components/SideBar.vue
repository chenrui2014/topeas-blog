<template>
  <div class="sideBar">
    <router-link to="/">
      <img src="../assets/imgs/avator.jpg" class="avatar">
    </router-link>
    <h2>ToPeas的博客</h2>
    <h4>一个没有牌面的前端</h4>
    <ul class="option">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/lists">归档</router-link>
      </li>
      <li>
        <router-link to="/categories">分类</router-link>
      </li>
      <li>
        <router-link to="/about">关于</router-link>
      </li>
    </ul>

    <ul class="contact">
      <!--<li>-->
      <!--<a href="https://www.github.com/topeas" target="_blank">-->
      <!--<svg class="icon" aria-hidden="true">-->
      <!--<use xlink:href="#icon-social-facebook"></use>-->
      <!--</svg>-->
      <!--</a>-->
      <!--</li>-->
      <li>
        <a href="https://www.github.com/topeas" target="_blank">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-social-github"></use>
          </svg>
        </a>
      </li>
      <!--<li>-->
      <!--<a href="https://www.github.com/topeas" target="_blank">-->
      <!--<svg class="icon" aria-hidden="true">-->
      <!--<use xlink:href="#icon-social-qq"></use>-->
      <!--</svg>-->
      <!--</a>-->
      <!--</li>-->
    </ul>
  </div>
</template>

<script>

  import { marked } from '../utils/marked'
  import '../assets/font/iconfont'
  export default {
    name: 'sideBar',
    computed: {
      md(){
        return marked(this.content)
      }
    },
    methods: {
      send(){
        console.log(marked(this.content))
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .sideBar {
    height: 100%;
    width: 280px;
    background: #12b0e6 url("../assets/imgs/bizhi.jpg") no-repeat fixed;
    left: 0;
    background-size: cover;
    top: 0;
    padding: 10% 30px;
    position: fixed;
    text-align: center;
    color: #ffffff;
    z-index: 1;
    a {
      display: block;
      margin: 0 auto;
      .avatar {
        height: 120px;
        width: 120px;
        border-radius: 50%;
      }
    }
    h2 {
      margin: 24px auto;
    }
    h4 {
      margin: 20px auto;
    }
    .option {
      li {
        margin: 15px 0;

      }
    }
    .contact {
      display: flex;
      justify-content: center;
      svg {
        height: 42px;
        width: 42px;
        margin: 0 16px;
      }
    }
  }
</style>
