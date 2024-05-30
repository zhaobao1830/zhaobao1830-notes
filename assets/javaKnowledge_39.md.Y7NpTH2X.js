import{_ as a,o as e,c as t,R as r}from"./chunks/framework.1nBpG9uI.js";const q=JSON.parse('{"title":"四层/七层负载均衡","description":"","frontmatter":{},"headers":[],"relativePath":"javaKnowledge/39.md","filePath":"javaKnowledge/39.md","lastUpdated":1717056127000}'),i={name:"javaKnowledge/39.md"},h=r('<h1 id="四层-七层负载均衡" tabindex="-1">四层/七层负载均衡 <a class="header-anchor" href="#四层-七层负载均衡" aria-label="Permalink to &quot;四层/七层负载均衡&quot;">​</a></h1><h2 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;作用&quot;">​</a></h2><p>1、可以提高吞吐量，提高服务性能，以及服务器的处理性能；</p><p>2、可以提高服务器计算能力，使网络设备更加灵活</p><p>3、当并发大量请求的时候，负载均衡可以将请求分配到计算机的多个节点上，从而减轻服务器的并发压力</p><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><h3 id="四层负载均衡-传输层-tcp-udp-常用-lvs" tabindex="-1">四层负载均衡 (传输层 : TCP/UDP) (常用 LVS) <a class="header-anchor" href="#四层负载均衡-传输层-tcp-udp-常用-lvs" aria-label="Permalink to &quot;四层负载均衡 (传输层  : TCP/UDP) (常用 LVS)&quot;">​</a></h3><h4 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h4><p>四层负载均衡是基于IP+端口的负载均衡</p><h4 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h4><p>通过转发请求到后台服务器</p><h4 id="长连接" tabindex="-1">长连接 <a class="header-anchor" href="#长连接" aria-label="Permalink to &quot;长连接&quot;">​</a></h4><p>记录当前请求是由那一台服务器处理的，并且之后这个客户端发送的请求将会由这台服务器处理</p><h4 id="f5负载均衡" tabindex="-1">F5负载均衡 <a class="header-anchor" href="#f5负载均衡" aria-label="Permalink to &quot;F5负载均衡&quot;">​</a></h4><p>基于硬件的硬负载均衡，功能强，性能高，稳定性好，贵，商业级别的负载均衡；</p><h4 id="lvs四层负载均衡" tabindex="-1">LVS四层负载均衡 <a class="header-anchor" href="#lvs四层负载均衡" aria-label="Permalink to &quot;LVS四层负载均衡&quot;">​</a></h4><p>Linux内核的四层负载，和协议无关，可以用于转发请求</p><h4 id="haproxy" tabindex="-1">Haproxy <a class="header-anchor" href="#haproxy" aria-label="Permalink to &quot;Haproxy&quot;">​</a></h4><p>四层负载均衡，灵活性高，也可以做七层负载均衡</p><h4 id="nginx四层负载均衡" tabindex="-1">Nginx四层负载均衡 <a class="header-anchor" href="#nginx四层负载均衡" aria-label="Permalink to &quot;Nginx四层负载均衡&quot;">​</a></h4><p>新版本也可以做四层负载均衡</p><ul><li><p>一般来说还是做七层负载均衡，主要是基于http的一个负载均衡</p></li><li><p>在nginx1.9版本后，新增了一个基于stream的四层负载均衡</p></li></ul><h3 id="七层负载均衡-基本用语处理http协议的-常用nginx" tabindex="-1">七层负载均衡 （基本用语处理http协议的） (常用Nginx) <a class="header-anchor" href="#七层负载均衡-基本用语处理http协议的-常用nginx" aria-label="Permalink to &quot;七层负载均衡 （基本用语处理http协议的） (常用Nginx)&quot;">​</a></h3><h4 id="概念-1" tabindex="-1">概念 <a class="header-anchor" href="#概念-1" aria-label="Permalink to &quot;概念&quot;">​</a></h4><p>基于url/IP的负载均衡;基于应用层，基于http协议的负载均衡</p><h4 id="nginx七层负载均衡" tabindex="-1">Nginx七层负载均衡 <a class="header-anchor" href="#nginx七层负载均衡" aria-label="Permalink to &quot;Nginx七层负载均衡&quot;">​</a></h4><p>对Http协议/mail协议做负载转发</p><h4 id="haproxy-1" tabindex="-1">Haproxy <a class="header-anchor" href="#haproxy-1" aria-label="Permalink to &quot;Haproxy&quot;">​</a></h4><p>四层/七层的负载转发功能</p><h4 id="apache" tabindex="-1">apache <a class="header-anchor" href="#apache" aria-label="Permalink to &quot;apache&quot;">​</a></h4><p>性能不如nginx高，并发达到百万级别性能会越来越差;</p><h2 id="对比" tabindex="-1">对比 <a class="header-anchor" href="#对比" aria-label="Permalink to &quot;对比&quot;">​</a></h2><h3 id="七层-售票处-可以根据用户需求处理-售票处需要提供一些-身份信息" tabindex="-1">七层: (售票处: 可以根据用户需求处理； 售票处需要提供一些 &quot;身份信息&quot;) <a class="header-anchor" href="#七层-售票处-可以根据用户需求处理-售票处需要提供一些-身份信息" aria-label="Permalink to &quot;七层: (售票处: 可以根据用户需求处理； 售票处需要提供一些 &quot;身份信息&quot;)&quot;">​</a></h3><ul><li><p>适用于web服务器(Tomcat、Apache)</p></li><li><p>七层会处理请求，Nginx可以处理(压缩,缓存) js\\css等这些内容</p></li></ul><h3 id="四层-黄牛-只会把票卖你" tabindex="-1">四层: (黄牛，只会把票卖你) <a class="header-anchor" href="#四层-黄牛-只会把票卖你" aria-label="Permalink to &quot;四层: (黄牛，只会把票卖你)&quot;">​</a></h3><ul><li><p>适用处理基于TCP/UDP转发请求</p></li><li><p>四层主要是转发请求，不会进程处理</p></li></ul>',36),o=[h];function l(n,d,p,s,c,u){return e(),t("div",null,o)}const b=a(i,[["render",l]]);export{q as __pageData,b as default};