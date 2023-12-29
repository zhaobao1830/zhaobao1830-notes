import{_ as s,o as a,c as i,R as e}from"./chunks/framework.3AywRrgj.js";const g=JSON.parse('{"title":"小程序页面之间如何传递数据","description":"","frontmatter":{},"headers":[],"relativePath":"miniProgramNotes/08.md","filePath":"miniProgramNotes/08.md","lastUpdated":1703836988000}'),n={name:"miniProgramNotes/08.md"},t=e(`<h1 id="小程序页面之间如何传递数据" tabindex="-1">小程序页面之间如何传递数据 <a class="header-anchor" href="#小程序页面之间如何传递数据" aria-label="Permalink to &quot;小程序页面之间如何传递数据&quot;">​</a></h1><h2 id="直接在url里传递" tabindex="-1">直接在url里传递 <a class="header-anchor" href="#直接在url里传递" aria-label="Permalink to &quot;直接在url里传递&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">navigateTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`/pages/detail/detail?pid=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">spuId</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      })</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>少量数据建议使用这种方法传递</p><h2 id="本地缓存" tabindex="-1">本地缓存 <a class="header-anchor" href="#本地缓存" aria-label="Permalink to &quot;本地缓存&quot;">​</a></h2><p>使用<code>setStorageSync</code>和<code>getStorageSync</code></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setStorageSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;key&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;value&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getStorageSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;key&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>大量数据的时使用这种方法</p><h2 id="eventchannel" tabindex="-1">EventChannel <a class="header-anchor" href="#eventchannel" aria-label="Permalink to &quot;EventChannel&quot;">​</a></h2><p><a href="https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.html" target="_blank" rel="noreferrer">EventChannel</a>是小程序新加的机制， 实现页面间事件通信</p><p>大量数据时使用这种方法（实际项目中，上面俩种方法用的多，这种方法没用过）</p><h2 id="triggerevent" tabindex="-1">triggerEvent <a class="header-anchor" href="#triggerevent" aria-label="Permalink to &quot;triggerEvent&quot;">​</a></h2><p><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html" target="_blank" rel="noreferrer">triggerEvent</a>自定义组件触发事件，将数据传递给父组件，类似于vue中的$emit</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">triggerEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;customevent&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {}, { bubbles: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, composed: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>bubbles：事件是否冒泡</p><p>composed：事件是否可以穿越组件边界，为false时，只能传递到父组件；为true时，可以传递到更上层的组件</p>`,16),l=[t];function r(p,h,d,k,o,c){return a(),i("div",null,l)}const u=s(n,[["render",r]]);export{g as __pageData,u as default};
