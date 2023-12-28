import{_ as e,p as i,q as l,a1 as n}from"./framework-b7c41258.js";const s={},t=n(`<h1 id="scroll-view使用enable-flex-竖直方向可能会增加布局空间的高度" tabindex="-1"><a class="header-anchor" href="#scroll-view使用enable-flex-竖直方向可能会增加布局空间的高度" aria-hidden="true">#</a> scroll-view使用enable-flex，竖直方向可能会增加布局空间的高度</h1><p>微信小程序和uniapp里的scroll-view组件，不要使用enable-flex，如果使用了，在竖直方向可能会增加布局空间的高度</p><p>有俩个解决办法：</p><p>一、在最外层设置高度。缺点是之后高度变了，还得再次修改</p><p>二、去掉enable-flex，在内部加一个view组件，在view组件上设置flex布局（推荐）</p><div class="language-wxml line-numbers-mode" data-ext="wxml"><pre class="language-wxml"><code>&lt;scroll-view scroll-x class=&quot;scroll-view&quot;&gt;
        &lt;view class=&quot;inner&quot;&gt;
            &lt;block wx:for=&quot;{{spuList}}&quot; wx:key=&quot;index&quot;&gt;
                &lt;view data-spu-id=&quot;{{item.id}}&quot; bind:tap=&quot;onTap&quot; class=&quot;spu-container&quot;&gt;
                    &lt;image class=&quot;spu-img&quot; src=&quot;{{item.img}}&quot;&gt;&lt;/image&gt;
                    &lt;text class=&quot;spu-text&quot;&gt;{{item.title.length&gt;=8?s.substring(item.title,0,7)+&#39;...&#39;:item.title}}&lt;/text&gt;
                    &lt;l-price
                            l-value-class=&quot;price-value&quot;
                            l-unit-class=&quot;price-unit&quot;
                            value=&quot;{{item.price}}&quot;&gt;
                    &lt;/l-price&gt;
                &lt;/view&gt;
            &lt;/block&gt;
        &lt;/view&gt;
    &lt;/scroll-view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-wxss line-numbers-mode" data-ext="wxss"><pre class="language-wxss"><code>.scroll-view{
  margin-top:28rpx;
  display:flex;
  flex-direction:row;
}

.inner{
  display:flex;
  flex-direction:row;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),a=[t];function d(c,r){return i(),l("div",null,a)}const v=e(s,[["render",d],["__file","03.html.vue"]]);export{v as default};
