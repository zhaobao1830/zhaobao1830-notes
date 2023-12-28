import{_ as e,M as p,p as o,q as c,R as n,t as s,N as i,a1 as a}from"./framework-b7c41258.js";const l={},u=a('<h1 id="如何访问springboot项目上传本地的资源" tabindex="-1"><a class="header-anchor" href="#如何访问springboot项目上传本地的资源" aria-hidden="true">#</a> 如何访问springBoot项目上传本地的资源</h1><h2 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h2><p>springBoot项目上传的资源保存在本地，通过连接访问报错</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2>',4),r={href:"https://github.com/zhaobao1830/misscmszb",target:"_blank",rel:"noopener noreferrer"},d=a(`<p>在webMvc配置文件里重写addResourceHandlers方法，对静态资源访问进行映射</p><p>WebConfiguration</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebConfiguration</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${cms.file.store-dir:assets/}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> dir<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${cms.file.serve-path:assets/**}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> servePath<span class="token punctuation">;</span>
    
        <span class="token doc-comment comment">/**
     * 访问静态资源文件配置
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addResourceHandlers</span><span class="token punctuation">(</span><span class="token class-name">ResourceHandlerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// classpath: or file:</span>
        <span class="token comment">// 如果静态资源访问的路径是getDirServePath()返回的值，就映射到访问本地的addResourceLocations的参数路径上</span>
        registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token function">getDirServePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">&quot;file:&quot;</span> <span class="token operator">+</span> <span class="token function">getAbsDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
   <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">getDirServePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// assets/**</span>
        <span class="token comment">// assets/</span>
        <span class="token comment">// /usr/local/assets/</span>
        <span class="token comment">// assets</span>
        <span class="token keyword">return</span> servePath<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
     <span class="token doc-comment comment">/**
     * 获得文件夹的绝对路径
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">getAbsDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">FileUtil</span><span class="token punctuation">.</span><span class="token function">isAbsolute</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> dir<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">String</span> cmd <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;user.dir&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Path</span> path <span class="token operator">=</span> <span class="token class-name">FileSystems</span><span class="token punctuation">.</span><span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> dir<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">toAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function k(v,m){const t=p("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[s("项目："),n("a",r,[s("misscmszb/WebConfiguration"),i(t)])]),d])}const h=e(l,[["render",k],["__file","06.html.vue"]]);export{h as default};
