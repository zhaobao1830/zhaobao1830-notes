import{_ as t,M as p,p as e,q as o,R as n,t as s,N as c,a1 as i}from"./framework-b7c41258.js";const l={},u=n("h1",{id:"大屏适配方案",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#大屏适配方案","aria-hidden":"true"},"#"),s(" 大屏适配方案")],-1),r=n("p",null,"数据可视化大屏需要适配不同的比例，现记录俩种觉得不错的方案",-1),k={href:"https://github.com/zhaobao1830/echarts-zb",target:"_blank",rel:"noopener noreferrer"},d=i(`<div class="custom-container tip"><p class="custom-container-title">备注</p><p>下面俩种方案，都是以16:9比例（一般用1920*1080）进行开发的，之后适配不同分辨率的大屏 如果大屏分辨率也是16:9，那没什么大问题，俩种方案都可以 如果大屏分辨率不是16:9，那就需要专门开发</p></div><h2 id="以宽或高为准-去适配高或宽" tabindex="-1"><a class="header-anchor" href="#以宽或高为准-去适配高或宽" aria-hidden="true">#</a> 以宽或高为准，去适配高或宽</h2><p>resizeMixin.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>onBeforeUnmount<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token doc-comment comment">/**
 * 是先按照1920*1080尺寸的设计图开发，然后进行等比例缩放
 * 在大屏展示的时候，计算大屏的宽高比，
 * 如果大于16:9，以高度为基准，去适配宽度
 * 如果小于16:9，以宽度为基准，去适配高度
*/</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">resizeMixin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> baseWidth <span class="token operator">=</span> <span class="token number">1920</span>
  <span class="token keyword">const</span> baseHeight <span class="token operator">=</span> <span class="token number">1080</span>

<span class="token comment">// * 需保持的比例（默认16:9）</span>
  <span class="token keyword">const</span> baseProportion <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token punctuation">(</span>baseWidth <span class="token operator">/</span> baseHeight<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> largeScreenRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> drawTiming <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">calcRate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> resize<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>drawTiming<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> resize<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">calcRate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>largeScreenRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 当前宽高比</span>
    <span class="token keyword">const</span> currentRate <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth <span class="token operator">/</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// 宽缩放比例</span>
    <span class="token keyword">let</span> widthScale <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token comment">// 高缩放比例</span>
    <span class="token keyword">let</span> heightScale <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentRate <span class="token operator">&gt;</span> baseProportion<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      widthScale <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerHeight <span class="token operator">*</span> baseProportion<span class="token punctuation">)</span> <span class="token operator">/</span> baseWidth<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
      heightScale <span class="token operator">=</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerHeight <span class="token operator">/</span> baseHeight<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      heightScale <span class="token operator">=</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth <span class="token operator">/</span> baseProportion <span class="token operator">/</span> baseHeight<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
      widthScale <span class="token operator">=</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth <span class="token operator">/</span> baseWidth<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    largeScreenRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">scale(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>widthScale<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>heightScale<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">) translate(-50%, -50%)</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>drawTiming<span class="token punctuation">.</span>value<span class="token punctuation">)</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">calcRate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    largeScreenRef
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">备注</p><p>这种方案会在左右俩侧或上下俩侧出现空白，解决方法是背景设置为深颜色，这样看着不影响</p></div><h2 id="固定宽高比进行缩放" tabindex="-1"><a class="header-anchor" href="#固定宽高比进行缩放" aria-hidden="true">#</a> 固定宽高比进行缩放</h2><p>autoResize.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>nextTick<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> onUnmounted<span class="token punctuation">,</span> ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> debounce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/util&#39;</span>

