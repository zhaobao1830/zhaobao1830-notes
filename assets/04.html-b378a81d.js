import{_ as n,p as s,q as a,a1 as e}from"./framework-b7c41258.js";const t={},o=e(`<h1 id="vite项目配置" tabindex="-1"><a class="header-anchor" href="#vite项目配置" aria-hidden="true">#</a> vite项目配置@</h1><p>一、tsconfig.json或者jsconfig.json文件配置</p><p>compilerOptions对象下新加</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;src/*&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二、vite.config.ts或vite.config.js</p><p>新加resolve</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
    alias<span class="token operator">:</span> <span class="token punctuation">{</span>
      &#39;@&#39;<span class="token operator">:</span> resolve(__dirname<span class="token punctuation">,</span> &#39;src&#39;)
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 导入时想要省略的扩展名列表</span>
    extensions<span class="token operator">:</span> <span class="token punctuation">[</span>&#39;.mjs&#39;<span class="token punctuation">,</span> &#39;.js&#39;<span class="token punctuation">,</span> &#39;.ts&#39;<span class="token punctuation">,</span> &#39;.jsx&#39;<span class="token punctuation">,</span> &#39;.tsx&#39;<span class="token punctuation">,</span> &#39;.json&#39;<span class="token punctuation">,</span> &#39;.vue&#39;<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),p=[o];function i(c,l){return s(),a("div",null,p)}const r=n(t,[["render",i],["__file","04.html.vue"]]);export{r as default};
