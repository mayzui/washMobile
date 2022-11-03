import{_ as n,o as s,c as e,d as a}from"./app.90217f76.js";const i={},l=a(`<h1 id="dns\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#dns\u670D\u52A1" aria-hidden="true">#</a> dns\u670D\u52A1</h1><div class="custom-container tip"><p class="custom-container-title">\u4EC0\u4E48\u662Fdns</p></div><p>\u65E5\u5E38\u4E0A\u7F51\u6D4F\u89C8\u7F51\u9875\u7684\u672C\u8D28:\u5C31\u662F\u4ECE\u76EE\u6807\u670D\u52A1\u5668\u4E0A\u627E\u5230 \u4E00\u4E2Ahtml\u6587\u672C\u6587\u4EF6\u800C\u5DF2, \u6D4F\u89C8\u5668\u62FF\u5230\u8FD9\u8DDF\u6587\u672C\u6587\u4EF6 \u8FDB\u884C\u6E32\u67D3. \u9996\u5148\u7B2C\u4E00\u6B65\u5C31\u662F\u5C31\u662F\u5BF9\u7F51\u7AD9\u7684\u57DF\u540D\u8FDB\u884C\u89E3\u6790{www.baidu.com---123.206.16.61} \u7531\u4E8Eip\u5730\u5740\u4E0D\u597D\u8BB0,\u4F7F\u7528\u540D\u79F0\u4E5F\u5C31\u662F\u57DF\u540D\u4EE3\u66FF,\u6240\u4EE5\u5404\u5927\u4E92\u8054\u7F51\u4EA7\u751F\u4E86\u5B9A\u5236\u7684dns\u670D\u52A1\u5668 \u4E5F\u5C31\u662F\u4E00\u4E2Akey-value\u7C7B\u578B\u7684\u6570\u636E\u5E93,\u4F60\u4E22\u7ED9\u4ED6\u4E00\u4E2A\u57DF\u540D,\u8BA9\u7ACB\u9A6C\u7ED9\u4F60\u8FD4\u56DE\u4E00\u4E2A\u57DF\u540D\u6307\u5411\u7684ip\u5730\u5740 \u76EE\u524D\u4E00\u4E9B\u516C\u5171\u7684dns\u57DF\u540Dnameserver\u670D\u52A1ip:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u963F\u91CC\u7684: 223.5.5.5 \u548C 223.6.6.6</span>
<span class="token comment"># google : 8.8.8.8</span>
<span class="token comment"># 114: 114.114.114.114</span>
<span class="token comment"># \u817E\u8BAF: 119.29.29.29</span>

<span class="token comment">## \u8865\u5145\u8BF4\u660E</span>

<span class="token comment"># ip\u5730\u5740\u8303\u56F4\u5730\u5740\u5206\u7C7B0~255</span>
<span class="token comment"># A \u7C7B\u5730\u5740 0.0.0.0 ~ 126.255.255.255 \u8D85\u5927\u578B\u7F51\u7EDC\u516C\u53F8 \u6BD4\u5982\u82F9\u679C \u963F\u91CC</span>
<span class="token comment"># B \u7C7B\u5730\u5740128.0.0.0~ 191.255.255.255 \u5927\u578B\u7F51\u7EDC\u516C\u53F8 (127\u662F\u672C\u5730\u4F1A\u73AF\u5730\u5740)</span>
<span class="token comment"># C \u7C7B\u5730\u5740192.0.0.0 ~ 233.255.255.255  \u5B66\u6821,\u4E2D\u5C0F\u578B\u4F01\u4E1A</span>
<span class="token comment"># D\u7C7B\u7F51\u7EDC\u5730\u5740 \u5C5E\u4E8E\u5E7F\u64AD\u5730\u5740</span>
<span class="token comment"># E\u7C7B\u5730\u5740 \u7CFB\u7EDF\u4FDD\u7559\u5730\u5740 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BD4\u5982\u8BF4\u7535\u8111\u4E0A\u7F51\u5F88\u6162,\u7528\u7F51\u7EDC\u4F18\u5316\u5DE5\u5177.\u81EA\u52A8\u9009\u62E9\u6700\u4F18\u7684dns..... \u901A\u8FC7<code>nslookup</code>(nameserver lookup)\u547D\u4EE4\u67E5\u770B\u57DF\u540D\u89E3\u6790\u5173\u7CFB</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># /etc/hosts\u6587\u4EF6,\u672C\u5730\u57DF\u540D\u5F3A\u5236\u7ED1\u5B9A\u57DF\u540D\u548Cip\u7684\u5173\u7CFB</span>
<span class="token comment"># /etc/resolve.conf \u6539\u6587\u4EF6\u586B\u5165\u4E86\u4E92\u8054\u7F51\u4E0A\u7684dns\u670D\u52A1\u5668\u5730\u5740,\u4F18\u5148\u7EA7\u4F4E\u4E8E\u672C\u5730\u5F3A\u5236\u7ED1\u5B9A\u7684</span>
<span class="token comment"># \u8BE5\u547D\u4EE4\u9700\u8981\u5B89\u88C5dns\u5957\u88C5\u8F6F\u4EF6\u5305</span>
<span class="token comment"># yum -y install bind-utils</span>

<span class="token function">nslookup</span> www.baidu.com <span class="token punctuation">[</span>nameserver<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u4EC0\u4E48\u662Fdns\u52AB\u6301</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># /etc/hosts -- \u672C\u5730\u57DF\u540D\u53F7\u7801\u7C3F</span>
<span class="token comment"># /etc/resolv.conf  --- \u586B\u5199dns\u670D\u52A1\u670D\u52A1\u5668\u5730\u5740\u7684\u53F7\u7801\u7C3F</span>

<span class="token comment">####</span>
<span class="token comment"># \u95EE\u98981:\u4E3A\u4EC0\u4E48qq\u80FD\u6B63\u5E38\u804A\u5929,\u800C\u6D4F\u89C8\u5668\u4E0D\u80FD\u4E0A\u7F51\u7684\u95EE\u9898?</span>
<span class="token comment"># \u95EE\u98982:\u4F60\u8F93\u5165\u7684\u662F\u767E\u5EA6\u7684\u57DF\u540D,\u8BBF\u95EE\u7684\u5374\u662F\u5C0F\u8BF4\u7F51\u7AD9?</span>

<span class="token comment"># \u6B63\u786E\u7684\u8BBF\u95EE\u767E\u5EA6\u7684\u6D41\u7A0B:</span>
<span class="token comment"># \u8F93\u5165\u767E\u5EA6\u57DF\u540D=&gt;\u53BBhosts\u6587\u4EF6\u4E2D\u627E\u5BF9\u5E94\u7684ip=&gt;\u53BBdns\u670D\u52A1\u627E\u5BF9\u5E94\u7684ip=&gt;\u628A\u8BF7\u6C42\u53D1\u7ED9\u5BF9\u5E94\u7684ip=&gt;\u5BF9\u5E94\u7684ip\u8FD4\u56DE\u7ED9\u4F60\u6587\u672C\u6587\u4EF6</span>

<span class="token comment"># \u52AB\u6301\u8BBF\u95EE\u6D41\u7A0B:</span>
<span class="token comment"># \u8F93\u5165\u767E\u5EA6\u57DF\u540D=&gt;\u53BBhosts\u6587\u4EF6\u4E2D\u627E\u5230\u4E86\u5BF9\u5E94\u7684ip\u7ED1\u5B9A=&gt;\u8BF7\u6C42\u76F4\u63A5\u5C31\u53D1\u7ED9\u7ED1\u5B9A\u7684ip=&gt;\u8FD4\u56DE\u7ED9\u4F60\u4E00\u4E2A\u5E7F\u544A\u7F51\u7AD9\u6587\u672C</span>
<span class="token comment"># \u8F93\u5165\u767E\u5EA6\u57DF\u540D=&gt;\u53BBhosts\u6587\u4EF6\u4E2D\u5BF9\u5E94\u7684ip\u7ED1\u5B9A=&gt;\u53BB\u52AB\u6301\u670D\u52A1\u5668dns\u89E3\u6790\u670D\u52A1\u5668=&gt;\u52AB\u6301\u7684\u670D\u52A1\u5668\u5BF9\u5E94id=&gt;\u8BF7\u6C42\u53D1\u7ED9\u5BF9\u5E94ip=&gt;\u8FD4\u56DE\u7ED9\u4F60\u4E00\u4E2A\u5E7F\u544A\u7F51\u7AD9\u6587\u672C</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">linux\u5982\u4F55\u914D\u7F6Edns\u670D\u52A1\u5668</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">vim</span> /etc/resolv.conf
nameserver <span class="token number">233.5</span>.5.5
nameserver <span class="token number">233.6</span>.6.6
nameserver <span class="token number">114.114</span>.114.114
nameserver <span class="token number">8.8</span>.8.8

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[l];function d(t,m){return s(),e("div",null,c)}var v=n(i,[["render",d],["__file","dns.html.vue"]]);export{v as default};
