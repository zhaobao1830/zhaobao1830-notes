import{_ as e,p as t,q as i,a1 as l}from"./framework-b7c41258.js";const n="/zhaobao1830-notes/assets/01-979d60b5.png",s={},a=l('<h1 id="使用flex实现左右布局" tabindex="-1"><a class="header-anchor" href="#使用flex实现左右布局" aria-hidden="true">#</a> 使用flex实现左右布局</h1><h2 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h2><p><img src="'+n+`" alt="Image text"></p><p>实现上面的效果，竖线和历史搜索在最左边，删除图标在最右边</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><p><strong>第一种：</strong></p><p>竖线和历史搜索放在一个<code>view</code>里，外层用<code>display: flex</code>和<code>justify-content: space-between</code></p><p><strong>第二种：</strong></p><p>可以在中间加一个view，设置样式<code>flex: 1</code>，将俩边撑开</p><div class="language-wxml line-numbers-mode" data-ext="wxml"><pre class="language-wxml"><code>&lt;view class=&quot;history-title&quot;&gt;
    &lt;view class=&quot;slide&quot;&gt;&lt;/view&gt;
    &lt;text&gt;历史搜索&lt;/text&gt;
    &lt;view style=&quot;flex:1&quot;&gt;&lt;/view&gt;
    &lt;view bind:tap=&quot;onDeleteHistory&quot; class=&quot;icon&quot;&gt;
        &lt;l-icon name=&quot;delete&quot; color=&quot;#999999&quot; size=&quot;32&quot;&gt;&lt;/l-icon&gt;
    &lt;/view&gt;
&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[a];function d(c,r){return t(),i("div",null,o)}const v=e(s,[["render",d],["__file","07.html.vue"]]);export{v as default};
