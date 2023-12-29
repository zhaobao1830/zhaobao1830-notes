import{_ as s,o as a,c as i,R as e}from"./chunks/framework.3AywRrgj.js";const g=JSON.parse('{"title":"JS中0.1+0.2为什么不等于0.3","description":"","frontmatter":{},"headers":[],"relativePath":"jsKnowledge/16.md","filePath":"jsKnowledge/16.md","lastUpdated":1703836988000}'),t={name:"jsKnowledge/16.md"},p=e('<h1 id="js中0-1-0-2为什么不等于0-3" tabindex="-1">JS中0.1+0.2为什么不等于0.3 <a class="header-anchor" href="#js中0-1-0-2为什么不等于0-3" aria-label="Permalink to &quot;JS中0.1+0.2为什么不等于0.3&quot;">​</a></h1><p>原因在于JS采用IEEE754标准定义的64位浮点格式表示数字，所以JS中的所有数字都是浮点数，而且是一个近似值，相加的时候得出的也是近似值</p><p>解决办法：</p><p>第一种、</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parseFloat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toFixed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">备注</p><p>toFixed方法将字符串四舍五入为指定的小数位数。</p><p>parseFloat解析字符串，返回浮点数</p></div><p>第二种：</p><p><a href="https://mikemcl.github.io/big.js/#" target="_blank" rel="noreferrer">big.js</a>或者<a href="https://mathjs.org/index.html" target="_blank" rel="noreferrer">mathjs</a></p>',8),n=[p];function l(r,h,o,d,k,c){return a(),i("div",null,n)}const m=s(t,[["render",l]]);export{g as __pageData,m as default};
