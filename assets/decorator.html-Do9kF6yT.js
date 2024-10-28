import{_ as n,o as s,c as a,a as t,b as p,f as e}from"./app-B-9y9oJs.js";const o={},c=p("p",null,"在这个示例中，我们使用装饰器模式来动态地给对象添加职责。装饰器模式允许我们通过将对象放入包含行为的特殊封装对象中来扩展对象的功能，而无需修改原始类的代码。",-1),l=e(`<h2 id="为什么使用装饰器模式" tabindex="-1"><a class="header-anchor" href="#为什么使用装饰器模式"><span>为什么使用装饰器模式？</span></a></h2><ol><li><strong>职责扩展</strong>：装饰器模式允许我们在不修改现有代码的情况下扩展对象的功能。</li><li><strong>灵活性</strong>：可以根据需要动态地添加或删除职责。</li><li><strong>遵循开闭原则</strong>：通过使用装饰器模式，我们可以在不修改现有类的情况下添加新功能，从而遵循开闭原则。</li></ol><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h2><img src="https://www.plantuml.com/plantuml/svg/lLDB3i8W4DrpYbdIQ2zWN1Wrhbof5w25M285myTgZ7UN5b6fTQdBcJVpvirZc1bBj7MrGAGmLfFIGYc8CR3avYZ81Qu8O0HxPXTAk5eQd4r0khfWEW8RrGndT-niiLPDX7oD7y7blginbMhQjfFY5DrGV_vSQSeqU0ecQIed1ngYIKntXA43zx6i9G-Sssvwf1gc3WeJfKaRJWkoNzZp4imfwndn28FOeWiM5T6fu6VRXnjZAAl_Q5yv8Rvh7xtX0q_savlBeIO7jkQIuPS9tX3bf1rSvA4tprLw0oYUpBI5GXMQ-HNzFxe3" alt=""><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// border.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Display <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./display&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Border</span> <span class="token keyword">extends</span> <span class="token class-name">Display</span> <span class="token punctuation">{</span>
  <span class="token keyword">protected</span> display<span class="token operator">:</span> Display<span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>display<span class="token operator">:</span> Display<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>display <span class="token operator">=</span> display<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// display.ts</span>
<span class="token keyword">export</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Display</span> <span class="token punctuation">{</span>
  <span class="token keyword">abstract</span> <span class="token function">getColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token keyword">abstract</span> <span class="token function">getRows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token keyword">abstract</span> <span class="token function">getRowText</span><span class="token punctuation">(</span>row<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRowText</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// fullBorder.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Border <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./border&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">FullBorder</span> <span class="token keyword">extends</span> <span class="token class-name">Border</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>display<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>display<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>display<span class="token punctuation">.</span><span class="token function">getColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getRows</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>display<span class="token punctuation">.</span><span class="token function">getRows</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getRowText</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&quot;+&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">makeLine</span><span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>display<span class="token punctuation">.</span><span class="token function">getColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;+&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>display<span class="token punctuation">.</span><span class="token function">getRows</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&quot;+&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">makeLine</span><span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>display<span class="token punctuation">.</span><span class="token function">getColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;+&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&quot;|&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>display<span class="token punctuation">.</span><span class="token function">getRowText</span><span class="token punctuation">(</span>row <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;|&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">private</span> <span class="token function">makeLine</span><span class="token punctuation">(</span>ch<span class="token punctuation">,</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> buf <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      buf <span class="token operator">+=</span> ch<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> buf<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Display <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./display&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StringDisplay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./stringDisplay&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SideBorder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./sideBorder&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FullBorder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./fullBorder&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b1<span class="token operator">:</span> Display <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringDisplay</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b2<span class="token operator">:</span> Display <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SideBorder</span><span class="token punctuation">(</span>b1<span class="token punctuation">,</span> <span class="token string">&quot;#&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b3<span class="token operator">:</span> Display <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FullBorder</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">;</span>
b1<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b2<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b3<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b4<span class="token operator">:</span> Display <span class="token operator">=</span>
  <span class="token keyword">new</span> <span class="token class-name">SideBorder</span><span class="token punctuation">(</span>
    <span class="token keyword">new</span> <span class="token class-name">FullBorder</span><span class="token punctuation">(</span>
      <span class="token keyword">new</span> <span class="token class-name">FullBorder</span><span class="token punctuation">(</span>
        <span class="token keyword">new</span> <span class="token class-name">SideBorder</span><span class="token punctuation">(</span>
          <span class="token keyword">new</span> <span class="token class-name">FullBorder</span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token class-name">StringDisplay</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token string">&quot;*&quot;</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&quot;/&quot;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

b4<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// sideBorder.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Border <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./border&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Display <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./display&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">SideBorder</span> <span class="token keyword">extends</span> <span class="token class-name">Border</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> borderChar<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>display<span class="token operator">:</span> Display<span class="token punctuation">,</span> ch<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>display<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>borderChar <span class="token operator">=</span> ch<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>display<span class="token punctuation">.</span><span class="token function">getColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getRows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>display<span class="token punctuation">.</span><span class="token function">getRows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getRowText</span><span class="token punctuation">(</span>row<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>borderChar <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>display<span class="token punctuation">.</span><span class="token function">getRowText</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>borderChar<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// stringDisplay.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Display <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./display&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">StringDisplay</span> <span class="token keyword">extends</span> <span class="token class-name">Display</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token builtin">string</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token builtin">string</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getRows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getRowText</span><span class="token punctuation">(</span>row<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行结果" tabindex="-1"><a class="header-anchor" href="#运行结果"><span>运行结果</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>PS design_patern<span class="token operator">&gt;</span> ts-node <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\design_patern\\src\\decorator\\main.ts&quot;</span>
Hello, world.
<span class="token comment">#Hello, world.#</span>
+---------------+
<span class="token operator">|</span><span class="token comment">#Hello, world.#|</span>
+---------------+
/+-----------+/
/<span class="token operator">|</span>+---------+<span class="token operator">|</span>/
/<span class="token operator">||</span>*+-----+*<span class="token operator">||</span>/
/<span class="token operator">||</span>*<span class="token operator">|</span>Hello<span class="token operator">|</span>*<span class="token operator">||</span>/
/<span class="token operator">||</span>*+-----+*<span class="token operator">||</span>/
/<span class="token operator">|</span>+---------+<span class="token operator">|</span>/
/+-----------+/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拓展思路的要点" tabindex="-1"><a class="header-anchor" href="#拓展思路的要点"><span>拓展思路的要点</span></a></h2><h3 id="api-的透明性" tabindex="-1"><a class="header-anchor" href="#api-的透明性"><span>API 的透明性</span></a></h3><p>在 Decorator 模式中，装饰边框与被装饰物具有一致性。具体而言，在示例程序中，表示装饰边框的 <code>Border</code> 类是表示被装饰物的 <code>Display</code> 类的子类，这就体现了它们之间的一致性。也就是说， <code>Border</code> 类（以及它的子类）与表示被装饰物的 <code>Display</code> 类具有相同的接口（API）。这样，即使被装饰物被边框装饰起来了，接口（API）也不会被隐藏起来。其他类依然可以调用 <code>getColumns</code>、<code>getRows</code>、<code>getRowText</code> 以及 <code>show</code> 方法。这就是接口（API）的“透明性”。在示例程序中，实例 <code>b4</code> 被装饰了多次，但是接口（API）却没有发生任何变化。得益于接口（API）的透明性，模式中也形成了类似于 Composite 模式中的递归结构。也就是说，装饰边框里面的“被装饰物”实际上又是别的物体的“装饰边框”。就像是剥洋葱时以为洋葱心要出来了，结果却发现还是皮。不过， Decorator 模式虽然与 Composite 模式一样，都具有递归结构，但是它们的使用目的不同。Decorator 模式的主要目的是通过添加装饰物来增加对象的功能。</p><h3 id="在不改变被装饰物的前提下增加功能" tabindex="-1"><a class="header-anchor" href="#在不改变被装饰物的前提下增加功能"><span>在不改变被装饰物的前提下增加功能</span></a></h3><p>在 Decorator 模式中，装饰边框与被装饰物具有相同的接口（API）。虽然接口是相同的，但是越装饰，功能则越多。例如，用 <code>SideBorder</code> 装饰 <code>Display</code> 后，就可以在字符串的左右两侧加上装饰字符。如果再用 <code>FullBorder</code> 装饰，那么就可以在字符串的四周加上边框。此时，我们完全不需要对被装饰的类做任何修改。这样，我们就实现了不修改被装饰的类即可增加功能。Decorator 模式使用了委托。对“装饰边框”提出的要求（调用装饰边框的方法）会被转交（委托）给“被装饰物”去处理。以示例程序来说，就是 <code>SideBorder</code> 类的 <code>getColumns</code> 方法调用了 <code>display.getColumns</code>。此外，<code>getRows</code> 方法也调用了 <code>display.getRows</code>。</p><h3 id="可以动态地增加功能" tabindex="-1"><a class="header-anchor" href="#可以动态地增加功能"><span>可以动态地增加功能</span></a></h3><p>Decorator 模式中用到了委托，它使类之间形成了弱关联关系。因此，不用改变框架代码，就可以生成一个与其他对象具有不同关系的新对象。</p><h3 id="只需要一些装饰物即可添加许多功能" tabindex="-1"><a class="header-anchor" href="#只需要一些装饰物即可添加许多功能"><span>只需要一些装饰物即可添加许多功能</span></a></h3><p>使用 Decorator 模式可以为程序添加许多功能。只要准备一些装饰边框（ConcreteDecorator 角色），即使这些装饰边框都只具有非常简单的功能，也可以将它们自由组合成为新的对象。这就像我们可以自由选择香草味冰激凌、巧克力冰激凌、草莓冰激凌、猕猴桃冰激凌等各种口味的冰激凌一样。如果冰激凌店要为顾客准备所有的冰激凌成品那真是太麻烦了。因此，冰激凌店只会准备各种香料，当顾客下单后只需要在冰激凌上加上各种香料就可以了。不管是香草味，还是咖啡朗姆和开心果的混合口味，亦或是香草味、草莓味和猕猴桃三重口味，顾客想吃什么口味都可以。Decorator 模式就是可以应对这种多功能对象的需求的一种模式。</p><h3 id="导致增加许多很小的类" tabindex="-1"><a class="header-anchor" href="#导致增加许多很小的类"><span>导致增加许多很小的类</span></a></h3><p>Decorator 模式的一个缺点是会导致程序中增加许多功能类似的很小的类。</p><h2 id="相关的设计模式" tabindex="-1"><a class="header-anchor" href="#相关的设计模式"><span>相关的设计模式</span></a></h2><ul><li>Adapter 模式</li><li>Strategy 模式</li></ul><h2 id="继承和委托中的一致性" tabindex="-1"><a class="header-anchor" href="#继承和委托中的一致性"><span>继承和委托中的一致性</span></a></h2><h3 id="父类和子类的一致性" tabindex="-1"><a class="header-anchor" href="#父类和子类的一致性"><span>父类和子类的一致性</span></a></h3><p>在面向对象编程中，父类和子类之间的一致性是指子类应当继承父类的行为和属性，并且可以扩展或重写这些行为和属性。子类应当能够替代父类的实例而不影响程序的正确性，这就是所谓的里氏替换原则（Liskov Substitution Principle）。</p><h3 id="自己和被委托对象的一致性" tabindex="-1"><a class="header-anchor" href="#自己和被委托对象的一致性"><span>自己和被委托对象的一致性</span></a></h3><p>在委托模式中，一致性是指委托对象应当具有与委托者相同的接口或行为。委托者将某些任务委托给委托对象来执行，而委托对象应当能够无缝地完成这些任务，就像委托者自己完成一样。这种一致性确保了委托模式的灵活性和可维护性。</p>`,25);function i(u,r){return s(),a("div",null,[c,t(" more "),l])}const d=n(o,[["render",i],["__file","decorator.html.vue"]]),v=JSON.parse('{"path":"/tech/DesignPatterns/decorator.html","title":"Decorator 模式","lang":"zh-CN","frontmatter":{"title":"Decorator 模式","date":"2024-10-25T00:00:00.000Z","category":["设计模式"],"tag":["设计模式","TypeScript","容器与内容的一致性"],"prev":"./composite","next":"./visitor","description":"在这个示例中，我们使用装饰器模式来动态地给对象添加职责。装饰器模式允许我们通过将对象放入包含行为的特殊封装对象中来扩展对象的功能，而无需修改原始类的代码。","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://github.com/King-sj/tech/DesignPatterns/decorator.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"Decorator 模式"}],["meta",{"property":"og:description","content":"在这个示例中，我们使用装饰器模式来动态地给对象添加职责。装饰器模式允许我们通过将对象放入包含行为的特殊封装对象中来扩展对象的功能，而无需修改原始类的代码。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"KSJ"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"TypeScript"}],["meta",{"property":"article:tag","content":"容器与内容的一致性"}],["meta",{"property":"article:published_time","content":"2024-10-25T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Decorator 模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-25T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KSJ\\",\\"url\\":\\"https://github.com/King-sj\\"}]}"]]},"headers":[{"level":2,"title":"为什么使用装饰器模式？","slug":"为什么使用装饰器模式","link":"#为什么使用装饰器模式","children":[]},{"level":2,"title":"代码示例","slug":"代码示例","link":"#代码示例","children":[]},{"level":2,"title":"运行结果","slug":"运行结果","link":"#运行结果","children":[]},{"level":2,"title":"拓展思路的要点","slug":"拓展思路的要点","link":"#拓展思路的要点","children":[{"level":3,"title":"API 的透明性","slug":"api-的透明性","link":"#api-的透明性","children":[]},{"level":3,"title":"在不改变被装饰物的前提下增加功能","slug":"在不改变被装饰物的前提下增加功能","link":"#在不改变被装饰物的前提下增加功能","children":[]},{"level":3,"title":"可以动态地增加功能","slug":"可以动态地增加功能","link":"#可以动态地增加功能","children":[]},{"level":3,"title":"只需要一些装饰物即可添加许多功能","slug":"只需要一些装饰物即可添加许多功能","link":"#只需要一些装饰物即可添加许多功能","children":[]},{"level":3,"title":"导致增加许多很小的类","slug":"导致增加许多很小的类","link":"#导致增加许多很小的类","children":[]}]},{"level":2,"title":"相关的设计模式","slug":"相关的设计模式","link":"#相关的设计模式","children":[]},{"level":2,"title":"继承和委托中的一致性","slug":"继承和委托中的一致性","link":"#继承和委托中的一致性","children":[{"level":3,"title":"父类和子类的一致性","slug":"父类和子类的一致性","link":"#父类和子类的一致性","children":[]},{"level":3,"title":"自己和被委托对象的一致性","slug":"自己和被委托对象的一致性","link":"#自己和被委托对象的一致性","children":[]}]}],"readingTime":{"minutes":5.79,"words":1737},"filePathRelative":"tech/DesignPatterns/decorator.md","localizedDate":"2024年10月25日","excerpt":"<p>在这个示例中，我们使用装饰器模式来动态地给对象添加职责。装饰器模式允许我们通过将对象放入包含行为的特殊封装对象中来扩展对象的功能，而无需修改原始类的代码。</p>\\n","autoDesc":true}');export{d as comp,v as data};