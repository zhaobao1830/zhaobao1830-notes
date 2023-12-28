import{_ as t,M as p,p as e,q as o,R as n,t as s,N as c,a1 as l}from"./framework-b7c41258.js";const i={},u=n("h1",{id:"分页",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分页","aria-hidden":"true"},"#"),s(" 分页")],-1),r={href:"https://github.com/zhaobao1830/fenxiuzb",target:"_blank",rel:"noopener noreferrer"},k=l(`<p>代码在fenxiuzb项目中的paging.js</p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>将前端项目中的分页功能进行封装，使用的时候简单调用就行</p><p><strong>分页需要考虑的点：</strong></p><p>1、一条数据也没有</p><p>2、返回总条数、总页数、当前页数</p><p>3、是否有更多</p><p>4、发送请求后在接口返回数据前，暂停发起请求（节流、防抖、锁）</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><p>paging.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 用来处理分页的逻辑
 * 将逻辑封装在class中，使用方便
 *
 */</span>
<span class="token keyword">import</span> Http <span class="token keyword">from</span> <span class="token string">&quot;./http&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Paging</span> <span class="token punctuation">{</span>

  start <span class="token comment">// 获取记录的起始序号，从0开始</span>
  count <span class="token comment">// 一次获取记录的条数</span>
  req <span class="token comment">// 参数对象，包含url、data、method</span>
  locker <span class="token operator">=</span> <span class="token boolean">false</span>  <span class="token comment">// 锁</span>
  url <span class="token comment">// 赋值为req对象中的url，为了拼接成新的url</span>
  moreData <span class="token operator">=</span> <span class="token boolean">true</span>
  accumulator <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 屡次请求的数据的拼装</span>

  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> count <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> start <span class="token operator">=</span> <span class="token number">0</span></span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>start <span class="token operator">=</span> start
    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> count
    <span class="token keyword">this</span><span class="token punctuation">.</span>req <span class="token operator">=</span> req
    <span class="token keyword">this</span><span class="token punctuation">.</span>url <span class="token operator">=</span> req<span class="token punctuation">.</span>url
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">getMoreData</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>moreData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_getLocker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_actualGetData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_releaseLocker</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> data
  <span class="token punctuation">}</span>

  <span class="token comment">// 发送请求</span>
  <span class="token keyword">async</span> <span class="token function">_actualGetData</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> req <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_getCurrentReq</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> paging <span class="token operator">=</span> <span class="token keyword">await</span> Http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>paging<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>paging<span class="token punctuation">.</span>total <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">empty</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 当前请求的页数的数据</span>
        <span class="token literal-property property">moreData</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">accumulator</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 屡次请求的数据的拼装</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>moreData <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_moreData</span><span class="token punctuation">(</span>paging<span class="token punctuation">.</span>total_page<span class="token punctuation">,</span> paging<span class="token punctuation">.</span>page<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>moreData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>start <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_accumulator</span><span class="token punctuation">(</span>paging<span class="token punctuation">.</span>items<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">empty</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">items</span><span class="token operator">:</span> paging<span class="token punctuation">.</span>items<span class="token punctuation">,</span> <span class="token comment">// 当前请求的页数的数据</span>
      <span class="token literal-property property">moreData</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>moreData<span class="token punctuation">,</span>
      <span class="token literal-property property">accumulator</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>accumulator <span class="token comment">// 屡次请求的数据的拼装</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">_accumulator</span> <span class="token punctuation">(</span><span class="token parameter">items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>accumulator <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>accumulator<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">_moreData</span> <span class="token punctuation">(</span><span class="token parameter">totalPage<span class="token punctuation">,</span> pageNum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> pageNum <span class="token operator">&lt;</span> totalPage <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 拼装url</span>
  <span class="token function">_getCurrentReq</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>url
    <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">start=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>start<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;count=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      url <span class="token operator">+=</span> <span class="token string">&#39;&amp;&#39;</span> <span class="token operator">+</span> params

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      url <span class="token operator">+=</span> <span class="token string">&#39;?&#39;</span> <span class="token operator">+</span> params
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>req<span class="token punctuation">.</span>url <span class="token operator">=</span> url
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>req
  <span class="token punctuation">}</span>


  <span class="token comment">// 获取锁</span>
  <span class="token function">_getLocker</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>locker<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>locker <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 释放锁</span>
  <span class="token function">_releaseLocker</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>locker <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>封装接口方法的时候，通过new Paging类，传入对应的参数</p><p>spu-paging.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Paging <span class="token keyword">from</span> <span class="token string">&#39;../utils/paging&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">SpuPaging</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">getLatest</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Paging</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;spu/latest&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用封装的接口，返回的是类的对象，通过对象调用类里封装的方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> paging <span class="token operator">=</span> <span class="token keyword">await</span> SpuPaging<span class="token punctuation">.</span><span class="token function">getLatest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

paging<span class="token punctuation">.</span><span class="token function">getMoreData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function d(v,m){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[s("项目地址："),n("a",r,[s("https://github.com/zhaobao1830/fenxiuzb"),c(a)])]),k])}const y=t(i,[["render",d],["__file","paging.html.vue"]]);export{y as default};
