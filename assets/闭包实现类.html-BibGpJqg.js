import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as t}from"./app-B32MuLuE.js";const p="/assets/image-Bb-D5Kse.png",o={},e=t(`<h1 id="闭包实现类" tabindex="-1"><a class="header-anchor" href="#闭包实现类"><span>闭包实现类</span></a></h1><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// 通过闭包实现类似类的结构</span>
<span class="token keyword">auto</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span><span class="token operator">*</span> _x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// toString 函数捕获_x，用以输出当前_x的值</span>
  <span class="token keyword">auto</span> toString <span class="token operator">=</span> <span class="token punctuation">[</span>_x<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> string <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">&quot;x: &quot;</span> <span class="token operator">+</span> <span class="token function">to_string</span><span class="token punctuation">(</span><span class="token operator">*</span>_x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// add 函数用于增加_x的值</span>
  <span class="token keyword">auto</span> add <span class="token operator">=</span> <span class="token punctuation">[</span>_x<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">(</span><span class="token operator">*</span>_x<span class="token punctuation">)</span><span class="token operator">++</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// remove 函数用于释放_x指向的内存</span>
  <span class="token keyword">auto</span> remove <span class="token operator">=</span> <span class="token punctuation">[</span>_x<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">delete</span> _x<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 结构体内包含三个函数</span>
  <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">decltype</span><span class="token punctuation">(</span>toString<span class="token punctuation">)</span> toString<span class="token punctuation">;</span>
    <span class="token keyword">decltype</span><span class="token punctuation">(</span>add<span class="token punctuation">)</span> add<span class="token punctuation">;</span>
    <span class="token keyword">decltype</span><span class="token punctuation">(</span>remove<span class="token punctuation">)</span> remove<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> self<span class="token punctuation">{</span>toString<span class="token punctuation">,</span> add<span class="token punctuation">,</span> remove<span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> self<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">auto</span> obj1 <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">auto</span> obj2 <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  cout <span class="token operator">&lt;&lt;</span> obj1<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>  <span class="token comment">// 输出 &quot;x: 1&quot;</span>
  obj1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                       <span class="token comment">// 增加obj1的内部_x的值</span>
  cout <span class="token operator">&lt;&lt;</span> obj1<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>  <span class="token comment">// 输出 &quot;x: 2&quot;</span>
  cout <span class="token operator">&lt;&lt;</span> obj2<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>  <span class="token comment">// 输出 &quot;x: 3&quot;</span>
  obj1<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                    <span class="token comment">// 释放obj1的内部_x的内存</span>
  obj2<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                    <span class="token comment">// 释放obj2的内部_x的内存</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure>',3),c=[e];function l(u,i){return s(),a("div",null,c)}const d=n(o,[["render",l],["__file","闭包实现类.html.vue"]]),m=JSON.parse('{"path":"/posts/%E5%A5%87%E6%8A%80%E6%B7%AB%E5%B7%A7/%E9%97%AD%E5%8C%85%E5%AE%9E%E7%8E%B0%E7%B1%BB.html","title":"闭包实现类","lang":"zh-CN","frontmatter":{"lang":"zh-CN","date":"2023-08-02T00:00:00.000Z","category":["OI"],"tag":["MODInt"],"description":"闭包实现类 alt textalt text","head":[["meta",{"property":"og:url","content":"https://github.com/King-sj/posts/%E5%A5%87%E6%8A%80%E6%B7%AB%E5%B7%A7/%E9%97%AD%E5%8C%85%E5%AE%9E%E7%8E%B0%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"博客"}],["meta",{"property":"og:title","content":"闭包实现类"}],["meta",{"property":"og:description","content":"闭包实现类 alt textalt text"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-11T12:19:06.000Z"}],["meta",{"property":"article:author","content":"KSJ"}],["meta",{"property":"article:tag","content":"MODInt"}],["meta",{"property":"article:published_time","content":"2023-08-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-11T12:19:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"闭包实现类\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-11T12:19:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KSJ\\",\\"url\\":\\"https://github.com/King-sj\\"}]}"]]},"headers":[],"git":{"createdTime":1726057146000,"updatedTime":1726057146000,"contributors":[{"name":"King","email":"2175616761@qq.com","commits":1}]},"readingTime":{"minutes":0.68,"words":205},"filePathRelative":"posts/奇技淫巧/闭包实现类.md","localizedDate":"2023年8月2日","excerpt":"\\n<div class=\\"language-cpp\\" data-ext=\\"cpp\\" data-title=\\"cpp\\"><pre class=\\"language-cpp\\"><code><span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;iostream&gt;</span></span>\\n<span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;string&gt;</span></span>\\n\\n<span class=\\"token keyword\\">using</span> <span class=\\"token keyword\\">namespace</span> std<span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 通过闭包实现类似类的结构</span>\\n<span class=\\"token keyword\\">auto</span> <span class=\\"token function\\">fun</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> x<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">int</span><span class=\\"token operator\\">*</span> _x <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token comment\\">// toString 函数捕获_x，用以输出当前_x的值</span>\\n  <span class=\\"token keyword\\">auto</span> toString <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span>_x<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">-&gt;</span> string <span class=\\"token punctuation\\">{</span> <span class=\\"token keyword\\">return</span> <span class=\\"token string\\">\\"x: \\"</span> <span class=\\"token operator\\">+</span> <span class=\\"token function\\">to_string</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">*</span>_x<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token comment\\">// add 函数用于增加_x的值</span>\\n  <span class=\\"token keyword\\">auto</span> add <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span>_x<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">*</span>_x<span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token comment\\">// remove 函数用于释放_x指向的内存</span>\\n  <span class=\\"token keyword\\">auto</span> remove <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span>_x<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token keyword\\">delete</span> _x<span class=\\"token punctuation\\">;</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token comment\\">// 结构体内包含三个函数</span>\\n  <span class=\\"token keyword\\">struct</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">decltype</span><span class=\\"token punctuation\\">(</span>toString<span class=\\"token punctuation\\">)</span> toString<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">decltype</span><span class=\\"token punctuation\\">(</span>add<span class=\\"token punctuation\\">)</span> add<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">decltype</span><span class=\\"token punctuation\\">(</span>remove<span class=\\"token punctuation\\">)</span> remove<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span> self<span class=\\"token punctuation\\">{</span>toString<span class=\\"token punctuation\\">,</span> add<span class=\\"token punctuation\\">,</span> remove<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token keyword\\">return</span> self<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">int</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">auto</span> obj1 <span class=\\"token operator\\">=</span> <span class=\\"token function\\">fun</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">auto</span> obj2 <span class=\\"token operator\\">=</span> <span class=\\"token function\\">fun</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  cout <span class=\\"token operator\\">&lt;&lt;</span> obj1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">toString</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&lt;&lt;</span> endl<span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">// 输出 \\"x: 1\\"</span>\\n  obj1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>                       <span class=\\"token comment\\">// 增加obj1的内部_x的值</span>\\n  cout <span class=\\"token operator\\">&lt;&lt;</span> obj1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">toString</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&lt;&lt;</span> endl<span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">// 输出 \\"x: 2\\"</span>\\n  cout <span class=\\"token operator\\">&lt;&lt;</span> obj2<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">toString</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&lt;&lt;</span> endl<span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">// 输出 \\"x: 3\\"</span>\\n  obj1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">remove</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>                    <span class=\\"token comment\\">// 释放obj1的内部_x的内存</span>\\n  obj2<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">remove</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>                    <span class=\\"token comment\\">// 释放obj2的内部_x的内存</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{d as comp,m as data};
