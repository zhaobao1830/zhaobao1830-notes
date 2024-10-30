import{_ as a,o as t,c as e,R as o}from"./chunks/framework.1nBpG9uI.js";const s="/zhaobao1830-notes/assets/01.QzWdrfG-.png",r="/zhaobao1830-notes/assets/02.kWPnEIYB.png",f=JSON.parse('{"title":"对参数使用CryptoJS进行加密，使用axios传递到后端解密报错","description":"","frontmatter":{},"headers":[],"relativePath":"vueNotes/34.md","filePath":"vueNotes/34.md","lastUpdated":1730253044000}'),i={name:"vueNotes/34.md"},n=o('<h1 id="对参数使用cryptojs进行加密-使用axios传递到后端解密报错" tabindex="-1">对参数使用CryptoJS进行加密，使用axios传递到后端解密报错 <a class="header-anchor" href="#对参数使用cryptojs进行加密-使用axios传递到后端解密报错" aria-label="Permalink to &quot;对参数使用CryptoJS进行加密，使用axios传递到后端解密报错&quot;">​</a></h1><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><p>对参数使用CryptoJS进行加密，传递到后端解密报错</p><h2 id="原因" tabindex="-1">原因 <a class="header-anchor" href="#原因" aria-label="Permalink to &quot;原因&quot;">​</a></h2><p>axios设置的content-type为application/json;charset=UTF-8，<strong>在传递参数的时候转换成字符串，加密后的参数会在首尾添加双引号</strong></p><p><img src="'+s+'" alt="Image text"></p><p>点击view source查看</p><p><img src="'+r+'" alt="Image text"></p><h2 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决&quot;">​</a></h2><p>后端接收到参数，将首尾的双引号去掉后解密</p><div class="tip custom-block"><p class="custom-block-title">备注</p><p>axios低版本（0.2版本），content-type为application/json;charset=UTF-8时，传递参数不会在首尾加双引号，现在还不知道为什么</p></div>',11),c=[n];function p(l,_,d,h,m,u){return t(),e("div",null,c)}const b=a(i,[["render",p]]);export{f as __pageData,b as default};