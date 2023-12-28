import{_ as o,M as a,p as r,q as s,R as n,t as e,N as i,a1 as t}from"./framework-b7c41258.js";const c={},d=t('<h1 id="uniapp里实现滚动到底部" tabindex="-1"><a class="header-anchor" href="#uniapp里实现滚动到底部" aria-hidden="true">#</a> uniapp里实现滚动到底部</h1><h2 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h2><p>当请求到数据时，页面展示信息后，自动滚动到最底部</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2>',4),p={href:"https://uniapp.dcloud.net.cn/component/scroll-view.html",target:"_blank",rel:"noopener noreferrer"},u=t(`<p>二、设置scroll-y（纵向滚动）、scroll-top（竖向滚动条位置）、scroll-with-animation（在设置滚动条位置时使用动画过渡）三个属性</p><p>三、定义scrollTop为9999</p><p>四、定义滚动方法scrollToBottom，动态改变scroll-top的值，每次请求接口数据返回后调用此方法</p><p>完整代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;scroll-view scroll-y=&quot;true&quot; :scroll-top=&quot;scrollTop&quot; scroll-with-animation=&quot;true&quot;&gt;
&lt;/scroll-view&gt;

scrollToBottom() {
        this.$nextTick(() =&gt; {
          this.scrollTop = this.scrollTop + 1
        })
      }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function h(v,m){const l=a("ExternalLinkIcon");return r(),s("div",null,[d,n("p",null,[e("一、使用"),n("a",p,[e("scroll-view"),i(l)]),e("组件")]),u])}const b=o(c,[["render",h],["__file","08.html.vue"]]);export{b as default};
