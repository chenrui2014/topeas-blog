<template>
    <div class="panel">


        <router-link to="/">
            <img src="../assets/avator.jpg" class="avatar"></img>
        </router-link>
        <h1>ToPeas的博客</h1>
        <h3>{{msg}}</h3>
        <ul class="option">
            <li>
                <router-link to="/">首页</router-link>
            </li>
            <li>
                <router-link to="/lists">归档</router-link>
            </li>
            <li>
                <router-link to="/tags">标签</router-link>
            </li>
            <li>
                <router-link to="/about">关于</router-link>
            </li>
        </ul>

        <ul class="contact">
            <li>
                <router-link to="/post" target="_blank">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-social-facebook"></use>
                    </svg>
                </router-link>
            </li>
            <li>
                <router-link to="/post" target="_blank">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-social-github"></use>
                    </svg>
                </router-link>
            </li>
            <li>
                <router-link to="/post" target="_blank">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-social-qq"></use>
                    </svg>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

  import { marked } from '../utils/marked'
  import '../assets/font/iconfont'
  export default {
    name: 'panel',
    data() {
      return {
        msg: '一个没有牌面的前端小老弟',
      };
    },
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

    .panel {
        height: 100%;
        width: 360px;
        background: #12b0e6 url("../assets/bizhi.jpg") no-repeat fixed;
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
        h1 {
            margin: 24px auto;
        }
        h3 {
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
