import{_ as e,p as i,q as n,a1 as s}from"./framework-b7c41258.js";const d="/zhaobao1830-notes/assets/01-d3224d33.jpg",a={},l=s(`<h1 id="nginx-conf核心配置文件解析" tabindex="-1"><a class="header-anchor" href="#nginx-conf核心配置文件解析" aria-hidden="true">#</a> nginx.conf核心配置文件解析</h1><p>1、设置worker进程的用户，指的linux中的用户，会涉及到nginx操作目录或文件的一些权限，默认为nobody</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>user root;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、worker进程工作数设置，一般来说CPU有几个，就设置几个，或者设置为N-1也行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>worker_processes 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、nginx 日志级别debug | info | notice | warn | error | crit | alert | emerg，错误级别从左到右越来越大</p><p>4、设置nginx进程 pid</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pid        logs/nginx.pid;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5、设置工作模式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>events {
    # 默认使用epoll
    use epoll;
    # 每个worker允许连接的客户端最大连接数
    worker_connections  10240;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>events {</p><p>6、http 是指令块，针对http网络传输的一些指令配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>http里的server可以在一个文件里配置多个，也可以在其他文件配置好，通过include引入</p><p>7、include 引入外部配置，提高可读性，避免单个配置文件过大</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>include       mime.types;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>8、设定日志格式，main为定义的格式名称，如此 access_log 就可以直接使用这个变量了</p><p><img src="`+d+`" alt="Image text"></p><p>参数名 参数意义 $remote_addr 客户端ip $remote_user 远程客户端用户名，一般为：’-’ $time_local 时间和时区 $request 请求的url以及method $status 响应状态码 $body_bytes_send 响应客户端内容字节数 $http_referer 记录用户从哪个链接跳转过来的 $http_user_agent 用户所使用的代理，一般来时都是浏览器 $http_x_forwarded_for 通过代理服务器来记录客户端的ip</p><p>9、sendfile使用高效文件传输，提升传输性能。启用后才能使用tcp_nopush，是指当数据表累积一定大小后才发送，提高了效率。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sendfile        on;
tcp_nopush      on;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>10、keepalive_timeout设置客户端与服务端请求的超时时间，保证客户端多次请求的时候不会重复建立新的连接，节约资源损耗。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#keepalive_timeout  0;
keepalive_timeout  65;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>11、gzip启用压缩，html/js/css压缩后传输会更快</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gzip on;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>12、server可以在http指令块中设置多个虚拟主机</p><ul><li><p>listen 监听端口</p></li><li><p>server_name localhost、ip、域名</p></li><li><p>location 请求路由映射，匹配拦截</p></li><li><p>root 请求位置</p></li><li><p>index 首页设置</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    server {
            listen       88;
            server_name  localhost;
    
            location / {
                root   html;
                index  index.html index.htm;
            }
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),t=[l];function r(c,v){return i(),n("div",null,t)}const o=e(a,[["render",r],["__file","02.html.vue"]]);export{o as default};
