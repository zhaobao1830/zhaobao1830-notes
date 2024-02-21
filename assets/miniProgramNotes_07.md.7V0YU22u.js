import{_ as s,o as a,c as i,R as n}from"./chunks/framework.1nBpG9uI.js";const g=JSON.parse('{"title":"小程序的方法如何获取view上的数据","description":"","frontmatter":{},"headers":[],"relativePath":"miniProgramNotes/07.md","filePath":"miniProgramNotes/07.md","lastUpdated":1708483448000}'),e={name:"miniProgramNotes/07.md"},t=n(`<h1 id="小程序的方法如何获取view上的数据" tabindex="-1">小程序的方法如何获取view上的数据 <a class="header-anchor" href="#小程序的方法如何获取view上的数据" aria-label="Permalink to &quot;小程序的方法如何获取view上的数据&quot;">​</a></h1><p>在小程序里，view使用data-XX(XX是自定义的名称)绑定数据，在方法里可以通过event.currentTarget.dataset.XX获取这个数据</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;view data-spu-id=&quot;{{item.id}}&quot; bind:tap=&quot;onTap&quot; class=&quot;spu-container&quot;&gt;</span></span>
<span class="line"><span>&lt;/view&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">methods</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onTap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> spuId</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> event.currentTarget.dataset.spuId</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(spuId)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,4),p=[t];function l(r,h,d,o,c,k){return a(),i("div",null,p)}const E=s(e,[["render",l]]);export{g as __pageData,E as default};