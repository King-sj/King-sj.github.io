import{_ as t,r as p,o as r,c,b as s,f as a,d as e,e as l}from"./app-DP5VP1rc.js";const i={},o=s("p",null,"[[[toc]]]",-1),b=s("h1",{id:"转载声明",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#转载声明"},[s("span",null,"转载声明")])],-1),d={href:"https://lotabout.me/2016/write-a-C-interpreter-4/",target:"_blank",rel:"noopener noreferrer"},h=l('<h1 id="原文内容" tabindex="-1"><a class="header-anchor" href="#原文内容"><span>原文内容</span></a></h1><h1 id="手把手教你构建-c-语言编译器-4-递归下降" tabindex="-1"><a class="header-anchor" href="#手把手教你构建-c-语言编译器-4-递归下降"><span>手把手教你构建 C 语言编译器（4）- 递归下降</span></a></h1><p>Table of Contents</p><ol><li><a href="about:blank#%E4%BB%80%E4%B9%88%E6%98%AF%E9%80%92%E5%BD%92%E4%B8%8B%E9%99%8D">1. 什么是递归下降</a></li><li><a href="about:blank#%E7%BB%88%E7%BB%93%E7%AC%A6%E4%B8%8E%E9%9D%9E%E7%BB%88%E7%BB%93%E7%AC%A6">2. 终结符与非终结符</a></li><li><a href="about:blank#%E5%9B%9B%E5%88%99%E8%BF%90%E7%AE%97%E7%9A%84%E9%80%92%E5%BD%92%E4%B8%8B%E9%99%8D">3. 四则运算的递归下降</a></li><li><a href="about:blank#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9%E9%80%92%E5%BD%92%E4%B8%8B%E9%99%8D">4. 为什么选择递归下降</a></li><li><a href="about:blank#%E5%B7%A6%E9%80%92%E5%BD%92">5. 左递归</a></li><li><a href="about:blank#%E5%9B%9B%E5%88%99%E8%BF%90%E7%AE%97%E7%9A%84%E5%AE%9E%E7%8E%B0">6. 四则运算的实现</a></li><li><a href="about:blank#%E5%B0%8F%E7%BB%93">7. 小结</a></li></ol><p>本章我们将讲解递归下降的方法，并用它完成一个基本的四则运算的语法分析器。</p><p>手把手教你构建 C 语言编译器系列共有10个部分：</p>',6),E={href:"http://lotabout.me/2015/write-a-C-interpreter-0/",target:"_blank",rel:"noopener noreferrer"},g={href:"http://lotabout.me/2015/write-a-C-interpreter-1/",target:"_blank",rel:"noopener noreferrer"},u={href:"http://lotabout.me/2015/write-a-C-interpreter-2/",target:"_blank",rel:"noopener noreferrer"},m={href:"http://lotabout.me/2015/write-a-C-interpreter-3/",target:"_blank",rel:"noopener noreferrer"},B={href:"http://lotabout.me/2016/write-a-C-interpreter-4/",target:"_blank",rel:"noopener noreferrer"},f={href:"http://lotabout.me/2016/write-a-C-interpreter-5/",target:"_blank",rel:"noopener noreferrer"},k={href:"http://lotabout.me/2016/write-a-C-interpreter-6/",target:"_blank",rel:"noopener noreferrer"},_={href:"http://lotabout.me/2016/write-a-C-interpreter-7/",target:"_blank",rel:"noopener noreferrer"},y={href:"http://lotabout.me/2016/write-a-C-interpreter-8/",target:"_blank",rel:"noopener noreferrer"},C={href:"http://lotabout.me/2016/write-a-C-interpreter-9/",target:"_blank",rel:"noopener noreferrer"},w=l('<h2 id="什么是递归下降" tabindex="-1"><a class="header-anchor" href="#什么是递归下降"><span><a href="about:blank#%E4%BB%80%E4%B9%88%E6%98%AF%E9%80%92%E5%BD%92%E4%B8%8B%E9%99%8D"></a>什么是递归下降</span></a></h2><p>传统上，编写语法分析器有两种方法，一种是自顶向下，一种是自底向上。自顶向下是从起始非终结符开始，不断地对非终结符进行分解，直到匹配输入的终结符；自底向上是不断地将终结符进行合并，直到合并成起始的非终结符。</p><p>其中的自顶向下方法就是我们所说的递归下降。</p><h2 id="终结符与非终结符" tabindex="-1"><a class="header-anchor" href="#终结符与非终结符"><span><a href="about:blank#%E7%BB%88%E7%BB%93%E7%AC%A6%E4%B8%8E%E9%9D%9E%E7%BB%88%E7%BB%93%E7%AC%A6"></a>终结符与非终结符</span></a></h2>',4),x={href:"https://zh.wikipedia.org/wiki/%E5%B7%B4%E7%A7%91%E6%96%AF%E8%8C%83%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"},A=l('<table><tbody><tr><td class="code"><pre><span class="line">&lt;expr&gt; ::= &lt;expr&gt; + &lt;term&gt;</span><br><span class="line">         | &lt;expr&gt; - &lt;term&gt;</span><br><span class="line">         | &lt;term&gt;</span><br><span class="line"></span><br><span class="line">&lt;term&gt; ::= &lt;term&gt; * &lt;factor&gt;</span><br><span class="line">         | &lt;term&gt; / &lt;factor&gt;</span><br><span class="line">         | &lt;factor&gt;</span><br><span class="line"></span><br><span class="line">&lt;factor&gt; ::= ( &lt;expr&gt; )</span><br><span class="line">           | Num</span><br></pre></td></tr></tbody></table><p>用尖括号 <code>&lt;&gt;</code> 括起来的就称作 <strong>非终结符</strong> ，因为它们可以用 <code>::=</code> 右侧的式子代替。<code>|</code> 表示选择，如 <code>&lt;expr&gt;</code> 可以是 <code>&lt;expr&gt; + &lt;term&gt;</code>、<code>&lt;expr&gt; - &lt;term&gt;</code>或 <code>&lt;term&gt;</code> 中的一种。而没有出现在<code>::=</code>左边的就称作 <strong>终结符</strong> ，一般终结符对应于词法分析器输出的标记。</p><h2 id="四则运算的递归下降" tabindex="-1"><a class="header-anchor" href="#四则运算的递归下降"><span><a href="about:blank#%E5%9B%9B%E5%88%99%E8%BF%90%E7%AE%97%E7%9A%84%E9%80%92%E5%BD%92%E4%B8%8B%E9%99%8D"></a>四则运算的递归下降</span></a></h2><p>例如，我们对 <code>3 * (4 + 2)</code> 进行语法分析。我们假设词法分析器已经正确地将其中的数字识别成了标记 <code>Num</code>。</p><p>递归下降是从起始的非终结符开始（顶），本例中是 <code>&lt;expr&gt;</code>，实际中可以自己指定，不指定的话一般认为是第一个出现的非终结符。</p><table><tbody><tr><td class="code"><pre><span class="line">1. &lt;expr&gt; =&gt; &lt;expr&gt;</span><br><span class="line">2.           =&gt; &lt;term&gt;        * &lt;factor&gt;</span><br><span class="line">3.              =&gt; &lt;factor&gt;     |</span><br><span class="line">4.                 =&gt; Num (3)   |</span><br><span class="line">5.                              =&gt; ( &lt;expr&gt; )</span><br><span class="line">6.                                   =&gt; &lt;expr&gt;           + &lt;term&gt;</span><br><span class="line">7.                                      =&gt; &lt;term&gt;          |</span><br><span class="line">8.                                         =&gt; &lt;factor&gt;     |</span><br><span class="line">9.                                            =&gt; Num (4)   |</span><br><span class="line">10.                                                        =&gt; &lt;factor&gt;</span><br><span class="line">11.                                                           =&gt; Num (2)</span><br></pre></td></tr></tbody></table><p>可以看到，整个解析的过程是在不断对非终结符进行替换（向下），直到遇见了终结符（底）。而我们可以从解析的过程中看出，一些非终结符如<code>&lt;expr&gt;</code>被递归地使用了。</p><h2 id="为什么选择递归下降" tabindex="-1"><a class="header-anchor" href="#为什么选择递归下降"><span><a href="about:blank#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9%E9%80%92%E5%BD%92%E4%B8%8B%E9%99%8D"></a>为什么选择递归下降</span></a></h2><p>从上小节对四则运算的递归下降解析可以看出，整个解析的过程和语法的 BNF 表示是十分接近的，更为重要的是，我们可以很容易地直接将 BNF 表示转换成实际的代码。方法是为每个产生式（即 <code>非终结符 ::= ...</code>）生成一个同名的函数。</p><p>这里会有一个疑问，就是上例中，当一个终结符有多个选择时，如何确定具体选择哪一个？如为什么用 <code>&lt;expr&gt; ::= &lt;term&gt; * &lt;factor&gt;</code> 而不是 <code>&lt;expr&gt; ::= &lt;term&gt; / &lt;factor&gt;</code> ？这就用到了上一章中提到的“向前看 k 个标记”的概念了。我们向前看一个标记，发现是 <code>*</code>，而这个标记足够让我们确定用哪个表达式了。</p><p>另外，递归下下降方法对 BNF 方法本身有一定的要求，否则会有一些问题，如经典的“左递归”问题。</p><h2 id="左递归" tabindex="-1"><a class="header-anchor" href="#左递归"><span><a href="about:blank#%E5%B7%A6%E9%80%92%E5%BD%92"></a>左递归</span></a></h2><p>原则上我们是不讲这么深入，但我们上面的四则运算的文法就是左递归的，而左递归的语法是没法直接使用递归下降的方法实现的。因此我们要消除左递归，消除后的文法如下：</p><table><tbody><tr><td class="code"><pre><span class="line">&lt;expr&gt; ::= &lt;term&gt; &lt;expr_tail&gt;</span><br><span class="line">&lt;expr_tail&gt; ::= + &lt;term&gt; &lt;expr_tail&gt;</span><br><span class="line">              | - &lt;term&gt; &lt;expr_tail&gt;</span><br><span class="line">              | &lt;empty&gt;</span><br><span class="line"></span><br><span class="line">&lt;term&gt; ::= &lt;factor&gt; &lt;term_tail&gt;</span><br><span class="line">&lt;term_tail&gt; ::= * &lt;factor&gt; &lt;term_tail&gt;</span><br><span class="line">              | / &lt;factor&gt; &lt;term_tail&gt;</span><br><span class="line">              | &lt;empty&gt;</span><br><span class="line"></span><br><span class="line">&lt;factor&gt; ::= ( &lt;expr&gt; )</span><br><span class="line">           | Num</span><br></pre></td></tr></tbody></table><p>消除左递归的相关方法，这里不再多说，请自行查阅相关的资料。</p><h2 id="四则运算的实现" tabindex="-1"><a class="header-anchor" href="#四则运算的实现"><span><a href="about:blank#%E5%9B%9B%E5%88%99%E8%BF%90%E7%AE%97%E7%9A%84%E5%AE%9E%E7%8E%B0"></a>四则运算的实现</span></a></h2><p>本节中我们专注语法分析器部分的实现，具体实现很容易，我们直接贴上代码，就是上述的消除左递归后的文法直接转换而来的：</p><table><tbody><tr><td class="code"><pre><span class="line"><span class="type">int</span> <span class="title function_">expr</span><span class="params">()</span>;</span><br><span class="line"></span><br><span class="line"><span class="type">int</span> <span class="title function_">factor</span><span class="params">()</span> {</span><br><span class="line">    <span class="type">int</span> value = <span class="number">0</span>;</span><br><span class="line">    <span class="keyword">if</span> (token == <span class="string">&#39;(&#39;</span>) {</span><br><span class="line">        match(<span class="string">&#39;(&#39;</span>);</span><br><span class="line">        value = expr();</span><br><span class="line">        match(<span class="string">&#39;)&#39;</span>);</span><br><span class="line">    } <span class="keyword">else</span> {</span><br><span class="line">        value = token_val;</span><br><span class="line">        match(Num);</span><br><span class="line">    }</span><br><span class="line">    <span class="keyword">return</span> value;</span><br><span class="line">}</span><br><span class="line"></span><br><span class="line"><span class="type">int</span> <span class="title function_">term_tail</span><span class="params">(<span class="type">int</span> lvalue)</span> {</span><br><span class="line">    <span class="keyword">if</span> (token == <span class="string">&#39;*&#39;</span>) {</span><br><span class="line">        match(<span class="string">&#39;*&#39;</span>);</span><br><span class="line">        <span class="type">int</span> value = lvalue * factor();</span><br><span class="line">        <span class="keyword">return</span> term_tail(value);</span><br><span class="line">    } <span class="keyword">else</span> <span class="keyword">if</span> (token == <span class="string">&#39;/&#39;</span>) {</span><br><span class="line">        match(<span class="string">&#39;/&#39;</span>);</span><br><span class="line">        <span class="type">int</span> value = lvalue / factor();</span><br><span class="line">        <span class="keyword">return</span> term_tail(value);</span><br><span class="line">    } <span class="keyword">else</span> {</span><br><span class="line">        <span class="keyword">return</span> lvalue;</span><br><span class="line">    }</span><br><span class="line">}</span><br><span class="line"></span><br><span class="line"><span class="type">int</span> <span class="title function_">term</span><span class="params">()</span> {</span><br><span class="line">    <span class="type">int</span> lvalue = factor();</span><br><span class="line">    <span class="keyword">return</span> term_tail(lvalue);</span><br><span class="line">}</span><br><span class="line"></span><br><span class="line"><span class="type">int</span> <span class="title function_">expr_tail</span><span class="params">(<span class="type">int</span> lvalue)</span> {</span><br><span class="line">    <span class="keyword">if</span> (token == <span class="string">&#39;+&#39;</span>) {</span><br><span class="line">        match(<span class="string">&#39;+&#39;</span>);</span><br><span class="line">        <span class="type">int</span> value = lvalue + term();</span><br><span class="line">        <span class="keyword">return</span> expr_tail(value);</span><br><span class="line">    } <span class="keyword">else</span> <span class="keyword">if</span> (token == <span class="string">&#39;-&#39;</span>) {</span><br><span class="line">        match(<span class="string">&#39;-&#39;</span>);</span><br><span class="line">        <span class="type">int</span> value = lvalue - term();</span><br><span class="line">        <span class="keyword">return</span> expr_tail(value);</span><br><span class="line">    } <span class="keyword">else</span> {</span><br><span class="line">        <span class="keyword">return</span> lvalue;</span><br><span class="line">    }</span><br><span class="line">}</span><br><span class="line"></span><br><span class="line"><span class="type">int</span> <span class="title function_">expr</span><span class="params">()</span> {</span><br><span class="line">    <span class="type">int</span> lvalue = term();</span><br><span class="line">    <span class="keyword">return</span> expr_tail(lvalue);</span><br><span class="line">}</span><br></pre></td></tr></tbody></table><p>可以看到，有了BNF方法后，采用递归向下的方法来实现编译器是很直观的。</p><p>我们把词法分析器的代码一并贴上：</p><table><tbody><tr><td class="code"><pre><span class="line">#<span class="meta">#<span class="keyword">include</span> <span class="string">&lt;stdio.h&gt;</span></span></span><br><span class="line">#<span class="meta">#<span class="keyword">include</span> <span class="string">&lt;stdlib.h&gt;</span></span></span><br><span class="line"></span><br><span class="line"><span class="class"><span class="keyword">enum</span> {</span>Num};</span><br><span class="line"><span class="type">int</span> token;</span><br><span class="line"><span class="type">int</span> token_val;</span><br><span class="line"><span class="type">char</span> *line = <span class="literal">NULL</span>;</span><br><span class="line"><span class="type">char</span> *src = <span class="literal">NULL</span>;</span><br><span class="line"></span><br><span class="line"><span class="type">void</span> <span class="title function_">next</span><span class="params">()</span> {</span><br><span class="line">    <span class="comment">// skip white space</span></span><br><span class="line">    <span class="keyword">while</span> (*src == <span class="string">&#39; &#39;</span> || *src == <span class="string">&#39;\\t&#39;</span>) {</span><br><span class="line">        src ++;</span><br><span class="line">    }</span><br><span class="line"></span><br><span class="line">    token = *src++;</span><br><span class="line"></span><br><span class="line">    <span class="keyword">if</span> (token &gt;= <span class="string">&#39;0&#39;</span> &amp;&amp; token &lt;= <span class="string">&#39;9&#39;</span> ) {</span><br><span class="line">        token_val = token - <span class="string">&#39;0&#39;</span>;</span><br><span class="line">        token = Num;</span><br><span class="line"></span><br><span class="line">        <span class="keyword">while</span> (*src &gt;= <span class="string">&#39;0&#39;</span> &amp;&amp; *src &lt;= <span class="string">&#39;9&#39;</span>) {</span><br><span class="line">            token_val = token_val*<span class="number">10</span> + *src - <span class="string">&#39;0&#39;</span>;</span><br><span class="line">            src ++;</span><br><span class="line">        }</span><br><span class="line">        <span class="keyword">return</span>;</span><br><span class="line">    }</span><br><span class="line">}</span><br><span class="line"></span><br><span class="line"><span class="type">void</span> <span class="title function_">match</span><span class="params">(<span class="type">int</span> tk)</span> {</span><br><span class="line">    <span class="keyword">if</span> (token != tk) {</span><br><span class="line">        <span class="built_in">printf</span>(<span class="string">&quot;expected token: %d(%c), got: %d(%c)\\n&quot;</span>, tk, tk, token, token);</span><br><span class="line">        <span class="built_in">exit</span>(<span class="number">-1</span>);</span><br><span class="line">    }</span><br><span class="line">    next();</span><br><span class="line">}</span><br></pre></td></tr></tbody></table><p>最后是<code>main</code>函数：</p><table><tbody><tr><td class="code"><pre><span class="line"><span class="type">int</span> <span class="title function_">main</span><span class="params">(<span class="type">int</span> argc, <span class="type">char</span> *argv[])</span></span><br><span class="line">{</span><br><span class="line">    <span class="type">size_t</span> linecap = <span class="number">0</span>;</span><br><span class="line">    <span class="type">ssize_t</span> linelen;</span><br><span class="line">    <span class="keyword">while</span> ((linelen = getline(&amp;line, &amp;linecap, <span class="built_in">stdin</span>)) &gt; <span class="number">0</span>) {</span><br><span class="line">        src = line;</span><br><span class="line">        next();</span><br><span class="line">        <span class="built_in">printf</span>(<span class="string">&quot;%d\\n&quot;</span>, expr());</span><br><span class="line">    }</span><br><span class="line">    <span class="keyword">return</span> <span class="number">0</span>;</span><br><span class="line">}</span><br></pre></td></tr></tbody></table><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span><a href="about:blank#%E5%B0%8F%E7%BB%93"></a>小结</span></a></h2><p>本章中我们介绍了递归下降的方法，并用它来实现了四则运算的语法分析器。</p><p>花这么大精力讲解递归下降方法，是因为几乎所有手工编写的语法分析器都或多或少地有它的影子。换句话说，掌握了递归下降的方法，就可以应付大多数的语法分析器编写。</p><p>同时我们也用实例看到了理论（BNF 语法，左递归的消除）是如何帮助我们的工程实现的。尽管理论不是必需的，但如果能掌握它，对于提高我们的水平还是很有帮助的。</p>',27);function v(D,N){const n=p("ExternalLinkIcon");return r(),c("div",null,[o,b,s("p",null,[a("本文转自 "),s("a",d,[a("https://lotabout.me/2016/write-a-C-interpreter-4/"),e(n)]),a("，如有侵权，请联系删除。")]),h,s("ol",null,[s("li",null,[s("a",E,[a("手把手教你构建 C 语言编译器（0）——前言"),e(n)])]),s("li",null,[s("a",g,[a("手把手教你构建 C 语言编译器（1）——设计"),e(n)])]),s("li",null,[s("a",u,[a("手把手教你构建 C 语言编译器（2）——虚拟机"),e(n)])]),s("li",null,[s("a",m,[a("手把手教你构建 C 语言编译器（3）——词法分析器"),e(n)])]),s("li",null,[s("a",B,[a("手把手教你构建 C 语言编译器（4）——递归下降"),e(n)])]),s("li",null,[s("a",f,[a("手把手教你构建 C 语言编译器（5）——变量定义"),e(n)])]),s("li",null,[s("a",k,[a("手把手教你构建 C 语言编译器（6）——函数定义"),e(n)])]),s("li",null,[s("a",_,[a("手把手教你构建 C 语言编译器（7）——语句"),e(n)])]),s("li",null,[s("a",y,[a("手把手教你构建 C 语言编译器（8）——表达式"),e(n)])]),s("li",null,[s("a",C,[a("手把手教你构建 C 语言编译器（9）——总结"),e(n)])])]),w,s("p",null,[a("没有学过编译原理的话可能并不知道什么是“终结符”，“非终结符”。这里我简单介绍一下。首先是 "),s("a",x,[a("BNF"),e(n)]),a(" 范式，就是一种用来描述语法的语言，例如，四则运算的规则可以表示如下：")]),A])}const T=t(i,[["render",v],["__file","4.html.vue"]]),S=JSON.parse('{"path":"/tech/designASimpileCCompiler/4.html","title":"手把手教你构建 C 语言编译器（0）- 前言","lang":"zh-CN","frontmatter":{"title":"手把手教你构建 C 语言编译器（0）- 前言","description":"[[[toc]]] 转载声明 本文转自 https://lotabout.me/2016/write-a-C-interpreter-4/，如有侵权，请联系删除。 原文内容 手把手教你构建 C 语言编译器（4）- 递归下降 Table of Contents 1. 什么是递归下降 2. 终结符与非终结符 3. 四则运算的递归下降 4. 为什么选择递归下...","head":[["meta",{"property":"og:url","content":"https://github.com/King-sj/tech/designASimpileCCompiler/4.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"手把手教你构建 C 语言编译器（0）- 前言"}],["meta",{"property":"og:description","content":"[[[toc]]] 转载声明 本文转自 https://lotabout.me/2016/write-a-C-interpreter-4/，如有侵权，请联系删除。 原文内容 手把手教你构建 C 语言编译器（4）- 递归下降 Table of Contents 1. 什么是递归下降 2. 终结符与非终结符 3. 四则运算的递归下降 4. 为什么选择递归下..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-18T03:49:23.000Z"}],["meta",{"property":"article:author","content":"KSJ"}],["meta",{"property":"article:modified_time","content":"2024-10-18T03:49:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"手把手教你构建 C 语言编译器（0）- 前言\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-18T03:49:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KSJ\\",\\"url\\":\\"https://github.com/King-sj\\"}]}"]]},"headers":[{"level":2,"title":"什么是递归下降","slug":"什么是递归下降","link":"#什么是递归下降","children":[]},{"level":2,"title":"终结符与非终结符","slug":"终结符与非终结符","link":"#终结符与非终结符","children":[]},{"level":2,"title":"四则运算的递归下降","slug":"四则运算的递归下降","link":"#四则运算的递归下降","children":[]},{"level":2,"title":"为什么选择递归下降","slug":"为什么选择递归下降","link":"#为什么选择递归下降","children":[]},{"level":2,"title":"左递归","slug":"左递归","link":"#左递归","children":[]},{"level":2,"title":"四则运算的实现","slug":"四则运算的实现","link":"#四则运算的实现","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1729223363000,"updatedTime":1729223363000,"contributors":[{"name":"King","email":"2175616761@qq.com","commits":1}]},"readingTime":{"minutes":11.28,"words":3385},"filePathRelative":"tech/designASimpileCCompiler/4.md","localizedDate":"2024年10月18日","excerpt":"<p>[[[toc]]]</p>\\n<h1>转载声明</h1>\\n<p>本文转自 <a href=\\"https://lotabout.me/2016/write-a-C-interpreter-4/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://lotabout.me/2016/write-a-C-interpreter-4/</a>，如有侵权，请联系删除。</p>\\n<h1>原文内容</h1>\\n<h1>手把手教你构建 C 语言编译器（4）- 递归下降</h1>\\n<p>Table of Contents</p>\\n<ol>\\n<li><a href=\\"about:blank#%E4%BB%80%E4%B9%88%E6%98%AF%E9%80%92%E5%BD%92%E4%B8%8B%E9%99%8D\\">1. 什么是递归下降</a></li>\\n<li><a href=\\"about:blank#%E7%BB%88%E7%BB%93%E7%AC%A6%E4%B8%8E%E9%9D%9E%E7%BB%88%E7%BB%93%E7%AC%A6\\">2. 终结符与非终结符</a></li>\\n<li><a href=\\"about:blank#%E5%9B%9B%E5%88%99%E8%BF%90%E7%AE%97%E7%9A%84%E9%80%92%E5%BD%92%E4%B8%8B%E9%99%8D\\">3. 四则运算的递归下降</a></li>\\n<li><a href=\\"about:blank#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9%E9%80%92%E5%BD%92%E4%B8%8B%E9%99%8D\\">4. 为什么选择递归下降</a></li>\\n<li><a href=\\"about:blank#%E5%B7%A6%E9%80%92%E5%BD%92\\">5. 左递归</a></li>\\n<li><a href=\\"about:blank#%E5%9B%9B%E5%88%99%E8%BF%90%E7%AE%97%E7%9A%84%E5%AE%9E%E7%8E%B0\\">6. 四则运算的实现</a></li>\\n<li><a href=\\"about:blank#%E5%B0%8F%E7%BB%93\\">7. 小结</a></li>\\n</ol>","autoDesc":true}');export{T as comp,S as data};