<span class="token doc-comment comment">/**
 * 固定宽高比，等比例进行缩放（这种方式开发的大屏，在浏览器进行缩放，页面的内容不变）
 * 可以手动传入宽高，比如1920*1080或者3940*2160,
 * 以传入的尺寸进行开发
 * 如果没有传入，就默认电脑屏幕的宽高（以我的电脑为例，就是1920*1080）
 * 通过计算宽高和实际展示尺寸的比例，进行宽高的缩放
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">autoResize</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> largeScreenConRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> width <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> height <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token comment">// 可视区域的宽高</span>
  <span class="token keyword">const</span> originalWidth <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> originalHeight <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">initSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">updateSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">updateScale</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 使用debounce方法，页面进行缩放的时候，会出现先放大后缩小的情况，如果对这种情况敏感，可以将debounce方法去掉</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> onResize<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> onResize<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">onResize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">initSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">updateScale</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">initSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> dom <span class="token operator">=</span> largeScreenConRef<span class="token punctuation">.</span>value
        <span class="token comment">// 获取大屏尺寸</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>options<span class="token punctuation">.</span>width <span class="token operator">&amp;&amp;</span> props<span class="token punctuation">.</span>options<span class="token punctuation">.</span>height<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          width<span class="token punctuation">.</span>value <span class="token operator">=</span> props<span class="token punctuation">.</span>options<span class="token punctuation">.</span>width
          height<span class="token punctuation">.</span>value <span class="token operator">=</span> props<span class="token punctuation">.</span>options<span class="token punctuation">.</span>height
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          width<span class="token punctuation">.</span>value <span class="token operator">=</span> dom<span class="token punctuation">.</span>clientWidth
          height<span class="token punctuation">.</span>value <span class="token operator">=</span> dom<span class="token punctuation">.</span>clientHeight
        <span class="token punctuation">}</span>

        <span class="token comment">// 获取画布尺寸</span>
        <span class="token comment">// 只要赋值了，就不会再重复赋值了</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>originalWidth<span class="token punctuation">.</span>value <span class="token operator">||</span> <span class="token operator">!</span>originalHeight<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          originalWidth<span class="token punctuation">.</span>value <span class="token operator">=</span> window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width
          originalHeight<span class="token punctuation">.</span>value <span class="token operator">=</span> window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>height
        <span class="token punctuation">}</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">updateSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> dom <span class="token operator">=</span> largeScreenConRef<span class="token punctuation">.</span>value
    <span class="token keyword">if</span> <span class="token punctuation">(</span>width<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> height<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      dom<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>width<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span>
      dom<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>height<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      dom<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>originalWidth<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span>
      dom<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>originalHeight<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 计算宽高比</span>
  <span class="token keyword">function</span> <span class="token function">updateScale</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取真实的视口尺寸</span>
    <span class="token keyword">const</span> currentWidth <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientWidth
    <span class="token keyword">const</span> currentHeight <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientHeight

    <span class="token comment">// 获取大屏最终的宽高</span>
    <span class="token keyword">const</span> realWidth <span class="token operator">=</span> width<span class="token punctuation">.</span>value <span class="token operator">||</span> originalWidth<span class="token punctuation">.</span>value
    <span class="token keyword">const</span> realHeight <span class="token operator">=</span> height<span class="token punctuation">.</span>value <span class="token operator">||</span> originalHeight<span class="token punctuation">.</span>value

    <span class="token comment">// 计算缩放比</span>
    <span class="token keyword">const</span> widthScale <span class="token operator">=</span> currentWidth <span class="token operator">/</span> realWidth
    <span class="token keyword">const</span> heightScale <span class="token operator">=</span> currentHeight <span class="token operator">/</span> realHeight

    <span class="token keyword">const</span> dom <span class="token operator">=</span> largeScreenConRef<span class="token punctuation">.</span>value
    dom<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">scale(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>widthScale<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>heightScale<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    largeScreenConRef
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">备注</p><p>这种方案开发的大屏，在浏览器进行缩放，页面的内容不变</p></div>`,9);function v(m,b){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,r,n("p",null,[s("项目地址："),n("a",k,[s("https://github.com/zhaobao1830/echarts-zb"),c(a)]),s(" autoResize.js和resizeMixin")]),d])}const g=t(l,[["render",v],["__file","06.html.vue"]]);export{g as default};
