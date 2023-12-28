import{_ as e,p as s,q as i,a1 as n}from"./framework-b7c41258.js";const a={},l=n(`<h1 id="消除scroll-view的滚动条" tabindex="-1"><a class="header-anchor" href="#消除scroll-view的滚动条" aria-hidden="true">#</a> 消除scroll-view的滚动条</h1><p>在项目里使用scroll-view组件，如果觉得滚动条丑，可以使用下面的代码来消除：</p><div class="language-wxss line-numbers-mode" data-ext="wxss"><pre class="language-wxss"><code>::-webkit-scrollbar{
  width: 0;
  height: 0;
  color: transparent;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">备注</p><p>scroll-view竖向滚动的时候，必须给予一个固定高度</p></div>`,4),c=[l];function r(t,d){return s(),i("div",null,c)}const v=e(a,[["render",r],["__file","11.html.vue"]]);export{v as default};
