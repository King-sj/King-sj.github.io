import{_ as p,r as o,o as c,c as l,b as n,d as a,w as t,f as i,e}from"./app-B-9y9oJs.js";const u={},r={class:"table-of-contents"},k=i(`<h2 id="为什么要使用迭代器模式" tabindex="-1"><a class="header-anchor" href="#为什么要使用迭代器模式"><span>为什么要使用迭代器模式</span></a></h2><p>迭代器模式提供了一种方法来顺序访问集合中的元素，而无需暴露其底层表示。使用迭代器模式有以下几个优点：</p><ol><li><strong>简化代码</strong>：迭代器模式将遍历逻辑封装在迭代器对象中，使得客户端代码更加简洁和易读。</li><li><strong>解耦集合和遍历</strong>：集合对象和遍历算法分离，增加了代码的灵活性和可维护性。可以在不修改集合对象的情况下，改变遍历算法。</li><li><strong>统一接口</strong>：通过实现统一的迭代器接口，不同类型的集合可以使用相同的遍历方式，增强了代码的可扩展性。</li><li><strong>支持多种遍历方式</strong>：可以根据需要实现不同的迭代器，以支持多种遍历方式，如正向遍历、反向遍历、过滤遍历等。</li></ol><p>通过使用迭代器模式，我们可以更好地管理和操作集合数据，提高代码的可读性和可维护性。</p><h2 id="typescript-实现迭代器模式" tabindex="-1"><a class="header-anchor" href="#typescript-实现迭代器模式"><span>TypeScript 实现迭代器模式</span></a></h2><p>在本节中，我们将展示如何使用 TypeScript 实现迭代器模式。迭代器模式是一种行为设计模式，它允许顺序访问集合中的元素，而无需暴露其底层表示。</p><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h3><p>以下是实现迭代器模式的 TypeScript 代码示例：</p><img src="https://www.plantuml.com/plantuml/svg/ZL8nRiCm3Dpz2evE2tr0KzAjG96bOz51iHbPY4KP4bEaAFhtYh8Ts-ZGRjBnxdWKjKzi8bzzNpbYZ6VJ83pdW-4GuQi2UEnCEkADwvs6KmWz6XAK9iZGP_LThSG7QoDQmpYgtUGbtDbN14rlKeAd42w5fyXur90uEhAYiyZ738bi0ZUYrmxxCpW_zEYHE2rjYriEUacwCD_U1SX2ra1NVy8usKlnmBMZ5czpQJTgX6660QcLMorkOo7NFu9h9uSN9CkTH5oC_vwtHBy_yMg46RjFK9Xw4Gc-YVlVzImxKUfXMQ-69c96gz-nb0ghlcLDMsYV7oV_cXy0" alt=""><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// aggregate.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Iterator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./iterator&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Aggregate</span> <span class="token punctuation">{</span>
  <span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Iterator<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// book.ts</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// bookShelf.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Book <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./book&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Iterator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./iterator&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BookShelfIterator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./bookShelfIterator&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Aggregate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./aggregate&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">BookShelf</span> <span class="token keyword">implements</span> <span class="token class-name">Aggregate</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> books<span class="token operator">:</span> Book<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> last<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>books <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getBookAt</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> Book <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>books<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">appendBook</span><span class="token punctuation">(</span>book<span class="token operator">:</span> Book<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>books<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>last<span class="token punctuation">]</span> <span class="token operator">=</span> book<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>last<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>last<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Iterator <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BookShelfIterator</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// bookShelfIterator.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BookShelf <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./bookShelf&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Iterator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./iterator&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">BookShelfIterator</span> <span class="token keyword">implements</span> <span class="token class-name">Iterator</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> bookShelf<span class="token operator">:</span> BookShelf<span class="token punctuation">;</span>
  <span class="token keyword">private</span> index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>bookShelf<span class="token operator">:</span> BookShelf<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>bookShelf <span class="token operator">=</span> bookShelf<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>index <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bookShelf<span class="token punctuation">.</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> book <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bookShelf<span class="token punctuation">.</span><span class="token function">getBookAt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>index<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> book<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// iterator.ts</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Iterator</span> <span class="token punctuation">{</span>
  <span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BookShelf <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../bookShelf&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Book <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../book&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> bookShelf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BookShelf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bookShelf<span class="token punctuation">.</span><span class="token function">appendBook</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token string">&quot;Around the World in 80 Days&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bookShelf<span class="token punctuation">.</span><span class="token function">appendBook</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token string">&quot;Bible&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bookShelf<span class="token punctuation">.</span><span class="token function">appendBook</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token string">&quot;Cinderella&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bookShelf<span class="token punctuation">.</span><span class="token function">appendBook</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token string">&quot;Daddy-Long-Legs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> it <span class="token operator">=</span> bookShelf<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> book <span class="token operator">=</span> it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>book<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行结果" tabindex="-1"><a class="header-anchor" href="#运行结果"><span>运行结果</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>PS design_patern<span class="token operator">&gt;</span> ts-node <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\design_patern\\src\\iterator\\main.ts&quot;</span>
Around the World <span class="token keyword">in</span> <span class="token number">80</span> Days
Bible
Cinderella
Daddy-Long-Legs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们定义了几个类和接口来实现迭代器模式：</p><ul><li><code>Iterator</code> 接口定义了 <code>hasNext</code> 和 <code>next</code> 方法。</li><li><code>Aggregate</code> 接口定义了 <code>iterator</code> 方法。</li><li><code>Book</code> 类表示一个书籍对象。</li><li><code>BookShelf</code> 类表示一个书架，它实现了 <code>Aggregate</code> 接口。</li><li><code>BookShelfIterator</code> 类实现了 <code>Iterator</code> 接口，用于遍历 <code>BookShelf</code> 中的书籍。</li></ul><p>通过这些类和接口，我们可以轻松地遍历 <code>BookShelf</code> 中的书籍，而无需了解其内部实现细节。</p><h2 id="多个迭代器" tabindex="-1"><a class="header-anchor" href="#多个迭代器"><span>多个迭代器</span></a></h2><p>在某些情况下，我们可能需要为同一个集合编写多个具体迭代器（ConcreteIterator）。例如，我们可以为 <code>BookShelf</code> 编写一个反向迭代器，以便从后向前遍历书籍。</p><h2 id="相关的设计模式" tabindex="-1"><a class="header-anchor" href="#相关的设计模式"><span>相关的设计模式</span></a></h2><ul><li>Visitor 模式</li><li>Composite 模式</li><li>Factory Method 模式</li></ul>`,19);function d(v,m){const s=o("router-link");return c(),l("div",null,[n("nav",r,[n("ul",null,[n("li",null,[a(s,{to:"#为什么要使用迭代器模式"},{default:t(()=>[e("为什么要使用迭代器模式")]),_:1})]),n("li",null,[a(s,{to:"#typescript-实现迭代器模式"},{default:t(()=>[e("TypeScript 实现迭代器模式")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#代码示例"},{default:t(()=>[e("代码示例")]),_:1})]),n("li",null,[a(s,{to:"#运行结果"},{default:t(()=>[e("运行结果")]),_:1})])])]),n("li",null,[a(s,{to:"#多个迭代器"},{default:t(()=>[e("多个迭代器")]),_:1})]),n("li",null,[a(s,{to:"#相关的设计模式"},{default:t(()=>[e("相关的设计模式")]),_:1})])])]),k])}const h=p(u,[["render",d],["__file","iterator.html.vue"]]),g=JSON.parse('{"path":"/tech/DesignPatterns/iterator.html","title":"迭代器模式","lang":"zh-CN","frontmatter":{"title":"迭代器模式","date":"2024-10-21T00:00:00.000Z","category":["设计模式"],"tag":["设计模式","typescript"],"prev":"./DesignPrinciples","next":"./adapter","description":"为什么要使用迭代器模式 迭代器模式提供了一种方法来顺序访问集合中的元素，而无需暴露其底层表示。使用迭代器模式有以下几个优点： 简化代码：迭代器模式将遍历逻辑封装在迭代器对象中，使得客户端代码更加简洁和易读。 解耦集合和遍历：集合对象和遍历算法分离，增加了代码的灵活性和可维护性。可以在不修改集合对象的情况下，改变遍历算法。 统一接口：通过实现统一的迭代器...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://github.com/King-sj/tech/DesignPatterns/iterator.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"迭代器模式"}],["meta",{"property":"og:description","content":"为什么要使用迭代器模式 迭代器模式提供了一种方法来顺序访问集合中的元素，而无需暴露其底层表示。使用迭代器模式有以下几个优点： 简化代码：迭代器模式将遍历逻辑封装在迭代器对象中，使得客户端代码更加简洁和易读。 解耦集合和遍历：集合对象和遍历算法分离，增加了代码的灵活性和可维护性。可以在不修改集合对象的情况下，改变遍历算法。 统一接口：通过实现统一的迭代器..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"KSJ"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"typescript"}],["meta",{"property":"article:published_time","content":"2024-10-21T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"迭代器模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-21T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KSJ\\",\\"url\\":\\"https://github.com/King-sj\\"}]}"]]},"headers":[{"level":2,"title":"为什么要使用迭代器模式","slug":"为什么要使用迭代器模式","link":"#为什么要使用迭代器模式","children":[]},{"level":2,"title":"TypeScript 实现迭代器模式","slug":"typescript-实现迭代器模式","link":"#typescript-实现迭代器模式","children":[{"level":3,"title":"代码示例","slug":"代码示例","link":"#代码示例","children":[]},{"level":3,"title":"运行结果","slug":"运行结果","link":"#运行结果","children":[]}]},{"level":2,"title":"多个迭代器","slug":"多个迭代器","link":"#多个迭代器","children":[]},{"level":2,"title":"相关的设计模式","slug":"相关的设计模式","link":"#相关的设计模式","children":[]}],"readingTime":{"minutes":2.86,"words":858},"filePathRelative":"tech/DesignPatterns/iterator.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>为什么要使用迭代器模式</h2>\\n<p>迭代器模式提供了一种方法来顺序访问集合中的元素，而无需暴露其底层表示。使用迭代器模式有以下几个优点：</p>\\n<ol>\\n<li><strong>简化代码</strong>：迭代器模式将遍历逻辑封装在迭代器对象中，使得客户端代码更加简洁和易读。</li>\\n<li><strong>解耦集合和遍历</strong>：集合对象和遍历算法分离，增加了代码的灵活性和可维护性。可以在不修改集合对象的情况下，改变遍历算法。</li>\\n<li><strong>统一接口</strong>：通过实现统一的迭代器接口，不同类型的集合可以使用相同的遍历方式，增强了代码的可扩展性。</li>\\n<li><strong>支持多种遍历方式</strong>：可以根据需要实现不同的迭代器，以支持多种遍历方式，如正向遍历、反向遍历、过滤遍历等。</li>\\n</ol>","autoDesc":true}');export{h as comp,g as data};