import{_ as i,M as s,p as a,q as d,R as e,t,N as l,a1 as c}from"./framework-b7c41258.js";const r={},u=c(`<h1 id="watch和computed使用箭头函数时-不能用this" tabindex="-1"><a class="header-anchor" href="#watch和computed使用箭头函数时-不能用this" aria-hidden="true">#</a> watch和computed使用箭头函数时，不能用this</h1><p>在watch和computed中，使用箭头函数的时候，在方法里不要使用this，因为this指向不是vue实例</p><p>错误：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>computed: {
  tdata: () =&gt; {
    this.ttest()
    return &#39;&#39;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正确：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>computed: {
  tdata() {
    this.ttest()
    return &#39;&#39;
  }
}

或

computed: {
  tdata: function () {
    this.ttest()
    return &#39;&#39;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),v={href:"https://cn.vuejs.org/v2/api/#watch",target:"_blank",rel:"noopener noreferrer"};function o(m,h){const n=s("ExternalLinkIcon");return a(),d("div",null,[u,e("p",null,[e("a",v,[t("不应该使用箭头函数来定义 watcher 函数 (例如 searchQuery: newValue => this.updateAutocomplete(newValue))。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.updateAutocomplete 将是 undefined。"),l(n)])])])}const b=i(r,[["render",o],["__file","02.html.vue"]]);export{b as default};
