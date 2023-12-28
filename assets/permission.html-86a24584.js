import{_ as n,p as s,q as a,a1 as e}from"./framework-b7c41258.js";const t={},p=e(`<h1 id="permission指令" tabindex="-1"><a class="header-anchor" href="#permission指令" aria-hidden="true">#</a> permission指令</h1><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>控制dom的显示/隐藏
v-permission=&quot;&#39;搜索日志&#39;&quot;

v-permission=&quot;[&#39;修改信息&#39;,&#39;修改密码&#39;]&quot;

在button上使用，控制按钮能否点击
&lt;button v-permission=&quot;{ permission: &#39;删除图书&#39;, type: &#39;disabled&#39;}&quot;&gt;删除&lt;/button&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> js</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;@/store&#39;</span>

<span class="token keyword">function</span> <span class="token function">isAllowed</span><span class="token punctuation">(</span><span class="token parameter">permission<span class="token punctuation">,</span> user<span class="token punctuation">,</span> permissions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> permission <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> permissions<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>permission<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>permission <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> permission<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">auth</span> <span class="token operator">=&gt;</span> permissions<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>auth<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token comment">// 权限指令</span>
Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;permission&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> permission
    <span class="token keyword">let</span> type
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>binding<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object Object]&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// eslint-disable-next-line prefer-destructuring</span>
      permission <span class="token operator">=</span> binding<span class="token punctuation">.</span>value<span class="token punctuation">.</span>permission
      <span class="token comment">// eslint-disable-next-line prefer-destructuring</span>
      type <span class="token operator">=</span> binding<span class="token punctuation">.</span>value<span class="token punctuation">.</span>type
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      permission <span class="token operator">=</span> binding<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> isAllow <span class="token operator">=</span> <span class="token function">isAllowed</span><span class="token punctuation">(</span>permission<span class="token punctuation">,</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>user <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>permissions<span class="token punctuation">)</span>
    <span class="token keyword">const</span> element <span class="token operator">=</span> el
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isAllow <span class="token operator">&amp;&amp;</span> permission<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        element<span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token boolean">true</span>
        element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>opacity <span class="token operator">=</span> <span class="token number">0.4</span>
        element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>cursor <span class="token operator">=</span> <span class="token string">&#39;not-allowed&#39;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;permission&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> demo</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div
  class=&quot;add&quot;
  v-permission=&quot;&#39;system:role:add&#39;&quot;
  @click=&quot;showAddDialogFormVisible&quot;  
&gt;     
  &lt;i class=&quot;el-icon-plus&quot;&gt;&lt;/i&gt;
  &lt;span&gt;添加&lt;/span&gt;
&lt;/div&gt;


&lt;el-button
   type=&quot;primary&quot;
   plain
   v-permission=&quot;{ permission: &#39;system:role:edit&#39;, type: &#39;disabled&#39;}&quot;
   @click.native.prevent.stop=&quot;handleEdit(scope.row)&quot;
&gt;编辑&lt;/el-button&gt;            
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),i=[p];function o(l,c){return s(),a("div",null,i)}const r=n(t,[["render",o],["__file","permission.html.vue"]]);export{r as default};
