import{_ as s,o as n,c as a,d as e}from"./app.90217f76.js";const i={},l=e(`<h1 id="\u7B80\u5355\u5199\u4E2Aphp-fpm\u91CD\u542F\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u5199\u4E2Aphp-fpm\u91CD\u542F\u811A\u672C" aria-hidden="true">#</a> \u7B80\u5355\u5199\u4E2Aphp-fpm\u91CD\u542F\u811A\u672C</h1><div class="custom-container danger"><p class="custom-container-title">\u811A\u672C\u7EC3\u4E60</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>

<span class="token comment"># 1.\u83B7\u53D6\u7B2C\u4E00\u884C\u7B2C\u4E8C\u5217\u7684\u503C \u4E5F\u5C31\u662F\u8FD0\u884Cpid </span>
<span class="token comment"># \u5E76\u5C06\u8F93\u51FA\u7684\u7ED3\u679C\u4EA4\u7ED9masterPid</span>
<span class="token comment"># \u6CE8\u610Fshell\u4E2D,\u7B49\u53F7\u4E24\u8FB9\u4E0D\u80FD\u6709\u7A7A\u683C</span>

<span class="token assign-left variable">masterPid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> -aux<span class="token operator">|</span><span class="token function">grep</span> php-fpm<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;NR=1&#39;</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
<span class="token comment"># 2.\u6574\u5408\u65B0\u7684\u547D\u4EE4</span>

<span class="token comment"># -USR2 \u5E73\u6ED1\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">kill</span> -USR2  <span class="token variable">$masterPid</span>

<span class="token comment"># \u67E5\u8BE2\u4E0A\u6B21\u6267\u884C\u7ED3\u679C</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[l];function t(p,r){return n(),a("div",null,c)}var d=s(i,[["render",t],["__file","restart.fpm.html.vue"]]);export{d as default};
