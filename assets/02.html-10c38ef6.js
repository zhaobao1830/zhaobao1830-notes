import{_ as n,p as s,q as a,a1 as e}from"./framework-b7c41258.js";const t="/zhaobao1830-notes/assets/01-7c080483.png",p={},o=e(`<h1 id="js类型判断有几种方式" tabindex="-1"><a class="header-anchor" href="#js类型判断有几种方式" aria-hidden="true">#</a> js类型判断有几种方式</h1><h2 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeof</h2><p>typeof 对于原始类型来说，除了 null 都可以显示正确的类型</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token number">1</span> <span class="token comment">// &#39;number&#39;</span>
<span class="token keyword">typeof</span> <span class="token string">&#39;1&#39;</span> <span class="token comment">// &#39;string&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">undefined</span> <span class="token comment">// &#39;undefined&#39;</span>
<span class="token keyword">typeof</span> <span class="token boolean">true</span> <span class="token comment">// &#39;boolean&#39;</span>
<span class="token keyword">typeof</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;symbol&#39;</span>
<span class="token keyword">typeof</span> <span class="token number">1n</span> <span class="token comment">// bigint</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>typeof 对于对象来说，除了函数都会显示 object，所以说 typeof 并不能准确判断变量到底是什么类型。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> console<span class="token punctuation">.</span>log <span class="token comment">// &#39;function&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceof</h2><p>instanceof 通过原型链的方式来判断是否为构建函数的实例，常用于判断具体的对象类型</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Person</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
p1 <span class="token keyword">instanceof</span> <span class="token class-name">Person</span> <span class="token comment">// true</span>

<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span>
str <span class="token keyword">instanceof</span> <span class="token class-name">String</span> <span class="token comment">// false</span>

<span class="token keyword">var</span> str1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>
str1 <span class="token keyword">instanceof</span> <span class="token class-name">String</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于原始类型来说，你想直接通过 instanceof 来判断类型是不行的，但是我们还是有办法实现的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">PrimitiveString</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>hasInstance<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span> <span class="token keyword">instanceof</span> <span class="token class-name">PrimitiveString</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可能不知道 Symbol.hasInstance 是什么东西，其实就是一个能让我们自定义 instanceof 行为的东西，以上代码等同于 typeof &#39;hello world&#39; === &#39;string&#39;，所以结果自然是 true 了。</p><p>这其实也侧面反映了一个问题：instanceof 并不是百分之百可信的。</p><p>另外其实我们还可以直接通过构建函数来判断类型：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// true</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Array
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-prototype-tostring-call" tabindex="-1"><a class="header-anchor" href="#object-prototype-tostring-call" aria-hidden="true">#</a> Object.prototype.toString.call</h2><p>开发中用的最多的是Object.prototype.toString.call</p><p><img src="`+t+'" alt="Image text"></p><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>判断是否为数组的 Array.isArray()</p>',20),c=[o];function l(i,r){return s(),a("div",null,c)}const u=n(p,[["render",l],["__file","02.html.vue"]]);export{u as default};
