import{_ as s,r as d,o as l,c as a,a as e,e as r,b as i,d as t}from"./app.90217f76.js";const c={},v=e("h1",{id:"redis\u5355\u673A\u7248\u5B89\u88C5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#redis\u5355\u673A\u7248\u5B89\u88C5","aria-hidden":"true"},"#"),i(" redis\u5355\u673A\u7248\u5B89\u88C5")],-1),o={class:"custom-container tip"},u=e("p",{class:"custom-container-title"},"\u4E0B\u8F7D,\u4E00\u822C\u9009\u53D6\u7A33\u5B9A\u7248\u672C",-1),m={href:"http://www.redis.cn/download.html",target:"_blank",rel:"noopener noreferrer"},b=i("\u83B7\u53D6\u4E0B\u8F7D\u5730\u5740"),p=i(","),g=t(`<div class="custom-container tip"><p class="custom-container-title">windows \u5B89\u88C5</p><p>\u5168\u90E8\u76F4\u63A5\u4E0B\u4E00\u6B65\u5B89\u88C5\u5373\u53EF</p></div><div class="custom-container tip"><p class="custom-container-title">linux \u5B89\u88C5</p></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tar -zxvf redis*.tar.gz
cd  .redis/src/
make 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u542F\u52A8</p></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>src/redis.server  [ redis.conf ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u914D\u7F6E</p><p>redis.conf\u914D\u7F6E\u6587\u4EF6\u4E3A\u6BCF\u4E2A\u914D\u7F6E\u90FD\u6DFB\u52A0\u4E86\u8BF4\u660E \u53EA\u9700\u8981\u8BA4\u5F97\u5355\u8BCD \u57FA\u672C\u4E0A\u80FD\u731C\u51FA\u5927\u81F4\u610F\u601D</p></div><p>1.\u914D\u7F6E\u5BB9\u91CF\u5927\u5C0F\u89C4\u5219 \u5355\u4F4D\u4E0D\u533A\u5206\u5927\u5C0F\u5199</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
# 1k =&gt; 1000 bytes
# 1kb =&gt; 1024 bytes
# 1m =&gt; 1000000 bytes
# 1mb =&gt; 1024*1024 bytes
# 1g =&gt; 1000000000 bytes
# 1gb =&gt; 1024*1024*1024 bytes

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u5E38\u7528\u914D\u7F6E\u8BF4\u660E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u540E\u53F0\u542F\u52A8
daemonize yes

# \u5F53\u8FD0\u884C\u591A\u4E2Aredis\u670D\u52A1\u65F6\uFF0C\u9700\u8981\u6307\u5B9A\u4E0D\u540C\u7684pid\u6587\u4EF6\u548C\u7AEF\u53E3
pidfile /var/run/redis.pid

# \u6307\u5B9Aredis\u8FD0\u884C\u7684\u7AEF\u53E3\uFF0C\u9ED8\u8BA4\u662F6379
port 16379

# \u6307\u5B9Aredis\u53EA\u63A5\u6536\u6765\u81EA\u4E8E\u8BE5IP\u5730\u5740\u7684\u8BF7\u6C42\uFF0C\u5982\u679C\u4E0D\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u90A3\u4E48\u5C06\u5904\u7406\u6240\u6709\u8BF7\u6C42\uFF0C
# \u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u6700\u597D\u8BBE\u7F6E\u8BE5\u9879
bind 127.0.0.1

# \u8BBE\u7F6E\u5BA2\u6237\u7AEF\u8FDE\u63A5\u65F6\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002\u5F53\u5BA2\u6237\u7AEF\u5728\u8FD9\u6BB5\u65F6\u95F4\u5185\u6CA1\u6709\u53D1\u51FA\u4EFB\u4F55\u6307\u4EE4\uFF0C\u90A3\u4E48\u5173\u95ED\u8BE5\u8FDE\u63A5
# 0\u662F\u5173\u95ED\u6B64\u8BBE\u7F6E
timeout 0

# \u6307\u5B9A\u65E5\u5FD7\u8BB0\u5F55\u7EA7\u522B
# Redis\u603B\u5171\u652F\u6301\u56DB\u4E2A\u7EA7\u522B\uFF1Adebug\u3001verbose\u3001notice\u3001warning\uFF0C\u9ED8\u8BA4\u4E3Averbose
# debug \u8BB0\u5F55\u5F88\u591A\u4FE1\u606F\uFF0C\u7528\u4E8E\u5F00\u53D1\u548C\u6D4B\u8BD5
# varbose \u6709\u7528\u7684\u4FE1\u606F\uFF0C\u4E0D\u50CFdebug\u4F1A\u8BB0\u5F55\u90A3\u4E48\u591A
# notice \u666E\u901A\u7684verbose\uFF0C\u5E38\u7528\u4E8E\u751F\u4EA7\u73AF\u5883
# warning \u53EA\u6709\u975E\u5E38\u91CD\u8981\u6216\u8005\u4E25\u91CD\u7684\u4FE1\u606F\u4F1A\u8BB0\u5F55\u5230\u65E5\u5FD7
loglevel debug

# \u914D\u7F6Elog\u6587\u4EF6\u5730\u5740
# \u9ED8\u8BA4\u503C\u4E3Astdout\uFF0C\u6807\u51C6\u8F93\u51FA\uFF0C\u82E5\u540E\u53F0\u6A21\u5F0F\u4F1A\u8F93\u51FA\u5230/dev/null
#logfile stdout
logfile /var/log/redis/redis.log

# \u53EF\u7528\u6570\u636E\u5E93\u6570
# \u9ED8\u8BA4\u503C\u4E3A16\uFF0C\u9ED8\u8BA4\u6570\u636E\u5E93\u4E3A0\uFF0C\u6570\u636E\u5E93\u8303\u56F4\u57280-\uFF08database-1\uFF09\u4E4B\u95F4
databases 16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function _(x,h){const n=d("ExternalLinkIcon");return l(),a("div",null,[v,e("div",o,[u,e("p",null,[e("a",m,[b,r(n)]),p])]),g])}var k=s(c,[["render",_],["__file","redis.install.html.vue"]]);export{k as default};
