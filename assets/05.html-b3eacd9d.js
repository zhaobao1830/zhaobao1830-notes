import{_ as n,p as a,q as s,a1 as e}from"./framework-b7c41258.js";const t={},p=e(`<h1 id="自定义组件margin失效" tabindex="-1"><a class="header-anchor" href="#自定义组件margin失效" aria-hidden="true">#</a> 自定义组件margin失效</h1><p>解决办法：</p><p>第一种、margin样式在原生组件上设置，不要在自定义组件上设置</p><p>第二种、使用自定义组件的外部样式类</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

    <span class="token literal-property property">externalClass</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;l-class&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">//外部样式类名字</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三种、在自定义组件外包一层原生组件，在原生组件上加样式</p><div class="custom-container tip"><p class="custom-container-title">备注</p><p>给自定义组件定义样式的时候，如果样式很多，推荐使用外部样式类</p></div>`,7),c=[p];function i(o,l){return a(),s("div",null,c)}const d=n(t,[["render",i],["__file","05.html.vue"]]);export{d as default};
