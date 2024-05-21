import{_ as s,o as a,c as n,R as i}from"./chunks/framework.1nBpG9uI.js";const _=JSON.parse('{"title":"自定义组件margin失效","description":"","frontmatter":{},"headers":[],"relativePath":"miniProgramNotes/05.md","filePath":"miniProgramNotes/05.md","lastUpdated":1716264235000}'),e={name:"miniProgramNotes/05.md"},t=i(`<h1 id="自定义组件margin失效" tabindex="-1">自定义组件margin失效 <a class="header-anchor" href="#自定义组件margin失效" aria-label="Permalink to &quot;自定义组件margin失效&quot;">​</a></h1><p>解决办法：</p><p>第一种、margin样式在原生组件上设置，不要在自定义组件上设置</p><p>第二种、使用自定义组件的外部样式类</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    externalClass: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;l-class&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//外部样式类名字</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>第三种、在自定义组件外包一层原生组件，在原生组件上加样式</p><div class="tip custom-block"><p class="custom-block-title">备注</p><p>给自定义组件定义样式的时候，如果样式很多，推荐使用外部样式类</p></div>`,7),p=[t];function l(r,c,o,d,h,m){return a(),n("div",null,p)}const g=s(e,[["render",l]]);export{_ as __pageData,g as default};