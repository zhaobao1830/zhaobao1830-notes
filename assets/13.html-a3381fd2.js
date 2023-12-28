import{_ as e,p as s,q as n,a1 as a}from"./framework-b7c41258.js";const t={},p=a(`<h1 id="script-setup-可以不用手动导入defineprops、defineemits、defineexpose、withdefaults-但会报not-defined错误" tabindex="-1"><a class="header-anchor" href="#script-setup-可以不用手动导入defineprops、defineemits、defineexpose、withdefaults-但会报not-defined错误" aria-hidden="true">#</a> script Setup 可以不用手动导入defineProps、defineEmits、defineExpose、withDefaults，但会报not defined错误</h1><p>解决办法：</p><p>（1）、eslint-plugin-vue升级到8以上</p><p>（2）、eslintrc.js配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/setup-compiler-macros&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 新增的配置</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),i=[p];function o(r,c){return s(),n("div",null,i)}const d=e(t,[["render",o],["__file","13.html.vue"]]);export{d as default};
