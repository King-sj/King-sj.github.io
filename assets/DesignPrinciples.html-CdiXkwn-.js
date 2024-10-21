import{_ as p,r as o,o as c,c as u,b as n,d as a,w as e,a as l,f as i,e as t}from"./app-ChJpPrUG.js";const r={},d={class:"table-of-contents"},k=n("p",null,"类的设计原则有七个，包括：开闭原则、里氏代换原则、迪米特原则（最少知道原则）、单一职责原则、接口分隔原则、依赖倒置原则、组合/聚合复用原则。",-1),v=i('<h2 id="关系" tabindex="-1"><a class="header-anchor" href="#关系"><span>关系</span></a></h2><p>七大原则之间并不是相互孤立的，而是相互关联的。一个原则可以是另一个原则的加强或基础。违反其中一个原则，可能同时违反其他原则。</p><p>开闭原则是面向对象可复用设计的基石，其他设计原则是实现开闭原则的手段和工具。</p><p>通常，可以将这七个原则分为以下两部分：</p><ul><li>设计目标：开闭原则、里氏代换原则、迪米特原则</li><li>设计方法：单一职责原则、接口分隔原则、依赖倒置原则、组合/聚合复用原则</li></ul><h2 id="开闭原则" tabindex="-1"><a class="header-anchor" href="#开闭原则"><span>开闭原则</span></a></h2><ul><li>对扩展开放</li><li>对修改关闭</li></ul><p>根据开闭原则，在设计一个系统模块的时候，应该可以在不修改原模块的基础上，扩展其功能。</p><h3 id="实现方法" tabindex="-1"><a class="header-anchor" href="#实现方法"><span>实现方法</span></a></h3><ol><li>使用抽象类和接口：通过定义抽象类和接口，可以在不修改现有代码的情况下，增加新的实现。</li><li>使用设计模式：例如策略模式、装饰者模式等，可以在不改变原有代码的情况下，动态地扩展对象的行为。</li><li>遵循单一职责原则：确保每个类只有一个职责，这样在扩展功能时，不会影响其他功能。</li></ol>',10),m=i(`<img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuIh9BCb9LNY-PjdJ2HrFzpIydBxsQT_yfnqpkJBpIbABqXAJKnKSaug3KulAKeiKghaK5BGLYa4S3Kq5AuMWrEBId1AkMYwkv9p4uc85vvpCrBmIi39TXTnAg2uhX0bQO0DIyeFpSrD3CZBpqZKq4RgB8SepSmjoKdE1vXGJOpFKIbrTBOHgBeVKl1IWvm00" alt=""><img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuIh9BCb9LNYoe_VvccLF9tGytTFmSlhQfttpdtRCv4hEIImkLd3EoKpDAr6evb9Gq5N8hGnEBIfBBLAmKe0mj832sWef-S7vkQaX6PbvwHgQNBLGdSKGfTLW9M2EXYPGOr1gSMbE2L0Lr6HTNIseKYw7rBmKeAi0" alt=""><h2 id="里氏代换原则" tabindex="-1"><a class="header-anchor" href="#里氏代换原则"><span>里氏代换原则</span></a></h2><h3 id="里氏代换原则-1" tabindex="-1"><a class="header-anchor" href="#里氏代换原则-1"><span>里氏代换原则</span></a></h3><ul><li>里氏代换原则规定子类不得重写父类的普通方法，只能重写父类的抽象方法；即子类可以扩展父类的功能，但是不能改变父类原有的功能。</li><li>派生类应当可以替换基类并出现在基类能够出现的任何地方，或者说如果我们把代码中使用基类的地方用它的派生类所代替，代码还能正常工作。</li></ul><h3 id="实现方法-1" tabindex="-1"><a class="header-anchor" href="#实现方法-1"><span>实现方法</span></a></h3><ol><li>使用抽象类和接口：确保子类实现父类的抽象方法，而不是重写父类的具体方法。</li><li>遵循契约：子类的方法签名应与父类一致，返回类型应与父类相同或是其子类型。</li><li>遵循行为一致性：子类应保持父类的行为，不应引入违反父类预期的新行为。</li></ol><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuIh9BCb9LNY-PjdJ2HqlstkURUX_idlnizv5J_lcF-sOoPMOL5nIb9XSef2SarXShE2KMPIYKCsbeA2ja9PJgQ6fOALGbf-PmbNBnGLH45oGM5IKNwwGMb6IcfT2X0QGWl34akICr2Aekd8GJoC9fD4AB8si2LcvhguTM9xB0MWLq2y0" alt=""><img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuIh9BCb9LNYoe_VvccLF9tIyREzvjg7_oUx5pteNFUsR_xHZ9bTYKd59KM9oYK9oJc9niO9JPb6AGZMNWeAsGbfEfOQcWfL2MNvc2bSj5nT4WJzGUMPoXa9gHKbgNWfE3GhL2YKPHVdb2dcfvGgXUSMb1GNvHIMfAVu5gKM99PdvUQuLoQa588Q6fhL2BS9ya7dXYIN96Qb5K6FBGJoD990zLc1fP4SXAzVLjGFBSpa0NGRqFG00" alt=""><h2 id="迪米特原则" tabindex="-1"><a class="header-anchor" href="#迪米特原则"><span>迪米特原则</span></a></h2><h3 id="迪米特原则-1" tabindex="-1"><a class="header-anchor" href="#迪米特原则-1"><span>迪米特原则</span></a></h3><p>一个实体应当尽量少地与其他实体之间发生相互作用，使得系统功能模块相对独立；降低类之间的耦合度，提高模块的相对独立性。</p><h3 id="实现方法-2" tabindex="-1"><a class="header-anchor" href="#实现方法-2"><span>实现方法</span></a></h3><ol><li><strong>引入中介者模式</strong>：通过中介者对象来管理对象之间的交互，减少对象之间的直接依赖。</li><li><strong>使用门面模式</strong>：通过门面对象提供统一的接口，隐藏系统的复杂性，减少对象之间的直接交互。</li><li><strong>限制公开方法</strong>：尽量减少类的公开方法，避免不必要的外部依赖。</li></ol><h2 id="单一职责原则" tabindex="-1"><a class="header-anchor" href="#单一职责原则"><span>单一职责原则</span></a></h2><ul><li>一个类只对应一个职责，其职责是引起该类变化的原因。</li><li>如果一个类需要改变，改变它的理由永远只有一个。如果存在多个改变它的理由，就需要重新设计该类。</li></ul><h3 id="实现方法-3" tabindex="-1"><a class="header-anchor" href="#实现方法-3"><span>实现方法</span></a></h3><ol><li><strong>职责分离</strong>：将不同的职责分离到不同的类中，每个类只负责一个职责。</li><li><strong>模块化设计</strong>：通过模块化设计，将不同的功能模块分开，确保每个模块只负责一个功能。</li><li><strong>重构</strong>：在发现类有多个职责时，及时进行重构，将不同的职责分离到不同的类中。</li></ol><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1"><span>示例</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 不符合单一职责原则的类</span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 登录逻辑</span>
  <span class="token punctuation">}</span>

  <span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注册逻辑</span>
  <span class="token punctuation">}</span>

  <span class="token function">displayProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 显示用户信息逻辑</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 符合单一职责原则的类</span>
<span class="token keyword">class</span> <span class="token class-name">AuthService</span> <span class="token punctuation">{</span>
  <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 登录逻辑</span>
  <span class="token punctuation">}</span>

  <span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注册逻辑</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">UserProfile</span> <span class="token punctuation">{</span>
  <span class="token function">displayProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 显示用户信息逻辑</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口隔离原则" tabindex="-1"><a class="header-anchor" href="#接口隔离原则"><span>接口隔离原则</span></a></h2><ul><li>不应强迫用户依赖他们不使用的接口。</li><li>一个类对另一个类的依赖应该建立在最小的接口上。</li></ul><p>简单来说，使用多个专门的接口比使用单个通用接口要好得多。</p><h2 id="依赖倒置原则" tabindex="-1"><a class="header-anchor" href="#依赖倒置原则"><span>依赖倒置原则</span></a></h2><p>高层模块不应该依赖低层模块，二者都应该依赖其抽象。抽象不应该依赖细节，细节应该依赖抽象。核心思想是：面向接口编程，而不是面向实现编程。</p><h3 id="实现方法-4" tabindex="-1"><a class="header-anchor" href="#实现方法-4"><span>实现方法</span></a></h3><ol><li><strong>使用接口和抽象类</strong>：定义接口或抽象类，让高层模块依赖这些抽象，而不是具体实现。</li><li><strong>依赖注入</strong>：通过构造函数注入、属性注入或方法注入，将具体实现传递给高层模块。</li><li><strong>工厂模式</strong>：使用工厂模式创建对象，避免高层模块直接依赖具体类。</li></ol><h3 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2"><span>示例</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 定义抽象接口</span>
<span class="token keyword">interface</span> <span class="token class-name">IWorker</span> <span class="token punctuation">{</span>
  <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体实现</span>
<span class="token keyword">class</span> <span class="token class-name">Worker</span> <span class="token keyword">implements</span> <span class="token class-name">IWorker</span> <span class="token punctuation">{</span>
  <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Working...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 高层模块依赖抽象接口</span>
<span class="token keyword">class</span> <span class="token class-name">Manager</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> worker<span class="token operator">:</span> IWorker<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>worker<span class="token operator">:</span> IWorker<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>worker <span class="token operator">=</span> worker<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">manage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>worker<span class="token punctuation">.</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用依赖注入</span>
<span class="token keyword">const</span> worker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> manager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Manager</span><span class="token punctuation">(</span>worker<span class="token punctuation">)</span><span class="token punctuation">;</span>
manager<span class="token punctuation">.</span><span class="token function">manage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组合-聚合复用原则" tabindex="-1"><a class="header-anchor" href="#组合-聚合复用原则"><span>组合/聚合复用原则</span></a></h2><p><strong>尽量使用组合/聚合，不要使用类继承。</strong></p><p>如果使用继承，会导致父类的任何变换都可能影响到子类的行为，所以优先使用组合的方式代替继承的方式。</p><h3 id="实现方法-5" tabindex="-1"><a class="header-anchor" href="#实现方法-5"><span>实现方法</span></a></h3><ol><li><strong>使用组合</strong>：通过在类中包含其他类的实例来实现功能，而不是通过继承。</li><li><strong>使用聚合</strong>：通过在类中引用其他类的实例来实现功能，而不是通过继承。</li><li><strong>接口和抽象类</strong>：通过接口和抽象类定义行为，然后在具体类中实现这些行为。</li></ol><h3 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3"><span>示例</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 使用继承的方式</span>
<span class="token keyword">class</span> <span class="token class-name">Engine</span> <span class="token punctuation">{</span>
  <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Engine started&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token keyword">extends</span> <span class="token class-name">Engine</span> <span class="token punctuation">{</span>
  <span class="token function">drive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Car is driving&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用组合的方式</span>
<span class="token keyword">class</span> <span class="token class-name">Engine</span> <span class="token punctuation">{</span>
  <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Engine started&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> engine<span class="token operator">:</span> Engine<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>engine<span class="token operator">:</span> Engine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>engine <span class="token operator">=</span> engine<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">drive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>engine<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Car is driving&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> engine <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Engine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span>engine<span class="token punctuation">)</span><span class="token punctuation">;</span>
car<span class="token punctuation">.</span><span class="token function">drive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><ul><li><strong>开闭原则</strong>：对扩展开放，对修改关闭。</li><li><strong>里氏代换原则</strong>：子类可以替换父类，且程序行为不变。</li><li><strong>迪米特原则</strong>：尽量减少类之间的耦合。</li><li><strong>单一职责原则</strong>：一个类只负责一个职责。</li><li><strong>接口隔离原则</strong>：使用多个专门的接口，而不是一个通用接口。</li><li><strong>依赖倒置原则</strong>：高层模块不依赖低层模块，二者都依赖抽象。</li><li><strong>组合/聚合复用原则</strong>：优先使用组合/聚合，而不是继承。</li></ul>`,39);function h(g,b){const s=o("router-link");return c(),u("div",null,[n("nav",d,[n("ul",null,[n("li",null,[a(s,{to:"#关系"},{default:e(()=>[t("关系")]),_:1})]),n("li",null,[a(s,{to:"#开闭原则"},{default:e(()=>[t("开闭原则")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#实现方法"},{default:e(()=>[t("实现方法")]),_:1})])])]),n("li",null,[a(s,{to:"#里氏代换原则"},{default:e(()=>[t("里氏代换原则")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#里氏代换原则-1"},{default:e(()=>[t("里氏代换原则")]),_:1})]),n("li",null,[a(s,{to:"#实现方法-1"},{default:e(()=>[t("实现方法")]),_:1})]),n("li",null,[a(s,{to:"#示例"},{default:e(()=>[t("示例")]),_:1})])])]),n("li",null,[a(s,{to:"#迪米特原则"},{default:e(()=>[t("迪米特原则")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#迪米特原则-1"},{default:e(()=>[t("迪米特原则")]),_:1})]),n("li",null,[a(s,{to:"#实现方法-2"},{default:e(()=>[t("实现方法")]),_:1})])])]),n("li",null,[a(s,{to:"#单一职责原则"},{default:e(()=>[t("单一职责原则")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#实现方法-3"},{default:e(()=>[t("实现方法")]),_:1})]),n("li",null,[a(s,{to:"#示例-1"},{default:e(()=>[t("示例")]),_:1})])])]),n("li",null,[a(s,{to:"#接口隔离原则"},{default:e(()=>[t("接口隔离原则")]),_:1})]),n("li",null,[a(s,{to:"#依赖倒置原则"},{default:e(()=>[t("依赖倒置原则")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#实现方法-4"},{default:e(()=>[t("实现方法")]),_:1})]),n("li",null,[a(s,{to:"#示例-2"},{default:e(()=>[t("示例")]),_:1})])])]),n("li",null,[a(s,{to:"#组合-聚合复用原则"},{default:e(()=>[t("组合/聚合复用原则")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#实现方法-5"},{default:e(()=>[t("实现方法")]),_:1})]),n("li",null,[a(s,{to:"#示例-3"},{default:e(()=>[t("示例")]),_:1})])])]),n("li",null,[a(s,{to:"#总结"},{default:e(()=>[t("总结")]),_:1})])])]),k,l(" more "),v,l(" some plantuml demo "),m])}const w=p(r,[["render",h],["__file","DesignPrinciples.html.vue"]]),y=JSON.parse('{"path":"/tech/DesignPatterns/DesignPrinciples.html","title":"设计模式七大原则","lang":"zh-CN","frontmatter":{"title":"设计模式七大原则","category":["设计模式"],"tag":["设计模式","typescript"],"prev":"./index","next":"./iterator","description":"类的设计原则有七个，包括：开闭原则、里氏代换原则、迪米特原则（最少知道原则）、单一职责原则、接口分隔原则、依赖倒置原则、组合/聚合复用原则。","head":[["meta",{"property":"og:url","content":"https://github.com/King-sj/tech/DesignPatterns/DesignPrinciples.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"设计模式七大原则"}],["meta",{"property":"og:description","content":"类的设计原则有七个，包括：开闭原则、里氏代换原则、迪米特原则（最少知道原则）、单一职责原则、接口分隔原则、依赖倒置原则、组合/聚合复用原则。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T08:03:01.000Z"}],["meta",{"property":"article:author","content":"KSJ"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"typescript"}],["meta",{"property":"article:modified_time","content":"2024-10-21T08:03:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式七大原则\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T08:03:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KSJ\\",\\"url\\":\\"https://github.com/King-sj\\"}]}"]]},"headers":[{"level":2,"title":"关系","slug":"关系","link":"#关系","children":[]},{"level":2,"title":"开闭原则","slug":"开闭原则","link":"#开闭原则","children":[{"level":3,"title":"实现方法","slug":"实现方法","link":"#实现方法","children":[]}]},{"level":2,"title":"里氏代换原则","slug":"里氏代换原则","link":"#里氏代换原则","children":[{"level":3,"title":"里氏代换原则","slug":"里氏代换原则-1","link":"#里氏代换原则-1","children":[]},{"level":3,"title":"实现方法","slug":"实现方法-1","link":"#实现方法-1","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]},{"level":2,"title":"迪米特原则","slug":"迪米特原则","link":"#迪米特原则","children":[{"level":3,"title":"迪米特原则","slug":"迪米特原则-1","link":"#迪米特原则-1","children":[]},{"level":3,"title":"实现方法","slug":"实现方法-2","link":"#实现方法-2","children":[]}]},{"level":2,"title":"单一职责原则","slug":"单一职责原则","link":"#单一职责原则","children":[{"level":3,"title":"实现方法","slug":"实现方法-3","link":"#实现方法-3","children":[]},{"level":3,"title":"示例","slug":"示例-1","link":"#示例-1","children":[]}]},{"level":2,"title":"接口隔离原则","slug":"接口隔离原则","link":"#接口隔离原则","children":[]},{"level":2,"title":"依赖倒置原则","slug":"依赖倒置原则","link":"#依赖倒置原则","children":[{"level":3,"title":"实现方法","slug":"实现方法-4","link":"#实现方法-4","children":[]},{"level":3,"title":"示例","slug":"示例-2","link":"#示例-2","children":[]}]},{"level":2,"title":"组合/聚合复用原则","slug":"组合-聚合复用原则","link":"#组合-聚合复用原则","children":[{"level":3,"title":"实现方法","slug":"实现方法-5","link":"#实现方法-5","children":[]},{"level":3,"title":"示例","slug":"示例-3","link":"#示例-3","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1729497781000,"updatedTime":1729497781000,"contributors":[{"name":"King","email":"2175616761@qq.com","commits":1}]},"readingTime":{"minutes":6.22,"words":1865},"filePathRelative":"tech/DesignPatterns/DesignPrinciples.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>类的设计原则有七个，包括：开闭原则、里氏代换原则、迪米特原则（最少知道原则）、单一职责原则、接口分隔原则、依赖倒置原则、组合/聚合复用原则。</p>\\n","autoDesc":true}');export{w as comp,y as data};
