import{_ as e,r as o,o as l,c,b as n,d as a,w as t,a as i,f as u,e as p}from"./app-ChJpPrUG.js";const r={},k={class:"table-of-contents"},d=n("p",null,"在父类中定义处理流程的框架，在子类中实现具体处理。Template Method 模式的主要目的是为了定义一个算法的骨架，而将一些步骤的具体实现延迟到子类中。通过这种方式，子类可以在不改变算法结构的情况下，重新定义算法中的某些步骤。",-1),m=u(`<h2 id="为什么要使用-template-method-模式" tabindex="-1"><a class="header-anchor" href="#为什么要使用-template-method-模式"><span>为什么要使用 Template Method 模式？</span></a></h2><ol><li><strong>代码复用</strong>：将通用的算法结构放在父类中，避免重复代码。</li><li><strong>灵活性</strong>：允许子类实现具体的步骤，增加了灵活性。</li><li><strong>控制反转</strong>：父类控制算法的执行流程，子类只需关注具体步骤的实现。</li></ol><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h2><img src="https://www.plantuml.com/plantuml/svg/dP513i8W44Ntd68IDpI42pGkQdJfpXDG89Q4GWEqngXt5wbHgBfnENy-__qCZG_CXR7NYBK-ECO3SCsyXyrpt2a_Q7Q62m8W8EO9LpLCLecehS0EqXJ2u9G9XSArzVAbt12Q6TkEkJoV0kzgY5nbZWcN6V1xLQNT0ai-iEGNzf1IId1CpiWKJag423HZtqgNmefNEFF_MUT1IPwzCaN9vUNNLqhpItmt5FLG8us8dte7" alt=""><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// abstractDisplay.ts</span>
<span class="token keyword">export</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractDisplay</span> <span class="token punctuation">{</span>
  <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// charDisplay.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AbstractDisplay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./abstractDisplay&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CharDisplay</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractDisplay</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> ch<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>ch<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ch <span class="token operator">=</span> ch<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;&lt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// stringDisplay.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AbstractDisplay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./abstractDisplay&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">StringDisplay</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractDisplay</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>str <span class="token operator">=</span> str<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">printLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">|</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>str<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">|</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">printLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">private</span> <span class="token function">printLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> line <span class="token operator">=</span> <span class="token string">&#39;+&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>width<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      line <span class="token operator">+=</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    line <span class="token operator">+=</span> <span class="token string">&#39;+&#39;</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CharDisplay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./charDisplay&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StringDisplay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./stringDisplay&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> d1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CharDisplay</span><span class="token punctuation">(</span><span class="token string">&#39;H&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> d2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringDisplay</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, world.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> d3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringDisplay</span><span class="token punctuation">(</span><span class="token string">&#39;你好，世界。&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
d1<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
d2<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
d3<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行结果" tabindex="-1"><a class="header-anchor" href="#运行结果"><span>运行结果</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>PS design_patern<span class="token operator">&gt;</span> ts-node <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\design_patern\\src<span class="token entity" title="\\t">\\t</span>emplate_method\\main.ts&quot;</span>
<span class="token operator">&lt;&lt;</span>
<span class="token string">H
H
H</span>
H
H
<span class="token operator">&gt;&gt;</span>
+-------------+
<span class="token operator">|</span>Hello, world.<span class="token operator">|</span>
<span class="token operator">|</span>Hello, world.<span class="token operator">|</span>
<span class="token operator">|</span>Hello, world.<span class="token operator">|</span>
<span class="token operator">|</span>Hello, world.<span class="token operator">|</span>
<span class="token operator">|</span>Hello, world.<span class="token operator">|</span>
+-------------+
+------+
<span class="token operator">|</span>你好，世界。<span class="token operator">|</span>
<span class="token operator">|</span>你好，世界。<span class="token operator">|</span>
<span class="token operator">|</span>你好，世界。<span class="token operator">|</span>
<span class="token operator">|</span>你好，世界。<span class="token operator">|</span>
<span class="token operator">|</span>你好，世界。<span class="token operator">|</span>
+------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关设计模式" tabindex="-1"><a class="header-anchor" href="#相关设计模式"><span>相关设计模式</span></a></h2><ul><li>Factory Method 模式</li><li>Strategy 模式</li></ul><h2 id="延申-类的层次与抽象类" tabindex="-1"><a class="header-anchor" href="#延申-类的层次与抽象类"><span>延申: 类的层次与抽象类</span></a></h2><p>我们在理解类的层次时，通常是站在子类的角度进行思考的。也就是说，很容易着眼于以下几点。</p><ul><li>在子类中可以使用父类中定义的方法</li><li>可以通过在子类中增加方法以实现新的功能</li><li>在子类中重写父类的方法可以改变程序的行为</li></ul><p>现在，让我们稍微改变一下立场，站在父类的角度进行思考。在父类中，我们声明了抽象方法，而将该方法的实现交给了子类。换言之，就程序而言，声明抽象方法是希望达到以下目的。</p><ul><li>期待子类去实现抽象方法</li><li>要求子类去实现抽象方法</li></ul><p>也就是说，子类具有实现在父类中所声明的抽象方法的责任。因此，这种责任被称为“子类责任&quot;（ subclass responsibility ）。</p>`,15);function v(b,h){const s=o("router-link");return l(),c("div",null,[n("nav",k,[n("ul",null,[n("li",null,[a(s,{to:"#为什么要使用-template-method-模式"},{default:t(()=>[p("为什么要使用 Template Method 模式？")]),_:1})]),n("li",null,[a(s,{to:"#示例代码"},{default:t(()=>[p("示例代码")]),_:1})]),n("li",null,[a(s,{to:"#运行结果"},{default:t(()=>[p("运行结果")]),_:1})]),n("li",null,[a(s,{to:"#相关设计模式"},{default:t(()=>[p("相关设计模式")]),_:1})]),n("li",null,[a(s,{to:"#延申-类的层次与抽象类"},{default:t(()=>[p("延申: 类的层次与抽象类")]),_:1})])])]),d,i(" more "),m])}const g=e(r,[["render",v],["__file","template_method.html.vue"]]),w=JSON.parse('{"path":"/tech/DesignPatterns/template_method.html","title":"Template Method 模式","lang":"zh-CN","frontmatter":{"title":"Template Method 模式","category":["设计模式"],"tag":["设计模式","typescript","交给子类"],"prev":"./adapter","next":"./factory_method","description":"在父类中定义处理流程的框架，在子类中实现具体处理。Template Method 模式的主要目的是为了定义一个算法的骨架，而将一些步骤的具体实现延迟到子类中。通过这种方式，子类可以在不改变算法结构的情况下，重新定义算法中的某些步骤。","head":[["meta",{"property":"og:url","content":"https://github.com/King-sj/tech/DesignPatterns/template_method.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"Template Method 模式"}],["meta",{"property":"og:description","content":"在父类中定义处理流程的框架，在子类中实现具体处理。Template Method 模式的主要目的是为了定义一个算法的骨架，而将一些步骤的具体实现延迟到子类中。通过这种方式，子类可以在不改变算法结构的情况下，重新定义算法中的某些步骤。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T08:03:01.000Z"}],["meta",{"property":"article:author","content":"KSJ"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"typescript"}],["meta",{"property":"article:tag","content":"交给子类"}],["meta",{"property":"article:modified_time","content":"2024-10-21T08:03:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Template Method 模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T08:03:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KSJ\\",\\"url\\":\\"https://github.com/King-sj\\"}]}"]]},"headers":[{"level":2,"title":"为什么要使用 Template Method 模式？","slug":"为什么要使用-template-method-模式","link":"#为什么要使用-template-method-模式","children":[]},{"level":2,"title":"示例代码","slug":"示例代码","link":"#示例代码","children":[]},{"level":2,"title":"运行结果","slug":"运行结果","link":"#运行结果","children":[]},{"level":2,"title":"相关设计模式","slug":"相关设计模式","link":"#相关设计模式","children":[]},{"level":2,"title":"延申: 类的层次与抽象类","slug":"延申-类的层次与抽象类","link":"#延申-类的层次与抽象类","children":[]}],"git":{"createdTime":1729497781000,"updatedTime":1729497781000,"contributors":[{"name":"King","email":"2175616761@qq.com","commits":1}]},"readingTime":{"minutes":2.32,"words":695},"filePathRelative":"tech/DesignPatterns/template_method.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>在父类中定义处理流程的框架，在子类中实现具体处理。Template Method 模式的主要目的是为了定义一个算法的骨架，而将一些步骤的具体实现延迟到子类中。通过这种方式，子类可以在不改变算法结构的情况下，重新定义算法中的某些步骤。</p>\\n","autoDesc":true}');export{g as comp,w as data};
