import{_ as a,o as s,c as i,R as e}from"./chunks/framework.3AywRrgj.js";const E=JSON.parse('{"title":"compareTo比较","description":"","frontmatter":{},"headers":[],"relativePath":"javaKnowledge/20.md","filePath":"javaKnowledge/20.md","lastUpdated":1703836988000}'),n={name:"javaKnowledge/20.md"},t=e(`<h1 id="compareto比较" tabindex="-1">compareTo比较 <a class="header-anchor" href="#compareto比较" aria-label="Permalink to &quot;compareTo比较&quot;">​</a></h1><p>项目：<a href="https://github.com/zhaobao1830/misszb" target="_blank" rel="noreferrer">misszb/OrderServiceImpl</a></p><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><p>compareTo用于俩个值的比较，返回值是整型</p><p>A.compareTo(B)</p><p>如果A等于B，返回0</p><p>如果A小于B，返回负数</p><p>如果A大于B，返回正数</p><h2 id="需求" tabindex="-1">需求 <a class="header-anchor" href="#需求" aria-label="Permalink to &quot;需求&quot;">​</a></h2><p>判断订单金额是否大于等于0</p><p>可以使用校验@DecimalMin，也可以使用compareTo进行判断</p><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isOk</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Long uid, OrderDTO orderDTO) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (orderDTO.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getFinalTotalPrice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">compareTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BigDecimal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            throw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ParameterException</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50011</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>orderDTO.getFinalTotalPrice()获取FinalTotalPrice（总价）的值</p><p>new BigDecimal(&quot;0&quot;) 因为OrderDTO中的FinalTotalPrice格式是BigDecimal，所以需要与BigDecimal格式的0进行对比</p><p>对比返回的值如果小于等于0，说明总价不对，返回错误提示</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>第一、俩个值的对比可以使用compareTo进行比较</p><p>第二、new BigDecimal为什么要传入Sting？</p><p>BigDecimal构造器传参时使用String不会丢失精度，使用浮点或者双精度会丢失精度。</p>`,20),p=[t];function l(r,h,o,k,d,c){return s(),i("div",null,p)}const m=a(n,[["render",l]]);export{E as __pageData,m as default};
