export default  {

  content: `<h4><a href='#brew的nginx-指令' id='brew的nginx-指令' class='anchor'></a><a href='#brew的nginx-指令'>brew的nginx 指令</a></h4><pre class="hljs"><code class="lang-bash"> brew info nginx 查看nginx的信息

 sudo brew services strart nginx  启动nginx

 nginx -t 查看nginx的配置

  sudo brew services restrart nginx
</code></pre>
<h4><a href='#nginx配置说明' id='nginx配置说明' class='anchor'></a><a href='#nginx配置说明'>nginx配置说明</a></h4><p> 从配置可以看出，Nginx监听了80端口、域名为localhost、根路径为html文件夹（上面安装路径为 /usr/local/nginx，所以绝对路径为/usr/local/nginx/html）、默认index文件为index.html、index.htm。</p>
<blockquote>
<p>=    使用精确匹配并且终止搜索</p>
<p>^~ 表示uri以某个常规字符串开头，理解为匹配url路径即可。它并非正则表达式匹配，目的是优于正则表达式匹配。这里匹配的是解码uri，例如uri中的“％20”将会匹配location的“ ”（空格）。</p>
<p>~    区分大小写的正则表达式匹配</p>
<p>~*    不区分大小写的正则表达式匹配</p>
</blockquote>
<h4><a href='#解决跨域' id='解决跨域' class='anchor'></a><a href='#解决跨域'>解决跨域</a></h4><pre class="hljs"><code><span class="hljs-attribute">add_header</span> <span class="hljs-string">'Access-Control-Allow-Origin'</span> <span class="hljs-string">'*'</span>;
<span class="hljs-attribute">add_header</span> <span class="hljs-string">'Access-Control-Allow-Credentials'</span> <span class="hljs-string">'true'</span>;
<span class="hljs-attribute">add_header</span> <span class="hljs-string">'Access-Control-Allow-Methods'</span> <span class="hljs-string">'GET,POST,HEAD'</span>;
</code></pre><h4><a href='#匹配的规则' id='匹配的规则' class='anchor'></a><a href='#匹配的规则'>匹配的规则</a></h4><ul>
<li>先匹配 = / </li>
<li>再匹配 /</li>
<li>再匹配 /about/，如果没有没有接下来的正则</li>
<li>类似上面/about/pei</li>
<li>匹配任何 ^~/image/ 匹配任何以这个开头的，停止往下搜索正则</li>
<li>~* .(gif|jpg|jpeg)$ 匹配以这些结尾的，但是上面那个匹配到的，到不了这个,因为 ^~ 到达不了这一条正则</li>
<li>/image/ 继续往下，会发现 ^~ 存在</li>
</ul>
`,
  summary:`<h4><a href='#brew的nginx-指令' id='brew的nginx-指令' class='anchor'></a><a href='#brew的nginx-指令'>brew的nginx 指令</a></h4><pre class="hljs"><code class="lang-bash"> brew info nginx 查看nginx的信息

 sudo brew services strart nginx  启动nginx

 nginx -t 查看nginx的配置

  sudo brew services restrart nginx
</code>`
}