import{_ as n,p as a,q as s,a1 as e}from"./framework-b7c41258.js";const i={},p=e(`<h1 id="项目启动的时候-找不到mapper文件" tabindex="-1"><a class="header-anchor" href="#项目启动的时候-找不到mapper文件" aria-hidden="true">#</a> 项目启动的时候，找不到mapper文件</h1><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Description:

Field stuMapper in com.zb.service.impl.StuServiceImpl required a bean of type &#39;com.zb.mapper.StuMapper&#39; that could not be found.

The injection point has the following annotations:
    - @org.springframework.beans.factory.annotation.Autowired(required=true)


Action:

Consider defining a bean of type &#39;com.zb.mapper.StuMapper&#39; in your configuration.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原因是：mapper没有注入到容器中</p><p>解决办法是：在启动文件里，添加@MapperScan(basePackages = &quot;com.zb.mapper&quot;)，basePackages 是mapper所在的文件夹</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span>basePackages <span class="token operator">=</span> <span class="token string">&quot;com.zb.mapper&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Application</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[p];function c(o,l){return a(),s("div",null,t)}const u=n(i,[["render",c],["__file","01.html.vue"]]);export{u as default};
