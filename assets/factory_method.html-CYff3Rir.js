import{_ as o,r as p,o as c,c as l,b as n,d as a,w as t,a as i,f as r,e}from"./app-ChJpPrUG.js";const u={},d={class:"table-of-contents"},k=n("p",null,"在 Factory Method 模式中，我们定义一个用于创建对象的接口，但由子类决定要实例化的类是哪一个。Factory Method 使一个类的实例化延迟到其子类。",-1),m=r(`<h2 id="为什么要使用-factory-method" tabindex="-1"><a class="header-anchor" href="#为什么要使用-factory-method"><span>为什么要使用 Factory Method</span></a></h2><p>使用 Factory Method 模式有以下几个好处：</p><ol><li><strong>解耦创建和使用</strong>：客户端代码不需要知道具体的产品类，只需要依赖抽象产品接口，降低了耦合性。</li><li><strong>扩展性强</strong>：增加新的产品类时，只需添加新的子类工厂，不需要修改现有代码，符合开闭原则。</li><li><strong>灵活性高</strong>：可以通过子类来定制产品的创建过程，满足不同的需求。</li></ol><p>通过使用 Factory Method 模式，我们可以更灵活地管理对象的创建过程，提高代码的可维护性和可扩展性。</p><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h2><img src="https://www.plantuml.com/plantuml/svg/XP9DJiGm38NtFOMN0wXpWAugWP1OmHwn2AcdYcYJoauP4EBkE6dw4-Y8JMkzFjlFdrgpL-J7lYlgfRAgHnwKHZYHb6T7R_1L01ZhaKv1VoBNZDf75U06HiR3LGNlpZIYV1VoKA_iIOb7TuePxgLqzBbqQ4BbyU3E5ga2iHhRoeGqE9hAP4hQFrx2rh3aczt3z5vistWISBrHEojxFCPeKzY7krj53PX-wB17wta5SSnFBo5BjOiZA2twns0CycADdBORPqZuuT4sswqvlhILvrdFBndLIy2c9SbwaTVase_FQ_wuCwBycx8ihtU8LIaU5pFoOtvsQFlrQTDK2nBvEty0" alt=""><p>@enduml</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// product.ts</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
  <span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// factory.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Product <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./product&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Factory</span> <span class="token punctuation">{</span>
  <span class="token function">create</span><span class="token punctuation">(</span>owner<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> Product <span class="token punctuation">{</span>
    <span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createProduct</span><span class="token punctuation">(</span>owner<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerProduct</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> p<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token function">createProduct</span><span class="token punctuation">(</span>owner<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> Product<span class="token punctuation">;</span>
  <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token function">registerProduct</span><span class="token punctuation">(</span>product<span class="token operator">:</span> Product<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// idCard.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Product <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./product&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">IDCard</span> <span class="token keyword">implements</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> owner<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>owner<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>owner <span class="token operator">=</span> owner<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>owner<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">使用了ID卡</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getOwner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>owner<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// idCardFactory.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IDCard <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./idCard&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Factory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./factory&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">IDCardFactory</span> <span class="token keyword">extends</span> <span class="token class-name">Factory</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> owners<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token function">createProduct</span><span class="token punctuation">(</span>owner<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> IDCard <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">IDCard</span><span class="token punctuation">(</span>owner<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">registerProduct</span><span class="token punctuation">(</span>product<span class="token operator">:</span> IDCard<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>owners<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getOwner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getOwners</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>owners<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Factory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./factory&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IDCardFactory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./idCardFactory&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> factory<span class="token operator">:</span> Factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IDCardFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> card1 <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> card2 <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;Bob&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> card3 <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;Charlie&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
card1<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
card2<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
card3<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行结果" tabindex="-1"><a class="header-anchor" href="#运行结果"><span>运行结果</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>PS design_patern<span class="token operator">&gt;</span> ts-node <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\design_patern\\src<span class="token entity" title="\\f">\\f</span>actory_method\\main.ts&quot;</span>
Alice使用了ID卡
Bob使用了ID卡
Charlie使用了ID卡
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="相关的设计模式" tabindex="-1"><a class="header-anchor" href="#相关的设计模式"><span>相关的设计模式</span></a></h1><ul><li>Template Method</li><li>Singleton</li><li>Composite</li><li>Iterator</li></ul>`,12);function v(y,h){const s=p("router-link");return c(),l("div",null,[n("nav",d,[n("ul",null,[n("li",null,[a(s,{to:"#为什么要使用-factory-method"},{default:t(()=>[e("为什么要使用 Factory Method")]),_:1})]),n("li",null,[a(s,{to:"#示例代码"},{default:t(()=>[e("示例代码")]),_:1})]),n("li",null,[a(s,{to:"#运行结果"},{default:t(()=>[e("运行结果")]),_:1})])])]),k,i(" more "),m])}const w=o(u,[["render",v],["__file","factory_method.html.vue"]]),g=JSON.parse('{"path":"/tech/DesignPatterns/factory_method.html","title":"Factory Method 模式","lang":"zh-CN","frontmatter":{"title":"Factory Method 模式","category":["设计模式"],"tag":["设计模式","typescript","工厂方法","交给子类"],"prev":"./template_method","next":null,"description":"在 Factory Method 模式中，我们定义一个用于创建对象的接口，但由子类决定要实例化的类是哪一个。Factory Method 使一个类的实例化延迟到其子类。","head":[["meta",{"property":"og:url","content":"https://github.com/King-sj/tech/DesignPatterns/factory_method.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"Factory Method 模式"}],["meta",{"property":"og:description","content":"在 Factory Method 模式中，我们定义一个用于创建对象的接口，但由子类决定要实例化的类是哪一个。Factory Method 使一个类的实例化延迟到其子类。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T08:03:01.000Z"}],["meta",{"property":"article:author","content":"KSJ"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"typescript"}],["meta",{"property":"article:tag","content":"工厂方法"}],["meta",{"property":"article:tag","content":"交给子类"}],["meta",{"property":"article:modified_time","content":"2024-10-21T08:03:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Factory Method 模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T08:03:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KSJ\\",\\"url\\":\\"https://github.com/King-sj\\"}]}"]]},"headers":[{"level":2,"title":"为什么要使用 Factory Method","slug":"为什么要使用-factory-method","link":"#为什么要使用-factory-method","children":[]},{"level":2,"title":"示例代码","slug":"示例代码","link":"#示例代码","children":[]},{"level":2,"title":"运行结果","slug":"运行结果","link":"#运行结果","children":[]}],"git":{"createdTime":1729497781000,"updatedTime":1729497781000,"contributors":[{"name":"King","email":"2175616761@qq.com","commits":1}]},"readingTime":{"minutes":1.66,"words":497},"filePathRelative":"tech/DesignPatterns/factory_method.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>在 Factory Method 模式中，我们定义一个用于创建对象的接口，但由子类决定要实例化的类是哪一个。Factory Method 使一个类的实例化延迟到其子类。</p>\\n","autoDesc":true}');export{w as comp,g as data};