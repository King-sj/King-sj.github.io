import{_ as n,o as s,c as a,f as t}from"./app-B4LGNJZ0.js";const p={},e=t(`<h2 id="适配器模式" tabindex="-1"><a class="header-anchor" href="#适配器模式"><span>适配器模式</span></a></h2><p>适配器模式（Adapter Pattern）是一种结构型设计模式，它允许将一个类的接口转换成客户希望的另一个接口。适配器模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。</p><h3 id="为什么要用适配器模式" tabindex="-1"><a class="header-anchor" href="#为什么要用适配器模式"><span>为什么要用适配器模式</span></a></h3><p>在软件开发中，经常会遇到需要使用一些现有的类，但它们的接口并不符合当前系统的需求。适配器模式通过创建一个适配器类，将现有类的接口转换为所需的接口，从而使得现有类可以在新的环境中使用。</p><h3 id="类比" tabindex="-1"><a class="header-anchor" href="#类比"><span>类比</span></a></h3><h3 id="类比-1" tabindex="-1"><a class="header-anchor" href="#类比-1"><span>类比</span></a></h3><table><thead><tr><th></th><th>比喻</th><th>示例程序</th></tr></thead><tbody><tr><td>实际需求</td><td>交流100V</td><td>Banner</td></tr><tr><td>变换装置</td><td>适配器</td><td>PrintBanner</td></tr><tr><td>需求</td><td>直流12V</td><td>Print</td></tr></tbody></table><h3 id="示例程序" tabindex="-1"><a class="header-anchor" href="#示例程序"><span>示例程序</span></a></h3><p>Adapter 有两种方式实现</p><img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuIh9BCb9jL9uldlviyxzN9bv9Qb5QOd9gGe1HK2sGZMNWe9s0OWPdfgOhQ49vmQN5ENdfGC5QhcuadCIYuiLd1BpybAB83gAC_BBmpDBCW8IYrBp8BfWGex5G1kGzO4jWcfEhIX9pKk1cvMPMv2JcfkQLr9CWdCSW2O0FGO0" alt=""><img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuIh9BCb9jL9ukdpAiyuPN8b9nIL5YSab2iavYSN52W55cNab2jLS2WhQ1I1cU6fYjeOcd1jSKfIVbmuKgENYWcXmIipBIos2w2ZEo2yFpop924WiIis3w889EHQNf1OXwmDR1DMSMb6IcfS25GEPf9i4bh22caw4Qv2DqzNLWZaBxaq7e0L0pmC0" alt=""><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// banner.ts</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Banner</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token builtin">string</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">showWithParen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">showWithAster</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">*</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">*</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// print_inheritance.ts</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Print</span> <span class="token punctuation">{</span>
  <span class="token function">printWeak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token function">printStrong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// printBanner_inheritance.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Banner <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./banner&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Print <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./print_inheritance&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PrintBanner</span> <span class="token keyword">extends</span> <span class="token class-name">Banner</span> <span class="token keyword">implements</span> <span class="token class-name">Print</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">printWeak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">showWithParen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">printStrong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">showWithAster</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// print_delegation.ts</span>
<span class="token keyword">export</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Print</span> <span class="token punctuation">{</span>
  <span class="token keyword">abstract</span> <span class="token function">printWeak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token keyword">abstract</span> <span class="token function">printStrong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// printBanner_delegation.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Print <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./print_delegation&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Banner <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./banner&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PrintBanner</span> <span class="token keyword">extends</span> <span class="token class-name">Print</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> banner<span class="token operator">:</span> Banner<span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>banner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Banner</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">printWeak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>banner<span class="token punctuation">.</span><span class="token function">showWithParen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">printStrong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>banner<span class="token punctuation">.</span><span class="token function">showWithAster</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PrintBanner <span class="token keyword">as</span> pbi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./printBanner_inheritance&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PrintBanner <span class="token keyword">as</span> pbd <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./printBanner_delegation&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 使用继承</span>
<span class="token keyword">const</span> printBanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">pbi</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
printBanner<span class="token punctuation">.</span><span class="token function">printWeak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
printBanner<span class="token punctuation">.</span><span class="token function">printStrong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用委托</span>
<span class="token keyword">const</span> printBanner2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">pbd</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
printBanner2<span class="token punctuation">.</span><span class="token function">printWeak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
printBanner2<span class="token punctuation">.</span><span class="token function">printStrong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行结果" tabindex="-1"><a class="header-anchor" href="#运行结果"><span>运行结果</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ts-node <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\design_pattern\\src<span class="token entity" title="\\a">\\a</span>dapter\\main.ts&quot;</span>
<span class="token punctuation">(</span>Hello<span class="token punctuation">)</span>
*Hello*
<span class="token punctuation">(</span>Hello<span class="token punctuation">)</span>
*Hello*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关的设计模式" tabindex="-1"><a class="header-anchor" href="#相关的设计模式"><span>相关的设计模式</span></a></h2><ul><li>Bridge</li><li>Decorator</li></ul>`,16),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","adapter.html.vue"]]),k=JSON.parse('{"path":"/tech/DesignPatterns/adapter.html","title":"适配器模式","lang":"zh-CN","frontmatter":{"title":"适配器模式","date":"2024-10-21T00:00:00.000Z","category":["设计模式"],"tag":["设计模式","typescript"],"prev":"./iterator","next":"./template_method","description":"适配器模式 适配器模式（Adapter Pattern）是一种结构型设计模式，它允许将一个类的接口转换成客户希望的另一个接口。适配器模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。 为什么要用适配器模式 在软件开发中，经常会遇到需要使用一些现有的类，但它们的接口并不符合当前系统的需求。适配器模式通过创建一个适配器类，将现有类的接口转换为所...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://github.com/King-sj/tech/DesignPatterns/adapter.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"适配器模式"}],["meta",{"property":"og:description","content":"适配器模式 适配器模式（Adapter Pattern）是一种结构型设计模式，它允许将一个类的接口转换成客户希望的另一个接口。适配器模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。 为什么要用适配器模式 在软件开发中，经常会遇到需要使用一些现有的类，但它们的接口并不符合当前系统的需求。适配器模式通过创建一个适配器类，将现有类的接口转换为所..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"KSJ"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"typescript"}],["meta",{"property":"article:published_time","content":"2024-10-21T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"适配器模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-21T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KSJ\\",\\"url\\":\\"https://github.com/King-sj\\"}]}"]]},"headers":[{"level":2,"title":"适配器模式","slug":"适配器模式","link":"#适配器模式","children":[{"level":3,"title":"为什么要用适配器模式","slug":"为什么要用适配器模式","link":"#为什么要用适配器模式","children":[]},{"level":3,"title":"类比","slug":"类比","link":"#类比","children":[]},{"level":3,"title":"类比","slug":"类比-1","link":"#类比-1","children":[]},{"level":3,"title":"示例程序","slug":"示例程序","link":"#示例程序","children":[]},{"level":3,"title":"运行结果","slug":"运行结果","link":"#运行结果","children":[]}]},{"level":2,"title":"相关的设计模式","slug":"相关的设计模式","link":"#相关的设计模式","children":[]}],"readingTime":{"minutes":1.52,"words":456},"filePathRelative":"tech/DesignPatterns/adapter.md","localizedDate":"2024年10月21日","excerpt":"<h2>适配器模式</h2>\\n<p>适配器模式（Adapter Pattern）是一种结构型设计模式，它允许将一个类的接口转换成客户希望的另一个接口。适配器模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。</p>\\n<h3>为什么要用适配器模式</h3>\\n<p>在软件开发中，经常会遇到需要使用一些现有的类，但它们的接口并不符合当前系统的需求。适配器模式通过创建一个适配器类，将现有类的接口转换为所需的接口，从而使得现有类可以在新的环境中使用。</p>\\n<h3>类比</h3>\\n<h3>类比</h3>\\n<table>\\n<thead>\\n<tr>\\n<th></th>\\n<th>比喻</th>\\n<th>示例程序</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>实际需求</td>\\n<td>交流100V</td>\\n<td>Banner</td>\\n</tr>\\n<tr>\\n<td>变换装置</td>\\n<td>适配器</td>\\n<td>PrintBanner</td>\\n</tr>\\n<tr>\\n<td>需求</td>\\n<td>直流12V</td>\\n<td>Print</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{r as comp,k as data};