<template>
    <div class="footer">
        <p>© 2017 -  ToPeas
            <el-button type="info" @click.native="start">开始</el-button>
        </p>
        <p>Powered by Vue2
            <el-button type="info" @click.native=" finish">结束</el-button>
        </p>
    </div>
</template>

<script>
  export default {
    name: 'footer',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        posts: [1, 2]
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
      },
      start(){
        this.$bar.start()
      },
      end(){
        this.$bar.finish()
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
    .footer {
        text-align: center;
        position: fixed;
        height: 60px;
        width: 100%;
        bottom: 0;
        left: 0;
        padding-left: 400px;
        background-color: #12b0e6;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>

