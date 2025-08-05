import{_ as s,o as n,c as a,R as p}from"./chunks/framework.1nBpG9uI.js";const e="/zhaobao1830-notes/assets/01.hLUKM9IU.png",l="/zhaobao1830-notes/assets/02.5gfaf1VD.png",f=JSON.parse('{"title":"uniapp微信公众号实现pdf预览","description":"","frontmatter":{},"headers":[],"relativePath":"uniappNotes/11.md","filePath":"uniappNotes/11.md","lastUpdated":1754385677000}'),i={name:"uniappNotes/11.md"},t=p('<h1 id="uniapp微信公众号实现pdf预览" tabindex="-1">uniapp微信公众号实现pdf预览 <a class="header-anchor" href="#uniapp微信公众号实现pdf预览" aria-label="Permalink to &quot;uniapp微信公众号实现pdf预览&quot;">​</a></h1><h2 id="需求" tabindex="-1">需求 <a class="header-anchor" href="#需求" aria-label="Permalink to &quot;需求&quot;">​</a></h2><p>现在有pdf链接地址，需要在微信公众号里预览</p><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><p>1、下载<a href="https://mozilla.github.io/pdf.js/" target="_blank" rel="noreferrer">pdf.js</a>并解压</p><div class="tip custom-block"><p class="custom-block-title">备注</p><p>新版的pdf.js有问题，建议下载旧版的</p><p>3版本使用的时候，安卓可以正常预览，ios报错</p><p>现在项目中使用的是2版本</p></div><p>2、将解压的文件放到static下，起名为pdf（这个自己定义）</p><p><img src="'+e+`" alt="Image text"></p><div class="tip custom-block"><p class="custom-block-title">备注</p><p>必须放到static文件夹下，不然会获取不到</p></div><p>3、新建vue组件</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;physical-examination-detail normal-view&quot;&gt;</span></span>
<span class="line"><span>    &lt;view class=&quot;physical-examination-detail-container absolute-container&quot;&gt;</span></span>
<span class="line"><span>      &lt;web-view v-if=&quot;url&quot; :src=&quot;url&quot;&gt;&lt;/web-view&gt;</span></span>
<span class="line"><span>    &lt;/view&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  import NavBarComponent from &#39;@/components/base/NavBar/NavBarComponent.vue&#39;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  export default {</span></span>
<span class="line"><span>    name: &quot;PhysicalExaminationDetail&quot; ,</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>      NavBarComponent</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>      return {</span></span>
<span class="line"><span>        viewerUrl: &#39;/static/pdf/web/viewer.html&#39;,</span></span>
<span class="line"><span>        url: &#39;&#39;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    onLoad(options) {</span></span>
<span class="line"><span>      this.url = this.viewerUrl + &#39;?file=&#39; + \`http://dhszyy.net/reporDetail/\${options.examNo}\`</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span>.physical-examination-detail {</span></span>
<span class="line"><span>  .physical-examination-detail-container {</span></span>
<span class="line"><span>    top: 0;</span></span>
<span class="line"><span>    bottom: 0;</span></span>
<span class="line"><span>    background-color: $colorless_11;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>(1)、在data里定义viewerUrl（pdf.js里viewer.html的路径）和url（pdf展示的完整路径）</p><p>(2)、使用uniapp的<a href="https://uniapp.dcloud.net.cn/component/web-view.html#web-view" target="_blank" rel="noreferrer">web-view</a>组件进行展示</p><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><p>1、file origin does not match viewer&#39;s错误</p><p>在 web/viewer.mjs 或者 web/viewer.js 中搜索 file origin does not match viewer&#39;s 并注释掉，不然会报跨域错误。</p><p><img src="`+l+'" alt="Image text"></p>',17),r=[t];function c(o,b,u,m,d,h){return n(),a("div",null,r)}const _=s(i,[["render",c]]);export{f as __pageData,_ as default};
