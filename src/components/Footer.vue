<template>
  <div class="footer">
    <p @click="start">© 2017 -  ToPeas
    </p>
    <p @click="end">Powered by Vue2
    </p>
  </div>
</template>

<script>
  import api from '../api/axios'
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
