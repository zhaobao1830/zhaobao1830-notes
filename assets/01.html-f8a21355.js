import{_ as n,M as s,p as d,q as r,R as e,t as a,N as l,a1 as c}from"./framework-b7c41258.js";const t={},m=e("h1",{id:"集群",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#集群","aria-hidden":"true"},"#"),a(" 集群")],-1),h={href:"https://coding.imooc.com/lesson/162.html#mid=9011",target:"_blank",rel:"noopener noreferrer"},v=c(`<h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3><p>（一）、提高服务的性能，并发能力以及高可用性</p><p>高可用性：nginx下挂多台tomcat，当tomcat1挂掉的时候，就可以把这个节点从tomcat配置集群中摘掉，把nginx达到可用的tomcat机器上，这样就不影响提供的服务，tomcat就能带来一定的高可用性</p><p>（二）、提供项目架构的横向扩展能力</p><h3 id="实现原理" tabindex="-1"><a class="header-anchor" href="#实现原理" aria-hidden="true">#</a> 实现原理</h3><p>通过nginx负载均衡进行请求转发</p><h3 id="负载均衡的策略和特点" tabindex="-1"><a class="header-anchor" href="#负载均衡的策略和特点" aria-hidden="true">#</a> 负载均衡的策略和特点</h3><h4 id="轮询-默认" tabindex="-1"><a class="header-anchor" href="#轮询-默认" aria-hidden="true">#</a> 轮询（默认）</h4><p>优点：实现简单</p><p>缺点：不考虑每台服务器处理能力</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream www.happymmall.com{
       
       server www.happymmall.com:8080;
       
       server www.happymmall.com:9080;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="权重" tabindex="-1"><a class="header-anchor" href="#权重" aria-hidden="true">#</a> 权重</h4><p>优点：考虑了每台服务器处理能力的不同</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream www.happymmall.com{
       
       server www.happymmall.com:8080 weight=15;
       
       server www.happymmall.com:9080 weight=10;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>10和15不是具体的值，只是权重，表示8080服务器是9080的1.5倍</p><h4 id="ip-hash" tabindex="-1"><a class="header-anchor" href="#ip-hash" aria-hidden="true">#</a> ip hash</h4><p>优点：能实现同一个用户访问同一个服务器</p><p>缺点：根据ip hash不一定平均</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream www.happymmall.com{
       
       ip_hash;
       
       server www.happymmall.com:8080 weight=15;
       
       server www.happymmall.com:9080 weight=10;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="url-hash-第三方" tabindex="-1"><a class="header-anchor" href="#url-hash-第三方" aria-hidden="true">#</a> url hash(第三方)</h4><p>优点：能实现同一个服务访问同一个服务器</p><p>缺点：根据url hash分配请求会不平均，请求频繁的url会请求到同一个服务器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream www.happymmall.com{
       
       server www.happymmall.com:8080 weight=15;
       
       server www.happymmall.com:9080 weight=10;
       
       hash $request_url;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如登录和获取商品列表，这是俩个url，可以通过url hash，将url绑定到同一个服务器，之后再请求这个url，还是之前的服务器</p><p>使用url hash需要装插件</p><h4 id="fair-第三方" tabindex="-1"><a class="header-anchor" href="#fair-第三方" aria-hidden="true">#</a> fair(第三方)</h4><p>特点：按后端服务器的响应时间来分配请求，响应时间短的优先分配</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream www.happymmall.com{
       
       server www.happymmall.com:8080 weight=15;
       
       server www.happymmall.com:9080 weight=10;
       
       fair;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function u(p,o){const i=s("ExternalLinkIcon");return d(),r("div",null,[m,e("p",null,[a("地址："),e("a",h,[a("https://coding.imooc.com/lesson/162.html#mid=9011"),l(i)])]),v])}const w=n(t,[["render",u],["__file","01.html.vue"]]);export{w as default};
