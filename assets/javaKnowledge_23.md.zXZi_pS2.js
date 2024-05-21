import{_ as s,o as a,c as i,R as t}from"./chunks/framework.1nBpG9uI.js";const g=JSON.parse('{"title":"mybatis","description":"","frontmatter":{},"headers":[],"relativePath":"javaKnowledge/23.md","filePath":"javaKnowledge/23.md","lastUpdated":1716264235000}'),e={name:"javaKnowledge/23.md"},p=t(`<h1 id="mybatis" tabindex="-1">mybatis <a class="header-anchor" href="#mybatis" aria-label="Permalink to &quot;mybatis&quot;">​</a></h1><h2 id="mybatis-plus" tabindex="-1">mybatis-plus <a class="header-anchor" href="#mybatis-plus" aria-label="Permalink to &quot;mybatis-plus&quot;">​</a></h2><h3 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h3><p>1、Invalid bound statement (not found)</p><p>自定义的mapper方法在调用的时候提示找不到</p><p>可能的原因有：id和方法名不一样；没有在application.yml里进行mapper路径位置配置：mapper-locations: classpath:mapper/*.xml</p><h2 id="tk-mybatis" tabindex="-1">tk.mybatis <a class="header-anchor" href="#tk-mybatis" aria-label="Permalink to &quot;tk.mybatis&quot;">​</a></h2><p>tk.mybatis是基于Mybatis框架开发的一个工具，通过调用它提供的方法实现对单表的数据操作，不需要写任何sql语句，这极大地提高了项目开发效率。</p><h3 id="使用步骤" tabindex="-1">使用步骤： <a class="header-anchor" href="#使用步骤" aria-label="Permalink to &quot;使用步骤：&quot;">​</a></h3><p>1、pom.xml引入tk.mybatis</p><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;tk.mybatis&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;mapper-spring-boot-starter&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2.1.5&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>2、创建通用mapper</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Mapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MySqlMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>3、在yml中引入通用mapper配置</p><div class="language-yml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############################################################</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># mybatis mapper 配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############################################################</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">mapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  mappers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">com.zb.my.mapper.MyMapper</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  not-empty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 在进行数据库操作的的时候，判断表达式 username != null, 是否追加 username != &#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  identity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MYSQL</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="常用方法" tabindex="-1">常用方法 <a class="header-anchor" href="#常用方法" aria-label="Permalink to &quot;常用方法&quot;">​</a></h3><p>分析MyMapper所继承的父类：</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Mapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MySqlMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这里有俩个父类，<code>Mapper&lt;T&gt;和MySqlMapper&lt;T&gt;</code></p><p>先打开<code>MySqlMapper&lt;T&gt;</code>：</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MySqlMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> InsertListMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">InsertUseGeneratedKeysMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这里面继承了俩个mapper，从类名上可以看出来，是用于操作数据库的，这俩个类分别包含了如下方法:</p><table><thead><tr><th>方法名</th><th>操作</th><th>备注</th></tr></thead><tbody><tr><td>insertList</td><td>数据批量插入</td><td>主键需自增</td></tr><tr><td>insertUseGeneratedKeys</td><td>插入表数据</td><td>主键需自增</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">备注</p><p>很明显，在传统JavaWeb开发中，这俩个方法使用是没有问题的，但是我们的数据库表主键设计肯定是全局唯一的，不可能 使用自增长id，所以这俩个方法在开发中是不使用的</p></div><p><code>Mapper&lt;T&gt;</code>继承的父类</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Mapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BaseMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ExampleMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RowBoundsMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;,</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>BaseMapper包含的方法</p><table><tr><th>类</th><th>方法</th><th>操作</th></tr><tr><td rowspan="6">BaseSelectMapper</td><td>T selectOne(T rend)</td><td>根据实体类中的属性查询表数据，返回单个实体</td></tr><tr><td>List select(T record)</td><td>根据实体类中的属性查询表数据，返回list</td></tr><tr><td>List selectAll()</td><td>返回该表所有记录</td></tr><tr><td>int selectCount(T record)</td><td>根据条件查询记录数</td></tr><tr><td>T selectByPrimaryKey(Object key)</td><td>根据主键查询单条记录</td></tr><tr><td>boolean existsWithPrimaryKey(Object key)</td><td>查询主键是否存在，返回true或false</td></tr><tr><td rowspan="2">BaseInsetMapper</td><td>int insert(T record)</td><td>插入一条记录，属性为空也会保存</td></tr><tr><td>int insertSelecttive(T record)</td><td>插入一条记录，属性为空不保存，会使用默认值</td></tr><tr><td rowspan="2">BaseUpdateMapper</td><td>int updateByPrimaryKey(T record)</td><td>根据实体类更新数据库，属性有null会覆盖原记录</td></tr><tr><td>int updateByPrimaryKeySelective(T record)</td><td>根据实体类更新数据库，属性有null会忽略</td></tr><tr><td rowspan="2">BaseDeleteMapper</td><td>int delete(T record)</td><td>根据实体类中属性多条件删除记录</td></tr><tr><td>int deleteByPrimaryKey(T record)</td><td>根据主键删除记录</td></tr></table><p><code>ExampleMapper&lt;T&gt;</code>,Example类是用于提供给用户实现自定义条件的，也就是where条件，主要方法见下表格：</p><table><tr><td>SelectByExampleMapper</td><td>List selectByExample(Object example)</td><td>根据条件查询记录list</td></tr><tr><td>SelectOneByExampleMapper</td><td>T selectOneByExample(Object example)</td><td>根据条件查询单条记录</td></tr><tr><td>SelectCountByExampleMapper</td><td>int selectCountByExample(Object example)</td><td>根据条件查询记录数</td></tr><tr><td>DeleteByExampleMapper</td><td>int deleteByExample(Object example)</td><td>根据条件删除记录</td></tr><tr><td>UpdateByExampleMapper</td><td>int updateByExample(T record, @Param(&quot;example&quot;) Object example)</td><td>根据条件更新数据，null会覆盖原数据</td></tr><tr><td>UpdateByExampleSelectiveMapper</td><td>int updateByExampleSelective(T record, Object example)</td><td>根据条件更新数据，null会忽略</td></tr></table><p><code>RowBoundsMapper&lt;T&gt;</code> 分页的</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>通用mapper所提供的的CRUD方法对单表操作，大大提高效率，当然复杂的多表操作还是需要在mapper.xml自己去编写sql代码实现</p>`,33),n=[p];function l(h,r,d,k,E,c){return a(),i("div",null,n)}const o=s(e,[["render",l]]);export{g as __pageData,o as default};