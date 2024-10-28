import{_ as s,o as a,c as t,a as p,e,b as n,f as o}from"./app-B-9y9oJs.js";const c={},i=n("p",null,'当某个程序员得意地说出"啊，在调用那个类之前需要先调用这个类。在调用那个方法之前需要先在这个类中注册一下"的时候，就意味着我们需要引人Facade了。',-1),l=n("p",null,"对于那些能够明确地用语言描述出来的知识，我们不应该将它们隐藏在自己脑袋中，而是应该用代码将它们表现出来。",-1),r=n("p",{style:{"text-align":"right"}},"—————《图解设计模式》",-1),u=o(`<ol><li><strong>简化接口</strong>：外观模式为复杂的子系统提供了一个简单的接口，使得客户端代码不需要了解子系统的内部细节。</li><li><strong>松散耦合</strong>：通过引入外观类，客户端代码与子系统之间的耦合度降低，增强了代码的可维护性和可扩展性。</li><li><strong>更好的分层</strong>：外观模式有助于分层设计，使得每一层只关注自己的职责，层与层之间通过外观类进行交互。</li></ol><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h2><p>在这个示例中，我们使用了外观模式（Facade Pattern）来简化与复杂子系统的交互。外观模式通过提供一个统一的接口来隐藏子系统的复杂性，使得客户端代码可以更容易地使用子系统的功能。</p><img src="https://www.plantuml.com/plantuml/svg/VLBBJiCm4BpdAtnq1Vc175117BXGUki1SLZiRMh5ZsYz0K7LVyUEQf9MWOjVE-EPMNiT6OW7Pojb8KRn20mF454SAo5kKf6D4WwCpOL67CLhXr-DY4p6jszb8Ku9NQlWqtPG74YkPlGMUKkXHsA3KUfqqNjIs833mb_zT_EfEdjxOcTtP1XfT5T_Zkk2p89p1vVLqGyRjYZ7SQRy4OpErHu8MeB-81t62EqInXhVoGFXljHkXOAUJV0BuDms3Z9Fe3LDb24Y-SluXQDiY2Xd1wbvENS-EkVyxSSsUNo6hhJZh_Qx1DcXLS5XPen-xfEV57Aoj3Vs-aL61qbiagdhk-c3DEA5Ml3c6t9yeOB6A-ZilPR0Q_GwVRmV" alt=""><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现"><span>代码实现</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// dataBase.ts</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">DataBase</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> mailData<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;hyuki@hyuki.com&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Hiroshi Yuki&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;hanako@hyuki.com&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Hanako Sato&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;tomura@hyuki.com&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Tomura&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;mamoru@hyuki.com&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Mamoru Takahashi&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">static</span> <span class="token function">getProperties</span><span class="token punctuation">(</span>databaseName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> DataBase<span class="token punctuation">.</span>mailData<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// htmlWriter.ts</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">HtmlWriter</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> writer<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
  <span class="token function">title</span><span class="token punctuation">(</span>title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>writer <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;html&gt;&lt;head&gt;&lt;title&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/title&gt;&lt;/head&gt;&lt;body&gt;\\n&lt;h1&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/h1&gt;\\n</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">paragraph</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>writer <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;p&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p&gt;\\n</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">link</span><span class="token punctuation">(</span>href<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> caption<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>writer <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;a href=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>href<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>caption<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/a&gt;\\n</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">mailto</span><span class="token punctuation">(</span>mailaddr<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> username<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">link</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">mailto:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>mailaddr<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> username<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>writer <span class="token operator">+=</span> <span class="token string">&#39;&lt;/body&gt;&lt;/html&gt;\\n&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getHtml</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>writer<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PageMaker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./pageMaker&quot;</span><span class="token punctuation">;</span>
PageMaker<span class="token punctuation">.</span><span class="token function">makeWelcomePage</span><span class="token punctuation">(</span><span class="token string">&#39;hyuki@hyuki.com&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;welcome.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// pageMaker.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DataBase <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./dataBase&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HtmlWriter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./htmlWriter&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PageMaker</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">static</span> <span class="token function">makeWelcomePage</span><span class="token punctuation">(</span>mailAddress<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> fileName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Making </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fileName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> for </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>mailAddress<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> mailprop <span class="token operator">=</span> DataBase<span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token string">&#39;maildata&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> username <span class="token operator">=</span> mailprop<span class="token punctuation">[</span>mailAddress<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> writer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HtmlWriter</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    writer<span class="token punctuation">.</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string">&#39;Welcome to &#39;</span> <span class="token operator">+</span> username <span class="token operator">+</span> <span class="token string">&quot;&#39;s page!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    writer<span class="token punctuation">.</span><span class="token function">paragraph</span><span class="token punctuation">(</span>username <span class="token operator">+</span> <span class="token string">&#39;のページへようこそ。&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    writer<span class="token punctuation">.</span><span class="token function">paragraph</span><span class="token punctuation">(</span><span class="token string">&#39;メール待っていますね。&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    writer<span class="token punctuation">.</span><span class="token function">mailto</span><span class="token punctuation">(</span>mailAddress<span class="token punctuation">,</span> username<span class="token punctuation">)</span><span class="token punctuation">;</span>
    writer<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>writer<span class="token punctuation">.</span><span class="token function">getHtml</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行结果" tabindex="-1"><a class="header-anchor" href="#运行结果"><span>运行结果</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>PS design_patern<span class="token operator">&gt;</span> ts-node <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\design_patern\\src<span class="token entity" title="\\f">\\f</span>acade\\main.ts&quot;</span>
Making welcome.html <span class="token keyword">for</span> hyuki@hyuki.com
welcome.html<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span><span class="token operator">&lt;</span>head<span class="token operator">&gt;</span><span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Welcome to Hiroshi Yuki<span class="token string">&#39;s page!&lt;/title&gt;&lt;/head&gt;&lt;body&gt;
&lt;h1&gt;Welcome to Hiroshi Yuki&#39;</span>s page<span class="token operator">!</span><span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Hiroshi Yukiのページへようこそ。<span class="token operator">&lt;</span>/p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>メール待っていますね。<span class="token operator">&lt;</span>/p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>a <span class="token assign-left variable">href</span><span class="token operator">=</span><span class="token string">&quot;mailto:hyuki@hyuki.com&quot;</span><span class="token operator">&gt;</span>Hiroshi Yuki<span class="token operator">&lt;</span>/a<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/body<span class="token operator">&gt;</span><span class="token operator">&lt;</span>/html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关设计模式" tabindex="-1"><a class="header-anchor" href="#相关设计模式"><span>相关设计模式</span></a></h2><ul><li>Abstract Factory 模式</li><li>Singleton 模式</li><li>Mediator 模式</li></ul>`,10);function k(d,m){return a(),t("div",null,[i,l,r,p(" more "),e(" ## 为什么使用外观模式？ "),u])}const v=s(c,[["render",k],["__file","facade.html.vue"]]),h=JSON.parse('{"path":"/tech/DesignPatterns/facade.html","title":"facade 模式","lang":"zh-CN","frontmatter":{"title":"facade 模式","date":"2024-10-26T00:00:00.000Z","category":["设计模式"],"tag":["设计模式","TypeScript","简单化"],"prev":"./chainOfResponsibility","next":"./mediator","description":"当某个程序员得意地说出\\"啊，在调用那个类之前需要先调用这个类。在调用那个方法之前需要先在这个类中注册一下\\"的时候，就意味着我们需要引人Facade了。 对于那些能够明确地用语言描述出来的知识，我们不应该将它们隐藏在自己脑袋中，而是应该用代码将它们表现出来。 —————《图解设计模式》","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://github.com/King-sj/tech/DesignPatterns/facade.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"facade 模式"}],["meta",{"property":"og:description","content":"当某个程序员得意地说出\\"啊，在调用那个类之前需要先调用这个类。在调用那个方法之前需要先在这个类中注册一下\\"的时候，就意味着我们需要引人Facade了。 对于那些能够明确地用语言描述出来的知识，我们不应该将它们隐藏在自己脑袋中，而是应该用代码将它们表现出来。 —————《图解设计模式》"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"KSJ"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"TypeScript"}],["meta",{"property":"article:tag","content":"简单化"}],["meta",{"property":"article:published_time","content":"2024-10-26T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"facade 模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-26T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KSJ\\",\\"url\\":\\"https://github.com/King-sj\\"}]}"]]},"headers":[{"level":2,"title":"示例代码","slug":"示例代码","link":"#示例代码","children":[]},{"level":2,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[]},{"level":2,"title":"运行结果","slug":"运行结果","link":"#运行结果","children":[]},{"level":2,"title":"相关设计模式","slug":"相关设计模式","link":"#相关设计模式","children":[]}],"readingTime":{"minutes":2.26,"words":679},"filePathRelative":"tech/DesignPatterns/facade.md","localizedDate":"2024年10月26日","excerpt":"<p>当某个程序员得意地说出\\"啊，在调用那个类之前需要先调用这个类。在调用那个方法之前需要先在这个类中注册一下\\"的时候，就意味着我们需要引人Facade了。</p>\\n<p>对于那些能够明确地用语言描述出来的知识，我们不应该将它们隐藏在自己脑袋中，而是应该用代码将它们表现出来。</p>\\n<p style=\\"text-align: right;\\">—————《图解设计模式》</p>\\n","autoDesc":true}');export{v as comp,h as data};