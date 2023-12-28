import{_ as n,p as s,q as a,a1 as e}from"./framework-b7c41258.js";const t="/zhaobao1830-notes/assets/01-8f44dede.png",p={},o=e('<h1 id="不稳定变量引起的问题" tabindex="-1"><a class="header-anchor" href="#不稳定变量引起的问题" aria-hidden="true">#</a> 不稳定变量引起的问题</h1><h2 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述" aria-hidden="true">#</a> 问题描述</h2><p><img src="'+t+`" alt="Image text"></p><p>刚进入购物车页面，会弹出错误提示：超出最大购买数量</p><h2 id="调试过程" tabindex="-1"><a class="header-anchor" href="#调试过程" aria-hidden="true">#</a> 调试过程</h2><p>1、先打开counter组件：</p><div class="language-wxml line-numbers-mode" data-ext="wxml"><pre class="language-wxml"><code>&lt;l-counter l-count-class=&quot;all-background input-size&quot;
           l-symbol-class=&quot;all-background font-color&quot;
           l-disabled-class=&quot;all-background&quot;
           l-class=&quot;container&quot;
           count = &quot;{{count}}&quot;
           min = &quot;{{min}}&quot;
           max = &quot;{{max}}&quot;
           bind:linout=&quot;onOverStep&quot;
&gt;

&lt;/l-counter&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的错误提示是说count值大于max值</p><p>2、打开count.js文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 组件的属性列表
   */</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">77</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">77</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">observers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;count, min, max&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">count<span class="token punctuation">,</span> min<span class="token punctuation">,</span> max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span> min<span class="token punctuation">,</span> max<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看见count、min、max是在properties里定义的，并且有默认值</p><p>新加observers，输出count、min、max，可以看到结果有俩次，第一次是0 1 0，第二次是7 1 916</p><div class="custom-container tip"><p class="custom-container-title">备注</p><p>第一次输出count和max值不对，min的默认值正确，就是在count.js定义的默认值</p></div><p>这时我们可以确定是第一次值引起的错误提示，现在打开父组件cartItem.wxml，看引用count的代码</p><p>3、打开cartItem.wxml和cartItem.js</p><div class="language-wxml line-numbers-mode" data-ext="wxml"><pre class="language-wxml"><code>&lt;s-counter bind:linout=&quot;onOutNumber&quot;
           bind:lintap=&quot;onSelectCount&quot;
           max=&quot;{{cartItem.sku.stock}}&quot;
           count=&quot;{{cartItem.count}}&quot;&gt;
&lt;/s-counter&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-wxml line-numbers-mode" data-ext="wxml"><pre class="language-wxml"><code>  properties: {
    cartItem: Object
  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把max和count传的值改成固定数字传入，测试正常</p><p>那就是传入值引起的错误，即cartItem.sku.stock和cartItem.count</p><h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h2><p>1、自定义组件，如果有组件使用这个组件的时候，没有设置这个属性，那就会取默认值，但如果设置了属性，就不会再取默认值</p><p>2、因为cartItem也是父组件传递的，一开始的时候是空，所以cartItem.sku.stock就不存在，这时候会给count和max设置类型的默认值0（count和max是Number默认值是0）</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><p>在父组件（cartItem.wxml）里定义count和max对应的变量stock和skuCount，设置默认值并赋值给count组件，当cartItem变量有值以后，再赋值给stock和skuCount</p><div class="language-wxml line-numbers-mode" data-ext="wxml"><pre class="language-wxml"><code> &lt;s-counter bind:linout=&quot;onOutNumber&quot;
            bind:lintap=&quot;onSelectCount&quot;
            max=&quot;{{stock}}&quot;
            count=&quot;{{skuCount}}&quot;&gt;
&lt;/s-counter&gt;       
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">stock</span><span class="token operator">:</span> Cart<span class="token punctuation">.</span><span class="token constant">SKU_MAX_COUNT</span><span class="token punctuation">,</span>
    <span class="token literal-property property">skuCount</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token literal-property property">observers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">cartItem</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">cartItem</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cartItem<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">stock</span><span class="token operator">:</span> cartItem<span class="token punctuation">.</span>sku<span class="token punctuation">.</span>stock<span class="token punctuation">,</span>
      <span class="token literal-property property">skuCount</span><span class="token operator">:</span> cartItem<span class="token punctuation">.</span>count
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>在小程序里，定义的变量会setData俩次，第一次是初始化的时候，第二次是接口请求返回后赋值</p><p>如果把变量传递给子组件，那有可能会在第一次初始化的时候报错</p><p>对于这种情况，我们可以定义变量并设置默认值，当接口请求返回后，再重新赋值</p><div class="custom-container tip"><p class="custom-container-title">备注</p><p>上面的问题是小程序里出现的，我觉得在Vue里，也会有同样的问题</p></div>`,31),i=[o];function l(c,r){return s(),a("div",null,i)}const d=n(p,[["render",l],["__file","12.html.vue"]]);export{d as default};
