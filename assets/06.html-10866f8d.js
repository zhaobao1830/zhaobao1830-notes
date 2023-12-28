import{_ as e,p as l,q as a,a1 as i}from"./framework-b7c41258.js";const r={},p=i('<h1 id="webpack-vs-rollup" tabindex="-1"><a class="header-anchor" href="#webpack-vs-rollup" aria-hidden="true">#</a> Webpack VS Rollup</h1><h2 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> Webpack</h2><p>大型SPA项目的模块化构建，也就是我们常说的web应用</p><ul><li>通过各种Loader处理各种各样的静态资源</li><li>通过各种插件Plugins对整体文件进行一些处理</li><li>Code splitting将公共模块进行提取</li><li>提供一个webpack-dev-server，进行本地开发</li><li>支持HMR模块热替换</li></ul><h2 id="rollup" tabindex="-1"><a class="header-anchor" href="#rollup" aria-hidden="true">#</a> Rollup</h2><p>Rollup设计之初就是面向ES module的，构建出结构扁平、性能出众的类库</p><h2 id="对比" tabindex="-1"><a class="header-anchor" href="#对比" aria-hidden="true">#</a> 对比</h2><p>构建App应用时，webpack比较合适，如果是类库（纯js项目），rollup更加合适</p><p>Webpack的优势：</p><ul><li>强大的生态插件</li><li>面向开发应用的特性支持HMR、按需加载、公共模块提取</li><li>简化Web开发的环节，图片自动转base64，资源的缓存（添加chunkId）</li></ul><p>Rollup的优势：</p><ul><li>构建高性能的模块文件，这正是类库需要的</li><li>编译出来的代码可读性好，内容更小，执行效率更高</li><li>配置比较简单</li></ul>',12),c=[p];function d(o,h){return l(),a("div",null,c)}const s=e(r,[["render",d],["__file","06.html.vue"]]);export{s as default};
