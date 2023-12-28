import{_ as n,p as s,q as a,a1 as t}from"./framework-b7c41258.js";const e={},p=t(`<h1 id="类和类的对象在前端项目中的使用" tabindex="-1"><a class="header-anchor" href="#类和类的对象在前端项目中的使用" aria-hidden="true">#</a> 类和类的对象在前端项目中的使用</h1><p>以小程序项目为例，谈一下如何在项目中使用类和类的对象</p><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>在小程序项目，如何保存数据？</p><p>现在有themes数据要进行保存</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> themes <span class="token operator">=</span> theme<span class="token punctuation">.</span><span class="token function">getTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><p>第一种、保存在data中</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>themes <span class="token operator">=</span> themes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>缺点：调用麻烦，获取和赋值都需要用this.data；js里代码混乱</p><p>第二种、放到localstorage中</p><p>缺点是：保存的数据是永久的，维护麻烦</p><p>第三种、放到全局App中</p><p>缺点是：themes数据只在首页中使用，保存在全局中维护麻烦而且没有必要</p><div class="custom-container tip"><p class="custom-container-title">备注</p><p>上面三种方法有个共同的问题：themes数据只能保存一份，不能保存不同的themes数据</p></div><p>第四种、类和类的对象（推荐）</p><p>类和通过new 类生成的对象，这是面向对象的思想</p><p>class类可以用来保存数据</p><p>类的对象可以用来保存数据和状态</p><p>举个例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Theme</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
t1<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span>

<span class="token keyword">const</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Theme</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
t2<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同一个类生成的不同对象，可以保存不同数据的相同值</p><p>在项目中可以这样写</p><p>新建theme.js文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Http<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../utils/http&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Theme</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> locationA <span class="token operator">=</span> <span class="token string">&#39;t-1&#39;</span>
    <span class="token keyword">static</span> locationE <span class="token operator">=</span> <span class="token string">&#39;t-2&#39;</span>

    themes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">static</span> forYou <span class="token operator">=</span> <span class="token string">&#39;t-6&#39;</span>

    <span class="token keyword">async</span> <span class="token function">getThemes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> names <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Theme<span class="token punctuation">.</span>locationA<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Theme<span class="token punctuation">.</span>locationE<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>themes <span class="token operator">=</span> <span class="token keyword">await</span> Http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">theme/by/names</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                names
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">getHomeLocationA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>themes<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">t</span> <span class="token operator">=&gt;</span> t<span class="token punctuation">.</span>name <span class="token operator">===</span> Theme<span class="token punctuation">.</span>locationA<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">getHomeLocationE</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>themes<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">t</span> <span class="token operator">=&gt;</span> t<span class="token punctuation">.</span>name <span class="token operator">===</span> Theme<span class="token punctuation">.</span>locationE<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在home.js里使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">initAllData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Theme</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> theme<span class="token punctuation">.</span><span class="token function">getThemes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> themeA <span class="token operator">=</span> theme<span class="token punctuation">.</span><span class="token function">getHomeLocationA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> themeE <span class="token operator">=</span> theme<span class="token punctuation">.</span><span class="token function">getHomeLocationE</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>    
     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>当做前端项目的时候，如果要对接口返回的数据进行二次加工：</p><p>1、新建一个类，在这个类里定义变量，接收接口返回的数据并将其赋值给这个变量，</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>themes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">async</span> <span class="token function">getThemes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> names <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Theme<span class="token punctuation">.</span>locationA<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Theme<span class="token punctuation">.</span>locationE<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>themes <span class="token operator">=</span> <span class="token keyword">await</span> Http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">theme/by/names</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      names
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、类中新建方法，方法里对数据进行处理并返回</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">getHomeLocationA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>themes<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">t</span> <span class="token operator">=&gt;</span> t<span class="token punctuation">.</span>name <span class="token operator">===</span> Theme<span class="token punctuation">.</span>locationA<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">getHomeLocationE</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>themes<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">t</span> <span class="token operator">=&gt;</span> t<span class="token punctuation">.</span>name <span class="token operator">===</span> Theme<span class="token punctuation">.</span>locationE<span class="token punctuation">)</span>
<span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、使用的地方引入这个类并生成对象，通过对象调用方法，获取加工后的数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">initAllData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Theme</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> theme<span class="token punctuation">.</span><span class="token function">getThemes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> themeA <span class="token operator">=</span> theme<span class="token punctuation">.</span><span class="token function">getHomeLocationA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> themeE <span class="token operator">=</span> theme<span class="token punctuation">.</span><span class="token function">getHomeLocationE</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">备注</p><p>类中的变量和方法不用加static，因为这是要被生成的对象调用的</p></div>`,36),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","03.html.vue"]]);export{r as default};
