import{_ as s,o as e,c as n,d as a}from"./app.90217f76.js";const i={},t=a(`<h1 id="linux\u4E4Bssh\u767B\u5F55port\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#linux\u4E4Bssh\u767B\u5F55port\u4FEE\u6539" aria-hidden="true">#</a> linux\u4E4Bssh\u767B\u5F55port\u4FEE\u6539</h1><div class="custom-container danger"><p class="custom-container-title">\u4FEE\u6539\u9ED8\u8BA422\u7AEF\u53E3</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/ssh/sshd_config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># If you want to change the port on a SELinux system, you have to tell</span>
<span class="token comment"># SELinux about this change.</span>
<span class="token comment"># semanage port -a -t ssh_port_t -p tcp #PORTNUMBER</span>

Port <span class="token number">2222</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl restart sshd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),c=[t];function d(l,r){return e(),n("div",null,c)}var u=s(i,[["render",d],["__file","sshPort.html.vue"]]);export{u as default};
