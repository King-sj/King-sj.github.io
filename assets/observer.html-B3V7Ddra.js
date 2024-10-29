import{_ as n,o as s,c as a,f as e}from"./app-Cg2LeTK3.js";const t={},p=e(`<h2 id="为什么使用观察者模式" tabindex="-1"><a class="header-anchor" href="#为什么使用观察者模式"><span>为什么使用观察者模式</span></a></h2><p>观察者模式非常适合用于需要自动更新的场景。例如，在图形用户界面（GUI）应用程序中，当数据模型发生变化时，所有显示该数据的视图都需要自动更新。通过使用观察者模式，我们可以将这些视图注册为观察者，当数据模型发生变化时，它们会自动收到通知并更新显示。</p><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h2><p>在这个示例中，我们展示了如何使用观察者模式来管理状态变化。观察者模式定义了一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都会得到通知并自动更新。以下是 TypeScript 实现的代码示例：</p><img src="https://www.plantuml.com/plantuml/svg/jL912i8m4Bpd5JbMf1_eoOFWJS4VR9kn1fgaRBP54VzkDRQKua4GRyliC3CxoIOAiNIkKTOB-4GLzA6Cu1wiRqhhTTSQ4cGrF9WaSA7tdIl1kn5O5ReFrgYxKbH6OQf4Lmt5k2GcFJ9cDCZ2UoWcpr5i81eq47p7zK7iwJekOZPRrP2Kumdwr_I4SK7L3NVDqgVGMrjRcIgmhctWu2N-K4iItZ6rvty87ycRu9PbuoBmvlCZvAc7UH_VrxGK37a-dQ0sW-Vmcnu0" alt=""><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// DigitObserver.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NumberGenerator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./numberGenerator&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Observer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./observer&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">DigitObserver</span> <span class="token keyword">implements</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token builtin">number</span><span class="token operator">:</span> NumberGenerator<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">DigitObserver: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token builtin">number</span><span class="token punctuation">.</span><span class="token function">getNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// graphObserver.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Observer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./observer&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NumberGenerator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./numberGenerator&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">GraphObserver</span> <span class="token keyword">implements</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
  <span class="token function">update</span><span class="token punctuation">(</span>generator<span class="token operator">:</span> NumberGenerator<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> generator<span class="token punctuation">.</span><span class="token function">getNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> graph <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      graph <span class="token operator">+=</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">GraphObserver: \\n</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>graph<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>generator<span class="token punctuation">.</span><span class="token function">getNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>graph<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NumberGenerator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./numberGenerator&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Observer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./observer&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> RandomNumberGenerator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./randomNumberGenerator&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DigitObserver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./DigitObserver&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> GraphObserver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./graphObserver&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> generator<span class="token operator">:</span> NumberGenerator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RandomNumberGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> observer1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DigitObserver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> observer2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GraphObserver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
generator<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span>observer1<span class="token punctuation">)</span><span class="token punctuation">;</span>
generator<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span>observer2<span class="token punctuation">)</span><span class="token punctuation">;</span>
generator<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// numberGenerator.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Observer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./observer&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">NumberGenerator</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> observers<span class="token operator">:</span> Observer<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token function">addObserver</span><span class="token punctuation">(</span>observer<span class="token operator">:</span> Observer<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token function">deleteObserver</span><span class="token punctuation">(</span>observer<span class="token operator">:</span> Observer<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>observers <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> o <span class="token operator">!==</span> observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> o<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token function">getNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// observer.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>NumberGenerator<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./numberGenerator&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
  <span class="token function">update</span><span class="token punctuation">(</span>generator<span class="token operator">:</span> NumberGenerator<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// randomNumberGenerator.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>NumberGenerator<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./numberGenerator&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">RandomNumberGenerator</span> <span class="token keyword">extends</span> <span class="token class-name">NumberGenerator</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token builtin">number</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token builtin">number</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行结果" tabindex="-1"><a class="header-anchor" href="#运行结果"><span>运行结果</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>PS design_patern<span class="token operator">&gt;</span> ts-node <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\design_patern\\src\\observer\\main.ts&quot;</span>
DigitObserver: <span class="token number">13</span>
GraphObserver:
*************
 <span class="token number">13</span>
*************
DigitObserver: <span class="token number">43</span>
GraphObserver:
*******************************************
 <span class="token number">43</span>
*******************************************
DigitObserver: <span class="token number">46</span>
GraphObserver:
**********************************************
 <span class="token number">46</span>
**********************************************
DigitObserver: <span class="token number">18</span>
GraphObserver:
******************
 <span class="token number">18</span>
******************
DigitObserver: <span class="token number">20</span>
GraphObserver:
********************
 <span class="token number">20</span>
********************
DigitObserver: <span class="token number">49</span>
GraphObserver:
*************************************************
 <span class="token number">49</span>
*************************************************
DigitObserver: <span class="token number">25</span>
GraphObserver:
*************************
 <span class="token number">25</span>
*************************
DigitObserver: <span class="token number">26</span>
GraphObserver:
**************************
 <span class="token number">26</span>
**************************
DigitObserver: <span class="token number">37</span>
GraphObserver:
*************************************
 <span class="token number">37</span>
*************************************
DigitObserver: <span class="token number">2</span>
GraphObserver:
**
 <span class="token number">2</span>
**
DigitObserver: <span class="token number">10</span>
GraphObserver:
**********
 <span class="token number">10</span>
**********
DigitObserver: <span class="token number">0</span>
GraphObserver:

 <span class="token number">0</span>

DigitObserver: <span class="token number">11</span>
GraphObserver:
***********
 <span class="token number">11</span>
***********
DigitObserver: <span class="token number">13</span>
GraphObserver:
*************
 <span class="token number">13</span>
*************
DigitObserver: <span class="token number">16</span>
GraphObserver:
****************
 <span class="token number">16</span>
****************
DigitObserver: <span class="token number">28</span>
GraphObserver:
****************************
 <span class="token number">28</span>
****************************
DigitObserver: <span class="token number">22</span>
GraphObserver:
**********************
 <span class="token number">22</span>
**********************
DigitObserver: <span class="token number">30</span>
GraphObserver:
******************************
 <span class="token number">30</span>
******************************
DigitObserver: <span class="token number">44</span>
GraphObserver:
********************************************
 <span class="token number">44</span>
********************************************
DigitObserver: <span class="token number">3</span>
GraphObserver:
***
 <span class="token number">3</span>
***
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拓展思路的要点" tabindex="-1"><a class="header-anchor" href="#拓展思路的要点"><span>拓展思路的要点</span></a></h2><h3 id="这里也出现了可替换性" tabindex="-1"><a class="header-anchor" href="#这里也出现了可替换性"><span>这里也出现了可替换性</span></a></h3><p>在设计模式中，可替换性是指一个对象可以被另一个具有相同接口的对象替换，而不影响系统的功能。在观察者模式中，观察者（Observer）和被观察者（Subject）之间的关系是松耦合的，这意味着我们可以轻松地替换观察者或被观察者，而不会影响系统的其他部分。</p><h3 id="observer-的顺序" tabindex="-1"><a class="header-anchor" href="#observer-的顺序"><span>Observer 的顺序</span></a></h3><p>Subject 角色（被观察对象）中注册有多个 Observer 角色。在示例程序的 <code>notifyObservers</code> 方法中，先注册的 Observer 的 <code>update</code> 方法会先被调用。通常，在设计 ConcreteObserver 角色的类时，需要注意这些 Observer 的 <code>update</code> 方法的调用顺序，不能因为方法的调用顺序发生改变而产生问题。例如，在示例程序中，绝不能因为先调用 <code>DigitObserver</code> 的 <code>update</code> 方法后调用 <code>GraphObserver</code> 的 <code>update</code> 方法而导致应用程序不能正常工作。当然，通常，只要保持各个类的独立性，就不会发生上面这种类的依赖关系混乱的问题。不过，我们还需要注意下面将要提到的情况。</p><h3 id="当-observer-的行为会对被观察对象产生影响时" tabindex="-1"><a class="header-anchor" href="#当-observer-的行为会对被观察对象产生影响时"><span>当 Observer 的行为会对被观察对象产生影响时</span></a></h3><p>当观察者的行为会对被观察对象产生影响时，我们需要特别小心，以避免循环依赖和无限递归。例如，一个观察者在接收到通知后修改了被观察对象的状态，这可能会导致被观察对象再次通知所有观察者，从而引发无限循环。为了解决这个问题，我们可以引入一个标志位来跟踪通知状态，或者使用更复杂的事件处理机制。</p><h3 id="传递更新信息的方式" tabindex="-1"><a class="header-anchor" href="#传递更新信息的方式"><span>传递更新信息的方式</span></a></h3><p>在观察者模式中，传递更新信息的方式有多种选择。最简单的方法是直接调用观察者的更新方法，并将被观察对象自身作为参数传递。另一种方法是传递具体的更新信息，例如事件对象或数据包。这种方法可以减少观察者对被观察对象的依赖，从而提高系统的灵活性和可维护性。</p><h3 id="从观察变为通知" tabindex="-1"><a class="header-anchor" href="#从观察变为通知"><span>从观察变为通知</span></a></h3><p>在某些情况下，我们可能需要从观察模式转变为通知模式。例如，当系统中有大量的观察者时，逐个通知每个观察者可能会导致性能问题。此时，我们可以考虑使用事件总线或消息队列来集中处理通知，从而提高系统的性能和可扩展性。</p><h3 id="mvc-model-view-controller" tabindex="-1"><a class="header-anchor" href="#mvc-model-view-controller"><span>MVC (Model/View/Controller)</span></a></h3><p>观察者模式在 MVC 架构中得到了广泛应用。模型（Model）作为被观察对象，视图（View）作为观察者，当模型的状态发生变化时，视图会自动更新。控制器（Controller）负责协调模型和视图之间的交互。通过使用观察者模式，MVC 架构实现了视图和模型的松耦合，从而提高了系统的可维护性和可扩展性。</p><h2 id="相关的设计模式" tabindex="-1"><a class="header-anchor" href="#相关的设计模式"><span>相关的设计模式</span></a></h2><ul><li>Mediator 模式</li></ul>`,23),o=[p];function i(c,l){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","observer.html.vue"]]),d=JSON.parse('{"path":"/tech/DesignPatterns/observer.html","title":"Observer 模式","lang":"zh-CN","frontmatter":{"title":"Observer 模式","date":"2024-10-26T00:00:00.000Z","category":["设计模式"],"tag":["设计模式","TypeScript","管理状态"],"prev":"./mediator","next":"./memento","description":"为什么使用观察者模式 观察者模式非常适合用于需要自动更新的场景。例如，在图形用户界面（GUI）应用程序中，当数据模型发生变化时，所有显示该数据的视图都需要自动更新。通过使用观察者模式，我们可以将这些视图注册为观察者，当数据模型发生变化时，它们会自动收到通知并更新显示。 示例代码 在这个示例中，我们展示了如何使用观察者模式来管理状态变化。观察者模式定义了...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://github.com/King-sj/tech/DesignPatterns/observer.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"Observer 模式"}],["meta",{"property":"og:description","content":"为什么使用观察者模式 观察者模式非常适合用于需要自动更新的场景。例如，在图形用户界面（GUI）应用程序中，当数据模型发生变化时，所有显示该数据的视图都需要自动更新。通过使用观察者模式，我们可以将这些视图注册为观察者，当数据模型发生变化时，它们会自动收到通知并更新显示。 示例代码 在这个示例中，我们展示了如何使用观察者模式来管理状态变化。观察者模式定义了..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"KSJ"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"TypeScript"}],["meta",{"property":"article:tag","content":"管理状态"}],["meta",{"property":"article:published_time","content":"2024-10-26T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Observer 模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-26T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KSJ\\",\\"url\\":\\"https://github.com/King-sj\\"}]}"]]},"headers":[{"level":2,"title":"为什么使用观察者模式","slug":"为什么使用观察者模式","link":"#为什么使用观察者模式","children":[]},{"level":2,"title":"示例代码","slug":"示例代码","link":"#示例代码","children":[]},{"level":2,"title":"运行结果","slug":"运行结果","link":"#运行结果","children":[]},{"level":2,"title":"拓展思路的要点","slug":"拓展思路的要点","link":"#拓展思路的要点","children":[{"level":3,"title":"这里也出现了可替换性","slug":"这里也出现了可替换性","link":"#这里也出现了可替换性","children":[]},{"level":3,"title":"Observer 的顺序","slug":"observer-的顺序","link":"#observer-的顺序","children":[]},{"level":3,"title":"当 Observer 的行为会对被观察对象产生影响时","slug":"当-observer-的行为会对被观察对象产生影响时","link":"#当-observer-的行为会对被观察对象产生影响时","children":[]},{"level":3,"title":"传递更新信息的方式","slug":"传递更新信息的方式","link":"#传递更新信息的方式","children":[]},{"level":3,"title":"从观察变为通知","slug":"从观察变为通知","link":"#从观察变为通知","children":[]},{"level":3,"title":"MVC (Model/View/Controller)","slug":"mvc-model-view-controller","link":"#mvc-model-view-controller","children":[]}]},{"level":2,"title":"相关的设计模式","slug":"相关的设计模式","link":"#相关的设计模式","children":[]}],"readingTime":{"minutes":4.64,"words":1392},"filePathRelative":"tech/DesignPatterns/observer.md","localizedDate":"2024年10月26日","excerpt":"<h2>为什么使用观察者模式</h2>\\n<p>观察者模式非常适合用于需要自动更新的场景。例如，在图形用户界面（GUI）应用程序中，当数据模型发生变化时，所有显示该数据的视图都需要自动更新。通过使用观察者模式，我们可以将这些视图注册为观察者，当数据模型发生变化时，它们会自动收到通知并更新显示。</p>\\n<h2>示例代码</h2>\\n<p>在这个示例中，我们展示了如何使用观察者模式来管理状态变化。观察者模式定义了一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都会得到通知并自动更新。以下是 TypeScript 实现的代码示例：</p>\\n<img src=\\"https://www.plantuml.com/plantuml/svg/jL912i8m4Bpd5JbMf1_eoOFWJS4VR9kn1fgaRBP54VzkDRQKua4GRyliC3CxoIOAiNIkKTOB-4GLzA6Cu1wiRqhhTTSQ4cGrF9WaSA7tdIl1kn5O5ReFrgYxKbH6OQf4Lmt5k2GcFJ9cDCZ2UoWcpr5i81eq47p7zK7iwJekOZPRrP2Kumdwr_I4SK7L3NVDqgVGMrjRcIgmhctWu2N-K4iItZ6rvty87ycRu9PbuoBmvlCZvAc7UH_VrxGK37a-dQ0sW-Vmcnu0\\" alt=\\"\\">","autoDesc":true}');export{u as comp,d as data};
