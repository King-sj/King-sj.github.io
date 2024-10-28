import{_ as a,r as e,o as t,c as p,a as o,b as n,e as i,d as c,f as l}from"./app-B-9y9oJs.js";const u={},r=n("h2",{id:"为什么使用此类",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#为什么使用此类"},[n("span",null,"为什么使用此类")])],-1),d=n("p",null,"请大家想象一下一个乱糟糟的开发小组的工作状态。小组中的 10 个成员虽然一起协同工作，但是意见难以统一，总是互相指挥，导致工作进度始终滞后。不仅如此，他们还十分在意编码细节，经常为此争执不下。",-1),k=n("p",null,"这时，我们就需要一个中立的仲裁者站出来说：“各位，请大家将情况报告给我，我来负责仲裁。我会从团队整体出发进行考虑，然后下达指示，但我不会评价大家的工作细节。”这样，当出现争执时大家就会找仲裁者进行商量，仲裁者会负责统一大家的意见。",-1),m=n("p",null,"最后，整个团队的交流过程就变为了组员向仲裁者报告，仲裁者向组员下达指示。组员之间不再相互询问和相互指示。",-1),v=n("h2",{id:"示例代码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#示例代码"},[n("span",null,"示例代码")])],-1),b={href:"https://github.com/RefactoringGuru/design-patterns-typescript/blob/main/src/Mediator/RealWorld/index.ts",target:"_blank",rel:"noopener noreferrer"},g=l(`<img src="https://www.plantuml.com/plantuml/svg/hP6z3e8m4CVtFiMD6847wE17d1sTZCC9fzP0Ite7YL7VtQA2YeEBqwNNN_h_w8m5lTHbeOmLyZlC29QK6nJduQm0njQ9sPqY9fkJr-2sHyea1ch8YWOMR-m-XWfFXSDyscr66XfdSdLLAYkG6LPCtODOKeU5Sr8-vNGlt58j7xsZCNo3evRqb95fQ4dCkAUeVCoXaG1MzROmVFW1zeuN1vHvLNsqaTJ15kjxclNcB_NSYqcIoIlzK3XDBs-tFJ_4T5-GcWKtuKzl" alt=""><img src="https://www.plantuml.com/plantuml/svg/fPF1ReCm44Jl_egzaKhfeN3ZKALAUmkdfX-mc0sicXZBNXhnztK0jIIA40gtbJppFDwHDrxGINCwAjHIE_Zov5v6SpoQ4sM3bZLRD0BR2kNDsemAng1GghF2y-ljIGgc5ZwqgyWtkTUESugUr8teuki0ANmEAZObxBYin8IfnyTByV4r_htMFJXP2awkmHaApLg9RV8Z-ofQGxH5qHMU9yDdv3sM18uqyGyLaBUNHwGmc2VYtRDsCV_DCtOyollHmZSNarNUk_ElqXHwmcEP1--CzaQHz_Kfd2s9t1CUQMXmRiWKuRlz0W00" alt=""><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * EN: Real World Example for the Mediator design pattern
 *
 * Need: To have a messaging application to notify groups of people. Users
 * should not know about each other.
 *
 * Solution: Create a mediator to manage subscriptions and messages
 */</span>

<span class="token doc-comment comment">/**
 * EN: Extending the Mediator interface to have a payload to include messages
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">Mediator</span> <span class="token punctuation">{</span>
  <span class="token function">notify</span><span class="token punctuation">(</span>sender<span class="token operator">:</span> object<span class="token punctuation">,</span> event<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> payload<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
* EN: The user plays the role of the independent component. It has an
* instance of the mediator.
*/</span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token keyword">private</span> mediator<span class="token operator">:</span> Mediator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>mediator<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&#39;subscribe&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">receiveMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Message received by </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">publishMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>mediator<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&#39;publish&#39;</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
* EN: The app is the concrete Mediator and implements all the events that
* collaborators can notify: subscribe and publish
*/</span>
<span class="token keyword">class</span> <span class="token class-name">ChatAppMediator</span> <span class="token keyword">implements</span> <span class="token class-name">Mediator</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> users<span class="token operator">:</span> User<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token function">notify</span><span class="token punctuation">(</span>sender<span class="token operator">:</span> object<span class="token punctuation">,</span> event<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> payload<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event <span class="token operator">===</span> <span class="token string">&#39;subscribe&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> user <span class="token operator">=</span> sender <span class="token keyword">as</span> User<span class="token punctuation">;</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Subscribing </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>user<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>event <span class="token operator">===</span> <span class="token string">&#39;publish&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Publishing message &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>payload<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; to the group</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> usersExcludingSender <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>u <span class="token operator">=&gt;</span> u <span class="token operator">!==</span> sender<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> user <span class="token keyword">of</span> usersExcludingSender<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        user<span class="token punctuation">.</span><span class="token function">receiveMessage</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
* EN: The client code. Creating a user automatically subscribes them to the
* group.
*/</span>
<span class="token keyword">const</span> chatAppMediator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ChatAppMediator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> user1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;Lightning&#39;</span><span class="token punctuation">,</span> chatAppMediator<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> user2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;Doc&#39;</span><span class="token punctuation">,</span> chatAppMediator<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> user3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;Mater&#39;</span><span class="token punctuation">,</span> chatAppMediator<span class="token punctuation">)</span><span class="token punctuation">;</span>

user1<span class="token punctuation">.</span><span class="token function">publishMessage</span><span class="token punctuation">(</span><span class="token string">&#39;Catchaw&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
user2<span class="token punctuation">.</span><span class="token function">publishMessage</span><span class="token punctuation">(</span><span class="token string">&#39;Ey kid&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
user3<span class="token punctuation">.</span><span class="token function">publishMessage</span><span class="token punctuation">(</span><span class="token string">&#39;Tomato&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行结果" tabindex="-1"><a class="header-anchor" href="#运行结果"><span>运行结果</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>PS design_patern<span class="token operator">&gt;</span> ts-node <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\design_patern\\src\\mediator\\main.ts&quot;</span>
Subscribing Lightning
Subscribing Doc
Subscribing Mater
Publishing message <span class="token string">&quot;Catchaw&quot;</span> to the group
Message received by Doc: Catchaw
Message received by Mater: Catchaw
Publishing message <span class="token string">&quot;Ey kid&quot;</span> to the group
Message received by Lightning: Ey kid
Message received by Mater: Ey kid
Publishing message <span class="token string">&quot;Tomato&quot;</span> to the group
Message received by Lightning: Tomato
Message received by Doc: Tomato
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拓展思路的要点" tabindex="-1"><a class="header-anchor" href="#拓展思路的要点"><span>拓展思路的要点</span></a></h2><h3 id="当发生分散灾难时" tabindex="-1"><a class="header-anchor" href="#当发生分散灾难时"><span>当发生分散灾难时</span></a></h3><p>示例程序中的 <code>ChatAppMediator</code> 类的 <code>notify</code> 方法稍微有些复杂。如果发生需求变更，该方法中很容易发生 Bug。不过这并不是什么问题。因为即使 <code>notify</code> 方法中发生了 Bug，由于其他地方并没有控制消息发布和订阅的逻辑处理，因此只要调试该方法就能很容易地找出 Bug 的原因。请试想一下，如果这段逻辑分散在 <code>User</code> 类中，那么无论是编写代码还是调试代码和修改代码，都会非常困难。通常情况下，面向对象编程可以帮助我们分散处理，避免处理过于集中，也就是说可以“分而治之”。但是在本章中的示例程序中，把处理分散在各个类中是不明智的。如果只是将应当分散的处理分散在各个类中，但是没有将应当集中的处理集中起来，那么这些分散的类最终只会导致灾难。</p><p>在这个示例程序中，<code>ChatAppMediator</code> 类作为中介者（Mediator），负责管理和协调各个用户（User）的交互。<code>notify</code> 方法集中处理了所有消息的发布和订阅逻辑，这样可以确保逻辑的一致性和可维护性。如果将这些逻辑分散到各个用户类中，不仅会增加代码的复杂性，还会使得调试和维护变得更加困难。因此，将这些逻辑集中在中介者类中是更明智的选择。</p><h3 id="通信线路的增加" tabindex="-1"><a class="header-anchor" href="#通信线路的增加"><span>通信线路的增加</span></a></h3><p>假设现在有 A 和 B 这 2 个实例，它们之间互相通信（相互调用方法），那么通信线路有两条，即 A-B 和 A-B。如果是有 A、B 和 C 这 3 个实例，那么就会有 6 条通信线路，即 A-B、A-C、B-C、B-A 和 C-A。如果有 4 个实例，会有 12 条通信线路；5 个实例就会有 20 条通信线路，而 6 个实例则会有 30 条通信线路。如果存在很多这样的互相通信的实例，那么程序结构会变得非常复杂。可能会有读者认为，如果实例很少就不需要 Mediator 模式了。但是需要考虑到的是，即使最初实例很少，很可能随着需求变更实例数量会慢慢变多，迟早会暴露出问题。</p><h3 id="哪些角色可以复用" tabindex="-1"><a class="header-anchor" href="#哪些角色可以复用"><span>哪些角色可以复用</span></a></h3><p>ConcreteColleague 角色可以复用，但 ConcreteMediator 角色很难复用。例如，假设我们现在需要制作另外一个对话框。这时，我们可将扮演 ConcreteColleague 角色的 colleagueButton 类、 colleagueTextField 类和 colleagueCheckbox 类用于新的对话框中。这是因为在 ConcreteColleague 角色中并没有任何依赖于特定对话框的代码。在示例程序中，依赖于特定应用程序的部分都被封装在扮演 ConcreteMediator 角色的 LoginFrame 类中，依赖于特定应用程序就意味着难以复用。因此， LoginFrame 类很难在其他对话框中被复用。</p><h2 id="相关的设计模式" tabindex="-1"><a class="header-anchor" href="#相关的设计模式"><span>相关的设计模式</span></a></h2><ul><li>Facade 模式</li><li>Observer 模式</li></ul>`,15);function h(y,f){const s=e("ExternalLinkIcon");return t(),p("div",null,[r,d,o(" more "),k,m,v,n("p",null,[n("a",b,[i("源地址"),c(s)])]),g])}const M=a(u,[["render",h],["__file","mediator.html.vue"]]),_=JSON.parse('{"path":"/tech/DesignPatterns/mediator.html","title":"Mediator 模式","lang":"zh-CN","frontmatter":{"title":"Mediator 模式","date":"2024-10-26T00:00:00.000Z","category":["设计模式"],"tag":["设计模式","TypeScript","简单化"],"prev":"./facade","next":"./observer","description":"为什么使用此类 请大家想象一下一个乱糟糟的开发小组的工作状态。小组中的 10 个成员虽然一起协同工作，但是意见难以统一，总是互相指挥，导致工作进度始终滞后。不仅如此，他们还十分在意编码细节，经常为此争执不下。","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://github.com/King-sj/tech/DesignPatterns/mediator.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"Mediator 模式"}],["meta",{"property":"og:description","content":"为什么使用此类 请大家想象一下一个乱糟糟的开发小组的工作状态。小组中的 10 个成员虽然一起协同工作，但是意见难以统一，总是互相指挥，导致工作进度始终滞后。不仅如此，他们还十分在意编码细节，经常为此争执不下。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"KSJ"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"TypeScript"}],["meta",{"property":"article:tag","content":"简单化"}],["meta",{"property":"article:published_time","content":"2024-10-26T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mediator 模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-26T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KSJ\\",\\"url\\":\\"https://github.com/King-sj\\"}]}"]]},"headers":[{"level":2,"title":"为什么使用此类","slug":"为什么使用此类","link":"#为什么使用此类","children":[]},{"level":2,"title":"示例代码","slug":"示例代码","link":"#示例代码","children":[]},{"level":2,"title":"运行结果","slug":"运行结果","link":"#运行结果","children":[]},{"level":2,"title":"拓展思路的要点","slug":"拓展思路的要点","link":"#拓展思路的要点","children":[{"level":3,"title":"当发生分散灾难时","slug":"当发生分散灾难时","link":"#当发生分散灾难时","children":[]},{"level":3,"title":"通信线路的增加","slug":"通信线路的增加","link":"#通信线路的增加","children":[]},{"level":3,"title":"哪些角色可以复用","slug":"哪些角色可以复用","link":"#哪些角色可以复用","children":[]}]},{"level":2,"title":"相关的设计模式","slug":"相关的设计模式","link":"#相关的设计模式","children":[]}],"readingTime":{"minutes":5.09,"words":1526},"filePathRelative":"tech/DesignPatterns/mediator.md","localizedDate":"2024年10月26日","excerpt":"<h2>为什么使用此类</h2>\\n<p>请大家想象一下一个乱糟糟的开发小组的工作状态。小组中的 10 个成员虽然一起协同工作，但是意见难以统一，总是互相指挥，导致工作进度始终滞后。不仅如此，他们还十分在意编码细节，经常为此争执不下。</p>\\n","autoDesc":true}');export{M as comp,_ as data};
