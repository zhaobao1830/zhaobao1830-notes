import{_ as a,o as e,c as s,R as t}from"./chunks/framework.3AywRrgj.js";const i="/zhaobao1830-notes/assets/01.KextNZbw.png",n="/zhaobao1830-notes/assets/02.C3hge4Xr.png",v=JSON.parse('{"title":"修改maven仓库路径","description":"","frontmatter":{},"headers":[],"relativePath":"mavenNotes/02.md","filePath":"mavenNotes/02.md","lastUpdated":1703836988000}'),o={name:"mavenNotes/02.md"},p=t('<h1 id="修改maven仓库路径" tabindex="-1">修改maven仓库路径 <a class="header-anchor" href="#修改maven仓库路径" aria-label="Permalink to &quot;修改maven仓库路径&quot;">​</a></h1><p>maven默认仓库路径在C盘\\用户名.m2文件夹里，时间越长文件夹越大，所以换到其他文件夹</p><p>自定义的仓库文件夹：E:\\apache-maven-3.2.5\\localRepository</p><p>打开E:\\apache-maven-3.2.5\\conf\\settings文件</p><p><img src="'+i+'" alt="Image text"></p><p>找到：localRepository，修改为自定义的位置</p><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">localRepository</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;E:\\apache-maven-3.2.5\\localRepository&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">localRepository</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在IDEA里面进行配置</p><p><img src="'+n+'" alt="Image text"></p>',9),l=[p];function r(c,h,m,d,_,g){return e(),s("div",null,l)}const E=a(o,[["render",r]]);export{v as __pageData,E as default};
