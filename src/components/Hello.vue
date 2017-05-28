<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="send">点击md</button>
    <MdEditor id='contentEditor' ref="contentEditor" v-model='content' :height="300" :zIndex='20'></MdEditor>
    <article class="post detail">
      <div class="entry-content" v-html="md"></div>
    </article>
  </div>
</template>

<script>
  import MdEditor from './Sticky.vue'
  import '../style/md.css'

  import { marked } from '../utils/marked'
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        content: ''
      };
    },
    components: {
      MdEditor,
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
<style  lang='less'>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  #toc {
    float: right;
    border: 1px solid #e2e2e2;
    font-size: 14px;
    margin: 0 0 15px 20px;
    max-width: 260px;
    min-width: 120px;
    padding: 6px;
    background-color: #fff;
  }

  #toc p {
    margin: 1px;
  }

  #toc ul {
    margin: 0 .5em 0 1.5em;
  }

  #toc strong {
    border-bottom: 1px solid #e2e2e2;
    display: block;
  }

  a.anchor {
    display: block;
    position: relative;
    visibility: hidden;
  }

  article img {
    height: auto;
    max-width: 910px;
  }

  article {
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #fff;
    padding: 30px 0;
    position: relative;
    word-wrap: break-word
  }

  article .meta {
    color: #555;
    float: right;
    font-size: .9em;
    line-height: 2;
    position: relative;
    text-align: right;
    width: auto
  }

  article .meta a {
    color: #999
  }

  article h1.title {
    font-size: 2em;
    font-weight: 300;
    line-height: 35px;
    margin-bottom: 25px
  }

  article h1.title,
  article h1.title a {
    color: #333
  }

  article .meta .date,
  article .meta .comment,
  article .meta .tags {
    position: relative
  }

  article h1.title a:hover {
    color: #2479CC;
    transition: color .3s
  }

  article button,
  article input.runcode {
    -webkit-appearance: button;
    background: #12b0e6;
    border: none;
    box-shadow: inset 0 -5px 20px rgba(0, 0, 0, .1);
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    line-height: 1;
    margin-top: 10px;
    padding: 0.625em .5em
  }

  article strong {
    font-weight: 700
  }

  article em {
    font-style: italic
  }

  article blockquote {
    background-color: #f8f8f8;
    border-left: 5px solid #2479CC;
    margin-top: 10px;
    margin-left: 0;
    padding: 15px 20px
  }

  article code {
    background-color: #f2f2f2;
    border-radius: 5px;
    font-family: "Consolas", "Courier New", Courier, mono, serif;
    font-size: 80%;
    margin: 0 2px;
    padding: 4px 5px;
    vertical-align: middle
  }

  article pre {
    color: #5d6a6a;
    font-family: "Consolas", "Liberation Mono", Courier, monospace;
    font-size: 14px;
    line-height: 1.6;
    overflow: hidden;
    padding: 0.6em;
    position: relative;
    white-space: pre-wrap;
    word-break: break-all;
    word-wrap: break-word
  }

  article img {
    border: 1px solid #ccc;
    display: block;
    margin: 10px 0 5px;
    max-width: 100%;
    padding: 0
  }

  article table {
    border: 0;
    border-collapse: collapse;
    border-spacing: 0
  }

  article blockquote p {
    margin-bottom: 0
  }

  article pre code {
    background-color: transparent;
    border-radius: 0 0 0 0;
    border: 0;
    display: block;
    font-size: 100%;
    margin: 0;
    padding: 0;
    position: relative
  }

  article table th,
  article table td {
    border: 0
  }

  article table th {
    border-bottom: 2px solid #848484;
    padding: 6px 20px;
    text-align: left
  }

  article table td {
    border-bottom: 1px solid #d0d0d0;
    padding: 6px 20px
  }

  article .expire-tips {
    background-color: #ffffc0;
    border: 1px solid #e2e2e2;
    border-left: 5px solid #fff000;
    color: #333;
    font-size: 15px;
    padding: 5px 10px
  }

  article .aliyun-tips {
    background-color: #f0f8f4;
    border: 1px solid #e2e2e2;
    border-left: 5px solid #7cc4a0;
    font-size: 15px;
    padding: 5px 10px
  }

  article .post-info {
    font-size: 14px
  }

  article .entry-content {
    font-size: 16px;
    line-height: 1.8;
    word-wrap: break-word
  }

  article .entry-content p,
  article .entry-content blockquote,
  article .entry-content ul,
  article .entry-content ol,
  article .entry-content dl,
  article .entry-content table,
  article .entry-content iframe,
  article .entry-content h1,
  article .entry-content h2,
  article .entry-content h3,
  article .entry-content h4,
  article .entry-content h5,
  article .entry-content h6,
  article .entry-content p,
  article .entry-content pre {
    margin-top: 15px
  }

  article pre b.name {
    color: #eee;
    font-size: 60px;
    line-height: 1;
    pointer-events: none;
    position: absolute;
    right: 10px;
    top: 10px
  }

  article .entry-content .date {
    color: #999;
    font-size: 14px;
    font-style: italic
  }

  article input.runcode:hover,
  article input.runcode:focus,
  article input.runcode:active {
    background: #f6ad08
  }

  article .entry-content ul ul,
  article .entry-content ul ol,
  article .entry-content ul dl,
  article .entry-content ol ul,
  article .entry-content ol ol,
  article .entry-content ol dl,
  article .entry-content dl ul,
  article .entry-content dl ol,
  article .entry-content dl dl,
  article .entry-content blockquote > p:first-of-type {
    margin-top: 0
  }

  article .entry-content ul,
  article .entry-content ol,
  article .entry-content dl {
    margin-left: 25px
  }

  article.tags section a {
    border: 1px solid rgba(36, 121, 204, .8);
    border-radius: 4px;
    color: rgba(36, 121, 204, .8);
    display: inline-block;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    margin: 0 15px 10px 0;
    padding: 0 15px;
    text-decoration: none;
    -webkit-transition: color .2s cubic-bezier(.4, .01, .165, .99), border .2s cubic-bezier(.4, .01, .165, .99);
    transition: color .2s cubic-bezier(.4, .01, .165, .99), border .2s cubic-bezier(.4, .01, .165, .99)
  }

  article.tags section a:hover {
    border-color: #2479CC;
    color: #2479CC
  }

  /*

Atom One Dark by Daniel Gamage
Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax

base:    #282c34
mono-1:  #abb2bf
mono-2:  #818896
mono-3:  #5c6370
hue-1:   #56b6c2
hue-2:   #61aeee
hue-3:   #c678dd
hue-4:   #98c379
hue-5:   #e06c75
hue-5-2: #be5046
hue-6:   #d19a66
hue-6-2: #e6c07b

*/

  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: #abb2bf;
    background: #282c34;
    /* modified by smallpath */
    border-left: 5px solid #61aeee;
  }

  .hljs-comment {
    color: #61aeee;
  }

  .hljs-quote {
    color: #5c6370;
    font-style: italic;
  }

  .hljs-doctag,
  .hljs-keyword,
  .hljs-formula {
    color: #c678dd;
  }

  .hljs-section,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-deletion,
  .hljs-subst {
    color: #e06c75;
  }

  .hljs-literal {
    color: #56b6c2;
  }

  .hljs-string,
  .hljs-regexp,
  .hljs-addition,
  .hljs-attribute,
  .hljs-meta-string {
    color: #98c379;
  }

  .hljs-built_in,
  .hljs-class .hljs-title {
    color: #e6c07b;
  }

  .hljs-attr,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-type,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-number {
    color: #d19a66;
  }

  .hljs-symbol,
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-selector-id,
  .hljs-title {
    color: #61aeee;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  .hljs-link {
    text-decoration: underline;
  }

</style>
