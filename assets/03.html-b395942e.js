import{_ as t,M as p,p as e,q as c,R as n,t as a,N as o,a1 as l}from"./framework-b7c41258.js";const i="/zhaobao1830-notes/assets/01-826767bd.png",u="/zhaobao1830-notes/assets/02-9250d398.png",r="/zhaobao1830-notes/assets/03-5c5cd514.png",k={},d=l(`<h1 id="canvas" tabindex="-1"><a class="header-anchor" href="#canvas" aria-hidden="true">#</a> canvas</h1><h2 id="如何用-canvas-绘制几何图形" tabindex="-1"><a class="header-anchor" href="#如何用-canvas-绘制几何图形" aria-hidden="true">#</a> 如何用 Canvas 绘制几何图形？</h2><p>下面举一个绘制红色正方形的简单例子:</p><h3 id="_1-canvas-元素和-2d-上下文" tabindex="-1"><a class="header-anchor" href="#_1-canvas-元素和-2d-上下文" aria-hidden="true">#</a> 1. Canvas 元素和 2D 上下文</h3><p>对浏览器来说，Canvas 也是 HTML 元素，我们可以用 canvas 标签将它插入到 HTML 内容中。</p><p>比如，我们可以在 body 里插入一个宽、高分别为 512 的 canvas 元素。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>512<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>512<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接在Canvas上定义的width和height是Canvas的<strong>画布宽高</strong>，决定的是Canvas的坐标系</p><p>通过css给Canvas设置的width和height是Canvas的<strong>样式宽高</strong>，决定的是Canvas 在页面上呈现的大小</p><p>在实际绘制的时候，如果我们不设置 Canvas 元素的样式，那么 Canvas 元素的画布宽高就会等于它的样式宽高的像素值，也就是 512px。</p><p>因为画布宽高决定了可视区域的坐标范围，所以 Canvas 将画布宽高和样式宽高分开的做法，能更方便地适配不同的显示设备。</p><p>比如，我们要在画布宽高为 500<em>500 的 Canvas 画布上，绘制一个居中显示的 100</em>100 宽高的正方形。我们只要将它的坐标设置在 x = 200, y = 200 处即可。这样，不论这个 Canvas 以多大的尺寸显示在各种设备上，我们的代码都不需要修改。否则，如果 Canvas 的坐标范围（画布宽高）跟着样式宽高变化，那么当屏幕尺寸改变的时候，我们就要重新计算需要绘制的图形的所有坐标，这对于我们来说将会是一场“灾难”。</p><h3 id="_2-canvas-的坐标系" tabindex="-1"><a class="header-anchor" href="#_2-canvas-的坐标系" aria-hidden="true">#</a> 2. Canvas 的坐标系</h3><p>Canvas 的坐标系和浏览器窗口的坐标系类似，它们都默认左上角为坐标原点，x 轴水平向右，y 轴垂直向下。那在我们设置好的画布宽高为 512*512 的 Canvas 画布中，它的左上角坐标值为（0,0），右下角坐标值为（512,512） 。这意味着，坐标（0,0）到（512,512）之间的所有图形，都会被浏览器渲染到画布上。</p><p><img src="`+i+`" alt="Image text"></p><h3 id="_3-利用-canvas-绘制几何图形" tabindex="-1"><a class="header-anchor" href="#_3-利用-canvas-绘制几何图形" aria-hidden="true">#</a> 3. 利用 Canvas 绘制几何图形</h3><p>有了坐标系，我们就可以将几何图形绘制到 Canvas 上了。</p><p>具体的步骤可以分为两步，分别是获取 Canvas 上下文和利用 Canvas 上下文绘制图形</p><h4 id="第一步、获取-canvas-上下文" tabindex="-1"><a class="header-anchor" href="#第一步、获取-canvas-上下文" aria-hidden="true">#</a> 第一步、获取 Canvas 上下文</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">// 获取Canvas元素</span>
    <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// 获取Canvas上下文</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第二步-用-canvas-上下文绘制图形。" tabindex="-1"><a class="header-anchor" href="#第二步-用-canvas-上下文绘制图形。" aria-hidden="true">#</a> 第二步，用 Canvas 上下文绘制图形。</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 设置填充色</span>
    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>
    <span class="token comment">// 设置坐标系偏移（为了让图形在画布的正中间）</span>
    ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> rectSize <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span>
    ctx<span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0.5</span><span class="token operator">*</span>rectSize<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0.5</span><span class="token operator">*</span>rectSize<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 开始绘图</span>
    ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token operator">*</span>canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token operator">*</span>canvas<span class="token punctuation">.</span>height<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 将坐标系恢复</span>
    ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在绘制的时候，因为fillRect方法里前俩个参数表示的是图形左上角的坐标点，不是图形中心的坐标点，所以图形不在画布的正中间</p><p><img src="`+u+`" alt="Image text"></p><p>解决办法是：将画布的坐标系进行偏移</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token comment">// 设置坐标系偏移（为了让图形在画布的正中间）</span>
    ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> rectSize <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span>
    ctx<span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0.5</span><span class="token operator">*</span>rectSize<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0.5</span><span class="token operator">*</span>rectSize<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行完绘制操作后，要记得将坐标系还原</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token comment">// 将坐标系恢复</span>
    ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>绘制红色正方形的完整代码和效果如下：</p><p><img src="`+r+`" alt="Image text"></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>canvas<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>512<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>512<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// 获取Canvas元素</span>
    <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// 获取Canvas上下文</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 设置填充色</span>
    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>
    <span class="token comment">// 设置坐标系偏移（为了让图形在画布的正中间）</span>
    ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> rectSize <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span>
    ctx<span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0.5</span><span class="token operator">*</span>rectSize<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0.5</span><span class="token operator">*</span>rectSize<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 开始绘图</span>
    ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token operator">*</span>canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token operator">*</span>canvas<span class="token punctuation">.</span>height<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 将坐标系恢复</span>
    ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><p>Canvas 是一个非常简单易用的图形系统。通过一组简单的绘图指令，就能够方便快捷地绘制出各种复杂的几何图形。</p><p>Canvas 渲染起来相当高效。即使是绘制大量轮廓非常复杂的几何图形，Canvas 也只需要调用一组简单的绘图指令就能高性能地完成渲染，这个和 Canvas 更偏向于渲染层，能够提供底层的图形渲染 API 有关</p><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><p>因为 Canvas 在 HTML 层面上是一个独立的画布元素，所以所有的绘制内容都是在内部通过绘图指令来完成的，绘制出的图形对于浏览器来说，只是 Canvas 中的一个个像素点，我们很难直接抽取其中的图形对象进行操作。</p><h2 id="要点总结" tabindex="-1"><a class="header-anchor" href="#要点总结" aria-hidden="true">#</a> 要点总结</h2><ul><li><p>在 HTML 中建立画布时，我们要分别设置画布宽高和样式宽高；</p></li><li><p>在建立坐标系时，我们要注意 canvas 的坐标系和笛卡尔坐标系在 y 轴上是相反的；</p></li><li><p>如果要把图形绘制在画布中心，我们不能直接让 x、y 的坐标等于画布中心坐标，而是要让图形中心和画布中心的位置重叠。这个操作，我们可以通过计算顶点坐标或者 平移变换来实现。</p></li></ul>`,39),v={id:"参考文章-如何用canvas绘制层次关系图",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#参考文章-如何用canvas绘制层次关系图","aria-hidden":"true"},"#",-1),g={href:"https://time.geekbang.org/column/article/252705",target:"_blank",rel:"noopener noreferrer"};function b(h,x){const s=p("ExternalLinkIcon");return e(),c("div",null,[d,n("h2",v,[m,a(" 参考文章："),n("a",g,[a("如何用Canvas绘制层次关系图？"),o(s)])])])}const C=t(k,[["render",b],["__file","03.html.vue"]]);export{C as default};
