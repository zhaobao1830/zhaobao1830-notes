import{_ as s,p as n,q as a,a1 as e}from"./framework-b7c41258.js";const t={},i=e(`<h1 id="不同版本sass-loader下vue-config-js引入scss文件" tabindex="-1"><a class="header-anchor" href="#不同版本sass-loader下vue-config-js引入scss文件" aria-hidden="true">#</a> 不同版本sass-loader下vue.config.js引入scss文件</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">loaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">sass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 全局引入变量和 mixin</span>
        <span class="token comment">// 7.x版本的param是data</span>
        <span class="token comment">// 8.x版本的param是prependData</span>
        <span class="token comment">// 9.x版本的param是additionalData</span>
        <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
          @import &quot;@/assets/scss/variable.scss&quot;;
          @import &quot;@/assets/scss/mixin.scss&quot;;
        </span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[i];function o(c,l){return n(),a("div",null,p)}const d=s(t,[["render",o],["__file","02.html.vue"]]);export{d as default};
