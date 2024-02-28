import{_ as s,o as n,c as a,R as p}from"./chunks/framework.1nBpG9uI.js";const m=JSON.parse('{"title":"scroll滚动","description":"","frontmatter":{},"headers":[],"relativePath":"vue/basicComponent/scroll.md","filePath":"vue/basicComponent/scroll.md","lastUpdated":1709100863000}'),l={name:"vue/basicComponent/scroll.md"},i=p(`<h1 id="scroll滚动" tabindex="-1">scroll滚动 <a class="header-anchor" href="#scroll滚动" aria-label="Permalink to &quot;scroll滚动&quot;">​</a></h1><h2 id="scroll滚动插件" tabindex="-1">scroll滚动插件 <a class="header-anchor" href="#scroll滚动插件" aria-label="Permalink to &quot;scroll滚动插件&quot;">​</a></h2><h3 id="vue3基本滚动" tabindex="-1">vue3基本滚动 <a class="header-anchor" href="#vue3基本滚动" aria-label="Permalink to &quot;vue3基本滚动&quot;">​</a></h3><h4 id="scroll-vue" tabindex="-1">scroll.vue <a class="header-anchor" href="#scroll-vue" aria-label="Permalink to &quot;scroll.vue&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">温馨提示</p><p>该组件是以<a href="https://better-scroll.github.io/docs/zh-CN/" target="_blank" rel="noreferrer">better-scroll 2.0</a>为基础封装的，包含基本的滚动功能</p><p>项目地址：<a href="https://github.com/zhaobao1830/vite-mobile-zb/blob/master/src/components/base/scroll/base-scroll.vue" target="_blank" rel="noreferrer">https://github.com/zhaobao1830/vite-mobile-zb/blob/master/src/components/base/scroll/base-scroll.vue</a></p></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div ref=&quot;rootRef&quot;&gt;</span></span>
<span class="line"><span>    &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  import useScroll from &#39;@/components/base/scroll/use-scroll&#39;</span></span>
<span class="line"><span>  import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  export default {</span></span>
<span class="line"><span>    name: &#39;scroll&#39;,</span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>      click: {</span></span>
<span class="line"><span>        type: Boolean,</span></span>
<span class="line"><span>        default: true</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      probeType: {</span></span>
<span class="line"><span>        type: Number,</span></span>
<span class="line"><span>        default: 0</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    emits: [&#39;scroll&#39;],</span></span>
<span class="line"><span>    setup(props, { emit }) {</span></span>
<span class="line"><span>      const rootRef = ref(null)</span></span>
<span class="line"><span>      const scroll = useScroll(rootRef, props, emit)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      return {</span></span>
<span class="line"><span>        rootRef,</span></span>
<span class="line"><span>        scroll</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h4 id="use-scroll-js" tabindex="-1">use-scroll.js <a class="header-anchor" href="#use-scroll-js" aria-label="Permalink to &quot;use-scroll.js&quot;">​</a></h4><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BScroll </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@better-scroll/core&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ObserveDOM </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@better-scroll/observe-dom&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ref, onMounted, onUnmounted } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BScroll.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ObserveDOM)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useScroll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">wrapperRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">emit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> scroll</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onMounted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> scrollVal</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> scroll.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BScroll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(wrapperRef.value, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      observeDOM: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 开启 observe-dom 插件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">options</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 如果probeType大于0，就会派发scroll事件，https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-options.html#probetype</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 获取当前位置的坐标值 https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-api.html#%E4%BA%8B%E4%BB%B6</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (options.probeType </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      scrollVal.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;scroll&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">pos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        emit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;scroll&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, pos)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onUnmounted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    scroll.value.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">destroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> scroll</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>使用</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">scroll</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;home-container&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    这里面就是展示的内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">scroll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">特别提示</p><p>使用的时候，home-container要固定高度，且子元素只能有一个</p></div><h3 id="vue3下拉刷新、上拉加载" tabindex="-1">vue3下拉刷新、上拉加载 <a class="header-anchor" href="#vue3下拉刷新、上拉加载" aria-label="Permalink to &quot;vue3下拉刷新、上拉加载&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">温馨提示</p><p>该组件是以<a href="https://better-scroll.github.io/docs/zh-CN/" target="_blank" rel="noreferrer">better-scroll 2.0</a>为基础封装的，包含下拉加载、上拉刷新功能</p><p>项目地址：<a href="https://github.com/zhaobao1830/vite-mobile-zb/blob/master/src/components/base/scroll/scroll-pull-up-down.vue" target="_blank" rel="noreferrer">https://github.com/zhaobao1830/vite-mobile-zb/blob/master/src/components/base/scroll/scroll-pull-up-down.vue</a></p></div><h4 id="scrollpullupdown-vue" tabindex="-1">scrollPullUpDown.vue <a class="header-anchor" href="#scrollpullupdown-vue" aria-label="Permalink to &quot;scrollPullUpDown.vue&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div</span></span>
<span class="line"><span>    ref=&quot;scrollWrapperRef&quot;</span></span>
<span class="line"><span>    class=&quot;scroll-pull-up-down&quot;</span></span>
<span class="line"><span>  &gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;scroll-pull-up-down-content&quot;&gt;</span></span>
<span class="line"><span>      &lt;div ref=&quot;listWrapperRef&quot; class=&quot;scroll-list-wrapper&quot;&gt;</span></span>
<span class="line"><span>        &lt;slot&gt;</span></span>
<span class="line"><span>        &lt;/slot&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;slot name=&quot;pullup&quot; :pullUpLoad=&quot;pullUpLoad&quot; :isPullUpLoad=&quot;isPullUpLoad&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;scroll-pullup-wrapper&quot; v-if=&quot;pullUpLoad &amp;&amp; data.length &gt; 0&quot;&gt;</span></span>
<span class="line"><span>          &lt;div class=&quot;before-trigger&quot; v-if=&quot;!isPullUpLoad&quot;&gt;</span></span>
<span class="line"><span>            &lt;span&gt;{{pullUpTxt}}&lt;/span&gt;</span></span>
<span class="line"><span>          &lt;/div&gt;</span></span>
<span class="line"><span>          &lt;div class=&quot;after-trigger&quot; v-else&gt;</span></span>
<span class="line"><span>            &lt;span class=&quot;pullup-txt&quot;&gt;加载中...&lt;/span&gt;</span></span>
<span class="line"><span>          &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;/slot&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div</span></span>
<span class="line"><span>      v-if=&quot;pullDownRefresh&quot;</span></span>
<span class="line"><span>      class=&quot;scroll-pulldown&quot;</span></span>
<span class="line"><span>      &gt;</span></span>
<span class="line"><span>      &lt;slot</span></span>
<span class="line"><span>        name=&quot;pulldown&quot;</span></span>
<span class="line"><span>        :pullDownRefresh=&quot;pullDownRefresh&quot;</span></span>
<span class="line"><span>        :pullDownStyle=&quot;pullDownStyle&quot;</span></span>
<span class="line"><span>        :beforePullDown=&quot;beforePullDown&quot;</span></span>
<span class="line"><span>        :isPullingDown=&quot;isPullingDown&quot;</span></span>
<span class="line"><span>      &gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;scroll-pulldown-wrapper&quot; ref=&quot;pulldownWrapperRef&quot; :style=&quot;pullDownStyle&quot;&gt;</span></span>
<span class="line"><span>          &lt;div class=&quot;before-trigger&quot; v-show=&quot;beforePullDown&quot;&gt;</span></span>
<span class="line"><span>            &lt;van-icon name=&quot;down&quot;/&gt;</span></span>
<span class="line"><span>          &lt;/div&gt;</span></span>
<span class="line"><span>          &lt;div class=&quot;after-trigger&quot; v-show=&quot;!beforePullDown&quot;&gt;</span></span>
<span class="line"><span>            &lt;div v-show=&quot;isPullingDown&quot; class=&quot;loading&quot;&gt;</span></span>
<span class="line"><span>              &lt;span&gt;刷新中...&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div v-show=&quot;!isPullingDown&quot; class=&quot;scroll-pulldown-loaded&quot;&gt;</span></span>
<span class="line"><span>              &lt;span&gt;{{refreshTxt}}&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>          &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;/slot&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>  import { defineProps, defineEmits, nextTick, onMounted, ref, watch, onActivated, onDeactivated, defineExpose } from &#39;vue&#39;</span></span>
<span class="line"><span>  import usePullDown from &#39;./use-pullDown&#39;</span></span>
<span class="line"><span>  import usePullUp from &#39;./use-pullUp&#39;</span></span>
<span class="line"><span>  import BScroll from &#39;@better-scroll/core&#39;</span></span>
<span class="line"><span>  import PullDown from &#39;@better-scroll/pull-down&#39;</span></span>
<span class="line"><span>  import PullUp from &#39;@better-scroll/pull-up&#39;</span></span>
<span class="line"><span>  import { getRect } from &#39;@/core/utils/dom&#39;</span></span>
<span class="line"><span>  import { USE_TRANSITION } from &#39;@/core/bscroll/constants&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  BScroll.use(PullDown)</span></span>
<span class="line"><span>  BScroll.use(PullUp)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const DEFAULT_STOP_TIME = 600</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const props = defineProps({</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>      type: Array,</span></span>
<span class="line"><span>      default() {</span></span>
<span class="line"><span>        return []</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    options: {</span></span>
<span class="line"><span>      type: Object,</span></span>
<span class="line"><span>      default() {</span></span>
<span class="line"><span>        return {}</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    refreshDelay: {</span></span>
<span class="line"><span>      type: Number,</span></span>
<span class="line"><span>      default: 20</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const isPullDownUpdating = ref(false)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const scroll = ref(null)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const scrollWrapperRef = ref(null)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const emit = defineEmits([&#39;pulling-down&#39;, &#39;pulling-up&#39;])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const {</span></span>
<span class="line"><span>    pulldownWrapperRef,</span></span>
<span class="line"><span>    pullDownRefresh,</span></span>
<span class="line"><span>    refreshTxt,</span></span>
<span class="line"><span>    isPullingDown,</span></span>
<span class="line"><span>    pullDownStyle,</span></span>
<span class="line"><span>    beforePullDown,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    _onPullDownRefresh,</span></span>
<span class="line"><span>    _pullDownRefreshChangeHandler,</span></span>
<span class="line"><span>    _waitResetPullDown</span></span>
<span class="line"><span>  } = usePullDown(scroll, props, emit, _calculateMinHeight)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const {</span></span>
<span class="line"><span>    listWrapperRef,</span></span>
<span class="line"><span>    isPullUpLoad,</span></span>
<span class="line"><span>    pullUpLoad,</span></span>
<span class="line"><span>    pullUpHeight,</span></span>
<span class="line"><span>    pullUpTxt,</span></span>
<span class="line"><span>    pullUpNoMore,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    _onPullUpLoad,</span></span>
<span class="line"><span>    _pullUpLoadChangeHandler</span></span>
<span class="line"><span>  } = usePullUp(scroll, props, emit, _calculateMinHeight)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  onMounted(async () =&gt; {</span></span>
<span class="line"><span>    await nextTick()</span></span>
<span class="line"><span>    initBscroll()</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // setup内部的资源是私有的 使用defineExpose可以将资源显示暴露 供父组件调用</span></span>
<span class="line"><span>  defineExpose({</span></span>
<span class="line"><span>    forceUpdate</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  watch(() =&gt; props.data, () =&gt; {</span></span>
<span class="line"><span>    setTimeout(() =&gt; {</span></span>
<span class="line"><span>      forceUpdate(true)</span></span>
<span class="line"><span>    }, props.refreshDelay)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  onActivated(() =&gt; {</span></span>
<span class="line"><span>    enable()</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  onDeactivated(() =&gt; {</span></span>
<span class="line"><span>    disable()</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function initBscroll() {</span></span>
<span class="line"><span>    if (!scrollWrapperRef.value) {</span></span>
<span class="line"><span>      return</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    _calculateMinHeight()</span></span>
<span class="line"><span>    const dynamicOptions = {</span></span>
<span class="line"><span>      scrollY: true,</span></span>
<span class="line"><span>      click: true,</span></span>
<span class="line"><span>      probeType: 1,</span></span>
<span class="line"><span>      useTransition: USE_TRANSITION</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    const options = Object.assign({}, dynamicOptions, props.options)</span></span>
<span class="line"><span>    scroll.value = new BScroll(scrollWrapperRef.value, options)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (pullDownRefresh.value) {</span></span>
<span class="line"><span>      _onPullDownRefresh()</span></span>
<span class="line"><span>      _pullDownRefreshChangeHandler()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (pullUpLoad.value) {</span></span>
<span class="line"><span>      _onPullUpLoad()</span></span>
<span class="line"><span>      _pullUpLoadChangeHandler()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function _calculateMinHeight() {</span></span>
<span class="line"><span>    const pullUpLoadVal = pullUpLoad.value</span></span>
<span class="line"><span>    const pullDownRefreshVal = pullDownRefresh.value</span></span>
<span class="line"><span>    let minHeight = 0</span></span>
<span class="line"><span>    if (pullDownRefreshVal || pullUpLoadVal) {</span></span>
<span class="line"><span>      const wrapperHeight = getRect(scrollWrapperRef.value).height</span></span>
<span class="line"><span>      minHeight = wrapperHeight + 1</span></span>
<span class="line"><span>      if (pullUpLoadVal &amp;&amp; pullUpLoadVal.visible) {</span></span>
<span class="line"><span>        minHeight -= pullUpHeight.value</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    listWrapperRef.value.style.minHeight = \`\${minHeight}px\`</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  async function forceUpdate(dirty = false, nomore = false) {</span></span>
<span class="line"><span>    if (isPullDownUpdating.value) {</span></span>
<span class="line"><span>      return</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (pullDownRefresh.value &amp;&amp; isPullingDown.value) {</span></span>
<span class="line"><span>      isPullingDown.value = false</span></span>
<span class="line"><span>      isPullDownUpdating.value = true</span></span>
<span class="line"><span>      await _waitFinishPullDown()</span></span>
<span class="line"><span>      isPullDownUpdating.value = false</span></span>
<span class="line"><span>      await _waitResetPullDown(dirty)</span></span>
<span class="line"><span>    } else if (pullUpLoad.value &amp;&amp; isPullUpLoad.value) {</span></span>
<span class="line"><span>      isPullUpLoad.value = false</span></span>
<span class="line"><span>      scroll.value.finishPullUp()</span></span>
<span class="line"><span>      pullUpNoMore.value = !dirty || nomore</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    dirty &amp;&amp; refresh()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function _waitFinishPullDown(next) {</span></span>
<span class="line"><span>    const { stopTime = DEFAULT_STOP_TIME } = pullDownRefresh.value</span></span>
<span class="line"><span>    return new Promise(resolve =&gt; {</span></span>
<span class="line"><span>      setTimeout(() =&gt; {</span></span>
<span class="line"><span>        scroll.value.finishPullDown()</span></span>
<span class="line"><span>        resolve()</span></span>
<span class="line"><span>      }, stopTime)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function disable() {</span></span>
<span class="line"><span>    scroll.value &amp;&amp; scroll.value.disable()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function enable() {</span></span>
<span class="line"><span>    scroll.value &amp;&amp; scroll.value.enable()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function refresh() {</span></span>
<span class="line"><span>    _calculateMinHeight()</span></span>
<span class="line"><span>    scroll.value &amp;&amp; scroll.value.refresh()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span>  .scroll-pull-up-down{</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    height: 100%;</span></span>
<span class="line"><span>    overflow: hidden;</span></span>
<span class="line"><span>    .scroll-pull-up-down-content{</span></span>
<span class="line"><span>      position: relative;</span></span>
<span class="line"><span>      z-index: 1;</span></span>
<span class="line"><span>      .scroll-list-wrapper{</span></span>
<span class="line"><span>        overflow: hidden;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .scroll-pullup-wrapper{</span></span>
<span class="line"><span>        width: 100%;</span></span>
<span class="line"><span>        display: flex;</span></span>
<span class="line"><span>        justify-content: center;</span></span>
<span class="line"><span>        align-items: center;</span></span>
<span class="line"><span>        .before-trigger{</span></span>
<span class="line"><span>          padding: 22px 0;</span></span>
<span class="line"><span>          min-height: 1em;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .after-trigger{</span></span>
<span class="line"><span>          padding: 19px 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .scroll-pulldown{</span></span>
<span class="line"><span>      .scroll-pulldown-wrapper{</span></span>
<span class="line"><span>        position: absolute;</span></span>
<span class="line"><span>        width: 100%;</span></span>
<span class="line"><span>        left: 0;</span></span>
<span class="line"><span>        display: flex;</span></span>
<span class="line"><span>        justify-content: center;</span></span>
<span class="line"><span>        align-items: center;</span></span>
<span class="line"><span>        transition: all;</span></span>
<span class="line"><span>        overflow: hidden;</span></span>
<span class="line"><span>        .before-trigger{</span></span>
<span class="line"><span>          height: 54px;</span></span>
<span class="line"><span>          line-height: 0;</span></span>
<span class="line"><span>          padding-top: 6px</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .after-trigger{</span></span>
<span class="line"><span>          .loading {</span></span>
<span class="line"><span>            padding: 8px 0;</span></span>
<span class="line"><span>            font-size: 14px;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          .scroll-pulldown-loaded{</span></span>
<span class="line"><span>            padding: 8px 0;</span></span>
<span class="line"><span>            font-size: 14px;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br></div></div><h4 id="use-pulldown-js" tabindex="-1">use-pullDown.js <a class="header-anchor" href="#use-pulldown-js" aria-label="Permalink to &quot;use-pullDown.js&quot;">​</a></h4><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { computed, nextTick, ref, watch } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { getRect } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/core/utils/dom&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> usePullDown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">scroll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">props</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">emit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">_calculateMinHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DEFAULT_REFRESH_TXT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;刷新成功&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pulldownWrapperRef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> beforePullDown</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pullDownStop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isPullingDown</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pullDownStyle</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pullDownHeight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">60</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> resetPullDownTimer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pullDownRefresh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> computed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pullDownRefresh </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> props.options.pullDownRefresh</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pullDownRefresh) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pullDownRefresh</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (pullDownRefresh </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      pullDownRefresh </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      stop: pullDownStop.value</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }, pullDownRefresh)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> refreshTxt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> computed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pullDownRefreshVal</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pullDownRefresh.value</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (pullDownRefreshVal </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pullDownRefreshVal.txt) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DEFAULT_REFRESH_TXT</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  watch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pullDownRefresh, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">newVal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">oldVal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (newVal) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      scroll.value.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openPullDown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(newVal)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">oldVal) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        _onPullDownRefresh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        _pullDownRefreshChangeHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">newVal </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> oldVal) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      scroll.value.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">closePullDown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      _offPullDownRefresh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      _pullDownRefreshChangeHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    deep: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _onPullDownRefresh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    scroll.value.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pullingDown&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, _pullDownHandle)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    scroll.value.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;scroll&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, _pullDownScrollHandle)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _pullDownHandle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (resetPullDownTimer.value) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      clearTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(resetPullDownTimer.value)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    beforePullDown.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    isPullingDown.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    emit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pulling-down&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _pullDownRefreshChangeHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> nextTick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    _getPullDownEleHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    _calculateMinHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _offPullDownRefresh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    scroll.value.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">off</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pullingDown&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, _pullDownHandle)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    scroll.value.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">off</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;scroll&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, _pullDownScrollHandle)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _pullDownScrollHandle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">pos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (beforePullDown.value) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      pullDownStyle.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`top:\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Math</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">min</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pullDownHeight</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">value</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}px\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      pullDownStyle.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`top:\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Math</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">min</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pullDownStop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">value</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}px\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _getPullDownEleHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pulldownWrapper</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pulldownWrapperRef.value</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pulldownWrapper) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pullDownHeight.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getRect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pulldownWrapper).height</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    beforePullDown.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    isPullingDown.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> nextTick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pullDownStop.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getRect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pulldownWrapper).height</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    beforePullDown.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    isPullingDown.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _waitResetPullDown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">dirty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">resolve</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      resetPullDownTimer.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        pullDownStyle.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`top: -\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pullDownHeight</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">value</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}px\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        beforePullDown.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }, scroll.value.options.bounceTime)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pulldownWrapperRef,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pullDownRefresh,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    refreshTxt,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    isPullingDown,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pullDownStyle,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    beforePullDown,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    _onPullDownRefresh,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    _pullDownRefreshChangeHandler,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    _waitResetPullDown</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br></div></div><h4 id="use-pullup-js" tabindex="-1">use-pullUp.js <a class="header-anchor" href="#use-pullup-js" aria-label="Permalink to &quot;use-pullUp.js&quot;">​</a></h4><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { computed, nextTick, ref, watch } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { getRect } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/core/utils/dom&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> usePullUp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">scroll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">props</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">emit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">_calculateMinHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> listWrapperRef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isPullUpLoad</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pullUpHeight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pullUpNoMore</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pullUpLoad</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> computed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> props.options.pullUpLoad</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pullUpTxt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> computed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pullUpLoadVal</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pullUpLoad.value</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> txt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pullUpLoadVal </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pullUpLoadVal.txt</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> moreTxt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (txt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> txt.more) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> noMoreTxt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (txt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> txt.noMore) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pullUpNoMore.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> noMoreTxt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> moreTxt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  watch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pullUpLoad, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">newVal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">oldVal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (newVal) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      scroll.value.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openPullUp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(newVal)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">oldVal) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        _onPullUpLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        _pullUpLoadChangeHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">newVal </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> oldVal) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      scroll.value.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">closePullUp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      _offPullUpLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      _pullUpLoadChangeHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    deep: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _onPullUpLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    scroll.value.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pullingUp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, _pullUpHandle)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _offPullUpLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    scroll.value.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">off</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pullingUp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, _pullUpHandle)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _pullUpHandle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    isPullUpLoad.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    emit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pulling-up&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _pullUpLoadChangeHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    nextTick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      _getPullUpEleHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      _calculateMinHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _getPullUpEleHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> listWrapper</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> listWrapperRef.value</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pullup</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> listWrapper.nextElementSibling</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pullup) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      pullUpHeight.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pullUpHeight.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getRect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pullup).height</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    listWrapperRef,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    isPullUpLoad,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pullUpLoad,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pullUpHeight,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pullUpNoMore,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pullUpTxt,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    _onPullUpLoad,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    _pullUpLoadChangeHandler</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br></div></div><p>使用插件</p><p>&quot;@better-scroll/core&quot;: &quot;^2.4.2&quot;</p><p>&quot;@better-scroll/observe-dom&quot;: &quot;^2.4.2&quot;</p><p>&quot;@better-scroll/pull-down&quot;: &quot;^2.1.1&quot;</p><p>&quot;@better-scroll/pull-up&quot;: &quot;^2.1.1&quot;</p><p>使用</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ha-list&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scroll-pull-up-down</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    :data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;patientList&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    :options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;options&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @pulling-down</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onPullingDown&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @pulling-up</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onPullingUp&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scroll&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ha-ul&quot;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    &lt;/ul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scroll-pull-up-down</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">特别提示</p><p>使用的时候，ha-list要固定高度，内部是scroll-pull-up-down组件，再内部是展示的数据，但只能有一个子元素</p></div><h3 id="vue2基本滚动" tabindex="-1">vue2基本滚动 <a class="header-anchor" href="#vue2基本滚动" aria-label="Permalink to &quot;vue2基本滚动&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">温馨提示</p><p>该组件是以<a href="https://better-scroll.github.io/docs/zh-CN/" target="_blank" rel="noreferrer">better-scroll 2.0</a>为基础封装的，包含基本的滚动功能</p><p>项目地址：<a href="https://github.com/zhaobao1830/vue-cli-mobile-zb/blob/master/src/components/base/scroll/base-scroll.vue" target="_blank" rel="noreferrer">https://github.com/zhaobao1830/vue-cli-mobile-zb/blob/master/src/components/base/scroll/base-scroll.vue</a></p></div><p>base-scroll.vue</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div ref=&quot;wrapper&quot;&gt;</span></span>
<span class="line"><span>    &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import BScroll from &#39;@better-scroll/core&#39;</span></span>
<span class="line"><span>import ObserveDOM from &#39;@better-scroll/observe-dom&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BScroll.use(ObserveDOM)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &#39;base-scroll&#39;,</span></span>
<span class="line"><span>  props: {</span></span>
<span class="line"><span>    click: {</span></span>
<span class="line"><span>      type: Boolean,</span></span>
<span class="line"><span>      default: true</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    probeType: {</span></span>
<span class="line"><span>      type: Number,</span></span>
<span class="line"><span>      default: 0</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    scrollX: {</span></span>
<span class="line"><span>      type: Boolean,</span></span>
<span class="line"><span>      default: false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  mounted () {</span></span>
<span class="line"><span>    setTimeout(() =&gt; {</span></span>
<span class="line"><span>      this._initScroll()</span></span>
<span class="line"><span>    }, 20)</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    _initScroll () {</span></span>
<span class="line"><span>      if (!this.$refs.wrapper) {</span></span>
<span class="line"><span>        return</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      this.scroll = new BScroll(this.$refs.wrapper, {</span></span>
<span class="line"><span>        ObserveDOM: true, // 开启 observe-dom 插件</span></span>
<span class="line"><span>        probeType: this.probeType,</span></span>
<span class="line"><span>        click: this.click,</span></span>
<span class="line"><span>        scrollX: this.scrollX</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  destroyed() {</span></span>
<span class="line"><span>    this.scroll.destroy()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><p>使用</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;base-scroll class=&quot;home-container&quot;&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;home-content&quot;&gt;</span></span>
<span class="line"><span>    内容</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/base-scroll&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">备注</p><p>使用的时候，home-container要固定高度，且子元素只能有一个</p></div><h3 id="vue2下拉刷新、上拉加载" tabindex="-1">vue2下拉刷新、上拉加载 <a class="header-anchor" href="#vue2下拉刷新、上拉加载" aria-label="Permalink to &quot;vue2下拉刷新、上拉加载&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">温馨提示</p><p>该组件是以<a href="https://better-scroll.github.io/docs/zh-CN/" target="_blank" rel="noreferrer">better-scroll 2.0</a>为基础封装的，包含基本的滚动、下拉加载、上拉刷新功能</p><p>项目地址：<a href="https://github.com/zhaobao1830/vue-cli-mobile-zb/blob/master/src/components/base/scroll/scroll-pull-up-down.vue" target="_blank" rel="noreferrer">https://github.com/zhaobao1830/vue-cli-mobile-zb/blob/master/src/components/base/scroll/scroll-pull-up-down.vue</a></p></div><p>scroll-pull-up-down.vue</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div</span></span>
<span class="line"><span>    ref=&quot;bsWrapper&quot;</span></span>
<span class="line"><span>    class=&quot;scroll-pull-up-down-wrapper&quot;</span></span>
<span class="line"><span>  &gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;scroll-pull-up-down-content&quot;&gt;</span></span>
<span class="line"><span>      &lt;div ref=&quot;listWrapper&quot; class=&quot;scroll-pull-up-down-list-wrapper&quot;&gt;</span></span>
<span class="line"><span>        &lt;slot&gt;</span></span>
<span class="line"><span>        &lt;/slot&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;slot name=&quot;pullup&quot; :pullUpLoad=&quot;pullUpLoad&quot; :isPullUpLoad=&quot;isPullUpLoad&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;scroll-pull-up-down-pullup-wrapper&quot; v-if=&quot;pullUpLoad&quot;&gt;</span></span>
<span class="line"><span>          &lt;div class=&quot;before-trigger&quot; v-if=&quot;!isPullUpLoad&quot;&gt;</span></span>
<span class="line"><span>            &lt;span&gt;{{pullUpTxt}}&lt;/span&gt;</span></span>
<span class="line"><span>          &lt;/div&gt;</span></span>
<span class="line"><span>          &lt;div class=&quot;after-trigger&quot; v-else&gt;</span></span>
<span class="line"><span>            &lt;span class=&quot;pullup-txt&quot;&gt;Loading...&lt;/span&gt;</span></span>
<span class="line"><span>          &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;/slot&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div v-if=&quot;pullDownRefresh&quot; class=&quot;scroll-pull-up-down-pulldown&quot; ref=&quot;pulldown&quot;&gt;</span></span>
<span class="line"><span>      &lt;slot</span></span>
<span class="line"><span>        name=&quot;pulldown&quot;</span></span>
<span class="line"><span>        :pullDownRefresh=&quot;pullDownRefresh&quot;</span></span>
<span class="line"><span>        :pullDownStyle=&quot;pullDownStyle&quot;</span></span>
<span class="line"><span>        :beforePullDown=&quot;beforePullDown&quot;</span></span>
<span class="line"><span>        :isPullingDown=&quot;isPullingDown&quot;</span></span>
<span class="line"><span>      &gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;scroll-pull-up-down-pulldown-wrapper&quot; :style=&quot;pullDownStyle&quot;&gt;</span></span>
<span class="line"><span>          &lt;div class=&quot;before-trigger&quot; v-show=&quot;beforePullDown&quot;&gt;</span></span>
<span class="line"><span>            &lt;span&gt;Pull Down and refresh&lt;/span&gt;</span></span>
<span class="line"><span>          &lt;/div&gt;</span></span>
<span class="line"><span>          &lt;div class=&quot;after-trigger&quot; v-show=&quot;!beforePullDown&quot;&gt;</span></span>
<span class="line"><span>            &lt;div v-show=&quot;isPullingDown&quot; class=&quot;loading&quot;&gt;</span></span>
<span class="line"><span>              &lt;span&gt;Loading...&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div v-show=&quot;!isPullingDown&quot; class=&quot;scroll-pull-up-down-pulldown-loaded&quot;&gt;</span></span>
<span class="line"><span>              &lt;span&gt;{{refreshTxt}}&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>          &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;/slot&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script type=&quot;text/ecmascript-6&quot;&gt;</span></span>
<span class="line"><span>import BScroll from &#39;@better-scroll/core&#39;</span></span>
<span class="line"><span>import PullDown from &#39;@better-scroll/pull-down&#39;</span></span>
<span class="line"><span>import Pullup from &#39;@better-scroll/pull-up&#39;</span></span>
<span class="line"><span>import { getRect } from &#39;@/core/utils/dom&#39;</span></span>
<span class="line"><span>import { camelize } from &#39;@/core/lang/string&#39;</span></span>
<span class="line"><span>import { USE_TRANSITION } from &#39;@/core/bscroll/constants&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BScroll.use(PullDown)</span></span>
<span class="line"><span>BScroll.use(Pullup)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const DIRECTION_H = &#39;horizontal&#39;</span></span>
<span class="line"><span>const DIRECTION_V = &#39;vertical&#39;</span></span>
<span class="line"><span>const DEFAULT_STOP_TIME = 600</span></span>
<span class="line"><span>const DEFAULT_REFRESH_TXT = &#39;刷新成功&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const NEST_MODE_NONE = &#39;none&#39;</span></span>
<span class="line"><span>const NEST_MODE_NATIVE = &#39;native&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const EVENT_SCROLL = &#39;scroll&#39;</span></span>
<span class="line"><span>const EVENT_BEFORE_SCROLL_START = &#39;before-scroll-start&#39;</span></span>
<span class="line"><span>const EVENT_SCROLL_END = &#39;scroll-end&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const SCROLL_EVENTS = [EVENT_SCROLL, EVENT_BEFORE_SCROLL_START, EVENT_SCROLL_END]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const DEFAULT_OPTIONS = {</span></span>
<span class="line"><span>  click: true,</span></span>
<span class="line"><span>  probeType: 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const EVENT_PULLING_DOWN = &#39;pulling-down&#39;</span></span>
<span class="line"><span>const EVENT_PULLING_UP = &#39;pulling-up&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &#39;scroll-pull-up-down&#39;,</span></span>
<span class="line"><span>  inject: {</span></span>
<span class="line"><span>    parentScroll: {</span></span>
<span class="line"><span>      default: null</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  props: {</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>      type: Array,</span></span>
<span class="line"><span>      default() {</span></span>
<span class="line"><span>        return []</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    options: {</span></span>
<span class="line"><span>      type: Object,</span></span>
<span class="line"><span>      default() {</span></span>
<span class="line"><span>        return {}</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    direction: {</span></span>
<span class="line"><span>      type: String,</span></span>
<span class="line"><span>      default: DIRECTION_V</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    refreshDelay: {</span></span>
<span class="line"><span>      type: Number,</span></span>
<span class="line"><span>      default: 20</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    scrollEvents: { // 配置需要派发的 scroll 事件 可包含子项：&#39;scroll&#39;, &#39;before-scroll-start&#39;, &#39;scroll-end&#39;</span></span>
<span class="line"><span>      type: Array,</span></span>
<span class="line"><span>      default() {</span></span>
<span class="line"><span>        return []</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      validator(arr) {</span></span>
<span class="line"><span>        return arr.every((item) =&gt; {</span></span>
<span class="line"><span>          return SCROLL_EVENTS.indexOf(item) !== -1</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    nestMode: {</span></span>
<span class="line"><span>      type: String,</span></span>
<span class="line"><span>      default: NEST_MODE_NONE</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      beforePullDown: true,</span></span>
<span class="line"><span>      isPullingDown: false,</span></span>
<span class="line"><span>      isPullUpLoad: false,</span></span>
<span class="line"><span>      pullDownStyle: &#39;&#39;,</span></span>
<span class="line"><span>      pullDownStop: 40,</span></span>
<span class="line"><span>      pullDownHeight: 60,</span></span>
<span class="line"><span>      pullUpHeight: 0,</span></span>
<span class="line"><span>      pullUpNoMore: false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  mounted () {</span></span>
<span class="line"><span>    this.$nextTick(() =&gt; {</span></span>
<span class="line"><span>      this.initBscroll()</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    initBscroll() {</span></span>
<span class="line"><span>      if (!this.$refs.bsWrapper) {</span></span>
<span class="line"><span>        return</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      this._calculateMinHeight()</span></span>
<span class="line"><span>      const dynamicOptions = {</span></span>
<span class="line"><span>        scrollY: this.direction === DIRECTION_V,</span></span>
<span class="line"><span>        scrollX: this.direction === DIRECTION_H,</span></span>
<span class="line"><span>        probeType: this.needListenScroll ? 3 : 1,</span></span>
<span class="line"><span>        useTransition: USE_TRANSITION</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      const options = Object.assign({}, DEFAULT_OPTIONS, dynamicOptions, this.options)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      this.bscroll = new BScroll(this.$refs.bsWrapper, options)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      this.parentScroll &amp;&amp; this.nestMode !== NEST_MODE_NONE &amp;&amp; this._handleNestScroll()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      this._listenScrollEvents()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      if (this.pullDownRefresh) {</span></span>
<span class="line"><span>        this._onPullDownRefresh()</span></span>
<span class="line"><span>        this._pullDownRefreshChangeHandler()</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      if (this.pullUpLoad) {</span></span>
<span class="line"><span>        this._onPullUpLoad()</span></span>
<span class="line"><span>        this._pullUpLoadChangeHandler()</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    async forceUpdate(dirty = false, nomore = false) {</span></span>
<span class="line"><span>      if (this.isPullDownUpdating) {</span></span>
<span class="line"><span>        return</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      if (this.pullDownRefresh &amp;&amp; this.isPullingDown) {</span></span>
<span class="line"><span>        this.isPullingDown = false</span></span>
<span class="line"><span>        this.isPullDownUpdating = true</span></span>
<span class="line"><span>        await this._waitFinishPullDown()</span></span>
<span class="line"><span>        this.isPullDownUpdating = false</span></span>
<span class="line"><span>        await this._waitResetPullDown(dirty)</span></span>
<span class="line"><span>      } else if (this.pullUpLoad &amp;&amp; this.isPullUpLoad) {</span></span>
<span class="line"><span>        this.isPullUpLoad = false</span></span>
<span class="line"><span>        this.bscroll.finishPullUp()</span></span>
<span class="line"><span>        this.pullUpNoMore = !dirty || nomore</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      dirty &amp;&amp; this.refresh()</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    _waitFinishPullDown(next) {</span></span>
<span class="line"><span>      const { stopTime = DEFAULT_STOP_TIME } = this.pullDownRefresh</span></span>
<span class="line"><span>      return new Promise(resolve =&gt; {</span></span>
<span class="line"><span>        setTimeout(() =&gt; {</span></span>
<span class="line"><span>          this.bscroll.finishPullDown()</span></span>
<span class="line"><span>          resolve()</span></span>
<span class="line"><span>        }, stopTime)</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    _calculateMinHeight() {</span></span>
<span class="line"><span>      const { bsWrapper, listWrapper } = this.$refs</span></span>
<span class="line"><span>      const pullUpLoad = this.pullUpLoad</span></span>
<span class="line"><span>      const pullDownRefresh = this.pullDownRefresh</span></span>
<span class="line"><span>      let minHeight = 0</span></span>
<span class="line"><span>      if (pullDownRefresh || pullUpLoad) {</span></span>
<span class="line"><span>        const wrapperHeight = getRect(bsWrapper).height</span></span>
<span class="line"><span>        minHeight = wrapperHeight + 1</span></span>
<span class="line"><span>        if (pullUpLoad &amp;&amp; pullUpLoad.visible) {</span></span>
<span class="line"><span>          minHeight -= this.pullUpHeight</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      listWrapper.style.minHeight = \`\${minHeight}px\`</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    _handleNestScroll() {</span></span>
<span class="line"><span>      this.$nextTick(() =&gt; {</span></span>
<span class="line"><span>        const innerScroll = this.bscroll</span></span>
<span class="line"><span>        const outerScroll = this.parentScroll.scroll</span></span>
<span class="line"><span>        const scrolls = [innerScroll, outerScroll]</span></span>
<span class="line"><span>        scrolls.forEach((scroll, index, arr) =&gt; {</span></span>
<span class="line"><span>          // scroll ended always enable them</span></span>
<span class="line"><span>          scroll.on(&#39;touchEnd&#39;, () =&gt; {</span></span>
<span class="line"><span>            outerScroll.enable()</span></span>
<span class="line"><span>            innerScroll.enable()</span></span>
<span class="line"><span>            // when inner scroll reaching boundary, we will disable inner scroll, so when &#39;touchend&#39; event fire,</span></span>
<span class="line"><span>            // the inner scroll will not reset initiated within &#39;_end&#39; method in better-scroll.</span></span>
<span class="line"><span>            // then lead to inner and outer scrolls together when we touch and move on the outer scroll element,</span></span>
<span class="line"><span>            // so here we reset inner scroll&#39;s &#39;initiated&#39; manually.</span></span>
<span class="line"><span>            innerScroll.initiated = false</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          scroll.on(&#39;beforeScrollStart&#39;, () =&gt; {</span></span>
<span class="line"><span>            this.touchStartMoment = true</span></span>
<span class="line"><span>            const anotherScroll = arr[(index + 1) % 2]</span></span>
<span class="line"><span>            anotherScroll.stop()</span></span>
<span class="line"><span>            anotherScroll.resetPosition()</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        innerScroll.on(&#39;scroll&#39;, (pos) =&gt; {</span></span>
<span class="line"><span>          // if scroll event triggered not by touch event, such as by &#39;scrollTo&#39; method</span></span>
<span class="line"><span>          if (!innerScroll.initiated || innerScroll.isInTransition) {</span></span>
<span class="line"><span>            return</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          if (this.nestMode === NEST_MODE_NATIVE &amp;&amp; !this.touchStartMoment) {</span></span>
<span class="line"><span>            return</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          const reachBoundary = this._checkReachBoundary(pos)</span></span>
<span class="line"><span>          if (reachBoundary) {</span></span>
<span class="line"><span>            innerScroll.resetPosition()</span></span>
<span class="line"><span>            innerScroll.disable()</span></span>
<span class="line"><span>            // Prevent outer scroll have a bouncing step when enabled in &#39;free&#39; nestMode.</span></span>
<span class="line"><span>            outerScroll.pointX = innerScroll.pointX</span></span>
<span class="line"><span>            outerScroll.pointY = innerScroll.pointY</span></span>
<span class="line"><span>            outerScroll.enable()</span></span>
<span class="line"><span>          } else {</span></span>
<span class="line"><span>            outerScroll.disable()</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          this.touchStartMoment = false</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    _checkReachBoundary(pos) {</span></span>
<span class="line"><span>      const distX = this.bscroll.distX</span></span>
<span class="line"><span>      const distY = this.bscroll.distY</span></span>
<span class="line"><span>      const reachBoundaryX = distX &gt; 0 ? pos.x &gt;= this.bscroll.minScrollX : distX &lt; 0 ? pos.x &lt;= this.bscroll.maxScrollX : false</span></span>
<span class="line"><span>      const reachBoundaryY = distY &gt; 0 ? pos.y &gt;= this.bscroll.minScrollY : distY &lt; 0 ? pos.y &lt;= this.bscroll.maxScrollY : false</span></span>
<span class="line"><span>      const freeScroll = this.bscroll.freeScroll</span></span>
<span class="line"><span>      const hasHorizontalScroll = this.bscroll.hasHorizontalScroll</span></span>
<span class="line"><span>      const hasVerticalScroll = this.bscroll.hasVerticalScroll</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      if (!hasHorizontalScroll &amp;&amp; !hasVerticalScroll) {</span></span>
<span class="line"><span>        return true</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      if (freeScroll) {</span></span>
<span class="line"><span>        return reachBoundaryX || reachBoundaryY</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      let reachBoundary</span></span>
<span class="line"><span>      if (this.bscroll.movingDirectionX) {</span></span>
<span class="line"><span>        reachBoundary = reachBoundaryX</span></span>
<span class="line"><span>      } else if (this.bscroll.movingDirectionY) {</span></span>
<span class="line"><span>        reachBoundary = reachBoundaryY</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      return reachBoundary</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    _listenScrollEvents() {</span></span>
<span class="line"><span>      this.finalScrollEvents.forEach((event) =&gt; {</span></span>
<span class="line"><span>        this.bscroll.on(camelize(event), (...args) =&gt; {</span></span>
<span class="line"><span>          this.$emit(event, ...args)</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    _onPullDownRefresh() {</span></span>
<span class="line"><span>      this.bscroll.on(&#39;pullingDown&#39;, this._pullDownHandle)</span></span>
<span class="line"><span>      this.bscroll.on(&#39;scroll&#39;, this._pullDownScrollHandle)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    _offPullDownRefresh() {</span></span>
<span class="line"><span>      this.bscroll.off(&#39;pullingDown&#39;, this._pullDownHandle)</span></span>
<span class="line"><span>      this.bscroll.off(&#39;scroll&#39;, this._pullDownScrollHandle)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    _onPullUpLoad() {</span></span>
<span class="line"><span>      this.bscroll.on(&#39;pullingUp&#39;, this._pullUpHandle)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    _offPullUpLoad() {</span></span>
<span class="line"><span>      this.bscroll.off(&#39;pullingUp&#39;, this._pullUpHandle)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    _pullUpLoadChangeHandler() {</span></span>
<span class="line"><span>      this.$nextTick(() =&gt; {</span></span>
<span class="line"><span>        this._getPullUpEleHeight()</span></span>
<span class="line"><span>        this._calculateMinHeight()</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    _waitResetPullDown(dirty) {</span></span>
<span class="line"><span>      return new Promise(resolve =&gt; {</span></span>
<span class="line"><span>        this.resetPullDownTimer = setTimeout(() =&gt; {</span></span>
<span class="line"><span>          this.pullDownStyle = \`top: -\${this.pullDownHeight}px\`</span></span>
<span class="line"><span>          this.beforePullDown = true</span></span>
<span class="line"><span>          resolve()</span></span>
<span class="line"><span>        }, this.bscroll.options.bounceTime)</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    _pullUpHandle() {</span></span>
<span class="line"><span>      this.isPullUpLoad = true</span></span>
<span class="line"><span>      this.$emit(EVENT_PULLING_UP)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    _pullDownHandle() {</span></span>
<span class="line"><span>      if (this.resetPullDownTimer) {</span></span>
<span class="line"><span>        clearTimeout(this.resetPullDownTimer)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      this.beforePullDown = false</span></span>
<span class="line"><span>      this.isPullingDown = true</span></span>
<span class="line"><span>      this.$emit(EVENT_PULLING_DOWN)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    _pullDownScrollHandle(pos) {</span></span>
<span class="line"><span>      if (this.beforePullDown) {</span></span>
<span class="line"><span>        this.pullDownStyle = \`top:\${Math.min(pos.y - this.pullDownHeight, 0)}px\`</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        this.pullDownStyle = \`top:\${Math.min(pos.y - this.pullDownStop, 0)}px\`</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    _pullDownRefreshChangeHandler() {</span></span>
<span class="line"><span>      this.$nextTick(() =&gt; {</span></span>
<span class="line"><span>        this._getPullDownEleHeight()</span></span>
<span class="line"><span>        this._calculateMinHeight()</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    _getPullDownEleHeight() {</span></span>
<span class="line"><span>      let pulldown = this.$refs.pulldown</span></span>
<span class="line"><span>      if (!pulldown) {</span></span>
<span class="line"><span>        return</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      pulldown = pulldown.firstChild</span></span>
<span class="line"><span>      this.pullDownHeight = getRect(pulldown).height</span></span>
<span class="line"><span>      this.beforePullDown = false</span></span>
<span class="line"><span>      this.isPullingDown = true</span></span>
<span class="line"><span>      this.$nextTick(() =&gt; {</span></span>
<span class="line"><span>        this.pullDownStop = getRect(pulldown).height</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        this.beforePullDown = true</span></span>
<span class="line"><span>        this.isPullingDown = false</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    _getPullUpEleHeight() {</span></span>
<span class="line"><span>      const listWrapper = this.$refs.listWrapper</span></span>
<span class="line"><span>      const pullup = listWrapper.nextElementSibling</span></span>
<span class="line"><span>      if (!pullup) {</span></span>
<span class="line"><span>        this.pullUpHeight = 0</span></span>
<span class="line"><span>        return</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      this.pullUpHeight = getRect(pullup).height</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    disable() {</span></span>
<span class="line"><span>      this.bscroll &amp;&amp; this.bscroll.disable()</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    enable() {</span></span>
<span class="line"><span>      this.bscroll &amp;&amp; this.bscroll.enable()</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    refresh() {</span></span>
<span class="line"><span>      this._calculateMinHeight()</span></span>
<span class="line"><span>      this.bscroll &amp;&amp; this.bscroll.refresh()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  watch: {</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>      setTimeout(() =&gt; {</span></span>
<span class="line"><span>        this.forceUpdate(true)</span></span>
<span class="line"><span>      }, this.refreshDelay)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    pullDownRefresh: {</span></span>
<span class="line"><span>      handler(newVal, oldVal) {</span></span>
<span class="line"><span>        if (newVal) {</span></span>
<span class="line"><span>          this.bscroll.openPullDown(newVal)</span></span>
<span class="line"><span>          if (!oldVal) {</span></span>
<span class="line"><span>            this._onPullDownRefresh()</span></span>
<span class="line"><span>            this._pullDownRefreshChangeHandler()</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (!newVal &amp;&amp; oldVal) {</span></span>
<span class="line"><span>          this.bscroll.closePullDown()</span></span>
<span class="line"><span>          this._offPullDownRefresh()</span></span>
<span class="line"><span>          this._pullDownRefreshChangeHandler()</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      deep: true</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    pullUpLoad: {</span></span>
<span class="line"><span>      handler(newVal, oldVal) {</span></span>
<span class="line"><span>        if (newVal) {</span></span>
<span class="line"><span>          this.bscroll.openPullUp(newVal)</span></span>
<span class="line"><span>          if (!oldVal) {</span></span>
<span class="line"><span>            this._onPullUpLoad()</span></span>
<span class="line"><span>            this._pullUpLoadChangeHandler()</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (!newVal &amp;&amp; oldVal) {</span></span>
<span class="line"><span>          this.bscroll.closePullUp()</span></span>
<span class="line"><span>          this._offPullUpLoad()</span></span>
<span class="line"><span>          this._pullUpLoadChangeHandler()</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      deep: true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  activated() {</span></span>
<span class="line"><span>    /* istanbul ignore next */</span></span>
<span class="line"><span>    this.enable()</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  deactivated() {</span></span>
<span class="line"><span>    /* istanbul ignore next */</span></span>
<span class="line"><span>    this.disable()</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  computed: {</span></span>
<span class="line"><span>    pullDownRefresh() {</span></span>
<span class="line"><span>      let pullDownRefresh = this.options.pullDownRefresh</span></span>
<span class="line"><span>      if (!pullDownRefresh) {</span></span>
<span class="line"><span>        return pullDownRefresh</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      if (pullDownRefresh === true) {</span></span>
<span class="line"><span>        pullDownRefresh = {}</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      return Object.assign({</span></span>
<span class="line"><span>          stop: this.pullDownStop</span></span>
<span class="line"><span>        }, pullDownRefresh</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    finalScrollEvents() {</span></span>
<span class="line"><span>      const finalScrollEvents = this.scrollEvents.slice()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      if (!finalScrollEvents.length) {</span></span>
<span class="line"><span>        finalScrollEvents.push(EVENT_SCROLL)</span></span>
<span class="line"><span>        finalScrollEvents.push(EVENT_BEFORE_SCROLL_START)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      return finalScrollEvents</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    needListenScroll() {</span></span>
<span class="line"><span>      return this.finalScrollEvents.indexOf(EVENT_SCROLL) !== -1 || this.parentScroll</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    pullUpLoad() {</span></span>
<span class="line"><span>      return this.options.pullUpLoad</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    pullUpTxt() {</span></span>
<span class="line"><span>      const pullUpLoad = this.pullUpLoad</span></span>
<span class="line"><span>      const txt = pullUpLoad &amp;&amp; pullUpLoad.txt</span></span>
<span class="line"><span>      const moreTxt = (txt &amp;&amp; txt.more) || &#39;&#39;</span></span>
<span class="line"><span>      const noMoreTxt = (txt &amp;&amp; txt.noMore) || &#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      return this.pullUpNoMore ? noMoreTxt : moreTxt</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    refreshTxt() {</span></span>
<span class="line"><span>      const pullDownRefresh = this.pullDownRefresh</span></span>
<span class="line"><span>      return (pullDownRefresh &amp;&amp; pullDownRefresh.txt) || DEFAULT_REFRESH_TXT</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span>.base-scroll-wrapper{</span></span>
<span class="line"><span>  position: relative;</span></span>
<span class="line"><span>  height: 100%;</span></span>
<span class="line"><span>  overflow: hidden;</span></span>
<span class="line"><span>  .base-scroll-content{</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    z-index: 1;</span></span>
<span class="line"><span>    .base-scroll-list-wrapper{</span></span>
<span class="line"><span>      overflow: hidden;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .base-scroll-pullup-wrapper{</span></span>
<span class="line"><span>      width: 100%;</span></span>
<span class="line"><span>      display: flex;</span></span>
<span class="line"><span>      justify-content: center;</span></span>
<span class="line"><span>      align-items: center;</span></span>
<span class="line"><span>      .before-trigger{</span></span>
<span class="line"><span>        padding: 22px 0;</span></span>
<span class="line"><span>        min-height: 1em;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .after-trigger{</span></span>
<span class="line"><span>        padding: 19px 0;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  .base-scroll-pulldown{</span></span>
<span class="line"><span>    .base-scroll-pulldown-wrapper{</span></span>
<span class="line"><span>      position: absolute;</span></span>
<span class="line"><span>      width: 100%;</span></span>
<span class="line"><span>      left: 0;</span></span>
<span class="line"><span>      display: flex;</span></span>
<span class="line"><span>      justify-content: center;</span></span>
<span class="line"><span>      align-items: center;</span></span>
<span class="line"><span>      transition: all;</span></span>
<span class="line"><span>      overflow: hidden;</span></span>
<span class="line"><span>      .before-trigger{</span></span>
<span class="line"><span>        height: 54px;</span></span>
<span class="line"><span>        line-height: 0;</span></span>
<span class="line"><span>        padding-top: 6px</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .after-trigger{</span></span>
<span class="line"><span>        .loading {</span></span>
<span class="line"><span>          padding: 8px 0;</span></span>
<span class="line"><span>          font-size: 14px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .base-scroll-pulldown-loaded{</span></span>
<span class="line"><span>          padding: 8px 0;</span></span>
<span class="line"><span>          font-size: 14px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br><span class="line-number">347</span><br><span class="line-number">348</span><br><span class="line-number">349</span><br><span class="line-number">350</span><br><span class="line-number">351</span><br><span class="line-number">352</span><br><span class="line-number">353</span><br><span class="line-number">354</span><br><span class="line-number">355</span><br><span class="line-number">356</span><br><span class="line-number">357</span><br><span class="line-number">358</span><br><span class="line-number">359</span><br><span class="line-number">360</span><br><span class="line-number">361</span><br><span class="line-number">362</span><br><span class="line-number">363</span><br><span class="line-number">364</span><br><span class="line-number">365</span><br><span class="line-number">366</span><br><span class="line-number">367</span><br><span class="line-number">368</span><br><span class="line-number">369</span><br><span class="line-number">370</span><br><span class="line-number">371</span><br><span class="line-number">372</span><br><span class="line-number">373</span><br><span class="line-number">374</span><br><span class="line-number">375</span><br><span class="line-number">376</span><br><span class="line-number">377</span><br><span class="line-number">378</span><br><span class="line-number">379</span><br><span class="line-number">380</span><br><span class="line-number">381</span><br><span class="line-number">382</span><br><span class="line-number">383</span><br><span class="line-number">384</span><br><span class="line-number">385</span><br><span class="line-number">386</span><br><span class="line-number">387</span><br><span class="line-number">388</span><br><span class="line-number">389</span><br><span class="line-number">390</span><br><span class="line-number">391</span><br><span class="line-number">392</span><br><span class="line-number">393</span><br><span class="line-number">394</span><br><span class="line-number">395</span><br><span class="line-number">396</span><br><span class="line-number">397</span><br><span class="line-number">398</span><br><span class="line-number">399</span><br><span class="line-number">400</span><br><span class="line-number">401</span><br><span class="line-number">402</span><br><span class="line-number">403</span><br><span class="line-number">404</span><br><span class="line-number">405</span><br><span class="line-number">406</span><br><span class="line-number">407</span><br><span class="line-number">408</span><br><span class="line-number">409</span><br><span class="line-number">410</span><br><span class="line-number">411</span><br><span class="line-number">412</span><br><span class="line-number">413</span><br><span class="line-number">414</span><br><span class="line-number">415</span><br><span class="line-number">416</span><br><span class="line-number">417</span><br><span class="line-number">418</span><br><span class="line-number">419</span><br><span class="line-number">420</span><br><span class="line-number">421</span><br><span class="line-number">422</span><br><span class="line-number">423</span><br><span class="line-number">424</span><br><span class="line-number">425</span><br><span class="line-number">426</span><br><span class="line-number">427</span><br><span class="line-number">428</span><br><span class="line-number">429</span><br><span class="line-number">430</span><br><span class="line-number">431</span><br><span class="line-number">432</span><br><span class="line-number">433</span><br><span class="line-number">434</span><br><span class="line-number">435</span><br><span class="line-number">436</span><br><span class="line-number">437</span><br><span class="line-number">438</span><br><span class="line-number">439</span><br><span class="line-number">440</span><br><span class="line-number">441</span><br><span class="line-number">442</span><br><span class="line-number">443</span><br><span class="line-number">444</span><br><span class="line-number">445</span><br><span class="line-number">446</span><br><span class="line-number">447</span><br><span class="line-number">448</span><br><span class="line-number">449</span><br><span class="line-number">450</span><br><span class="line-number">451</span><br><span class="line-number">452</span><br><span class="line-number">453</span><br><span class="line-number">454</span><br><span class="line-number">455</span><br><span class="line-number">456</span><br><span class="line-number">457</span><br><span class="line-number">458</span><br><span class="line-number">459</span><br><span class="line-number">460</span><br><span class="line-number">461</span><br><span class="line-number">462</span><br><span class="line-number">463</span><br><span class="line-number">464</span><br><span class="line-number">465</span><br><span class="line-number">466</span><br><span class="line-number">467</span><br><span class="line-number">468</span><br><span class="line-number">469</span><br><span class="line-number">470</span><br><span class="line-number">471</span><br><span class="line-number">472</span><br><span class="line-number">473</span><br><span class="line-number">474</span><br><span class="line-number">475</span><br><span class="line-number">476</span><br><span class="line-number">477</span><br><span class="line-number">478</span><br><span class="line-number">479</span><br><span class="line-number">480</span><br><span class="line-number">481</span><br><span class="line-number">482</span><br><span class="line-number">483</span><br><span class="line-number">484</span><br><span class="line-number">485</span><br><span class="line-number">486</span><br><span class="line-number">487</span><br><span class="line-number">488</span><br><span class="line-number">489</span><br><span class="line-number">490</span><br><span class="line-number">491</span><br><span class="line-number">492</span><br><span class="line-number">493</span><br><span class="line-number">494</span><br><span class="line-number">495</span><br><span class="line-number">496</span><br><span class="line-number">497</span><br><span class="line-number">498</span><br><span class="line-number">499</span><br><span class="line-number">500</span><br><span class="line-number">501</span><br><span class="line-number">502</span><br><span class="line-number">503</span><br><span class="line-number">504</span><br><span class="line-number">505</span><br><span class="line-number">506</span><br><span class="line-number">507</span><br><span class="line-number">508</span><br><span class="line-number">509</span><br><span class="line-number">510</span><br><span class="line-number">511</span><br><span class="line-number">512</span><br><span class="line-number">513</span><br><span class="line-number">514</span><br><span class="line-number">515</span><br><span class="line-number">516</span><br><span class="line-number">517</span><br><span class="line-number">518</span><br><span class="line-number">519</span><br><span class="line-number">520</span><br><span class="line-number">521</span><br><span class="line-number">522</span><br><span class="line-number">523</span><br><span class="line-number">524</span><br><span class="line-number">525</span><br><span class="line-number">526</span><br><span class="line-number">527</span><br><span class="line-number">528</span><br><span class="line-number">529</span><br><span class="line-number">530</span><br><span class="line-number">531</span><br><span class="line-number">532</span><br><span class="line-number">533</span><br><span class="line-number">534</span><br></div></div><h4 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h4><p>| 参数 | 说明 | 类型 | 可选值 | 默认值 |</p><p>|------------- |---------------- |---------------- |---------------------- |-------- |</p><p>| data | 用于列表渲染的数据 | Array | — | [] |</p><p>| options | better-scroll 配置项，具体请参考<a href="https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-options.html" target="_blank" rel="noreferrer">BS</a> 官方文档 | Object | — | 看下面备注 |</p><p>| direction | 滚东方向 | String | &#39;vertical&#39;, &#39;horizontal&#39; | &#39;vertical&#39; |</p><p>| refreshDelay | data属性的数据更新后，scroll 的刷新延时 | Number | — | 20 |</p><p>| scrollEvents | 配置需要派发的 scroll 事件 | Array | 可包含子项：&#39;scroll&#39;, &#39;before-scroll-start&#39;, &#39;scroll-end&#39; | [] |</p><p>| nestMode | 嵌套滚动模式，默认是none，即不做嵌套处理。native只在开始滚动时判断是否到达边界并开启外层滚动，与浏览器原生的嵌套滚动保持一致。free模式下，内层滚动过程中只要触发边界，便会开启外层滚动。 | String | &#39;none&#39;, &#39;native&#39;, &#39;free&#39; | &#39;none&#39; |</p><div class="tip custom-block"><p class="custom-block-title">温馨提示</p><p>options中 better-scroll 的几个常用配置项，pullDownRefresh、pullUpLoad这三个配置即可设为 Boolean（false 关闭该功能，true 开启该功能，并使用默认子配置），也可设为Object，开启该功能并具体定制其子配置项。</p></div><h5 id="pulldownrefresh-子配置项" tabindex="-1">pullDownRefresh 子配置项 <a class="header-anchor" href="#pulldownrefresh-子配置项" aria-label="Permalink to &quot;pullDownRefresh 子配置项&quot;">​</a></h5><p>| 参数 | 说明 | 类型 | 可选值 | 默认值 |</p><p>|------------- |---------------- |---------------- |---------------------- |-------- |</p><p>| threshold | 下拉刷新动作的下拉距离阈值 | Number | — |90 |</p><p>| stop | 回弹停留的位置 | Number | — | 组件会自动计算回弹时显示的元素高度作为默认值 |</p><p>| stopTime | 刷新成功的文案显示时间 | Number | — | 600 |</p><p>| txt | 刷新成功的文案 | String | — | &#39;Refresh success&#39; |</p><h5 id="pullupload-子配置项" tabindex="-1">pullUpLoad 子配置项 <a class="header-anchor" href="#pullupload-子配置项" aria-label="Permalink to &quot;pullUpLoad 子配置项&quot;">​</a></h5><p>| 参数 | 说明 | 类型 | 可选值 | 默认值 |</p><p>|------------- |---------------- |---------------- |---------------------- |-------- |</p><p>| threshold | 上拉刷新动作的上拉距离阈值 | Number | — |0 |</p><p>| txt | 上拉加载的相关文案 | Object | — | { more: &#39;&#39;, noMore: &#39;&#39; } |</p><p>| visible | 内容不满一屏时，txt 文案是否可见 | Boolean | — | false |</p>`,61),e=[i];function r(t,c,h,b,u,k){return n(),a("div",null,e)}const E=s(l,[["render",r]]);export{m as __pageData,E as default};
