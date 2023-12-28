import{_ as a,M as i,p as o,q as t,R as e,t as r,N as d,a1 as s}from"./framework-b7c41258.js";const p="/zhaobao1830-notes/assets/01-0048e821.png",c="/zhaobao1830-notes/assets/02-2205d638.png",h={},l=s('<h1 id="登录验证-cookie、session、token" tabindex="-1"><a class="header-anchor" href="#登录验证-cookie、session、token" aria-hidden="true">#</a> 登录验证 cookie、session、token</h1><h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h2><p>校验过程</p><p>1、前端输入用户名密码，传给后端</p><p>2、后端验证成功，返回信息时执行set-cookie，把值保存到cookie里（后端做）</p><p>3、前端所有的接口访问，会自动带上cookie（浏览器的默认行为，http协议的规定）</p><h2 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> session</h2>',7),u={href:"https://www.cnblogs.com/zhaobao1830/p/11114146.html",target:"_blank",rel:"noopener noreferrer"},m=s(`<p>已经有了cookie，为什么还需要session？</p><p>cookie的信息是暴露在外面的，如果把所有的信息都保存在cookie里，敏感信息会暴露。</p><p>一般操作：cookie只存储id，详细信息保存在session中</p><p>后端要保存信息到session中，需要使用HttpSession，调用session.setAttribute，生成sessionId，设置在 Set-Cookie响应头中，响应给客户端</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@RequestMapping(value = &quot;login.do&quot;, method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse&lt;User&gt; login(String username, String password, HttpSession session) {
        ServerResponse&lt;User&gt; response = iUserService.login(username, password);
        if (response.isSuccess()) {
            session.setAttribute(Const.CURRENT_USER, response.getData());
        }
        return response;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+`" alt="Image text"></p><p>当客户端再次请求的时候，会把保存在cookie中的sessionId携带在Request Header中给到服务器，你只需要在服务器中再次使用代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HttpSession session = request.getSession()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>来获取request中的session</p><p><img src="`+c+'" alt="Image text"></p><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><p>1、原理简单，易于学习</p><p>2、用户信息存储在服务端，可以快速封禁某个登录的用户--有这方面强需求的人，一定选择session</p><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><p>1、占用服务端内存，有硬件成本</p><p>2、多进程、多服务时，不好同步--一般使用第三方redis存储，成本高</p><p>3、跨域传递cookie，需要特殊配置（没用过，不知道需要什么配置）</p><h2 id="jwt-json-web-token" tabindex="-1"><a class="header-anchor" href="#jwt-json-web-token" aria-hidden="true">#</a> JWT（JSON Web Token)</h2><p>校验过程</p><p>1、前端输入用户名密码，传给后端</p><p>2、后端验证成功，返回token字符串（将用户信息&lt;加密规则跨域自己定&gt;加密后得到的）</p><p>3、前端获取token存储下来</p><p>4、前端访问接口，在header.token中携带</p><h3 id="优点-1" tabindex="-1"><a class="header-anchor" href="#优点-1" aria-hidden="true">#</a> 优点</h3><p>1、不占用服务器内存</p><p>2、多进程、多服务器，不受影响</p><p>3、不受跨域限制</p><h3 id="缺点-1" tabindex="-1"><a class="header-anchor" href="#缺点-1" aria-hidden="true">#</a> 缺点</h3><p>无法快速封禁登录的用户</p><h3 id="jwt和session的区别" tabindex="-1"><a class="header-anchor" href="#jwt和session的区别" aria-hidden="true">#</a> JWT和Session的区别</h3><p>1、JWT用户信息存储在客户端</p><p>2、Session用户信息存储在服务端</p><h3 id="为何选择jwt" tabindex="-1"><a class="header-anchor" href="#为何选择jwt" aria-hidden="true">#</a> 为何选择JWT</h3><p>1、没有快速封禁登录用户的需求</p><p>2、JWT成本低，维护简单</p><p>3、需要考虑跨域的扩展性</p><div class="custom-container tip"><p class="custom-container-title">温馨提示</p><p>JWT的出现并不是为了解决安全性的，只是为了前后端分离而出现的，谁拿上这个钥匙都能访问</p><p>真要确保安全性，就把JWT的有效期设置的短一些</p></div>',37);function v(b,k){const n=i("ExternalLinkIcon");return o(),t("div",null,[l,e("p",null,[e("a",u,[r("参考文章"),d(n)])]),m])}const _=a(h,[["render",v],["__file","02.html.vue"]]);export{_ as default};
