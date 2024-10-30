import{_ as s,o as a,c as i,R as e}from"./chunks/framework.1nBpG9uI.js";const g=JSON.parse('{"title":"常用方法","description":"","frontmatter":{},"headers":[],"relativePath":"java/utils/method.md","filePath":"java/utils/method.md","lastUpdated":1730253044000}'),n={name:"java/utils/method.md"},t=e(`<h1 id="常用方法" tabindex="-1">常用方法 <a class="header-anchor" href="#常用方法" aria-label="Permalink to &quot;常用方法&quot;">​</a></h1><h2 id="手机号验证" tabindex="-1">手机号验证 <a class="header-anchor" href="#手机号验证" aria-label="Permalink to &quot;手机号验证&quot;">​</a></h2><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String phoneRegex </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;^1[3|4|5|7|8][0-9]</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">d{4,8}$&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Pattern p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Pattern.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">compile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(phoneRegex);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Matcher m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">matcher</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(phoneNumber);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> isMatch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> m.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">matches</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,3),h=[t];function l(p,r,k,d,o,E){return a(),i("div",null,h)}const m=s(n,[["render",l]]);export{g as __pageData,m as default};