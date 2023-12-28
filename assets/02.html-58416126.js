import{_ as e,p as a,q as s,a1 as t}from"./framework-b7c41258.js";const n={},i=t(`<h1 id="mybatis传递多个参数" tabindex="-1"><a class="header-anchor" href="#mybatis传递多个参数" aria-hidden="true">#</a> mybatis传递多个参数</h1><h2 id="顺序传参法" tabindex="-1"><a class="header-anchor" href="#顺序传参法" aria-hidden="true">#</a> 顺序传参法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public User selectUser(String name, int deptId);

&lt;select id=&quot;selectUser&quot; resultMap=&quot;UserResultMap&quot;&gt;
    select * from user
    where user_name = #{0} and dept_id = #{1}
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#{}里面的数字代表你传入参数的顺序。</p><p>这种方法不建议使用，sql层表达不直观，且一旦顺序调整容易出错。</p><p><strong>这种传参方式没有使用过</strong></p><h2 id="param注解传参法" tabindex="-1"><a class="header-anchor" href="#param注解传参法" aria-hidden="true">#</a> @Param注解传参法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public User selectUser(@Param(&quot;userName&quot;) String name, int @Param(&quot;deptId&quot;) deptId);

&lt;select id=&quot;selectUser&quot; resultMap=&quot;UserResultMap&quot;&gt;
    select * from user
    where user_name = #{userName} and dept_id = #{deptId}
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#{}里面的名称对应的是注解@Param括号里面修饰的名称。</p><p>这种方法在参数不多的情况还是比较直观的，推荐使用。</p><p><strong>这种传参方式使用的多</strong></p><h2 id="map传参法" tabindex="-1"><a class="header-anchor" href="#map传参法" aria-hidden="true">#</a> Map传参法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public User selectUser(Map&lt;String, Object&gt; params);

&lt;select id=&quot;selectUser&quot; parameterType=&quot;java.util.Map&quot; resultMap=&quot;UserResultMap&quot;&gt;
    select * from user
    where user_name = #{userName} and dept_id = #{deptId}
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#{}里面的名称对应的是Map里面的key名称。</p><p>这种方法适合传递多个参数，且参数易变能灵活传递的情况。</p><p>PS: MyBatis传递map参数时，如果传递参数中没有对应的key值，在执行sql语句时默认取的是null</p><p>例如：map中没有put “name”这个key，在sql中使用#{name}时，默认赋值null</p><p><strong>这种传参方式没有使用过</strong></p><h2 id="java-bean传参法" tabindex="-1"><a class="header-anchor" href="#java-bean传参法" aria-hidden="true">#</a> Java Bean传参法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public User selectUser(User params);

&lt;select id=&quot;selectUser&quot; parameterType=&quot;com.test.User&quot; resultMap=&quot;UserResultMap&quot;&gt;
    select * from user
    where user_name = #{userName} and dept_id = #{deptId}
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#{}里面的名称对应的是User类里面的成员属性。</p><p>这种方法很直观，但需要建一个实体类，扩展不容易，需要加属性，看情况使用。</p><p><strong>这种传参方式常用在新增和更新表方法中</strong></p>`,23),r=[i];function d(l,u){return a(),s("div",null,r)}const p=e(n,[["render",d],["__file","02.html.vue"]]);export{p as default};
