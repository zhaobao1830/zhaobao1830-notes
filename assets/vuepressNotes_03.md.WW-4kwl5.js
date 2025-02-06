import{_ as s,o as n,c as a,R as p}from"./chunks/framework.1nBpG9uI.js";const e="/zhaobao1830-notes/assets/01.svcQGxJG.png",v=JSON.parse('{"title":"项目在github上自动部署，执行Install pnpm报错","description":"","frontmatter":{},"headers":[],"relativePath":"vuepressNotes/03.md","filePath":"vuepressNotes/03.md","lastUpdated":1734401285000}'),l={name:"vuepressNotes/03.md"},i=p('<h1 id="项目在github上自动部署-执行install-pnpm报错" tabindex="-1">项目在github上自动部署，执行Install pnpm报错 <a class="header-anchor" href="#项目在github上自动部署-执行install-pnpm报错" aria-label="Permalink to &quot;项目在github上自动部署，执行Install pnpm报错&quot;">​</a></h1><h2 id="问题" tabindex="-1">问题： <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题：&quot;">​</a></h2><p>在使用github actions部署博客时，突然出现以下报错：</p><p><img src="'+e+`" alt="Image text"></p><h2 id="解决" tabindex="-1">解决： <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决：&quot;">​</a></h2><p>1、查看docs.yml里pnpm和node的配置</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>      # 安装 pnpm</span></span>
<span class="line"><span>      - name: Install pnpm</span></span>
<span class="line"><span>        uses: pnpm/action-setup@v2</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          version: 8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      # 设置 node 版本</span></span>
<span class="line"><span>      - name: Set node version to 18</span></span>
<span class="line"><span>        uses: actions/setup-node@v3</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          node-version: 18</span></span>
<span class="line"><span>          cache: &#39;pnpm&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>可以看到pnpm版本是8，node版本是18</p><p>2、将pnpm版本升到9，node版本升到20，测试发现还是报错</p><p>3、在github上的pnpm的<a href="https://github.com/pnpm/action-setup/issues/135#issuecomment-2206861174" target="_blank" rel="noreferrer">Issues</a>里找到解决办法</p><p>将<code>pnpm/action-setup@v2</code>改为<code>pnpm/action-setup@v4</code>成功解决问题</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>      # 安装 pnpm</span></span>
<span class="line"><span>      - name: Install pnpm</span></span>
<span class="line"><span>        uses: pnpm/action-setup@v4</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          version: 9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      # 设置 node 版本</span></span>
<span class="line"><span>      - name: Set node version to 18</span></span>
<span class="line"><span>        uses: actions/setup-node@v3</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          node-version: 18</span></span>
<span class="line"><span>          cache: &#39;pnpm&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,12),t=[i];function r(c,o,m,b,u,d){return n(),a("div",null,t)}const _=s(l,[["render",r]]);export{v as __pageData,_ as default};
