import{_ as n,o as p,c as a,R as s}from"./chunks/framework.1nBpG9uI.js";const e="/zhaobao1830-notes/assets/01.BXYZnruq.png",t="/zhaobao1830-notes/assets/02.LCM9A_1X.png",o="/zhaobao1830-notes/assets/03.YcXwi6xZ.png",q=JSON.parse('{"title":"pnpm add -g pnpm相关问题","description":"","frontmatter":{},"headers":[],"relativePath":"nodeKnowledge/03.md","filePath":"nodeKnowledge/03.md","lastUpdated":1720409829000}'),i={name:"nodeKnowledge/03.md"},l=s(`<h1 id="pnpm-add-g-pnpm相关问题" tabindex="-1">pnpm add -g pnpm相关问题 <a class="header-anchor" href="#pnpm-add-g-pnpm相关问题" aria-label="Permalink to &quot;pnpm add -g pnpm相关问题&quot;">​</a></h1><h2 id="使用pnpm的时候-提示有最新版本-执行pnpm-add-g-pnpm后报如下错误" tabindex="-1">使用pnpm的时候，提示有最新版本，执行pnpm add -g pnpm后报如下错误： <a class="header-anchor" href="#使用pnpm的时候-提示有最新版本-执行pnpm-add-g-pnpm后报如下错误" aria-label="Permalink to &quot;使用pnpm的时候，提示有最新版本，执行pnpm add -g pnpm后报如下错误：&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ERROR Unable to find the global bin directory</span></span>
<span class="line"><span>Run &quot;pnpm setup&quot; to create it automatically, </span></span>
<span class="line"><span>or set the global-bin-dir setting, </span></span>
<span class="line"><span>or the PNPM_HOME env variable. The global bin directory should be in the PATH.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="解决办法" tabindex="-1">解决办法 <a class="header-anchor" href="#解决办法" aria-label="Permalink to &quot;解决办法&quot;">​</a></h3><p>1、在cmd中执行以下命令</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm config set store-dir &quot;D:\\pnpm\\storeDir&quot; # pnpm全局仓库路径(类似 .git 仓库)</span></span>
<span class="line"><span>pnpm config set global-dir &quot;D:\\pnpm\\globalDir&quot; # pnpm全局安装路径</span></span>
<span class="line"><span>pnpm config set global-bin-dir &quot;D:\\pnpm\\globalBinDir&quot; # pnpm全局bin路径</span></span>
<span class="line"><span>pnpm config set state-dir &quot;D:\\pnpm\\state&quot; # pnpm创建pnpm-state.json文件的目录</span></span>
<span class="line"><span>pnpm config set cache-dir &quot;D:\\pnpm\\cache&quot; # pnpm全局缓存路径</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>2、在环境变量中配置globalBinDir路径</p><p><img src="`+e+'" alt="Image text"></p><p>3、执行pnpm add -g pnpm更新pnpm</p><h2 id="pnpm-add-g-pnpm升级最新版本失败" tabindex="-1">pnpm add -g pnpm升级最新版本失败 <a class="header-anchor" href="#pnpm-add-g-pnpm升级最新版本失败" aria-label="Permalink to &quot;pnpm add -g pnpm升级最新版本失败&quot;">​</a></h2><p>执行<code>pnpm add -g pnpm</code>成功，使用<code>pnpm -v</code>的时候还是老版本</p><h3 id="解决办法-1" tabindex="-1">解决办法 <a class="header-anchor" href="#解决办法-1" aria-label="Permalink to &quot;解决办法&quot;">​</a></h3><p>由于安装有多个node版本，所以pnpm有多个安装地址</p><p>执行<code>where pnpm</code>查看电脑里pnpm存在地址，发现除了D盘中pnpm安装的地址外，在C盘中也有pnpm</p><p><img src="'+t+'" alt="Image text"></p><p>在C:\\Program Files\\nodejs中，将pnpm相关文件全部删去，并重新执行pnpm add -g pnpm，这样就可以了</p><p><img src="'+o+'" alt="Image text"></p>',17),d=[l];function r(m,c,b,h,g,u){return p(),a("div",null,d)}const f=n(i,[["render",r]]);export{q as __pageData,f as default};
