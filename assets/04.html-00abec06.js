import{_ as a,p as e,q as r,a1 as t}from"./framework-b7c41258.js";const d="/zhaobao1830-notes/assets/01-6fec169b.png",s={},c=t('<h1 id="jar和war对比" tabindex="-1"><a class="header-anchor" href="#jar和war对比" aria-hidden="true">#</a> jar和war对比</h1><h2 id="打包方式" tabindex="-1"><a class="header-anchor" href="#打包方式" aria-hidden="true">#</a> 打包方式</h2><p>jar文件是将所有的资源文件和Java类文件打包成一个jar文件</p><p>war文件则是将Web应用程序的所有资源文件和Java类文件打包成一个war文件</p><h2 id="部署方式" tabindex="-1"><a class="header-anchor" href="#部署方式" aria-hidden="true">#</a> 部署方式</h2><p>jar文件部署需要当前服务器有java环境就可以，在cmd中，切换到jar包所在目录，执行命令 java -jar xxx.jar</p><p>war需要放到tomcat的webapps文件夹，启动tomcat进行部署</p><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><p>jar适用于适用前后端分离项目，项目里只包含java相关代码</p><p>war适用于包含web代码的项目，比如jsp、html</p><div class="custom-container tip"><p class="custom-container-title">备注</p><p>SpringBoot项目在新建的时候，打包方式可以选择jar和war俩种，一般选择的是jar打包方式</p></div><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2><p><code>Please refer to dump files (if any exist) [date].dump, [date]-jvmRun[N].dump and [date]</code></p><p>Maven打包项目的时候，会进行代码测试，测试不通过就会报上面的错误，解决办法是：点击右上角的关闭测试按钮</p><p><img src="'+d+'" alt="Image text"></p>',15),i=[c];function n(h,p){return e(),r("div",null,i)}const l=a(s,[["render",n],["__file","04.html.vue"]]);export{l as default};
