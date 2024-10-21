import{_ as r,r as c,o,c as i,b as s,d as e,w as l,e as a,f as t}from"./app-ChJpPrUG.js";const d={},b=s("hr",null,null,-1),u=s("p",null,'title: "手把手教你构建 C 语言编译器（2）——虚拟机" category:',-1),h=s("ul",null,[s("li",null,"编译原理 tag:"),s("li",null,"c"),s("li",null,"编译器"),s("li",null,"解释器")],-1),m=s("hr",null,null,-1),f={class:"table-of-contents"},y=s("h1",{id:"转载声明",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#转载声明"},[s("span",null,"转载声明")])],-1),k={href:"https://lotabout.me/2015/write-a-C-interpreter-2/",target:"_blank",rel:"noopener noreferrer"},x=t('<h1 id="原文内容" tabindex="-1"><a class="header-anchor" href="#原文内容"><span>原文内容</span></a></h1><h1 id="手把手教你构建-c-语言编译器-2-虚拟机" tabindex="-1"><a class="header-anchor" href="#手把手教你构建-c-语言编译器-2-虚拟机"><span>手把手教你构建 C 语言编译器（2）- 虚拟机</span></a></h1><p>Table of Contents</p><ol><li><a href="about:blank#%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%9A%84%E5%86%85%E9%83%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86">1. 计算机的内部工作原理</a><ol><li><a href="about:blank#%E5%86%85%E5%AD%98">1.1. 内存</a></li><li><a href="about:blank#%E5%AF%84%E5%AD%98%E5%99%A8">1.2. 寄存器</a></li></ol></li><li><a href="about:blank#%E6%8C%87%E4%BB%A4%E9%9B%86">2. 指令集</a><ol><li><a href="about:blank#mov">2.1. MOV</a></li><li><a href="about:blank#push">2.2. PUSH</a></li><li><a href="about:blank#jmp">2.3. JMP</a></li><li><a href="about:blank#jz-jnz">2.4. JZ/JNZ</a></li><li><a href="about:blank#%E5%AD%90%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8">2.5. 子函数调用</a></li><li><a href="about:blank#ent">2.6. ENT</a></li><li><a href="about:blank#adj">2.7. ADJ</a></li><li><a href="about:blank#lev">2.8. LEV</a></li><li><a href="about:blank#lea">2.9. LEA</a></li><li><a href="about:blank#%E8%BF%90%E7%AE%97%E7%AC%A6%E6%8C%87%E4%BB%A4">2.10. 运算符指令</a></li><li><a href="about:blank#%E5%86%85%E7%BD%AE%E5%87%BD%E6%95%B0">2.11. 内置函数</a></li></ol></li><li><a href="about:blank#%E6%B5%8B%E8%AF%95">3. 测试</a></li><li><a href="about:blank#%E5%B0%8F%E7%BB%93">4. 小结</a></li></ol><p>这是“手把手教你构建 C 语言编译器”系列的第三篇，本章我们要构建一台虚拟的电脑，设计我们自己的指令集，运行我们的指令集，说得通俗一点就是自己实现一套汇编语言。它们将作为我们的编译器最终输出的目标代码。</p><p>手把手教你构建 C 语言编译器系列共有10个部分：</p>',6),_={href:"http://lotabout.me/2015/write-a-C-interpreter-0/",target:"_blank",rel:"noopener noreferrer"},E={href:"http://lotabout.me/2015/write-a-C-interpreter-1/",target:"_blank",rel:"noopener noreferrer"},g={href:"http://lotabout.me/2015/write-a-C-interpreter-2/",target:"_blank",rel:"noopener noreferrer"},w={href:"http://lotabout.me/2015/write-a-C-interpreter-3/",target:"_blank",rel:"noopener noreferrer"},C={href:"http://lotabout.me/2016/write-a-C-interpreter-4/",target:"_blank",rel:"noopener noreferrer"},A={href:"http://lotabout.me/2016/write-a-C-interpreter-5/",target:"_blank",rel:"noopener noreferrer"},v={href:"http://lotabout.me/2016/write-a-C-interpreter-6/",target:"_blank",rel:"noopener noreferrer"},L={href:"http://lotabout.me/2016/write-a-C-interpreter-7/",target:"_blank",rel:"noopener noreferrer"},B={href:"http://lotabout.me/2016/write-a-C-interpreter-8/",target:"_blank",rel:"noopener noreferrer"},M={href:"http://lotabout.me/2016/write-a-C-interpreter-9/",target:"_blank",rel:"noopener noreferrer"},P=t('<h2 id="计算机的内部工作原理" tabindex="-1"><a class="header-anchor" href="#计算机的内部工作原理"><span><a href="about:blank#%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%9A%84%E5%86%85%E9%83%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86"></a>计算机的内部工作原理</span></a></h2><p>计算机中有三个基本部件需要我们关注：CPU、寄存器及内存。代码（汇编指令）以二进制的形式保存在内存中；CPU 从中一条条地加载指令执行；程序运行的状态保存在寄存器中。</p><h3 id="内存" tabindex="-1"><a class="header-anchor" href="#内存"><span><a href="about:blank#%E5%86%85%E5%AD%98"></a>内存</span></a></h3><p>内存用于存储数据，这里的数据可以是代码，也可以是其它的数据。现代操作系统在操作内存时，并不是直接处理”物理内存“，而是操作”虚拟内存“。虚拟内存可以理解为一种映射，它的作用是屏蔽了物理的细节。例如 32 位的机器中，我们可以使用的内存地址为 <code>2^32 = 4G</code>，而电脑上的实际内存可能只有 <code>256 M</code>。操作系统将我们使用的虚拟地址映射到了到实际的内存上。</p><p>当然，我们这里并不需要了解太多，但需要了解的是：进程的内存会被分成几个段：</p><ol><li>代码段（text）用于存放代码（指令）。</li><li>数据段（data）用于存放初始化了的数据，如<code>int i = 10;</code>，就需要存放到数据段中。</li><li>未初始化数据段（bss）用于存放未初始化的数据，如 <code>int i[1000];</code>，因为不关心其中的真正数值，所以单独存放可以节省空间，减少程序的体积。</li><li>栈（stack）用于处理函数调用相关的数据，如调用帧（calling frame）或是函数的局部变量等。</li><li>堆（heap）用于为程序动态分配内存。</li></ol><p>它们在内存中的位置类似于下图：</p><table><tbody><tr><td class="code"><pre><span class="line">+------------------+</span><br><span class="line">|    stack   |     |      high address</span><br><span class="line">|    ...     v     |</span><br><span class="line">|                  |</span><br><span class="line">|                  |</span><br><span class="line">|                  |</span><br><span class="line">|                  |</span><br><span class="line">|    ...     ^     |</span><br><span class="line">|    heap    |     |</span><br><span class="line">+------------------+</span><br><span class="line">| bss  segment     |</span><br><span class="line">+------------------+</span><br><span class="line">| data segment     |</span><br><span class="line">+------------------+</span><br><span class="line">| text segment     |      low address</span><br><span class="line">+------------------+</span><br></pre></td></tr></tbody></table><p>我们的虚拟机并不打算模拟完整的计算机，因此简单起见，我们只关心三个内容：代码段、数据段以及栈。其中的数据段我们只用来存放字符串，因为我们的编译器并不支持初始化变量，因此我们也不需要未初始化数据段。</p><p>当用户的程序需要分配内存时，理论上我们的虚拟机需要维护一个堆用于内存分配，但实际实现上较为复杂且与编译无关，故我们引入一个指令<code>MSET</code>，使我们能直接使用编译器（解释器）中的内存。</p><p>综上，我们需要首先在全局添加如下代码：</p><table><tbody><tr><td class="code"><pre><span class="line"><span class="type">int</span> *text,            <span class="comment">// text segment</span></span><br><span class="line">    *old_text,        <span class="comment">// for dump text segment</span></span><br><span class="line">    *<span class="built_in">stack</span>;           <span class="comment">// stack</span></span><br><span class="line"><span class="type">char</span> *data;           <span class="comment">// data segment</span></span><br></pre></td></tr></tbody></table><p>注意这里的类型，虽然是<code>int</code>型，但理解起来应该作为无符号的整型，因为我们会在代码段（text）中存放如指针/内存地址的数据，它们就是无符号的。其中数据段（data）由于只存放字符串，所以是 <code>char *</code> 型的。</p><p>接着，在<code>main</code>函数中加入初始化代码，真正为其分配内存：</p><table><tbody><tr><td class="code"><pre><span class="line"><span class="type">int</span> <span class="title function_">main</span><span class="params">()</span> {</span><br><span class="line">    close(fd);</span><br><span class="line">    ...</span><br><span class="line"></span><br><span class="line">    <span class="comment">// allocate memory for virtual machine</span></span><br><span class="line">    <span class="keyword">if</span> (!(text = old_text = <span class="built_in">malloc</span>(poolsize))) {</span><br><span class="line">        <span class="built_in">printf</span>(<span class="string">&quot;could not malloc(%d) for text area\\n&quot;</span>, poolsize);</span><br><span class="line">        <span class="keyword">return</span> <span class="number">-1</span>;</span><br><span class="line">    }</span><br><span class="line">    <span class="keyword">if</span> (!(data = <span class="built_in">malloc</span>(poolsize))) {</span><br><span class="line">        <span class="built_in">printf</span>(<span class="string">&quot;could not malloc(%d) for data area\\n&quot;</span>, poolsize);</span><br><span class="line">        <span class="keyword">return</span> <span class="number">-1</span>;</span><br><span class="line">    }</span><br><span class="line">    <span class="keyword">if</span> (!(<span class="built_in">stack</span> = <span class="built_in">malloc</span>(poolsize))) {</span><br><span class="line">        <span class="built_in">printf</span>(<span class="string">&quot;could not malloc(%d) for stack area\\n&quot;</span>, poolsize);</span><br><span class="line">        <span class="keyword">return</span> <span class="number">-1</span>;</span><br><span class="line">    }</span><br><span class="line"></span><br><span class="line">    <span class="built_in">memset</span>(text, <span class="number">0</span>, poolsize);</span><br><span class="line">    <span class="built_in">memset</span>(data, <span class="number">0</span>, poolsize);</span><br><span class="line">    <span class="built_in">memset</span>(<span class="built_in">stack</span>, <span class="number">0</span>, poolsize);</span><br><span class="line"></span><br><span class="line">    ...</span><br><span class="line">    program();</span><br><span class="line">}</span><br></pre></td></tr></tbody></table><h3 id="寄存器" tabindex="-1"><a class="header-anchor" href="#寄存器"><span><a href="about:blank#%E5%AF%84%E5%AD%98%E5%99%A8"></a>寄存器</span></a></h3><p>计算机中的寄存器用于存放计算机的运行状态，真正的计算机中有许多不同种类的寄存器，但我们的虚拟机中只使用 4 个寄存器，分别如下：</p><ol><li><code>PC</code> 程序计数器，它存放的是一个内存地址，该地址中存放着 <strong>下一条</strong> 要执行的计算机指令。</li><li><code>SP</code> 指针寄存器，永远指向当前的栈顶。注意的是由于栈是位于高地址并向低地址增长的，所以入栈时 <code>SP</code> 的值减小。</li><li><code>BP</code> 基址指针。也是用于指向栈的某些位置，在调用函数时会使用到它。</li><li><code>AX</code> 通用寄存器，我们的虚拟机中，它用于存放一条指令执行后的结果。</li></ol><p>要理解这些寄存器的作用，需要去理解程序运行中会有哪些状态。而这些寄存器只是用于保存这些状态的。</p><p>在全局中加入如下定义：</p><table><tbody><tr><td class="code"><pre><span class="line"><span class="type">int</span> *pc, *bp, *sp, ax, cycle; <span class="comment">// virtual machine registers</span></span><br></pre></td></tr></tbody></table><p>在 <code>main</code> 函数中加入初始化代码，注意的是<code>PC</code>在初始应指向目标代码中的<code>main</code>函数，但我们还没有写任何编译相关的代码，因此先不处理。代码如下：</p><table><tbody><tr><td class="code"><pre><span class="line"><span class="built_in">memset</span>(<span class="built_in">stack</span>, <span class="number">0</span>, poolsize);</span><br><span class="line">...</span><br><span class="line"></span><br><span class="line">bp = sp = (<span class="type">int</span> *)((<span class="type">int</span>)<span class="built_in">stack</span> + poolsize);</span><br><span class="line">ax = <span class="number">0</span>;</span><br><span class="line"></span><br><span class="line">...</span><br><span class="line">program();</span><br></pre></td></tr></tbody></table><p>与 CPU 相关的是指令集，我们将专门作为一个小节。</p><h2 id="指令集" tabindex="-1"><a class="header-anchor" href="#指令集"><span><a href="about:blank#%E6%8C%87%E4%BB%A4%E9%9B%86"></a>指令集</span></a></h2><p>指令集是 CPU 能识别的命令的集合，也可以说是 CPU 能理解的语言。这里我们要为我们的虚拟机构建自己的指令集。它们基于 x86 的指令集，但更为简单。</p><p>首先在全局变量中加入一个枚举类型，这是我们要支持的全部指令：</p><table><tbody><tr><td class="code"><pre><span class="line"><span class="comment">// instructions</span></span><br><span class="line"><span class="class"><span class="keyword">enum</span> {</span> LEA ,IMM ,JMP ,CALL,JZ  ,JNZ ,ENT ,ADJ ,LEV ,LI  ,LC  ,SI  ,SC  ,PUSH,</span><br><span class="line">       OR  ,XOR ,AND ,EQ  ,NE  ,LT  ,GT  ,LE  ,GE  ,SHL ,SHR ,ADD ,SUB ,MUL ,DIV ,MOD ,</span><br><span class="line">       OPEN,READ,CLOS,PRTF,MALC,MSET,MCMP,EXIT };</span><br></pre></td></tr></tbody></table><p>这些指令的顺序安排是有意的，稍后你会看到，带有参数的指令在前，没有参数的指令在后。这种顺序的唯一作用就是在打印调试信息时更加方便。但我们讲解的顺序并不依据它。</p><h3 id="mov" tabindex="-1"><a class="header-anchor" href="#mov"><span><a href="about:blank#mov"></a>MOV</span></a></h3><p><code>MOV</code> 是所有指令中最基础的一个，它用于将数据放进寄存器或内存地址，有点类似于 C 语言中的赋值语句。x86 的 <code>MOV</code> 指令有两个参数，分别是源地址和目标地址：<code>MOV dest, source</code> （Intel 风格），表示将 <code>source</code> 的内容放在 <code>dest</code> 中，它们可以是一个数、寄存器或是一个内存地址。</p><p>一方面，我们的虚拟机只有一个寄存器，另一方面，识别这些参数的类型（是数据还是地址）是比较困难的，因此我们将 <code>MOV</code> 指令拆分成 5 个指令，这些指令只接受一个参数，如下：</p><ol><li><code>IMM &lt;num&gt;</code> 将 <code>&lt;num&gt;</code> 放入寄存器 <code>ax</code> 中。</li><li><code>LC</code> 将对应地址中的字符载入 <code>ax</code> 中，要求 <code>ax</code> 中存放地址。</li><li><code>LI</code> 将对应地址中的整数载入 <code>ax</code> 中，要求 <code>ax</code> 中存放地址。</li><li><code>SC</code> 将 <code>ax</code> 中的数据作为字符存放入地址中，要求栈顶存放地址。</li><li><code>SI</code> 将 <code>ax</code> 中的数据作为整数存放入地址中，要求栈顶存放地址。</li></ol><p>你可能会觉得将一个指令变成了许多指令，整个系统就变得复杂了，但实际情况并非如此。首先是 x86 的 <code>MOV</code> 指令其实有许多变种，根据类型的不同有 <code>MOVB</code>, <code>MOVW</code> 等指令，我们这里的 <code>LC/SC</code> 和 <code>LI/SI</code> 就是对应字符型和整型的存取操作。</p><p>但最为重要的是，通过将 <code>MOV</code> 指令拆分成这些指令，只有 <code>IMM</code> 需要有参数，且不需要判断类型，所以大大简化了实现的难度。</p><p>在 <code>eval()</code> 函数中加入下列代码：</p><table><tbody><tr><td class="code"><pre><span class="line"><span class="type">void</span> <span class="title function_">eval</span><span class="params">()</span> {</span><br><span class="line">    <span class="type">int</span> op, *tmp;</span><br><span class="line">    <span class="keyword">while</span> (<span class="number">1</span>) {</span><br><span class="line">        <span class="keyword">if</span> (op == IMM)       {ax = *pc++;}                                     <span class="comment">// load immediate value to ax</span></span><br><span class="line">        <span class="keyword">else</span> <span class="keyword">if</span> (op == LC)   {ax = *(<span class="type">char</span> *)ax;}                               <span class="comment">// load character to ax, address in ax</span></span><br><span class="line">        <span class="keyword">else</span> <span class="keyword">if</span> (op == LI)   {ax = *(<span class="type">int</span> *)ax;}                                <span class="comment">// load integer to ax, address in ax</span></span><br><span class="line">        <span class="keyword">else</span> <span class="keyword">if</span> (op == SC)   {ax = *(<span class="type">char</span> *)*sp++ = ax;}                       <span class="comment">// save character to address, value in ax, address on stack</span></span><br><span class="line">        <span class="keyword">else</span> <span class="keyword">if</span> (op == SI)   {*(<span class="type">int</span> *)*sp++ = ax;}                             <span class="comment">// save integer to address, value in ax, address on stack</span></span><br><span class="line">    }</span><br><span class="line"></span><br><span class="line">    ...</span><br><span class="line">    <span class="keyword">return</span> <span class="number">0</span>;</span><br><span class="line">}</span><br></pre></td></tr></tbody></table><p>其中的 <code>*sp++</code> 的作用是退栈，相当于 <code>POP</code> 操作。</p><p>这里要解释的一点是，为什么 <code>SI/SC</code> 指令中，地址存放在栈中，而 <code>LI/LC</code> 中，地址存放在 <code>ax</code> 中？原因是默认计算的结果是存放在 <code>ax</code> 中的，而地址通常是需要通过计算获得，所以执行 <code>LI/LC</code> 时直接从 <code>ax</code> 取值会更高效。另一点是我们的 <code>PUSH</code> 指令只能将 <code>ax</code> 的值放到栈上，而不能以值作为参数，详细见下文。</p><h3 id="push" tabindex="-1"><a class="header-anchor" href="#push"><span><a href="about:blank#push"></a>PUSH</span></a></h3><p>在 x86 中，<code>PUSH</code> 的作用是将值或寄存器，而在我们的虚拟机中，它的作用是将 <code>ax</code> 的值放入栈中。这样做的主要原因是为了简化虚拟机的实现，并且我们也只有一个寄存器 <code>ax</code> 。代码如下：</p><table><tbody><tr><td class="code"><pre><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == PUSH) {*--sp = ax;}                                     <span class="comment">// push the value of ax onto the stack</span></span><br></pre></td></tr></tbody></table><h3 id="jmp" tabindex="-1"><a class="header-anchor" href="#jmp"><span><a href="about:blank#jmp"></a>JMP</span></a></h3><p><code>JMP &lt;addr&gt;</code> 是跳转指令，无条件地将当前的 <code>PC</code> 寄存器设置为指定的 <code>&lt;addr&gt;</code>，实现如下：</p><table><tbody><tr><td class="code"><pre><span class="line">else if (op == JMP)  {pc = (int *)*pc;}                                // jump to the address</span><br></pre></td></tr></tbody></table><p>需要注意的是，<code>pc</code> 寄存器指向的是 <strong>下一条</strong> 指令。所以此时它存放的是 <code>JMP</code> 指令的参数，即 <code>&lt;addr&gt;</code> 的值。</p><h3 id="jz-jnz" tabindex="-1"><a class="header-anchor" href="#jz-jnz"><span><a href="about:blank#jz-jnz"></a>JZ/JNZ</span></a></h3><p>为了实现 <code>if</code> 语句，我们需要条件判断相关的指令。这里我们只实现两个最简单的条件判断，即结果（<code>ax</code>）为零或不为零情况下的跳转。</p><p>实现如下：</p><table><tbody><tr><td class="code"><pre><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == JZ)   {pc = ax ? pc + <span class="number">1</span> : (<span class="type">int</span> *)*pc;}                   <span class="comment">// jump if ax is zero</span></span><br><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == JNZ)  {pc = ax ? (<span class="type">int</span> *)*pc : pc + <span class="number">1</span>;}                   <span class="comment">// jump if ax is not zero</span></span><br></pre></td></tr></tbody></table><h3 id="子函数调用" tabindex="-1"><a class="header-anchor" href="#子函数调用"><span><a href="about:blank#%E5%AD%90%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8"></a>子函数调用</span></a></h3><p>这是汇编中最难理解的部分，所以合在一起说，要引入的命令有 <code>CALL</code>, <code>ENT</code>, <code>ADJ</code> 及 <code>LEV</code>。</p><p>首先我们介绍 <code>CALL &lt;addr&gt;</code> 与 <code>RET</code> 指令，<code>CALL</code> 的作用是跳转到地址为 <code>&lt;addr&gt;</code> 的子函数，<code>RET</code> 则用于从子函数中返回。</p><p>为什么不能直接使用 <code>JMP</code> 指令呢？原因是当我们从子函数中返回时，程序需要回到跳转之前的地方继续运行，这就需要事先将这个位置信息存储起来。反过来，子函数要返回时，就需要获取并恢复这个信息。因此实际中我们将 <code>PC</code> 保存在栈中。如下：</p><table><tbody><tr><td class="code"><pre><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == CALL) {*--sp = (<span class="type">int</span>)(pc+<span class="number">1</span>); pc = (<span class="type">int</span> *)*pc;}           <span class="comment">// call subroutine</span></span><br><span class="line"><span class="comment">//else if (op == RET)  {pc = (int *)*sp++;}                              // return from subroutine;</span></span><br></pre></td></tr></tbody></table><p>这里我们把 <code>RET</code> 相关的内容注释了，是因为之后我们将用 <code>LEV</code> 指令来代替它。</p><p>在实际调用函数时，不仅要考虑函数的地址，还要考虑如何传递参数和如何返回结果。这里我们约定，如果子函数有返回结果，那么就在返回时保存在 <code>ax</code> 中，它可以是一个值，也可以是一个地址。那么参数的传递呢？</p><p>各种编程语言关于如何调用子函数有不同的约定，例如 C 语言的调用标准是：</p><ol><li>由调用者将参数入栈。</li><li>调用结束时，由调用者将参数出栈。</li><li>参数逆序入栈。</li></ol>',59),D={href:"https://en.wikipedia.org/wiki/X86_calling_conventions",target:"_blank",rel:"noopener noreferrer"},S=t('<table><tbody><tr><td class="code"><pre><span class="line"><span class="type">int</span> <span class="title function_">callee</span><span class="params">(<span class="type">int</span>, <span class="type">int</span>, <span class="type">int</span>)</span>;</span><br><span class="line"></span><br><span class="line"><span class="type">int</span> <span class="title function_">caller</span><span class="params">(<span class="type">void</span>)</span></span><br><span class="line">{</span><br><span class="line">	<span class="type">int</span> i, ret;</span><br><span class="line"></span><br><span class="line">	ret = callee(<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>);</span><br><span class="line">	ret += <span class="number">5</span>;</span><br><span class="line">	<span class="keyword">return</span> ret;</span><br><span class="line">}</span><br></pre></td></tr></tbody></table><p>会生成如下的 x86 汇编代码：</p><table><tbody><tr><td class="code"><pre><span class="line">caller:</span><br><span class="line">	; make new call frame</span><br><span class="line">	push    ebp</span><br><span class="line">	mov     ebp, esp</span><br><span class="line">        sub     1, esp       ; save stack for variable: i</span><br><span class="line">	; push call arguments</span><br><span class="line">	push    3</span><br><span class="line">	push    2</span><br><span class="line">	push    1</span><br><span class="line">	; call subroutine &#39;callee&#39;</span><br><span class="line">	call    callee</span><br><span class="line">	; remove arguments from frame</span><br><span class="line">	add     esp, 12</span><br><span class="line">	; use subroutine result</span><br><span class="line">	add     eax, 5</span><br><span class="line">	; restore old call frame</span><br><span class="line">        mov     esp, ebp</span><br><span class="line">	pop     ebp</span><br><span class="line">	; return</span><br><span class="line">	ret</span><br></pre></td></tr></tbody></table><p>上面这段代码在我们自己的虚拟机里会有几个问题：</p><ol><li><code>push ebp</code>，但我们的 <code>PUSH</code> 指令并无法指定寄存器。</li><li><code>mov ebp, esp</code>，我们的 <code>MOV</code> 指令同样功能不足。</li><li><code>add esp, 12</code>，也是一样的问题（尽管我们还没定义）。</li></ol><p>也就是说由于我们的指令过于简单（如只能操作<code>ax</code>寄存器），所以用上面提到的指令，我们连函数调用都无法实现。而我们又不希望扩充现有指令的功能，因为这样实现起来就会变得复杂，因此我们采用的方法是增加指令集。毕竟我们不是真正的计算机，增加指令会消耗许多资源（钱）。</p><h3 id="ent" tabindex="-1"><a class="header-anchor" href="#ent"><span><a href="about:blank#ent"></a>ENT</span></a></h3><p><code>ENT &lt;size&gt;</code> 指的是 <code>enter</code>，用于实现 ‘make new call frame’ 的功能，即保存当前的栈指针，同时在栈上保留一定的空间，用以存放局部变量。对应的汇编代码为：</p><table><tbody><tr><td class="code"><pre><span class="line">; make new call frame</span><br><span class="line">push    ebp</span><br><span class="line">mov     ebp, esp</span><br><span class="line">       sub     1, esp       ; save stack for variable: i</span><br></pre></td></tr></tbody></table><p>实现如下：</p><table><tbody><tr><td class="code"><pre><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == ENT)  {*--sp = (<span class="type">int</span>)bp; bp = sp; sp = sp - *pc++;}      <span class="comment">// make new stack frame</span></span><br></pre></td></tr></tbody></table><h3 id="adj" tabindex="-1"><a class="header-anchor" href="#adj"><span><a href="about:blank#adj"></a>ADJ</span></a></h3><p><code>ADJ &lt;size&gt;</code> 用于实现 ‘remove arguments from frame’。在将调用子函数时压入栈中的数据清除，本质上是因为我们的 <code>ADD</code> 指令功能有限。对应的汇编代码为：</p><table><tbody><tr><td class="code"><pre><span class="line">; remove arguments from frame</span><br><span class="line">add     esp, 12</span><br></pre></td></tr></tbody></table><p>实现如下：</p><table><tbody><tr><td class="code"><pre><span class="line">else if (op == ADJ)  {sp = sp + *pc++;}                                // add esp, &lt;size&gt;</span><br></pre></td></tr></tbody></table><h3 id="lev" tabindex="-1"><a class="header-anchor" href="#lev"><span><a href="about:blank#lev"></a>LEV</span></a></h3><p>本质上这个指令并不是必需的，只是我们的指令集中并没有 <code>POP</code> 指令。并且三条指令写来比较麻烦且浪费空间，所以用一个指令代替。对应的汇编指令为：</p><table><tbody><tr><td class="code"><pre><span class="line">; restore old call frame</span><br><span class="line">       mov     esp, ebp</span><br><span class="line">pop     ebp</span><br><span class="line">; return</span><br><span class="line">ret</span><br></pre></td></tr></tbody></table><p>具体的实现如下：</p><table><tbody><tr><td class="code"><pre><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == LEV)  {sp = bp; bp = (<span class="type">int</span> *)*sp++; pc = (<span class="type">int</span> *)*sp++;}  <span class="comment">// restore call frame and PC</span></span><br></pre></td></tr></tbody></table><p>注意的是，<code>LEV</code> 已经把 <code>RET</code> 的功能包含了，所以我们不再需要 <code>RET</code> 指令。</p><h3 id="lea" tabindex="-1"><a class="header-anchor" href="#lea"><span><a href="about:blank#lea"></a>LEA</span></a></h3><p>上面的一些指令解决了调用帧的问题，但还有一个问题是如何在子函数中获得传入的参数。这里我们首先要了解的是当参数调用时，栈中的调用帧是什么样的。我们依旧用上面的例子（只是现在用“顺序”调用参数）：</p><table><tbody><tr><td class="code"><pre><span class="line">sub_function(arg1, arg2, arg3);</span><br><span class="line"></span><br><span class="line">|    ....       | high address</span><br><span class="line">+---------------+</span><br><span class="line">| arg: 1        |    new_bp + 4</span><br><span class="line">+---------------+</span><br><span class="line">| arg: 2        |    new_bp + 3</span><br><span class="line">+---------------+</span><br><span class="line">| arg: 3        |    new_bp + 2</span><br><span class="line">+---------------+</span><br><span class="line">|return address |    new_bp + 1</span><br><span class="line">+---------------+</span><br><span class="line">| old BP        | &lt;- new BP</span><br><span class="line">+---------------+</span><br><span class="line">| local var 1   |    new_bp - 1</span><br><span class="line">+---------------+</span><br><span class="line">| local var 2   |    new_bp - 2</span><br><span class="line">+---------------+</span><br><span class="line">|    ....       |  low address</span><br></pre></td></tr></tbody></table><p>所以为了获取第一个参数，我们需要得到 <code>new_bp + 4</code>，但就如上面的说，我们的 <code>ADD</code> 指令无法操作除 <code>ax</code> 外的寄存器，所以我们提供了一个新的指令：<code>LEA &lt;offset&gt;</code></p><p>实现如下：</p><table><tbody><tr><td class="code"><pre><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == LEA)  {ax = (<span class="type">int</span>)(bp + *pc++);}                         <span class="comment">// load address for arguments.</span></span><br></pre></td></tr></tbody></table><p>以上就是我们为了实现函数调用需要的指令了。</p><h3 id="运算符指令" tabindex="-1"><a class="header-anchor" href="#运算符指令"><span><a href="about:blank#%E8%BF%90%E7%AE%97%E7%AC%A6%E6%8C%87%E4%BB%A4"></a>运算符指令</span></a></h3><p>我们为 C 语言中支持的运算符都提供对应汇编指令。每个运算符都是二元的，即有两个参数，第一个参数放在栈顶，第二个参数放在 <code>ax</code> 中。这个顺序要特别注意。因为像 <code>-</code>，<code>/</code> 之类的运算符是与参数顺序有关的。计算后会将栈顶的参数退栈，结果存放在寄存器 <code>ax</code> 中。因此计算结束后，两个参数都无法取得了（汇编的意义上，存在内存地址上就另当别论）。</p><p>实现如下：</p><table><tbody><tr><td class="code"><pre><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == OR)  ax = *sp++ | ax;</span><br><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == XOR) ax = *sp++ ^ ax;</span><br><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == AND) ax = *sp++ &amp; ax;</span><br><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == EQ)  ax = *sp++ == ax;</span><br><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == NE)  ax = *sp++ != ax;</span><br><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == LT)  ax = *sp++ &lt; ax;</span><br><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == LE)  ax = *sp++ &lt;= ax;</span><br><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == GT)  ax = *sp++ &gt;  ax;</span><br><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == GE)  ax = *sp++ &gt;= ax;</span><br><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == SHL) ax = *sp++ &lt;&lt; ax;</span><br><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == SHR) ax = *sp++ &gt;&gt; ax;</span><br><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == ADD) ax = *sp++ + ax;</span><br><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == SUB) ax = *sp++ - ax;</span><br><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == MUL) ax = *sp++ * ax;</span><br><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == DIV) ax = *sp++ / ax;</span><br><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == MOD) ax = *sp++ % ax;</span><br></pre></td></tr></tbody></table><h3 id="内置函数" tabindex="-1"><a class="header-anchor" href="#内置函数"><span><a href="about:blank#%E5%86%85%E7%BD%AE%E5%87%BD%E6%95%B0"></a>内置函数</span></a></h3><p>写的程序要”有用“，除了核心的逻辑外还需要输入输出，例如 C 语言中我们经常使用的 <code>printf</code> 函数就是用于输出。但是 <code>printf</code> 函数的实现本身就十分复杂，如果我们的编译器要达到自举，就势必要实现 <code>printf</code> 之类的函数，但它又与编译器没有太大的联系，因此我们继续实现新的指令，从虚拟机的角度予以支持。</p><p>编译器中我们需要用到的函数有：<code>exit</code>, <code>open</code>, <code>close</code>, <code>read</code>, <code>printf</code>, <code>malloc</code>, <code>memset</code> 及 <code>memcmp</code>。代码如下：</p><table><tbody><tr><td class="code"><pre><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == EXIT) { <span class="built_in">printf</span>(<span class="string">&quot;exit(%d)&quot;</span>, *sp); <span class="keyword">return</span> *sp;}</span><br><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == OPEN) { ax = open((<span class="type">char</span> *)sp[<span class="number">1</span>], sp[<span class="number">0</span>]); }</span><br><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == CLOS) { ax = close(*sp);}</span><br><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == READ) { ax = read(sp[<span class="number">2</span>], (<span class="type">char</span> *)sp[<span class="number">1</span>], *sp); }</span><br><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == PRTF) { tmp = sp + pc[<span class="number">1</span>]; ax = <span class="built_in">printf</span>((<span class="type">char</span> *)tmp[<span class="number">-1</span>], tmp[<span class="number">-2</span>], tmp[<span class="number">-3</span>], tmp[<span class="number">-4</span>], tmp[<span class="number">-5</span>], tmp[<span class="number">-6</span>]); }</span><br><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == MALC) { ax = (<span class="type">int</span>)<span class="built_in">malloc</span>(*sp);}</span><br><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == MSET) { ax = (<span class="type">int</span>)<span class="built_in">memset</span>((<span class="type">char</span> *)sp[<span class="number">2</span>], sp[<span class="number">1</span>], *sp);}</span><br><span class="line"><span class="keyword">else</span> <span class="keyword">if</span> (op == MCMP) { ax = <span class="built_in">memcmp</span>((<span class="type">char</span> *)sp[<span class="number">2</span>], (<span class="type">char</span> *)sp[<span class="number">1</span>], *sp);}</span><br></pre></td></tr></tbody></table><p>这里的原理是，我们的电脑上已经有了这些函数的实现，因此编译编译器时，这些函数的二进制代码就被编译进了我们的编译器，因此在我们的编译器/虚拟机上运行我们提供的这些指令时，这些函数就是可用的。换句话说就是不需要我们自己去实现了。</p><p>最后再加上一个错误判断：</p><table><tbody><tr><td class="code"><pre><span class="line"><span class="keyword">else</span> {</span><br><span class="line">    <span class="built_in">printf</span>(<span class="string">&quot;unknown instruction:%d\\n&quot;</span>, op);</span><br><span class="line">    <span class="keyword">return</span> <span class="number">-1</span>;</span><br><span class="line">}</span><br></pre></td></tr></tbody></table><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span><a href="about:blank#%E6%B5%8B%E8%AF%95"></a>测试</span></a></h2><p>下面我们用我们的汇编写一小段程序，来计算 <code>10+20</code>，在 <code>main</code> 函数中加入下列代码：</p><table><tbody><tr><td class="code"><pre><span class="line">int main(int argc, char *argv[])</span><br><span class="line">{</span><br><span class="line">    ax = 0;</span><br><span class="line">    ...</span><br><span class="line"></span><br><span class="line">    i = 0;</span><br><span class="line">    text[i++] = IMM;</span><br><span class="line">    text[i++] = 10;</span><br><span class="line">    text[i++] = PUSH;</span><br><span class="line">    text[i++] = IMM;</span><br><span class="line">    text[i++] = 20;</span><br><span class="line">    text[i++] = ADD;</span><br><span class="line">    text[i++] = PUSH;</span><br><span class="line">    text[i++] = EXIT;</span><br><span class="line">    pc = text;</span><br><span class="line"></span><br><span class="line">    ...</span><br><span class="line">    program();</span><br><span class="line">}</span><br></pre></td></tr></tbody></table><p>编译程序 <code>gcc xc-tutor.c</code>，运行程序：<code>./a.out hello.c</code>。输出</p><table><tbody><tr><td class="code"><pre><span class="line">exit(30)</span><br></pre></td></tr></tbody></table><p>另外，我们的代码里有一些指针的强制转换，默认是 32 位的，因此在 64 位机器下，会出现 <code>segmentation fault</code>，解决方法（二选一）：</p><ol><li>编译时加上 <code>-m32</code> 参数：<code>gcc -m32 xc-tutor.c</code></li><li>在代码的开头，增加 <code>#define int long long</code>，<code>long long</code> 是 64 位的，不会出现强制转换后的问题。</li></ol><p>注意我们的之前的程序需要指令一个源文件，只是现在还用不着，但从结果可以看出，我们的虚拟机还是工作良好的。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span><a href="about:blank#%E5%B0%8F%E7%BB%93"></a>小结</span></a></h2><p>本章中我们回顾了计算机的内部运行原理，并仿照 x86 汇编指令设计并实现了我们自己的指令集。希望通过本章的学习，你能对计算机程序的原理有一定的了解，同时能对汇编语言有一定的概念，因为汇编语言就是 C 编译器的输出。</p>',50),T={href:"https://github.com/lotabout/write-a-C-interpreter/tree/step-1",target:"_blank",rel:"noopener noreferrer"},j=s("table",null,[s("tbody",null,[s("tr",null,[s("td",{class:"code"},[s("pre",null,[s("span",{class:"line"},"git clone -b step-1 https://github.com/lotabout/write-a-C-interpreter"),s("br")])])])])],-1),z=s("p",null,"实际计算机中，添加一个新的指令需要设计许多新的电路，会增加许多的成本，但我们的虚拟机中，新的指令几乎不消耗资源，因此我们可以利用这一点，用更多的指令来完成更多的功能，从而简化具体的实现。",-1);function J(V,N){const n=c("router-link"),p=c("ExternalLinkIcon");return o(),i("div",null,[b,u,h,m,s("nav",f,[s("ul",null,[s("li",null,[e(n,{to:"#计算机的内部工作原理"},{default:l(()=>[a("计算机的内部工作原理")]),_:1}),s("ul",null,[s("li",null,[e(n,{to:"#内存"},{default:l(()=>[a("内存")]),_:1})]),s("li",null,[e(n,{to:"#寄存器"},{default:l(()=>[a("寄存器")]),_:1})])])]),s("li",null,[e(n,{to:"#指令集"},{default:l(()=>[a("指令集")]),_:1}),s("ul",null,[s("li",null,[e(n,{to:"#mov"},{default:l(()=>[a("MOV")]),_:1})]),s("li",null,[e(n,{to:"#push"},{default:l(()=>[a("PUSH")]),_:1})]),s("li",null,[e(n,{to:"#jmp"},{default:l(()=>[a("JMP")]),_:1})]),s("li",null,[e(n,{to:"#jz-jnz"},{default:l(()=>[a("JZ/JNZ")]),_:1})]),s("li",null,[e(n,{to:"#子函数调用"},{default:l(()=>[a("子函数调用")]),_:1})]),s("li",null,[e(n,{to:"#ent"},{default:l(()=>[a("ENT")]),_:1})]),s("li",null,[e(n,{to:"#adj"},{default:l(()=>[a("ADJ")]),_:1})]),s("li",null,[e(n,{to:"#lev"},{default:l(()=>[a("LEV")]),_:1})]),s("li",null,[e(n,{to:"#lea"},{default:l(()=>[a("LEA")]),_:1})]),s("li",null,[e(n,{to:"#运算符指令"},{default:l(()=>[a("运算符指令")]),_:1})]),s("li",null,[e(n,{to:"#内置函数"},{default:l(()=>[a("内置函数")]),_:1})])])]),s("li",null,[e(n,{to:"#测试"},{default:l(()=>[a("测试")]),_:1})]),s("li",null,[e(n,{to:"#小结"},{default:l(()=>[a("小结")]),_:1})])])]),y,s("p",null,[a("本文转自 "),s("a",k,[a("https://lotabout.me/2015/write-a-C-interpreter-2/"),e(p)]),a("，如有侵权，请联系删除。")]),x,s("ol",null,[s("li",null,[s("a",_,[a("手把手教你构建 C 语言编译器（0）——前言"),e(p)])]),s("li",null,[s("a",E,[a("手把手教你构建 C 语言编译器（1）——设计"),e(p)])]),s("li",null,[s("a",g,[a("手把手教你构建 C 语言编译器（2）——虚拟机"),e(p)])]),s("li",null,[s("a",w,[a("手把手教你构建 C 语言编译器（3）——词法分析器"),e(p)])]),s("li",null,[s("a",C,[a("手把手教你构建 C 语言编译器（4）——递归下降"),e(p)])]),s("li",null,[s("a",A,[a("手把手教你构建 C 语言编译器（5）——变量定义"),e(p)])]),s("li",null,[s("a",v,[a("手把手教你构建 C 语言编译器（6）——函数定义"),e(p)])]),s("li",null,[s("a",L,[a("手把手教你构建 C 语言编译器（7）——语句"),e(p)])]),s("li",null,[s("a",B,[a("手把手教你构建 C 语言编译器（8）——表达式"),e(p)])]),s("li",null,[s("a",M,[a("手把手教你构建 C 语言编译器（9）——总结"),e(p)])])]),P,s("p",null,[a("事先声明一下，我们的编译器参数是顺序入栈的，下面的例子（C 语言调用标准）取自 "),s("a",D,[a("维基百科"),e(p)]),a("：")]),S,s("p",null,[a("本章的代码可以在 "),s("a",T,[a("Github"),e(p)]),a(" 上下载，也可以直接 clone")]),j,z])}const I=r(d,[["render",J],["__file","2.html.vue"]]),U=JSON.parse('{"path":"/tech/designASimpileCCompiler/2.html","title":"转载声明","lang":"zh-CN","frontmatter":{"description":"title: \\"手把手教你构建 C 语言编译器（2）——虚拟机\\" category: 编译原理 tag: c 编译器 解释器 转载声明 本文转自 https://lotabout.me/2015/write-a-C-interpreter-2/，如有侵权，请联系删除。 原文内容 手把手教你构建 C 语言编译器（2）- 虚拟机 Table of Cont...","head":[["meta",{"property":"og:url","content":"https://github.com/King-sj/tech/designASimpileCCompiler/2.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"转载声明"}],["meta",{"property":"og:description","content":"title: \\"手把手教你构建 C 语言编译器（2）——虚拟机\\" category: 编译原理 tag: c 编译器 解释器 转载声明 本文转自 https://lotabout.me/2015/write-a-C-interpreter-2/，如有侵权，请联系删除。 原文内容 手把手教你构建 C 语言编译器（2）- 虚拟机 Table of Cont..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T08:03:01.000Z"}],["meta",{"property":"article:author","content":"KSJ"}],["meta",{"property":"article:modified_time","content":"2024-10-21T08:03:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"转载声明\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T08:03:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KSJ\\",\\"url\\":\\"https://github.com/King-sj\\"}]}"]]},"headers":[{"level":2,"title":"计算机的内部工作原理","slug":"计算机的内部工作原理","link":"#计算机的内部工作原理","children":[{"level":3,"title":"内存","slug":"内存","link":"#内存","children":[]},{"level":3,"title":"寄存器","slug":"寄存器","link":"#寄存器","children":[]}]},{"level":2,"title":"指令集","slug":"指令集","link":"#指令集","children":[{"level":3,"title":"MOV","slug":"mov","link":"#mov","children":[]},{"level":3,"title":"PUSH","slug":"push","link":"#push","children":[]},{"level":3,"title":"JMP","slug":"jmp","link":"#jmp","children":[]},{"level":3,"title":"JZ/JNZ","slug":"jz-jnz","link":"#jz-jnz","children":[]},{"level":3,"title":"子函数调用","slug":"子函数调用","link":"#子函数调用","children":[]},{"level":3,"title":"ENT","slug":"ent","link":"#ent","children":[]},{"level":3,"title":"ADJ","slug":"adj","link":"#adj","children":[]},{"level":3,"title":"LEV","slug":"lev","link":"#lev","children":[]},{"level":3,"title":"LEA","slug":"lea","link":"#lea","children":[]},{"level":3,"title":"运算符指令","slug":"运算符指令","link":"#运算符指令","children":[]},{"level":3,"title":"内置函数","slug":"内置函数","link":"#内置函数","children":[]}]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1729497781000,"updatedTime":1729497781000,"contributors":[{"name":"King","email":"2175616761@qq.com","commits":1}]},"readingTime":{"minutes":25.04,"words":7512},"filePathRelative":"tech/designASimpileCCompiler/2.md","localizedDate":"2024年10月21日","excerpt":"<hr>\\n<p>title: \\"手把手教你构建 C 语言编译器（2）——虚拟机\\"\\ncategory:</p>\\n<ul>\\n<li>编译原理\\ntag:</li>\\n<li>c</li>\\n<li>编译器</li>\\n<li>解释器</li>\\n</ul>\\n<hr>\\n\\n<h1>转载声明</h1>\\n<p>本文转自 <a href=\\"https://lotabout.me/2015/write-a-C-interpreter-2/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://lotabout.me/2015/write-a-C-interpreter-2/</a>，如有侵权，请联系删除。</p>","autoDesc":true}');export{I as comp,U as data};
