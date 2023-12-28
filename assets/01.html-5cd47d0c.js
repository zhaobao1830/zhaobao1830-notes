import{_ as a,M as t,p as o,q as p,R as s,t as e,N as c,a1 as i}from"./framework-b7c41258.js";const r="/zhaobao1830-notes/assets/01-c0edc568.png",l="/zhaobao1830-notes/assets/02-ae4d9c2f.png",d="/zhaobao1830-notes/assets/03-c31cb07d.png",m="/zhaobao1830-notes/assets/04-1798729c.png",u={},v=s("h1",{id:"移动端真机调试",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#移动端真机调试","aria-hidden":"true"},"#"),e(" 移动端真机调试")],-1),g={href:"https://mp.weixin.qq.com/s?__biz=MzUzNjk5MTE1OQ==&mid=2247514406&idx=1&sn=8d03a35728265a9d33e0fd524569fcda&chksm=faef3dfecd98b4e813f75a661fb13c50c40ada715528a9120033c5a1c446ea8bbd3169efd575&mpshare=1&scene=1&srcid=0114tyHUo8brnZ60FbDiTLki&sharer_sharetime=1642647117910&sharer_shareid=3720a8d166d2fb213015b4eb03622fb5&exportkey=AfsfGYVXONs%2BLSgR5lg6xWw%3D&acctmode=0&pass_ticket=PQVpBBKPyF9S06E5OmnQHdJ6tDlGX0TUzz%2BDLCyl%2FrYZd89fDIXQjbsvoTc01g0I&wx_header=0#rd",target:"_blank",rel:"noopener noreferrer"},k=i('<p>1、谷歌浏览器或者Edge浏览器 + Android</p><p>首先在chrome安装ADB Plugin</p><p>chrome中输入 chrome://inspect</p><p>通过数据线连接你的电脑和 Android 手机，打开USB的调试模式</p><p>就可以在上面的页面中看到自己的设备：</p><p><img src="'+r+`" alt="Image text"></p><p>点击inspect</p><p>然后就可以欢乐地调试了，和使用谷歌调试pc端一样，可惜ios不适用 推荐指数4颗星</p><p>备注：如果手机连接成功，但一直没有inspect内容出现，可以在浏览器输入： chrome://inspect/#devices</p><p>2、vConsole、eruda等调试库</p><p>这个方法需要在页面中插入一段 JS 脚本，这里以vConsole为例，导入vconsole.min.js，并实例化，注实例化代码最好放在头部，以便能一开始就能劫持内容：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;./vconsole.min.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token comment">// 初始化</span>
    <span class="token keyword">new</span> <span class="token class-name">VConsole</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i vconsole
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> VConsole <span class="token keyword">from</span> <span class="token string">&#39;vconsole&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">VConsole</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+'" alt="Image text"></p><p><img src="'+d+`" alt="Image text"></p><p>优点：方便，可查看console、network、elements等；</p><p>缺点：css调试不友好，console会劫持consloe的打印，不能定位到打印的代码位置，需要额外加载js脚本</p><p>推荐指数3颗星</p><p>3、whistle</p><p>安卓、ios都能调试，跨平台、代理抓包、H5调试、debugger、请求劫持、HTTPS支持、WebSocket数据捕获等，功能非常强大。weinre是用node编写的，使用npm来进行安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g whistle

w2 start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+'" alt="Image text"></p><p>跨平台、抓包、 DOM、Console、Network 等，功能非常强大。</p><p>推荐指数5颗星</p><p>4、Mobile Debug</p><p>功能和whistle非常相似</p><p>需要把手机在同一个局域网wifi设置代理，便可使用，https需要增加安装证书步骤。</p><p>推荐指数5颗星</p>',30);function b(h,_){const n=t("ExternalLinkIcon");return o(),p("div",null,[v,s("p",null,[e("参考文章："),s("a",g,[e("前端瓶子君--干货！移动端真机调试指南，对调试说easy"),c(n)])]),k])}const x=a(u,[["render",b],["__file","01.html.vue"]]);export{x as default};
