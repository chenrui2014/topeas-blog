<template>
    <div class="post-summary">
        <div class="meta">
            <div class="create-date">{{date}}</div>
        </div>
        <h1 class="title">
            <router-link to="/post">{{title}}</router-link>
            <el-tag type="gray">标签二</el-tag>
            <el-tag type="gray">标签二</el-tag>
            <el-tag type="gray">标签二</el-tag>
            <el-tag type="gray">标签二</el-tag>
        </h1>
        <div class="entry-content" v-html="content">
        </div>
        <router-link to="/post">查看更多>></router-link>
    </div>
</template>

<script>
  import content from '../mock/db'

  export default {
    name: 'postSummary',
    data(){
      return {
        date: '2017-05-28',
        title: "我是标题阿萨德撒打算打算打算的",
        content: content.summary,
      }
    }
  };
</script>

<style lang="less">
    @import "../style/highlight-theme.css";
    @import "../style/markdown.css";

    .post-summary {
        position: relative;
        margin-bottom: 30px;
        padding-bottom: 20px;
        border-bottom: 1px dotted #5c6370;

    }

    .entry-content {
        margin-top: 14px;
    }

    .create-date {
        position: absolute;
        top: 0;
        right: 24px;
    }

    h1 {
        vertical-align: middle;
    }

    .categories {
        font-size: 14px;
        padding: 8px 14px;
    }

</style>
