import{_ as t,r as p,o as r,c as o,b as s,e as a,d as e,f as l}from"./app-DE0Oq5GN.js";const i={},c=s("h1",{id:"转载声明",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#转载声明"},[s("span",null,"转载声明")])],-1),b={href:"https://lotabout.me/2015/write-a-C-interpreter-1/",target:"_blank",rel:"noopener noreferrer"},d=l('<h1 id="原文内容" tabindex="-1"><a class="header-anchor" href="#原文内容"><span>原文内容</span></a></h1><h1 id="手把手教你构建-c-语言编译器-1-设计" tabindex="-1"><a class="header-anchor" href="#手把手教你构建-c-语言编译器-1-设计"><span>手把手教你构建 C 语言编译器（1）- 设计</span></a></h1><p>Table of Contents</p><ol><li><a href="about:blank#%E7%BC%96%E8%AF%91%E5%99%A8%E7%9A%84%E6%9E%84%E5%BB%BA%E6%B5%81%E7%A8%8B">1. 编译器的构建流程</a></li><li><a href="about:blank#%E7%BC%96%E8%AF%91%E5%99%A8%E6%A1%86%E6%9E%B6">2. 编译器框架</a></li></ol><p>这是“手把手教你构建 C 语言编译器”系列的第二篇，我们要从整体上讲解如何设计我们的 C 语言编译器。</p><p>手把手教你构建 C 语言编译器系列共有10个部分：</p>',6),h={href:"http://lotabout.me/2015/write-a-C-interpreter-0/",target:"_blank",rel:"noopener noreferrer"},u={href:"http://lotabout.me/2015/write-a-C-interpreter-1/",target:"_blank",rel:"noopener noreferrer"},m={href:"http://lotabout.me/2015/write-a-C-interpreter-2/",target:"_blank",rel:"noopener noreferrer"},_={href:"http://lotabout.me/2015/write-a-C-interpreter-3/",target:"_blank",rel:"noopener noreferrer"},f={href:"http://lotabout.me/2016/write-a-C-interpreter-4/",target:"_blank",rel:"noopener noreferrer"},g={href:"http://lotabout.me/2016/write-a-C-interpreter-5/",target:"_blank",rel:"noopener noreferrer"},C={href:"http://lotabout.me/2016/write-a-C-interpreter-6/",target:"_blank",rel:"noopener noreferrer"},E={href:"http://lotabout.me/2016/write-a-C-interpreter-7/",target:"_blank",rel:"noopener noreferrer"},k={href:"http://lotabout.me/2016/write-a-C-interpreter-8/",target:"_blank",rel:"noopener noreferrer"},y={href:"http://lotabout.me/2016/write-a-C-interpreter-9/",target:"_blank",rel:"noopener noreferrer"},w=l('<p>首先要说明的是，虽然标题是编译器，但实际上我们构建的是 C 语言的解释器，这意味着我们可以像运行脚本一样去运行 C 语言的源代码文件。这么做的理由有两点：</p><ol><li>解释器与编译器仅在代码生成阶段有区别，而其它方面如词法分析、语法分析是一样的。</li><li>解释器需要我们实现自己的虚拟机与指令集，而这部分能帮助我们了解计算机的工作原理。</li></ol><h2 id="编译器的构建流程" tabindex="-1"><a class="header-anchor" href="#编译器的构建流程"><span><a href="about:blank#%E7%BC%96%E8%AF%91%E5%99%A8%E7%9A%84%E6%9E%84%E5%BB%BA%E6%B5%81%E7%A8%8B"></a>编译器的构建流程</span></a></h2><p>一般而言，编译器的编写分为 3 个步骤：</p><ol><li>词法分析器，用于将字符串转化成内部的表示结构。</li><li>语法分析器，将词法分析得到的标记流（token）生成一棵语法树。</li><li>目标代码的生成，将语法树转化成目标代码。</li></ol><p>已经有许多工具能帮助我们处理阶段1和2，如 flex 用于词法分析，bison 用于语法分析。只是它们的功能都过于强大，屏蔽了许多实现上的细节，对于学习构建编译器帮助不大。所以我们要完全手写这些功能。</p><p>所以我们会依照以下步骤来构建我们的编译器：</p><ol><li>构建我们自己的虚拟机以及指令集。这后生成的目标代码便是我们的指令集。</li><li>构建我们的词法分析器</li><li>构建语法分析器</li></ol><h2 id="编译器框架" tabindex="-1"><a class="header-anchor" href="#编译器框架"><span><a href="about:blank#%E7%BC%96%E8%AF%91%E5%99%A8%E6%A1%86%E6%9E%B6"></a>编译器框架</span></a></h2><p>我们的编译器主要包括 4 个函数：</p><ol><li><code>next()</code> 用于词法分析，获取下一个标记，它将自动忽略空白字符。</li><li><code>program()</code> 语法分析的入口，分析整个 C 语言程序。</li><li><code>expression(level)</code> 用于解析一个表达式。</li><li><code>eval()</code> 虚拟机的入口，用于解释目标代码。</li></ol><p>这里有一个单独用于解析“表达式”的函数 <code>expression</code> 是因为表达式在语法分析中相对独立并且比较复杂，所以我们将它单独作为一个模块（函数）。下面是相应的源代码：</p><table><tbody><tr><td class="code"><pre><span class="line"><span class="meta">#<span class="keyword">include</span> <span class="string">&lt;stdio.h&gt;</span></span></span><br><span class="line"><span class="meta">#<span class="keyword">include</span> <span class="string">&lt;stdlib.h&gt;</span></span></span><br><span class="line"><span class="meta">#<span class="keyword">include</span> <span class="string">&lt;memory.h&gt;</span></span></span><br><span class="line"><span class="meta">#<span class="keyword">include</span> <span class="string">&lt;string.h&gt;</span></span></span><br><span class="line"></span><br><span class="line"><span class="type">int</span> token;            <span class="comment">// current token</span></span><br><span class="line"><span class="type">char</span> *src, *old_src;  <span class="comment">// pointer to source code string;</span></span><br><span class="line"><span class="type">int</span> poolsize;         <span class="comment">// default size of text/data/stack</span></span><br><span class="line"><span class="type">int</span> line;             <span class="comment">// line number</span></span><br><span class="line"></span><br><span class="line"><span class="type">void</span> <span class="title function_">next</span><span class="params">()</span> {</span><br><span class="line">    token = *src++;</span><br><span class="line">    <span class="keyword">return</span>;</span><br><span class="line">}</span><br><span class="line"></span><br><span class="line"><span class="type">void</span> <span class="title function_">expression</span><span class="params">(<span class="type">int</span> level)</span> {</span><br><span class="line">    <span class="comment">// do nothing</span></span><br><span class="line">}</span><br><span class="line"></span><br><span class="line"><span class="type">void</span> <span class="title function_">program</span><span class="params">()</span> {</span><br><span class="line">    next();                  <span class="comment">// get next token</span></span><br><span class="line">    <span class="keyword">while</span> (token &gt; <span class="number">0</span>) {</span><br><span class="line">        <span class="built_in">printf</span>(<span class="string">&quot;token is: %c\\n&quot;</span>, token);</span><br><span class="line">        next();</span><br><span class="line">    }</span><br><span class="line">}</span><br><span class="line"></span><br><span class="line"></span><br><span class="line"><span class="type">int</span> <span class="title function_">eval</span><span class="params">()</span> { <span class="comment">// do nothing yet</span></span><br><span class="line">    <span class="keyword">return</span> <span class="number">0</span>;</span><br><span class="line">}</span><br><span class="line"></span><br><span class="line"><span class="type">int</span> <span class="title function_">main</span><span class="params">(<span class="type">int</span> argc, <span class="type">char</span> **argv)</span></span><br><span class="line">{</span><br><span class="line">    <span class="type">int</span> i, fd;</span><br><span class="line"></span><br><span class="line">    argc--;</span><br><span class="line">    argv++;</span><br><span class="line"></span><br><span class="line">    poolsize = <span class="number">256</span> * <span class="number">1024</span>; <span class="comment">// arbitrary size</span></span><br><span class="line">    line = <span class="number">1</span>;</span><br><span class="line"></span><br><span class="line">    <span class="keyword">if</span> ((fd = open(*argv, <span class="number">0</span>)) &lt; <span class="number">0</span>) {</span><br><span class="line">        <span class="built_in">printf</span>(<span class="string">&quot;could not open(%s)\\n&quot;</span>, *argv);</span><br><span class="line">        <span class="keyword">return</span> <span class="number">-1</span>;</span><br><span class="line">    }</span><br><span class="line"></span><br><span class="line">    <span class="keyword">if</span> (!(src = old_src = <span class="built_in">malloc</span>(poolsize))) {</span><br><span class="line">        <span class="built_in">printf</span>(<span class="string">&quot;could not malloc(%d) for source area\\n&quot;</span>, poolsize);</span><br><span class="line">        <span class="keyword">return</span> <span class="number">-1</span>;</span><br><span class="line">    }</span><br><span class="line"></span><br><span class="line">    <span class="comment">// read the source file</span></span><br><span class="line">    <span class="keyword">if</span> ((i = read(fd, src, poolsize<span class="number">-1</span>)) &lt;= <span class="number">0</span>) {</span><br><span class="line">        <span class="built_in">printf</span>(<span class="string">&quot;read() returned %d\\n&quot;</span>, i);</span><br><span class="line">        <span class="keyword">return</span> <span class="number">-1</span>;</span><br><span class="line">    }</span><br><span class="line">    src[i] = <span class="number">0</span>; <span class="comment">// add EOF character</span></span><br><span class="line">    close(fd);</span><br><span class="line"></span><br><span class="line">    program();</span><br><span class="line">    <span class="keyword">return</span> eval();</span><br><span class="line">}</span><br></pre></td></tr></tbody></table><p>上面的代码看上去挺复杂，但其实内容不多。它的流程为：读取一个文件（内容为 C 语言代码），逐个读取文件中的字符，并输出。这里需要的是注意每个函数的作用，后面的文章中，我们将逐个填充每个函数的功能，最终构建起我们的编译器。</p>',14),A={href:"https://github.com/lotabout/write-a-C-interpreter/tree/step-0",target:"_blank",rel:"noopener noreferrer"},B=s("table",null,[s("tbody",null,[s("tr",null,[s("td",{class:"code"},[s("pre",null,[s("span",{class:"line"},"git clone -b step-0 https://github.com/lotabout/write-a-C-interpreter"),s("br")])])])])],-1),x=s("p",null,[a("这样我们就有了一个最简单的编译器：什么都不干的编译器，下一章中，我们将实现其中的"),s("code",null,"eval"),a("函数，即我们自己的虚拟机。")],-1);function v(z,q){const n=p("ExternalLinkIcon");return r(),o("div",null,[c,s("p",null,[a("本文转自 "),s("a",b,[a("https://lotabout.me/2015/write-a-C-interpreter-1/"),e(n)]),a("，如有侵权，请联系删除。")]),d,s("ol",null,[s("li",null,[s("a",h,[a("手把手教你构建 C 语言编译器（0）——前言"),e(n)])]),s("li",null,[s("a",u,[a("手把手教你构建 C 语言编译器（1）——设计"),e(n)])]),s("li",null,[s("a",m,[a("手把手教你构建 C 语言编译器（2）——虚拟机"),e(n)])]),s("li",null,[s("a",_,[a("手把手教你构建 C 语言编译器（3）——词法分析器"),e(n)])]),s("li",null,[s("a",f,[a("手把手教你构建 C 语言编译器（4）——递归下降"),e(n)])]),s("li",null,[s("a",g,[a("手把手教你构建 C 语言编译器（5）——变量定义"),e(n)])]),s("li",null,[s("a",C,[a("手把手教你构建 C 语言编译器（6）——函数定义"),e(n)])]),s("li",null,[s("a",E,[a("手把手教你构建 C 语言编译器（7）——语句"),e(n)])]),s("li",null,[s("a",k,[a("手把手教你构建 C 语言编译器（8）——表达式"),e(n)])]),s("li",null,[s("a",y,[a("手把手教你构建 C 语言编译器（9）——总结"),e(n)])])]),w,s("p",null,[a("本节的代码可以在 "),s("a",A,[a("Github"),e(n)]),a(" 上下载，也可以直接 clone")]),B,x])}const N=t(i,[["render",v],["__file","1.html.vue"]]),S=JSON.parse('{"path":"/tech/designASimpileCCompiler/1.html","title":"手把手教你构建 C 语言编译器（1）- 设计","lang":"zh-CN","frontmatter":{"title":"手把手教你构建 C 语言编译器（1）- 设计","description":"转载声明 本文转自 https://lotabout.me/2015/write-a-C-interpreter-1/，如有侵权，请联系删除。 原文内容 手把手教你构建 C 语言编译器（1）- 设计 Table of Contents 1. 编译器的构建流程 2. 编译器框架 这是“手把手教你构建 C 语言编译器”系列的第二篇，我们要从整体上讲解如何设...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://github.com/King-sj/tech/designASimpileCCompiler/1.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"手把手教你构建 C 语言编译器（1）- 设计"}],["meta",{"property":"og:description","content":"转载声明 本文转自 https://lotabout.me/2015/write-a-C-interpreter-1/，如有侵权，请联系删除。 原文内容 手把手教你构建 C 语言编译器（1）- 设计 Table of Contents 1. 编译器的构建流程 2. 编译器框架 这是“手把手教你构建 C 语言编译器”系列的第二篇，我们要从整体上讲解如何设..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"KSJ"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"手把手教你构建 C 语言编译器（1）- 设计\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KSJ\\",\\"url\\":\\"https://github.com/King-sj\\"}]}"]]},"headers":[{"level":2,"title":"编译器的构建流程","slug":"编译器的构建流程","link":"#编译器的构建流程","children":[]},{"level":2,"title":"编译器框架","slug":"编译器框架","link":"#编译器框架","children":[]}],"readingTime":{"minutes":6.74,"words":2023},"filePathRelative":"tech/designASimpileCCompiler/1.md","excerpt":"\\n<p>本文转自 <a href=\\"https://lotabout.me/2015/write-a-C-interpreter-1/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://lotabout.me/2015/write-a-C-interpreter-1/</a>，如有侵权，请联系删除。</p>\\n<h1>原文内容</h1>\\n<h1>手把手教你构建 C 语言编译器（1）- 设计</h1>\\n<p>Table of Contents</p>\\n<ol>\\n<li><a href=\\"about:blank#%E7%BC%96%E8%AF%91%E5%99%A8%E7%9A%84%E6%9E%84%E5%BB%BA%E6%B5%81%E7%A8%8B\\">1. 编译器的构建流程</a></li>\\n<li><a href=\\"about:blank#%E7%BC%96%E8%AF%91%E5%99%A8%E6%A1%86%E6%9E%B6\\">2. 编译器框架</a></li>\\n</ol>","autoDesc":true}');export{N as comp,S as data};
