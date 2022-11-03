import{_ as s,o as e,c as n,d as i}from"./app.90217f76.js";const a={},c=i(`<h1 id="redis-\u96C6\u7FA4\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#redis-\u96C6\u7FA4\u642D\u5EFA" aria-hidden="true">#</a> Redis \u96C6\u7FA4\u642D\u5EFA</h1><div class="custom-container tip"><p class="custom-container-title">\u7B2C\u4E00\u6B65</p><p>\u5355\u4E2A\u521B\u5EFA\u96C6\u7FA4 \u4EE57000~7007 \u4E3A\u4F8B \u642D\u5EFA\u4E00\u4E3B\u4E00\u91CD \u75592\u53F0\u505A\u6269\u5BB9 \u81F3\u5C116\u53F0redis \u521B\u5EFAredis \u914D\u7F6E\u6587\u4EF6\u540D\u79F0</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /muti/7000  /muti/7001 /muti/7002  /muti/7003 /muti/7004 /muti/7005  /muti/7006 /muti/7007
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u7B2C\u4E8C\u6B65</p><p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> redis.conf  /muti/7000/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u7B2C\u4E09\u6B65 \u9700\u8981\u4FEE\u6539\u7684\u9879</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6211\u53EA\u6709\u4E00\u53F0\u670D\u52A1\u5668\u6240\u4EE5\u90FD\u914D\u7F6E\u6210\u8FD9 \u5982\u679C\u662F\u4E0D\u540C\u670D\u52A1\u5668\u9700\u8981\u7528\u5177\u4F53\u7684ip</span>
<span class="token builtin class-name">bind</span> <span class="token number">127.0</span>.0.1 
port <span class="token number">7000</span> 
<span class="token comment"># \u540E\u53F0\u8FD0\u884C</span>
daemonize <span class="token function">yes</span> 
<span class="token comment"># \u4E00\u53F0\u7535\u8111\u542F\u52A88\u4E2A\u670D\u52A1 \u5982\u679C\u4E0D\u8BE5\u7684\u8BDD \u5C31\u4F1A\u51FA\u9519</span>
pidfile /var/run/redis_7000.pid 
 <span class="token comment"># redis\u4EA7\u751F\u7684\u6587\u4EF6\u5B58\u653E\u4F4D\u7F6E</span>
<span class="token function">dir</span> /muti/7000
<span class="token comment"># \u662F\u5426\u4E00\u96C6\u7FA4\u65B9\u5F0F\u8FD0\u884C</span>
cluster-enabled <span class="token function">yes</span> 
<span class="token comment">#Redis Cluster\u8BB0\u5F55\u7684\u542F\u52A8\u4FE1\u606F\u6587\u4EF6\uFF0C\u6587\u4EF6\u7531cluster\u81EA\u52A8\u751F\u6210\uFF0C\u4E0D\u9700\u8981\u7528\u6237\u7F16\u8F91</span>
cluster-config-file nodes-7000.conf 
<span class="token comment"># \u662F\u5426\u652F\u6301\u6301\u4E45\u5316 \u6309\u9700\u914D\u7F6E</span>
appendonly	<span class="token function">yes</span> 
<span class="token comment"># \u5982\u679C\u4F60\u5E0C\u671B\u5728\u96C6\u7FA4\u53D1\u751F\u6545\u969C\u65F6\u53EF\u7528\u7684\u90E8\u5206\u4F9D\u7136\u53EF\u4EE5\u63D0\u4F9B\u67E5\u8BE2\u670D\u52A1\uFF0C\u53EF\u4EE5\u5C06 cluster-require-full-coverage \u7684\u503C\u8BBE\u7F6E\u4E3A no</span>
cluster-require-full-coverage <span class="token function">yes</span>

<span class="token comment"># \u5F53\u8BBE\u7F6E\u4E3A yes \u540E master \u53D1\u751F\u6545\u969C\u65F6\u4E0D\u4F1A\u81EA\u52A8\u8FDB\u884C failover\uFF0C\u8FD9\u65F6\u4F60\u53EF\u4EE5\u8FDB\u884C\u624B\u52A8\u7684 failover \u64CD\u4F5C </span>
<span class="token comment"># \u6545\u969Cfailover\u8868\u73B0\u5728\u4E00\u4E2Amaster\u5206\u7247\u6545\u969C\u540E\uFF0Cslave \u63A5\u7BA1master\u7684\u8FC7\u7A0B</span>
cluster-replica-no-failover <span class="token function">yes</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u7B2C\u56DB\u6B65</p><p>\u8FC1\u79FB\u914D\u7F6E sed\u547D\u540D &#39;\u5339\u914D\u7C7B\u578B/\u9700\u8981\u66FF\u6362\u5B57\u7B26/\u66FF\u6362\u6210\u7684\u5B57\u7B26/\u5168\u90E8\u8FD8\u662F\u90E8\u5206&#39; inputfile &gt; outputfile</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;s/7000/7001/g&#39;</span>  /muti/7000/redis.conf <span class="token operator">&gt;</span>  /muti/7001/redis.conf
<span class="token function">sed</span> <span class="token string">&#39;s/7000/7002/g&#39;</span>  /muti/7000/redis.conf <span class="token operator">&gt;</span>  /muti/7002/redis.conf
<span class="token function">sed</span> <span class="token string">&#39;s/7000/7003/g&#39;</span>  /muti/7000/redis.conf <span class="token operator">&gt;</span>  /muti/7003/redis.conf
<span class="token function">sed</span> <span class="token string">&#39;s/7000/7004/g&#39;</span>  /muti/7000/redis.conf <span class="token operator">&gt;</span>  /muti/7004/redis.conf
<span class="token function">sed</span> <span class="token string">&#39;s/7000/7005/g&#39;</span>  /muti/7000/redis.conf <span class="token operator">&gt;</span>  /muti/7005/redis.conf
<span class="token function">sed</span> <span class="token string">&#39;s/7000/7006/g&#39;</span>  /muti/7000/redis.conf <span class="token operator">&gt;</span>  /muti/7006/redis.conf
<span class="token function">sed</span> <span class="token string">&#39;s/7000/7007/g&#39;</span>  /muti/7000/redis.conf <span class="token operator">&gt;</span>  /muti/7007/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u7B2C\u4E94\u6B65</p><p>\u542F\u52A8redis</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>redis-server /muti/7000/redis.conf
redis-server /muti/7001/redis.conf
redis-server /muti/7002/redis.conf
redis-server /muti/7003/redis.conf
redis-server /muti/7004/redis.conf
redis-server /muti/7005/redis.conf
redis-server /muti/7006/redis.conf
redis-server /muti/7007/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u7B2C\u516D\u6B65</p><p>\u67E5\u770B\u670D\u52A1</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u7B2C\u4E03\u6B65</p><p>\u591A\u4E2Aredis\u642D\u5EFA\u6210\u578B</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    redis-cli --cluster <span class="token builtin class-name">help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u7B2C\u516B\u6B65</p><p>\u5B89\u88C5\u5E2E\u52A9\u4FE1\u606F\u6267\u884C create</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#--cluster-replicas \u4E00\u4E3B\u591A\u5C11\u4ECE 1\u4EE3\u88681\u4ECE 2\u4EE3\u88682\u4ECE</span>
redis-cli --cluster create host1:port1 <span class="token punctuation">..</span>. hostN:portN  --cluster-replicas <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u7B2C\u4E5D\u6B65</p><p>redis \u6269\u5BB9 \u6269\u5BB9\u6267\u884Cadd-node \u64CD\u4F5C \u540C\u6837\u53EF\u4EE5\u67E5\u770B redis-cli --cluster help</p></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> add-node       new_host:new_port existing_host:existing_port
                 --cluster-slave # \u9ED8\u8BA4master
                 --cluster-master-id &lt;arg&gt; #\u5982\u679C\u914D\u7F6E\u4E86 --cluster-slave \u9700\u8981\u914D\u7F6E&lt;arg&gt;\u4EE3\u8868 cluster nodes \u4E2D\u7684 \u5177\u4F53\u7684master\u7684id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u7B2C\u5341\u6B65</p><p>\u6269\u5BB9\u6CE8\u610F\u4E8B\u9879\u6269\u5BB9\u540E\u9700\u8981\u6267\u884C \u5206\u914D\u69FD\u4F4D \u4E0D\u7136\u6269\u5BB9\u7684\u90E8\u5206\u8FD8\u662F\u4E0D\u80FD\u7528 \u76F8\u5F53\u4E8E\u6CA1\u6709\u6269\u5BB9</p></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-cli --cluster  reshard  host:port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,21),t=[c];function l(d,r){return e(),n("div",null,t)}var u=s(a,[["render",l],["__file","redis.cluster.build.html.vue"]]);export{u as default};
