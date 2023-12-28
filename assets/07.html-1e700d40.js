import{_ as t,M as s,p as r,q as l,R as e,t as n,N as d,a1 as i}from"./framework-b7c41258.js";const o="/zhaobao1830-notes/assets/01-36905db9.png",c="/zhaobao1830-notes/assets/02-af95fe54.png",p="/zhaobao1830-notes/assets/03-b2eb618a.png",u={},m=i('<h1 id="uniapp打包项目" tabindex="-1"><a class="header-anchor" href="#uniapp打包项目" aria-hidden="true">#</a> uniapp打包项目</h1><h2 id="打包web" tabindex="-1"><a class="header-anchor" href="#打包web" aria-hidden="true">#</a> 打包web</h2><p>1、点击scr下的manifest.json</p><p><img src="'+o+'" alt="Image text"></p><p>配置路由模式和运行的基础路径</p>',5),h={href:"https://zhaobao1830.github.io/zhaobao1830-notes/java/nginx/01.html#%E6%96%87%E4%BB%B6%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},v=i('<p>加一行代码：try_files $uri $uri/ /index.html;</p><p>（2）、运行的基础路径默认是h5，打包以后项目所在的文件夹就是h5，如果是其他的文件名称，比如dist，那就进行修改成/dist/</p><p>2、点击发行--网站-PC Web或手机H5</p><p><img src="'+c+'" alt="Image text"></p><p>网站标题可以用默认的，也可以自己修改</p><p>3、配置完成后点击发行按钮，生成打包文件</p><p><img src="'+p+`" alt="Image text"></p><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><p>h5文件夹里的文件就是uniapp打包h5后的文件，将其改名为apph5（这个名字必须和打包时候填写的运行的基础路径一致）</p><h3 id="tomcat" tabindex="-1"><a class="header-anchor" href="#tomcat" aria-hidden="true">#</a> tomcat</h3><p>将apph5放到webapps文件夹，点击bin/startup.bat启动tomcat，在url里输入<code>http://localhost:8080/apph5/</code> 即可访问项目</p><div class="custom-container tip"><p class="custom-container-title">备注</p><p>路由模式为history模式打包的项目，刷新会报404，解决办法是在打包后的项目根目录新建<code>WEB-INF</code>文件夹， 在里面添加web.xml文件， web.xml文件的内容为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;web-app xmlns=&quot;http://xmlns.jcp.org/xml/ns/javaee&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
  xsi:schemaLocation=&quot;http://xmlns.jcp.org/xml/ns/javaee
           http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd&quot;
  version=&quot;3.1&quot; metadata-complete=&quot;true&quot;&gt;
  &lt;display-name&gt;Router for Tomcat&lt;/display-name&gt;
  &lt;error-page&gt;
    &lt;error-code&gt;404&lt;/error-code&gt;
    &lt;location&gt;/index.html&lt;/location&gt;
  &lt;/error-page&gt;
&lt;/web-app&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样刷新页面会正常显示，但会在控制台输出找不到页面（404）</p></div><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h3><p>将apph5文件夹放到nginx的nginxRun文件夹下，执行start nginx命令启动nginx</p><p>在url输入<code>http://192.168.3.30:92/apph5/</code> 打开项目</p><p>nginx配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
            # 监听端口
            listen       92;
            #ip、备案过的域名、localhost
            server_name  192.168.3.30;

            # 存储路径是E:/nginx-1.22.1/nginxRun/apph5/
            # 请求路由映射，匹配拦截
            location ^~ /apph5/ {
                # 解决history模式下，刷新报错的bug
                try_files $uri $uri/ /apph5/index.html;
                # 请求位置
                root   E:/nginx-1.22.1/nginxRun;
                # 首页位置
                index  index.html;
            }
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">备注</p><p>url的访问路径，最后必须加上/，不然请求不到项目</p></div><div class="custom-container tip"><p class="custom-container-title">备注</p><p>history模式，必须加上 <code>try_files $uri $uri/ /apph5/index.html;</code> 不然刷新会报404错误</p><p>因为访问的项目是在apph5文件夹下，所以<code>try_files $uri $uri/ /apph5/index.html;</code> 应该加上/apph5</p></div>`,19);function b(x,g){const a=s("ExternalLinkIcon");return r(),l("div",null,[m,e("p",null,[n("（1）、路由模式可以选择hash和history俩种，如果是history，部署的时候需要进行额外的配置，可以参考这个文章："),e("a",h,[n("nginx配置"),d(a)])]),v])}const f=t(u,[["render",b],["__file","07.html.vue"]]);export{f as default};
