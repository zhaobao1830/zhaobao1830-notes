import{_ as e,p as t,q as n,a1 as l}from"./framework-b7c41258.js";const i={},s=l(`<h1 id="stringutils-empty" tabindex="-1"><a class="header-anchor" href="#stringutils-empty" aria-hidden="true">#</a> StringUtils.EMPTY</h1><p>StringUtils.EMPTY为StringUtils的一个静态常量，值为null</p><p>当返回登录信息时需要将密码信息置为null</p><p>在ServerResponse里面我们已经设置了若值为null，则key不进行序列化</p><p>为什么不直接user.setPassword(null);呢</p><p>使用StringUtils更加安全，同样是赋值为null，当后面错误使用该变量是，直接赋值为null会出现空指针异常</p><p>而<code>StringUtils</code>则对赋予的null值做了处理，即使使用该变量也不会出现空指针异常</p><p>使用StringUtils需要添加依赖项</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  &lt;dependency&gt;
      &lt;groupId&gt;org.apache.commons&lt;/groupId&gt;
      &lt;artifactId&gt;commons-lang3&lt;/artifactId&gt;
      &lt;version&gt;3.12.0&lt;/version&gt;
    &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),r=[s];function a(d,c){return t(),n("div",null,r)}const p=e(i,[["render",a],["__file","01.html.vue"]]);export{p as default};
