import{_ as s,o as n,c as a,R as p}from"./chunks/framework.1nBpG9uI.js";const e="/zhaobao1830-notes/assets/01.DWyMtf6L.png",l="/zhaobao1830-notes/assets/02.a-wXiFgU.png",i="/zhaobao1830-notes/assets/03.u2ULOtgo.png",r="/zhaobao1830-notes/assets/04.hUZbEiFG.png",c="/zhaobao1830-notes/assets/05.XuGuOrJp.png",t="/zhaobao1830-notes/assets/07.woDgavMo.png",b="/zhaobao1830-notes/assets/06.EnLG57_C.png",o="/zhaobao1830-notes/assets/08.V--qP8W0.png",m="/zhaobao1830-notes/assets/09.dyDxlOAG.png",y=JSON.parse('{"title":"概念","description":"","frontmatter":{},"headers":[],"relativePath":"java/nginx/01.md","filePath":"java/nginx/01.md","lastUpdated":1704954731000}'),u={name:"java/nginx/01.md"},d=p('<h1 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h1><h2 id="nginx是什么" tabindex="-1">nginx是什么？ <a class="header-anchor" href="#nginx是什么" aria-label="Permalink to &quot;nginx是什么？&quot;">​</a></h2><p>1、是一款高性能的http和反向代理web服务器，同时也提供IMAP/POP3/SMTP服务</p><p>2、主要功能是反向代理</p><p>3、通过配置文件可以实现集群和负载均衡</p><p>4、静态资源虚拟化（将静态资源虚拟化成服务，之后便可以通过浏览URL访问，比如图片、css、html等）</p><p>特点：高稳定、高性能、资源占用少、功能丰富、模块化结构、支持热部署</p><h2 id="常见的服务器" tabindex="-1">常见的服务器 <a class="header-anchor" href="#常见的服务器" aria-label="Permalink to &quot;常见的服务器&quot;">​</a></h2><p><img src="'+e+'" alt="Image text"></p><h2 id="正向代理" tabindex="-1">正向代理 <a class="header-anchor" href="#正向代理" aria-label="Permalink to &quot;正向代理&quot;">​</a></h2><p><img src="'+l+'" alt="Image text"></p><p>客户端请求目标服务器之间的一个代理服务器，请求会先经过代理服务器，然后再转发请求到目标服务器，获得内容后最后响应给客户端</p><h2 id="反向代理" tabindex="-1">反向代理 <a class="header-anchor" href="#反向代理" aria-label="Permalink to &quot;反向代理&quot;">​</a></h2><p><img src="'+i+'" alt="Image text"></p><p>用户请求目标服务器，有dialing服务器决定访问哪个IP</p><p>例子：ping www.taobao.com 显示的ip地址是不一样的，这就是代理服务器分发到不同的服务器</p><p>负载均衡就是通过反向代理实现的</p><h2 id="反向代理之路由" tabindex="-1">反向代理之路由 <a class="header-anchor" href="#反向代理之路由" aria-label="Permalink to &quot;反向代理之路由&quot;">​</a></h2><p><img src="'+r+`" alt="Image text"></p><p>不同的请求url，由代理服务器转发到不同的tomcat或者静态资源服务器</p><h2 id="下载和安装" tabindex="-1">下载和安装 <a class="header-anchor" href="#下载和安装" aria-label="Permalink to &quot;下载和安装&quot;">​</a></h2><p>官网：<a href="http://nginx.org/en/download.html" target="_blank" rel="noreferrer">http://nginx.org/en/download.html</a></p><p>选择Stable version里的下载，然后解压就可以使用</p><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><p>启动</p><p>cmd切换到在nginx安装目录下，执行start nginx</p><p>关闭</p><p>nginx -s stop 暴力关闭，如果现在有用户正在和nginx通信，也会强制断开连接，关闭nginx（如果确定是黑客进行访问，可以用这个命令）</p><p>nginx -s quit 优雅关闭，如果现在有用户正在和nginx通信，会等通信结束才会关闭nginx（针对http请求的，如果不是http请求，不能关闭）</p><p>taskkill /f /t /im nginx.exe(window环境下)</p><p>重启</p><p>nginx -s reload 修改配置文件后，重新执行这个方法</p><p>检测配置文件</p><p>nginx -t</p><p>查看版本号</p><p>nginx -v</p><p>nginx -V 显示详细信息</p><p>帮助信息</p><p>nginx -h</p><p>切换配置文件</p><p>nginx -c filename</p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>        listen       88;</span></span>
<span class="line"><span>        server_name  192.168.3.30;</span></span>
<span class="line"><span>				</span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            root   html;</span></span>
<span class="line"><span>            index  index.html index.htm;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>        location = /50x.html {</span></span>
<span class="line"><span>            root   html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>server_name只能是localhost、本地的ip地址才行，其他的网址、ip都不能访问</p><h2 id="进程模型解析" tabindex="-1">进程模型解析 <a class="header-anchor" href="#进程模型解析" aria-label="Permalink to &quot;进程模型解析&quot;">​</a></h2><p>nginx采用单主进程，多子进程(nginx.conf worker_processes 默认为1)的模型</p><p>master管理worker，master接收外部请求或指令，分配给worker去执行</p><p>worker关闭时，会等待当前客户端连接释放后，才会关闭</p><p>多进程虽然会带来额外的内存开销，采用多进程而不采用多线程的原因:</p><ol><li><p>进程之间相互独立，互不影响，某一个worker出问题不会影响其他worker</p></li><li><p>不需要开发人员去额外关注线程安全性</p></li></ol><p><img src="`+c+'" alt="Image text"></p><h2 id="请求机制" tabindex="-1">请求机制 <a class="header-anchor" href="#请求机制" aria-label="Permalink to &quot;请求机制&quot;">​</a></h2><p>nginx高效的原因：</p><p>1、抢占机制</p><p><img src="'+t+'" alt="Image text"></p><p>有了新的client，worker会去进行抢占，抢到了才能去处理</p><p>2、采用epoll异步非阻塞模型（当一个client阻塞，因为是异步非阻塞的，会去执行另一个client）</p><p>nginx的一个worker可以处理6-8万个请求，而且它的处理能力与cpu有关，可以通过增加cpu和内存来增加处理能力</p><p>可以通过nginx.conf中的worker_connections配置每个worker进程的最大连接数，worker_connections要根据服务器的配置进行设置，不能设置的太大，防止服务器压力过大</p><p><img src="'+b+'" alt="Image text"></p><h2 id="nginx-conf配置结构" tabindex="-1">nginx.conf配置结构 <a class="header-anchor" href="#nginx-conf配置结构" aria-label="Permalink to &quot;nginx.conf配置结构&quot;">​</a></h2><p><img src="'+o+`" alt="Image text"></p><h2 id="文件配置" tabindex="-1">文件配置 <a class="header-anchor" href="#文件配置" aria-label="Permalink to &quot;文件配置&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#user  nobody;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># worker进程的数量，与cpu相关</span></span>
<span class="line"><span>worker_processes  2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#设定日志格式，main为定义的格式名称，如此access_log就可以直接使用这个变量了</span></span>
<span class="line"><span>#error_log  logs/error.log;</span></span>
<span class="line"><span>#error_log  logs/error.log  notice;</span></span>
<span class="line"><span>#error_log  logs/error.log  info;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 进程pid</span></span>
<span class="line"><span>#pid        logs/nginx.pid;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    # 默认使用epoll</span></span>
<span class="line"><span>    # windows环境，这个要注释，不然会报错，因为windows环境下不是用的epoll</span></span>
<span class="line"><span>    #use epoll;</span></span>
<span class="line"><span>    # 每个worker允许连接的客户端最大连接数</span></span>
<span class="line"><span>    worker_connections  1024;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    # 引入外部配置，提高可读性，避免单个配置文件过大</span></span>
<span class="line"><span>    include       mime.types;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    default_type  application/octet-stream;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 设定日志格式，main为定义的格式名称，如此access_log就可以直接使用这个变量了</span></span>
<span class="line"><span>    #log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span>    #                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span>    #                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #access_log  logs/access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 使用高效文件传输，提升传输性能。启用后才能用tcp_nopush，是指当数据表累积到一定大小后才发送，提高了效率</span></span>
<span class="line"><span>    sendfile        on;</span></span>
<span class="line"><span>    #tcp_nopush     on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 客户端与服务端请求的超时时间，保证客户端多次请求的时候不会重复建立新的连接，节约资源损耗</span></span>
<span class="line"><span>    keepalive_timeout  65;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #启用gzip压缩，html/js/css压缩后传输更快，节约带宽</span></span>
<span class="line"><span>    #gzip  on;</span></span>
<span class="line"><span>    #	限制最小压缩，小于1字节文件不会被压缩</span></span>
<span class="line"><span>    #gzip_min_length 1;</span></span>
<span class="line"><span>    #	定义压缩比（值为1-9，压缩比越大(文件越大，压缩越多)，使用的cpu越多）</span></span>
<span class="line"><span>    #gzip_comp_level 3;</span></span>
<span class="line"><span>    #	定义压缩文件类型</span></span>
<span class="line"><span>    #gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg  image/gif  image/png application/json;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # server可以在http指令块中设置多个虚拟主机</span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        # 监听端口</span></span>
<span class="line"><span>        listen       80;</span></span>
<span class="line"><span>        #ip、备案过的域名、localhost</span></span>
<span class="line"><span>        server_name  localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #允许跨域请求的域，*代表所有</span></span>
<span class="line"><span>        add_header &#39;Access-Control-Allow-Origin&#39; *;</span></span>
<span class="line"><span>        #允许带上cookie请求</span></span>
<span class="line"><span>        add_header &#39;Access-Control-Allow-Credentials&#39; &#39;true&#39;;</span></span>
<span class="line"><span>        #允许请求的方法，比如 GET/POST/PUT/DELETE</span></span>
<span class="line"><span>        add_header &#39;Access-Control-Allow-Methods&#39; *;</span></span>
<span class="line"><span>        #允许请求的header</span></span>
<span class="line"><span>        add_header &#39;Access-Control-Allow-Headers&#39; *;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        #配置静态资源防盗链</span></span>
<span class="line"><span>        #对源站点验证</span></span>
<span class="line"><span>        valid_referers *.imooc.com; </span></span>
<span class="line"><span>        #非法引入会进入下方判断</span></span>
<span class="line"><span>        if ($invalid_referer) {</span></span>
<span class="line"><span>            return 404;</span></span>
<span class="line"><span>        } </span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 请求路由映射，匹配拦截</span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            # 请求位置</span></span>
<span class="line"><span>            root   html;</span></span>
<span class="line"><span>            # 首页位置</span></span>
<span class="line"><span>            index  index.html index.htm;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>        location = /50x.html {</span></span>
<span class="line"><span>            root   html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        # 监听端口</span></span>
<span class="line"><span>        listen       90;</span></span>
<span class="line"><span>        #ip、备案过的域名、localhost</span></span>
<span class="line"><span>        server_name  192.168.3.30;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 静态资源部署</span></span>
<span class="line"><span>        # 存储路径是E:/nginx-1.22.1/nginxRun/dist/</span></span>
<span class="line"><span>        # 请求路由映射，匹配拦截</span></span>
<span class="line"><span>        # 请求url为http://192.168.3.30:90/home 不用加dist</span></span>
<span class="line"><span>        # http://192.168.3.30:90为</span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            # 解决history模式下，刷新报错的bug</span></span>
<span class="line"><span>            try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span>            # 请求位置</span></span>
<span class="line"><span>            root   E:/nginx-1.22.1/nginxRun/dist;</span></span>
<span class="line"><span>            # 首页位置</span></span>
<span class="line"><span>            index  index.html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">备注</p><p>如果想查看服务器里的文件，比如需要下载这个服务器里的文件，可以在nginx的server里加上:autoindex on; 如果不加这个配置，访问文件会显示403错误（没有访问权限）</p></div><h2 id="静态资源部署" tabindex="-1">静态资源部署 <a class="header-anchor" href="#静态资源部署" aria-label="Permalink to &quot;静态资源部署&quot;">​</a></h2><p>1、在nginx新建文件夹static/images</p><p><img src="`+m+`" alt="Image text"></p><p>2、配置server</p><p>（1）、使用root</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>        # 监听端口</span></span>
<span class="line"><span>        listen       90;</span></span>
<span class="line"><span>        #ip、备案过的域名、localhost</span></span>
<span class="line"><span>        server_name  192.168.3.30;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 请求路由映射，匹配拦截</span></span>
<span class="line"><span>        location /images/ {</span></span>
<span class="line"><span>            # 请求位置</span></span>
<span class="line"><span>            root   E:/nginx-1.22.1/static/;</span></span>
<span class="line"><span>            # 首页位置</span></span>
<span class="line"><span>            index  index.html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>url：<a href="http://192.168.3.30:90/images/01.png" target="_blank" rel="noreferrer">http://192.168.3.30:90/images/01.png</a></p><div class="tip custom-block"><p class="custom-block-title">备注</p><p>使用root定义请求位置，会将images拼在后面，组成新的url</p></div><p>（2）、使用alias</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>        # 监听端口</span></span>
<span class="line"><span>        listen       90;</span></span>
<span class="line"><span>        #ip、备案过的域名、localhost</span></span>
<span class="line"><span>        server_name  192.168.3.30;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 请求路由映射，匹配拦截</span></span>
<span class="line"><span>        location /img/ {</span></span>
<span class="line"><span>            # 请求位置</span></span>
<span class="line"><span>            alias   E:/nginx-1.22.1/static/images/;</span></span>
<span class="line"><span>            # 首页位置</span></span>
<span class="line"><span>            index  index.html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>url：<a href="http://192.168.3.30:90/img/01.png" target="_blank" rel="noreferrer">http://192.168.3.30:90/img/01.png</a></p><div class="tip custom-block"><p class="custom-block-title">备注</p><p>alias用来定义别名，可以隐藏服务器的目录结构，防止用户通过服务器目录结构攻击服务器</p></div><h2 id="location的匹配规则" tabindex="-1">location的匹配规则 <a class="header-anchor" href="#location的匹配规则" aria-label="Permalink to &quot;location的匹配规则&quot;">​</a></h2><p>视频地址：<a href="https://class.imooc.com/lesson/1227#mid=28692" target="_blank" rel="noreferrer">https://class.imooc.com/lesson/1227#mid=28692</a></p><ul><li>空格：默认匹配，普通匹配</li></ul><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>location / {</span></span>
<span class="line"><span>     root /home;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>=：精确匹配</li></ul><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>location = /imooc/img/face1.png {</span></span>
<span class="line"><span>    root /home;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>~*：匹配正则表达式，不区分大小写</li></ul><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#符合图片的显示</span></span>
<span class="line"><span>location ~* .(GIF|jpg|png|jpeg) {</span></span>
<span class="line"><span>    root /home;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>~：匹配正则表达式，区分大小写</li></ul><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#GIF必须大写才能匹配到</span></span>
<span class="line"><span>location ~ .(GIF|jpg|png|jpeg) {</span></span>
<span class="line"><span>    root /home;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>^~：以某个字符路径开头</li></ul><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>location ^~ /imooc/img {</span></span>
<span class="line"><span>    root /home;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="跨域配置支持" tabindex="-1">跨域配置支持 <a class="header-anchor" href="#跨域配置支持" aria-label="Permalink to &quot;跨域配置支持&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#允许跨域请求的域，*代表所有</span></span>
<span class="line"><span>add_header &#39;Access-Control-Allow-Origin&#39; *;</span></span>
<span class="line"><span>#允许带上cookie请求</span></span>
<span class="line"><span>add_header &#39;Access-Control-Allow-Credentials&#39; &#39;true&#39;;</span></span>
<span class="line"><span>#允许请求的方法，比如 GET/POST/PUT/DELETE</span></span>
<span class="line"><span>add_header &#39;Access-Control-Allow-Methods&#39; *;</span></span>
<span class="line"><span>#允许请求的header</span></span>
<span class="line"><span>add_header &#39;Access-Control-Allow-Headers&#39; *;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="防盗链配置支持" tabindex="-1">防盗链配置支持 <a class="header-anchor" href="#防盗链配置支持" aria-label="Permalink to &quot;防盗链配置支持&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#对源站点验证</span></span>
<span class="line"><span>valid_referers *.imooc.com; </span></span>
<span class="line"><span>#非法引入会进入下方判断</span></span>
<span class="line"><span>if ($invalid_referer) {</span></span>
<span class="line"><span>    return 404;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="实战" tabindex="-1">实战 <a class="header-anchor" href="#实战" aria-label="Permalink to &quot;实战&quot;">​</a></h2><h3 id="基本配置-转发-获取请求地址的ip" tabindex="-1">基本配置+转发+获取请求地址的IP <a class="header-anchor" href="#基本配置-转发-获取请求地址的ip" aria-label="Permalink to &quot;基本配置+转发+获取请求地址的IP&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>        # 监听端口</span></span>
<span class="line"><span>        listen       97;</span></span>
<span class="line"><span>        #ip、备案过的域名、localhost</span></span>
<span class="line"><span>        server_name  192.168.3.30;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 静态资源部署</span></span>
<span class="line"><span>        # 存储路径是E:/nginx-1.22.1/nginxRun/dist/</span></span>
<span class="line"><span>        # 请求路由映射，匹配拦截</span></span>
<span class="line"><span>            location / {</span></span>
<span class="line"><span>              # 解决history模式下，刷新报错的bug</span></span>
<span class="line"><span>              try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span>              # 请求位置</span></span>
<span class="line"><span>              root E:/nginx-1.22.1/nginxRun/dist;</span></span>
<span class="line"><span>              # 首页位置</span></span>
<span class="line"><span>              index  index.html;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            #配置转发</span></span>
<span class="line"><span>            location ^~ /api/ {</span></span>
<span class="line"><span>                # 解决跨域</span></span>
<span class="line"><span>                add_header Access-Control-Allow-Origin *;</span></span>
<span class="line"><span>            	add_header Access-Control-Allow-Headers X-Requested-With;</span></span>
<span class="line"><span>            	add_header Access-Control-Allow-Methods GET,POST,OPTIONS;</span></span>
<span class="line"><span>            	# 请求的时候会携带请求电脑的IP</span></span>
<span class="line"><span>                proxy_set_header Host $host;</span></span>
<span class="line"><span>                proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>                proxy_set_header REMOTE-HOST $remote_addr;</span></span>
<span class="line"><span>                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>                # 转发地址</span></span>
<span class="line"><span>                proxy_pass http://192.168.0.61:9614/;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p><strong>说明：</strong></p><p>1、路由映射，最上面一定要是/，下面在配置转发</p><p>2、如果想获取请求的电脑的IP，可以使用下面的配置，之后java代码里通过HttpServletRequest request获取</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>proxy_set_header Host $host;</span></span>
<span class="line"><span>proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>proxy_set_header REMOTE-HOST $remote_addr;</span></span>
<span class="line"><span>proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,100),h=[d];function g(x,_,v,k,f,w){return n(),a("div",null,h)}const C=s(u,[["render",g]]);export{y as __pageData,C as default};