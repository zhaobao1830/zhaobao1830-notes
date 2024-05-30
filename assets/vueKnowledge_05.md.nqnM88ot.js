import{_ as e,o as a,c as t,R as s}from"./chunks/framework.1nBpG9uI.js";const m=JSON.parse('{"title":"SPA应用路由的基本原理","description":"","frontmatter":{},"headers":[],"relativePath":"vueKnowledge/05.md","filePath":"vueKnowledge/05.md","lastUpdated":1717056127000}'),r={name:"vueKnowledge/05.md"},p=s(`<h1 id="spa应用路由的基本原理" tabindex="-1">SPA应用路由的基本原理 <a class="header-anchor" href="#spa应用路由的基本原理" aria-label="Permalink to &quot;SPA应用路由的基本原理&quot;">​</a></h1><h2 id="spa和普通网页应用的区别" tabindex="-1">SPA和普通网页应用的区别 <a class="header-anchor" href="#spa和普通网页应用的区别" aria-label="Permalink to &quot;SPA和普通网页应用的区别&quot;">​</a></h2><p>普通网页</p><p>1、跳转到新页面，每次重新加载所有资源</p><p>2、HTML内容是后端直接渲染的</p><p>SPA应用</p><p>1、不跳转，JS 拦截跳转，修改URL</p><p>2、与后端进行数据交互</p><p>3、JS动态渲染 DOM 内容</p><h2 id="spa路由的实现方式" tabindex="-1">SPA路由的实现方式 <a class="header-anchor" href="#spa路由的实现方式" aria-label="Permalink to &quot;SPA路由的实现方式&quot;">​</a></h2><p>官网：<a href="https://router.vuejs.org/zh/guide/essentials/history-mode.html#hash-%E6%A8%A1%E5%BC%8F" target="_blank" rel="noreferrer">https://router.vuejs.org/zh/guide/essentials/history-mode.html#hash-%E6%A8%A1%E5%BC%8F</a></p><h3 id="html5模式" tabindex="-1">HTML5模式 <a class="header-anchor" href="#html5模式" aria-label="Permalink to &quot;HTML5模式&quot;">​</a></h3><p>利用了 HTML5 History中新增的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/History_API#%E6%B7%BB%E5%8A%A0%E5%92%8C%E4%BF%AE%E6%94%B9%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E6%9D%A1%E7%9B%AE" target="_blank" rel="noreferrer">pushState()</a> 和 replaceState() 方法实现</p><p>点击浏览器后退按钮，会触发window.onpopstate(<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/popstate_event" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Window/popstate_event</a>)方法</p><p>问题：</p><p>1、刷新的话会报错</p><p>解决办法：服务端Nginx配置</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>location / {</span></span>
<span class="line"><span>  try_files $uri $uri/ /index.html;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="hash模式" tabindex="-1">hash模式 <a class="header-anchor" href="#hash模式" aria-label="Permalink to &quot;hash模式&quot;">​</a></h3><p>在url后面添加#字符，比如这个 URL：www.baidu.com/#/hello hash 的值为 #/hello</p><p>特点：hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。</p><p>优点：</p><p>1、速度快</p><p>2、体验好</p><p>3、为前后端分离提供了实践场所</p><p>缺点：</p><p>1、在 SEO 中有不好的影响</p><h2 id="对比" tabindex="-1">对比 <a class="header-anchor" href="#对比" aria-label="Permalink to &quot;对比&quot;">​</a></h2><p>1、语法结构不同</p><p>hash模式的url中有#号，history为正常的url方式</p><p>2、部署方式不同</p><p>history模式在nginx中部署时，需要添加<code>try_files $uri $uri/ /index.html;</code>这行代码，这是为了解决history模式下刷新报错的问题</p><p>3、SEO</p><p>hash模式不利于SEO</p>`,34),o=[p];function h(l,n,i,d,c,u){return a(),t("div",null,o)}const b=e(r,[["render",h]]);export{m as __pageData,b as default};