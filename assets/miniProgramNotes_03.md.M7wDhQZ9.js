import{_ as s,o as n,c as a,R as e}from"./chunks/framework.1nBpG9uI.js";const g=JSON.parse('{"title":"scroll-view使用enable-flex，竖直方向可能会增加布局空间的高度","description":"","frontmatter":{},"headers":[],"relativePath":"miniProgramNotes/03.md","filePath":"miniProgramNotes/03.md","lastUpdated":1744102127000}'),l={name:"miniProgramNotes/03.md"},p=e(`<h1 id="scroll-view使用enable-flex-竖直方向可能会增加布局空间的高度" tabindex="-1">scroll-view使用enable-flex，竖直方向可能会增加布局空间的高度 <a class="header-anchor" href="#scroll-view使用enable-flex-竖直方向可能会增加布局空间的高度" aria-label="Permalink to &quot;scroll-view使用enable-flex，竖直方向可能会增加布局空间的高度&quot;">​</a></h1><p>微信小程序和uniapp里的scroll-view组件，不要使用enable-flex，如果使用了，在竖直方向可能会增加布局空间的高度</p><p>有俩个解决办法：</p><p>一、在最外层设置高度。缺点是之后高度变了，还得再次修改</p><p>二、去掉enable-flex，在内部加一个view组件，在view组件上设置flex布局（推荐）</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;scroll-view scroll-x class=&quot;scroll-view&quot;&gt;</span></span>
<span class="line"><span>        &lt;view class=&quot;inner&quot;&gt;</span></span>
<span class="line"><span>            &lt;block wx:for=&quot;{{spuList}}&quot; wx:key=&quot;index&quot;&gt;</span></span>
<span class="line"><span>                &lt;view data-spu-id=&quot;{{item.id}}&quot; bind:tap=&quot;onTap&quot; class=&quot;spu-container&quot;&gt;</span></span>
<span class="line"><span>                    &lt;image class=&quot;spu-img&quot; src=&quot;{{item.img}}&quot;&gt;&lt;/image&gt;</span></span>
<span class="line"><span>                    &lt;text class=&quot;spu-text&quot;&gt;{{item.title.length&gt;=8?s.substring(item.title,0,7)+&#39;...&#39;:item.title}}&lt;/text&gt;</span></span>
<span class="line"><span>                    &lt;l-price</span></span>
<span class="line"><span>                            l-value-class=&quot;price-value&quot;</span></span>
<span class="line"><span>                            l-unit-class=&quot;price-unit&quot;</span></span>
<span class="line"><span>                            value=&quot;{{item.price}}&quot;&gt;</span></span>
<span class="line"><span>                    &lt;/l-price&gt;</span></span>
<span class="line"><span>                &lt;/view&gt;</span></span>
<span class="line"><span>            &lt;/block&gt;</span></span>
<span class="line"><span>        &lt;/view&gt;</span></span>
<span class="line"><span>    &lt;/scroll-view&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.scroll-view{</span></span>
<span class="line"><span>  margin-top:28rpx;</span></span>
<span class="line"><span>  display:flex;</span></span>
<span class="line"><span>  flex-direction:row;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.inner{</span></span>
<span class="line"><span>  display:flex;</span></span>
<span class="line"><span>  flex-direction:row;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,7),i=[p];function t(r,c,o,u,b,m){return n(),a("div",null,i)}const v=s(l,[["render",t]]);export{g as __pageData,v as default};
