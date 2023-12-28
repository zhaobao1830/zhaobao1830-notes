import{_ as n,p as s,q as a,a1 as e}from"./framework-b7c41258.js";const i={},t=e(`<h1 id="vue和安卓方法互调" tabindex="-1"><a class="header-anchor" href="#vue和安卓方法互调" aria-hidden="true">#</a> Vue和安卓方法互调</h1><p>一、Vue调用安卓封装好的方法</p><p>直接用window.android.方法名</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    window<span class="token punctuation">.</span>android<span class="token punctuation">.</span><span class="token function">takePhoto</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>二、安卓调用Vue的方法</p><p>Vue的方法要挂载到window上</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>    mounted() {
        // 将要给原生调用的方法挂载到 window 上面
        // window.callJsFunction中的callJsFunction是安卓调用的名称
        window.callJsFunction = this.callJsFunction
    },
    data() {
        return {
            msg: &quot;哈哈&quot;
        }
    },
    methods: {
        callJsFunction(str) {
            this.msg = &quot;我通过原生方法改变了文字&quot; + str
            return &quot;js调用成功&quot;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安卓代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">callVueJS</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        tbsWebView<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                webView<span class="token punctuation">.</span><span class="token function">loadUrl</span><span class="token punctuation">(</span><span class="token string">&quot;javascript:callJsFunction(&#39;soloname&#39;)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[t];function l(o,u){return s(),a("div",null,c)}const d=n(i,[["render",l],["__file","07.html.vue"]]);export{d as default};
