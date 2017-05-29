<template>
    <section>
        <h1>归档</h1>
        <div v-for="list in lists">
            <h3>2017年04月</h3>
            <ul>
                <li>
                    <router-link to="/">啊是的你好歹还哦等会</router-link>
                    <span>2017.25.25</span>
                </li>
                <li>
                    <router-link to="/">啊是的你好歹还哦等会</router-link>
                    <span>2017.25.25</span>
                </li>
                <li>
                    <router-link to="/">啊是的你好歹还哦等会</router-link>
                    <span>2017.25.25</span>
                </li>
                <li>
                    <router-link to="/">啊是的你好歹还哦等会</router-link>
                    <span>2017.25.25</span>
                </li>
                <li>
                    <router-link to="/">啊是的你好歹还哦等会</router-link>
                    <span>2017.25.25</span>
                </li>
                <li>
                    <router-link to="/">啊是的你好歹还哦等会</router-link>
                    <span>2017.25.25</span>
                </li>
            </ul>
        </div>
    </section>

</template>
<script>
  export default{
    name: 'list',
    data(){

      return {
        lists: [11, 1, 1, 1, 1, 1, 1,]
      }

    }


  }

</script>


<style lang="less" scoped>
    section {
        padding-left: 400px;

        h1 {
            font-size: 32px;
            margin: 45px auto;
        }
        li {
            margin-bottom: 8px;
            list-style: circle;
        }
        span {
            font-size: 12px;
            padding-left: 24px;
        }
    }

</style>
