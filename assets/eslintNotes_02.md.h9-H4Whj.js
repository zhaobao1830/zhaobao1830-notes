import{_ as s,o as i,c as e,R as a}from"./chunks/framework.1nBpG9uI.js";const E=JSON.parse('{"title":"You should add parserOptions.extraFileExtensions to your config","description":"","frontmatter":{},"headers":[],"relativePath":"eslintNotes/02.md","filePath":"eslintNotes/02.md","lastUpdated":1730253044000}'),n={name:"eslintNotes/02.md"},t=a(`<h1 id="you-should-add-parseroptions-extrafileextensions-to-your-config" tabindex="-1">You should add parserOptions.extraFileExtensions to your config <a class="header-anchor" href="#you-should-add-parseroptions-extrafileextensions-to-your-config" aria-label="Permalink to &quot;You should add parserOptions.extraFileExtensions to your config&quot;">​</a></h1><p>文档地址：<a href="https://typescript-eslint.io/linting/troubleshooting" target="_blank" rel="noreferrer">https://typescript-eslint.io/linting/troubleshooting</a></p><p>.eslintrc.js</p><p>在parserOptions中添加extraFileExtensions: [&#39;.vue&#39;]</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  parserOptions: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    extraFileExtensions: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,5),r=[t];function l(p,o,h,d,c,k){return i(),e("div",null,r)}const _=s(n,[["render",l]]);export{E as __pageData,_ as default};