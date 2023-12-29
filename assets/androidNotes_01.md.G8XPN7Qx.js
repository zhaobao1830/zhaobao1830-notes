import{_ as s,o as a,c as i,R as e}from"./chunks/framework.3AywRrgj.js";const n="/zhaobao1830-notes/assets/01.KzcoYRog.png",p="/zhaobao1830-notes/assets/02.EP8CAEyp.png",t="/zhaobao1830-notes/assets/03.hza2VRcq.png",l="/zhaobao1830-notes/assets/04.gY8CMso7.png",_=JSON.parse('{"title":"移动端真机调试","description":"","frontmatter":{},"headers":[],"relativePath":"androidNotes/01.md","filePath":"androidNotes/01.md","lastUpdated":1703836988000}'),r={name:"androidNotes/01.md"},o=e('<h1 id="移动端真机调试" tabindex="-1">移动端真机调试 <a class="header-anchor" href="#移动端真机调试" aria-label="Permalink to &quot;移动端真机调试&quot;">​</a></h1><p>参考文章：<a href="https://mp.weixin.qq.com/s?__biz=MzUzNjk5MTE1OQ==&amp;mid=2247514406&amp;idx=1&amp;sn=8d03a35728265a9d33e0fd524569fcda&amp;chksm=faef3dfecd98b4e813f75a661fb13c50c40ada715528a9120033c5a1c446ea8bbd3169efd575&amp;mpshare=1&amp;scene=1&amp;srcid=0114tyHUo8brnZ60FbDiTLki&amp;sharer_sharetime=1642647117910&amp;sharer_shareid=3720a8d166d2fb213015b4eb03622fb5&amp;exportkey=AfsfGYVXONs%2BLSgR5lg6xWw%3D&amp;acctmode=0&amp;pass_ticket=PQVpBBKPyF9S06E5OmnQHdJ6tDlGX0TUzz%2BDLCyl%2FrYZd89fDIXQjbsvoTc01g0I&amp;wx_header=0#rd" target="_blank" rel="noreferrer">前端瓶子君--干货！移动端真机调试指南，对调试说easy</a></p><p>1、谷歌浏览器或者Edge浏览器 + Android</p><p>首先在chrome安装ADB Plugin</p><p>chrome中输入 chrome://inspect</p><p>通过数据线连接你的电脑和 Android 手机，打开USB的调试模式</p><p>就可以在上面的页面中看到自己的设备：</p><p><img src="'+n+`" alt="Image text"></p><p>点击inspect</p><p>然后就可以欢乐地调试了，和使用谷歌调试pc端一样，可惜ios不适用 推荐指数4颗星</p><p>备注：如果手机连接成功，但一直没有inspect内容出现，可以在浏览器输入： chrome://inspect/#devices</p><p>2、vConsole、eruda等调试库</p><p>这个方法需要在页面中插入一段 JS 脚本，这里以vConsole为例，导入vconsole.min.js，并实例化，注实例化代码最好放在头部，以便能一开始就能劫持内容：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./vconsole.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    // 初始化</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    new VConsole();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>或</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm i vconsole</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> VConsole </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vconsole&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VConsole</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="`+p+'" alt="Image text"></p><p><img src="'+t+`" alt="Image text"></p><p>优点：方便，可查看console、network、elements等；</p><p>缺点：css调试不友好，console会劫持consloe的打印，不能定位到打印的代码位置，需要额外加载js脚本</p><p>推荐指数3颗星</p><p>3、whistle</p><p>安卓、ios都能调试，跨平台、代理抓包、H5调试、debugger、请求劫持、HTTPS支持、WebSocket数据捕获等，功能非常强大。weinre是用node编写的，使用npm来进行安装</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install -g whistle</span></span>
<span class="line"><span></span></span>
<span class="line"><span>w2 start</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="`+l+'" alt="Image text"></p><p>跨平台、抓包、 DOM、Console、Network 等，功能非常强大。</p><p>推荐指数5颗星</p><p>4、Mobile Debug</p><p>功能和whistle非常相似</p><p>需要把手机在同一个局域网wifi设置代理，便可使用，https需要增加安装证书步骤。</p><p>推荐指数5颗星</p>',32),h=[o];function c(d,k,m,g,b,E){return a(),i("div",null,h)}const v=s(r,[["render",c]]);export{_ as __pageData,v as default};
