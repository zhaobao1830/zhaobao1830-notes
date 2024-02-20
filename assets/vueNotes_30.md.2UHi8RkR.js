import{_ as n,o as s,c as a,R as p}from"./chunks/framework.1nBpG9uI.js";const e="/zhaobao1830-notes/assets/01.g2SXWKCo.png",h=JSON.parse('{"title":"ElementPlusError: [ElOnlyChild] no valid child node found","description":"","frontmatter":{},"headers":[],"relativePath":"vueNotes/30.md","filePath":"vueNotes/30.md","lastUpdated":1708419390000}'),l={name:"vueNotes/30.md"},t=p('<h1 id="elementpluserror-elonlychild-no-valid-child-node-found" tabindex="-1">ElementPlusError: [ElOnlyChild] no valid child node found <a class="header-anchor" href="#elementpluserror-elonlychild-no-valid-child-node-found" aria-label="Permalink to &quot;ElementPlusError: [ElOnlyChild] no valid child node found&quot;">​</a></h1><h2 id="错误信息" tabindex="-1">错误信息 <a class="header-anchor" href="#错误信息" aria-label="Permalink to &quot;错误信息&quot;">​</a></h2><p><img src="'+e+`" alt="Image text"></p><h2 id="原因分析" tabindex="-1">原因分析 <a class="header-anchor" href="#原因分析" aria-label="Permalink to &quot;原因分析&quot;">​</a></h2><p>该组件里使用了el-tooltip组件，在el-tooltip组件的子组件上有if判断，当if为false的时候，子组件为空，就会报这个错误</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;el-tooltip</span></span>
<span class="line"><span>  :disabled=&quot;!disabled&quot;</span></span>
<span class="line"><span>      :content=&quot;tipContent ? tipContent : &#39;不可新增&#39;&quot;</span></span>
<span class="line"><span>      placement=&quot;top&quot;</span></span>
<span class="line"><span>      effect=&quot;dark&quot;</span></span>
<span class="line"><span>    &gt;</span></span>
<span class="line"><span>      &lt;his-button</span></span>
<span class="line"><span>        v-if=&quot;type === &#39;add&#39;&quot;</span></span>
<span class="line"><span>        :hotkey=&quot;hotkey&quot;</span></span>
<span class="line"><span>        type=&quot;primary&quot;</span></span>
<span class="line"><span>        :disabled=&quot;disabled&quot;</span></span>
<span class="line"><span>        :name=&quot;name ? name : &#39;新增&#39;&quot;</span></span>
<span class="line"><span>        v-bind=&quot;$attrs&quot;</span></span>
<span class="line"><span>        suffix-icon=&quot;pub_add&quot;</span></span>
<span class="line"><span>        :is-loading=&quot;false&quot;</span></span>
<span class="line"><span>        @click=&quot;onclick&quot;</span></span>
<span class="line"><span>      /&gt;    </span></span>
<span class="line"><span>&lt;/el-tooltip&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="解决办法" tabindex="-1">解决办法 <a class="header-anchor" href="#解决办法" aria-label="Permalink to &quot;解决办法&quot;">​</a></h2><p>将if判断换到el-tooltip上</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;el-tooltip</span></span>
<span class="line"><span>   v-if=&quot;type === &#39;add&#39;&quot;</span></span>
<span class="line"><span>  :disabled=&quot;!disabled&quot;</span></span>
<span class="line"><span>  :content=&quot;tipContent ? tipContent : &#39;不可新增&#39;&quot;</span></span>
<span class="line"><span>  placement=&quot;top&quot;</span></span>
<span class="line"><span>  effect=&quot;dark&quot;    </span></span>
<span class="line"><span>    &gt;</span></span>
<span class="line"><span>      &lt;his-button</span></span>
<span class="line"><span>        :hotkey=&quot;hotkey&quot;</span></span>
<span class="line"><span>        type=&quot;primary&quot;</span></span>
<span class="line"><span>        :disabled=&quot;disabled&quot;</span></span>
<span class="line"><span>        :name=&quot;name ? name : &#39;新增&#39;&quot;</span></span>
<span class="line"><span>        v-bind=&quot;$attrs&quot;</span></span>
<span class="line"><span>        suffix-icon=&quot;pub_add&quot;</span></span>
<span class="line"><span>        :is-loading=&quot;false&quot;</span></span>
<span class="line"><span>        @click=&quot;onclick&quot;</span></span>
<span class="line"><span>      /&gt;    </span></span>
<span class="line"><span>&lt;/el-tooltip&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">备注</p><p>会引发上面问题的组件有el-popover、el-tooltip</p></div>`,10),i=[t];function o(r,c,u,d,b,m){return s(),a("div",null,i)}const f=n(l,[["render",o]]);export{h as __pageData,f as default};
