import{_ as n,p as s,q as a,a1 as e}from"./framework-b7c41258.js";const t={},p=e(`<h1 id="使用new-map存取删数据" tabindex="-1"><a class="header-anchor" href="#使用new-map存取删数据" aria-hidden="true">#</a> 使用new map存取删数据</h1><p>保存、删除数据方便，可以定义new map</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>data() {
  return {
    messageSelectMap: new Map()
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>存数据：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>messageSelectMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> jiLuId<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">备注</p><p>key值可以任意定义，这里用了index值</p></div><p>删数据：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>messageSelectMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>取数据：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> jiLuIdList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>messageSelectMap<span class="token punctuation">.</span>size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  jiLuIdList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>messageSelectMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">备注</p><p>new map获取值的 需要用get方法 参数是key</p></div><div class="custom-container tip"><p class="custom-container-title">备注</p><p>上面例子用get(i) 是因为key值是index</p></div><div class="custom-container tip"><p class="custom-container-title">备注</p><p>new map的长度是.size</p></div>`,13),c=[p];function i(o,l){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","02.html.vue"]]);export{d as default};
