import{_ as n,o as s,c as a,d as t}from"./app.90217f76.js";const e={},p=t(`<h1 id="\u6570\u7EC4\u51FD\u6570\u6C42\u548C" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u51FD\u6570\u6C42\u548C" aria-hidden="true">#</a> \u6570\u7EC4\u51FD\u6570\u6C42\u548C</h1><blockquote><p>\u4E00\u7EF4\u6570\u7EC4</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$a</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 
<span class="token comment"># \u503C\u5F97\u6CE8\u610F\u7684\u662F</span>
<span class="token comment"># $a=array(0=&gt;5,1=&gt;&quot;15s&quot;,2=&gt;25); \u7ED3\u679C\u4E00\u6837</span>
<span class="token keyword">echo</span> <span class="token function">array_sum</span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//45</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4E8C\u7EF4\u6570\u7EC4\u6839\u636E\u5B57\u6BB5\u6C42\u548C</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token variable">$arr</span><span class="token operator">=</span><span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;feb&#39;</span><span class="token operator">=&gt;</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;dec&#39;</span><span class="token operator">=&gt;</span><span class="token number">5</span><span class="token punctuation">,</span>total<span class="token operator">=&gt;</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;feb&#39;</span><span class="token operator">=&gt;</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;dec&#39;</span><span class="token operator">=&gt;</span><span class="token number">10</span><span class="token punctuation">,</span>total<span class="token operator">=&gt;</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">$feb_total</span><span class="token operator">=</span> <span class="token function">array_sum</span><span class="token punctuation">(</span><span class="token function">array_column</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;feb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(l,i){return s(),a("div",null,o)}var r=n(e,[["render",c],["__file","array.sum.html.vue"]]);export{r as default};