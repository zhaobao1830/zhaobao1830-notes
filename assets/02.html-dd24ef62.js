import{_ as a,p as s,q as n,a1 as t}from"./framework-b7c41258.js";const e={},p=t(`<h1 id="sql如何查询表中特定的字段" tabindex="-1"><a class="header-anchor" href="#sql如何查询表中特定的字段" aria-hidden="true">#</a> sql如何查询表中特定的字段</h1><p>select * 不好，因为一个表里的字段有可能很多，应该需要什么字段就查什么</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectLogin<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>map<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    SELECT
    --     *???//这样真的好么?答案就是,这样不好.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span> <span class="token attr-name">refid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Base_Column_List<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    from mmall_user
    where username = #{username}
    and password = #{password}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以先定义好Base_Column_List，在sql中使用include指定查询的字段</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sql</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Base_Column_List<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
    id, username, password, email, phone, question, answer, role, create_time, update_time
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sql</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[p];function c(o,u){return s(),n("div",null,l)}const r=a(e,[["render",c],["__file","02.html.vue"]]);export{r as default};
