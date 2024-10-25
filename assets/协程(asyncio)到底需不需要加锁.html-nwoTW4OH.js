import{_ as i,r as t,o as l,c,b as n,e as a,d as e,a as o,f as p}from"./app-Cavey8ZJ.js";const d={},u={id:"并发异步编程之争-协程-asyncio-到底需不需要加锁-线程-协程安全-挂起-主动切换-python3",tabindex:"-1"},r={class:"header-anchor",href:"#并发异步编程之争-协程-asyncio-到底需不需要加锁-线程-协程安全-挂起-主动切换-python3"},v={href:"https://segmentfault.com/a/1190000041568839",target:"_blank",rel:"noopener noreferrer"},m={href:"https://link.segmentfault.com/?enc=8btt3pfGP%2FRxuxLguNqhrg%3D%3D.f%2BWWJlm9AsMAbAJjJZT%2BOQBqYNXwZgTYGW7Jx9l%2BpxQ%3D",target:"_blank",rel:"noopener noreferrer"},b=p(`<p>协程与线程向来焦孟不离，但事实上是，线程更被我们所熟知，在Python编程领域，单核同时间内只能有一个线程运行，这并不是什么缺陷，这实际上是符合客观逻辑的，单核处理器本来就没法同时处理两件事情，要同时进行多件事情本来就需要正在运行的让出处理器，然后才能去处理另一件事情，左手画方右手画圆在现实中本来就不成立，只不过这个让出的过程是线程调度器主动抢占的。</p><h2 id="线程安全" tabindex="-1"><a class="header-anchor" href="#线程安全"><span>线程安全</span></a></h2><p>系统的线程调度器是假设不同的线程是毫无关系的，所以它平均地分配时间片让处理器一视同仁，雨露均沾。但是Python受限于GIL全局解释器锁，任何Python线程执行前，必须先获得GIL锁，然后，每执行100条字节码，解释器就自动释放GIL锁，让别的线程有机会执行。这个GIL全局解释器锁实际上把所有线程的执行代码都给上了锁，所以，多线程在Python中只能交替执行，即使多个线程跑在8核处理上，也只能用到1个核。</p><p>但其实，这并不是事情的全貌，就算只能用单核处理任务，多个线程之前也并不是完全独立的，它们会操作同一个资源。于是，大家又发明了同步锁，使得一段时间内只有一个线程可以操作这个资源，其他线程只能等待：</p><div class="language-mipsasm line-numbers-mode" data-ext="mipsasm" data-title="mipsasm"><pre class="language-mipsasm"><code>import threading

balance = 0

def change_it_without_lock(n):
    global balance
    # 不加锁的话 最后的值不是0
    # 线程共享数据危险在于 多个线程同时改同一个变量
    # 如果每个线程按顺序执行，那么值会是0， 但是线程时系统调度，又不确定性，交替进行
    # 没锁的话，同时修改变量
    # 所以加锁是为了同时只有一个线程再修改，别的线程表一定不能改
    for i in range(1000000):
        balance = balance + n
        balance = balance - n

def change_it_with_lock(n):
    global balance
    if lock.acquire():
        try:
            for i in range(1000000):
                balance = balance + n
                balance = balance - n
        # 这里的finally 防止中途出错了，也能释放锁
        finally:
            lock.release()

threads = [
    threading.Thread(target=change_it_with_lock, args=(8, )),
    threading.Thread(target=change_it_with_lock, args=(10, ))
]

lock = threading.Lock()

[t.start() for t in threads]
[t.join() for t in threads]

print(balance)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种异步编程方式被广大开发者所认可，线程并不安全，线程操作共享资源需要加锁。然而人们很快发现，这种处理方式是在画蛇添足，处理器本来同一时间就只能有一个线程在运行。是线程调度器抢占划分时间片给其他线程跑，而现在，多了把锁，其他线程又说我拿不到锁，我得拿到锁才能操作。</p><p>就像以前的公共电话亭，本来就只能一个人打电话，现在电话亭上加了把锁，还是只能一个人打电话，而有没有锁，有什么区别呢？所以，问题到底出在哪儿？</p><p>事实上，在所有线程相互独立且不会操作同一资源的模式下，抢占式的线程调度器是非常不错的选择，因为它可以保证所有的线程都可以被分到时间片不被垃圾代码所拖累。而如果操作同一资源，抢占式的线程就不那么让人愉快了。</p><h2 id="协程" tabindex="-1"><a class="header-anchor" href="#协程"><span>协程</span></a></h2><p>过了一段时间，人们发现经常需要异步操作共享资源的情况下，主动让出时间片的协程模式比线程抢占式分配的效率要好，也更简单。</p><p>从实际开发角度看，与线程相比，这种主动让出型的调度方式更为高效。一方面，它让调用者自己来决定什么时候让出，比操作系统的抢占式调度所需要的时间代价要小很多。后者为了能恢复现场会在切换线程时保存相当多的状态，并且会非常频繁地进行切换。另一方面，协程本身可以做成用户态，每个协程的体积比线程要小得多，因此一个进程可以容纳数量相当可观的协程任务。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">asyncio</span>

balance <span class="token operator">=</span> <span class="token number">0</span>

async def <span class="token function">change_it_without_lock</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token operator">:</span>

    global balance

    balance <span class="token operator">=</span> balance <span class="token operator">+</span> n
    balance <span class="token operator">=</span> balance <span class="token operator">-</span> n


loop <span class="token operator">=</span> asyncio<span class="token punctuation">.</span><span class="token function">get_event_loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

res <span class="token operator">=</span> loop<span class="token punctuation">.</span><span class="token function">run_until_complete</span><span class="token punctuation">(</span>
    asyncio<span class="token punctuation">.</span><span class="token function">gather</span><span class="token punctuation">(</span><span class="token function">change_it_without_lock</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">change_it_without_lock</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                   <span class="token function">change_it_without_lock</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">change_it_without_lock</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token function">print</span><span class="token punctuation">(</span>balance<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从代码结构上看，协程保证了编写过程中的思维连贯性，使得函数（闭包）体本身就无缝保持了程序状态。逻辑紧凑，可读性高，不易写出错的代码，可调试性强。</p><p>但归根结底，单核处理器还是同时间只能做一件事，所以同一时间点还是只能有一个协程任务运行，它和线程的最主要差别就是，协程是主动让出使用权，而线程是抢占使用权，即所谓的，协程是用户态，线程是系统态。</p><figure><img src="https://segmentfault.com/img/remote/1460000041568841" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>同时，如图所示，协程本身就是单线程的，即不会触发系统的全局解释器锁(GIL)，同时也不需要系统的线程调度器参与抢占式的调度，避免了多线程的上下文切换，所以它的性能要比多线程好。</p><h2 id="协程安全" tabindex="-1"><a class="header-anchor" href="#协程安全"><span>协程安全</span></a></h2><p>回到并发竞争带来的安全问题上，既然同一时间只能有一个协程任务运行，并且协程切换并不是系统态抢占式，那么协程一定是安全的：</p><div class="language-gauss line-numbers-mode" data-ext="gauss" data-title="gauss"><pre class="language-gauss"><code>import asyncio

balance = 0

async def change_it_without_lock(n):

    global balance

    balance = balance + n
    balance = balance - n

    print(balance)


loop = asyncio.get_event_loop()

res = loop.run_until_complete(
    asyncio.gather(change_it_without_lock(10), change_it_without_lock(8),
                   change_it_without_lock(2), change_it_without_lock(7)))

print(balance)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-crmsh line-numbers-mode" data-ext="crmsh" data-title="crmsh"><pre class="language-crmsh"><code>0
0
0
0
0
liuyue:as-master liuyue$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看起来是这样的，无论是执行过程中，还是最后执行结果，都保证了其状态的一致性。</p><p>于是，协程操作共享变量不需要加锁的结论开始在坊间流传。</p><p>毫无疑问，谁主张，谁举证，上面的代码也充分说明了这个结论的正确性，然而我们都忽略了一个客观事实，那就是代码中没有“主动让出使用权”的操作，所谓主动让出使用权，即用户主动触发协程切换，那到底怎么主动让出使用权？使用 await 关键字。</p><p>await 是 Python 3.5版本开始引入了新的关键字，即Python3.4版本的yield from，它能做什么？它可以在协程内部用await调用另一个协程实现异步操作，或者说的更简单一点，它可以挂起当前协程任务，去手动异步执行另一个协程，这就是主动让出“使用权”：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello world!&quot;</span><span class="token punctuation">)</span>
    r <span class="token operator">=</span> <span class="token keyword">await</span> asyncio<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello again!&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们执行第一句代码print(&quot;Hello world!&quot;)之后，使用await关键字让出使用权，也可以理解为把程序“暂时”挂起，此时使用权让出以后，别的协程就可以进行执行，随后当我们让出使用权1秒之后，当别的协程任务执行完毕，又或者别的协程任务也“主动”让出了使用权，协程又可以切回来，继续执行我们当前的任务，也就是第二行代码print(&quot;Hello again!&quot;)。</p><p>了解了协程如何主动切换，让我们继续之前的逻辑：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio

balance <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">change_it_without_lock</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">global</span> balance

    balance <span class="token operator">=</span> balance <span class="token operator">+</span> n
    <span class="token keyword">await</span> asyncio<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    balance <span class="token operator">=</span> balance <span class="token operator">-</span> n

    <span class="token keyword">print</span><span class="token punctuation">(</span>balance<span class="token punctuation">)</span>


loop <span class="token operator">=</span> asyncio<span class="token punctuation">.</span>get_event_loop<span class="token punctuation">(</span><span class="token punctuation">)</span>

res <span class="token operator">=</span> loop<span class="token punctuation">.</span>run_until_complete<span class="token punctuation">(</span>
    asyncio<span class="token punctuation">.</span>gather<span class="token punctuation">(</span>change_it_without_lock<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> change_it_without_lock<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                   change_it_without_lock<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> change_it_without_lock<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>balance<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>逻辑有了些许修改，当我对全局变量balance进行加法运算后，主动释放使用权，让别的协程运行，随后立刻切换回来，再进行减法运算，如此往复，同时开启四个协程任务，让我们来看一下代码运行结果：</p><div class="language-avrasm line-numbers-mode" data-ext="avrasm" data-title="avrasm"><pre class="language-avrasm"><code>17
9
7
0
0
liuyue:mytornado liuyue$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，协程运行过程中，并没有保证“状态一致”，也就是一旦通过await关键字切换协程，变量的状态并不会进行同步，从而导致执行过程中变量状态的“混乱状态”，但是所有协程执行完毕后，变量balance的最终结果是0，意味着协程操作变量的最终一致性是可以保证的。</p><p>为了对比，我们再用多线程试一下同样的逻辑：</p><div class="language-routeros line-numbers-mode" data-ext="routeros" data-title="routeros"><pre class="language-routeros"><code>import threading
import time

balance = 0

def change_it_without_lock(n):
    global balance

    for i in range(1000000):
        balance = balance + n
        balance = balance - n

    print(balance)


threads = [
    threading.Thread(target=change_it_without_lock, args=(8, )),
    threading.Thread(target=change_it_without_lock, args=(10, )),
    threading.Thread(target=change_it_without_lock, args=(10, )),
    threading.Thread(target=change_it_without_lock, args=(8, ))
]

[t.start() for t in threads]
[t.join() for t in threads]

print(balance)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多线程逻辑执行结果：</p><div class="language-avrasm line-numbers-mode" data-ext="avrasm" data-title="avrasm"><pre class="language-avrasm"><code>liuyue:mytornado liuyue$ python3 &quot;/Users/liuyue/wodfan/work/mytornado/test.py&quot;
28
18
10
0
8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，多线程在未加锁的情况下，连最终一致性也无法保证，因为线程是系统态切换，虽然同时只能有一个线程执行，但切换过程是争抢的，也就会导致写操作被原子性覆盖，而协程虽然在手动切换过程中也无法保证状态一致，但是可以保证最终一致性呢？因为协程是用户态，切换过程是协作的，所以写操作不会被争抢覆盖，会被顺序执行，所以肯定可以保证最终一致性。</p><p>协程在工作状态中，主动切换了使用权，而我们又想在执行过程中保证共享数据的强一致性，该怎么办？毫无疑问，还是只能加锁：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio

balance <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">change_it_with_lock</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">async</span> <span class="token keyword">with</span> lock<span class="token punctuation">:</span>

        <span class="token keyword">global</span> balance

        balance <span class="token operator">=</span> balance <span class="token operator">+</span> n
        <span class="token keyword">await</span> asyncio<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        balance <span class="token operator">=</span> balance <span class="token operator">-</span> n

        <span class="token keyword">print</span><span class="token punctuation">(</span>balance<span class="token punctuation">)</span>


lock <span class="token operator">=</span> asyncio<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>


loop <span class="token operator">=</span> asyncio<span class="token punctuation">.</span>get_event_loop<span class="token punctuation">(</span><span class="token punctuation">)</span>

res <span class="token operator">=</span> loop<span class="token punctuation">.</span>run_until_complete<span class="token punctuation">(</span>
    asyncio<span class="token punctuation">.</span>gather<span class="token punctuation">(</span>change_it_with_lock<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> change_it_with_lock<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                   change_it_with_lock<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> change_it_with_lock<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>balance<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>协程加锁执行后结果：</p><div class="language-avrasm line-numbers-mode" data-ext="avrasm" data-title="avrasm"><pre class="language-avrasm"><code>liuyue:mytornado liuyue$ python3 &quot;/Users/liuyue/wodfan/work/mytornado/test.py&quot;
0
0
0
0
0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是的，无论是结果，还是过程中，都保持了其一致性，但是我们也付出了相应的代价，那就是任务又回到了线性同步执行，再也没有异步的加持了。话说回来，世界上的事情本来就是这样，本来就没有两全其美的解决方案，又要共享状态，又想多协程，还想变量安全，这可能吗？</p><h2 id="协程是否需要加锁" tabindex="-1"><a class="header-anchor" href="#协程是否需要加锁"><span>协程是否需要加锁</span></a></h2><p>结论当然就是看使用场景，如果协程在操作共享变量的过程中，没有主动放弃执行权(await)，也就是没有切换挂起状态，那就不需要加锁，执行过程本身就是安全的；可是如果在执行事务逻辑块中主动放弃执行权了，会分两种情况，如果在逻辑执行过程中我们需要判断变量状态，或者执行过程中要根据变量状态进行一些下游操作，则必须加锁，如果我们不关注执行过程中的状态，只关注最终结果一致性，则不需要加锁。是的，抛开剂量谈毒性，是不客观的，给一个健康的人注射吗啡是犯罪，但是给一个垂死的人注射吗啡，那就是最大的道德，所以说，道德不是空泛的，脱离对象孤立存在的，同理，抛开场景谈逻辑，也是不客观的，协程也不是虚空的，脱离具体场景孤立存在的，我们应该养成具体问题具体分析的辩证唯物思想，只有掌握了辩证的矛盾思维才能更全面更灵活的看待问题，才能透过现象，把握本质。</p>`,44),k={href:"https://link.segmentfault.com/?enc=aOuNWC7a1JCzFai3ycjkKg%3D%3D.l5t0sKltIhLGYnZPLxsFYIiEbKuxzYikfYFHmurPNGM%3D",target:"_blank",rel:"noopener noreferrer"};function h(g,_){const s=t("ExternalLinkIcon");return l(),c("div",null,[n("h1",u,[n("a",r,[n("span",null,[n("a",v,[a("并发异步编程之争：协程(asyncio)到底需不需要加锁？(线程/协程安全/挂起/主动切换)Python3"),e(s)])])])]),n("p",null,[a("原文转载自「刘悦的技术博客」"),n("a",m,[a("https://v3u.cn/a_id_208"),e(s)])]),o(" more "),b,n("p",null,[a("原文转载自「刘悦的技术博客」 "),n("a",k,[a("https://v3u.cn/a_id_208"),e(s)])])])}const f=i(d,[["render",h],["__file","协程(asyncio)到底需不需要加锁.html.vue"]]),w=JSON.parse('{"path":"/tech/%E5%8D%8F%E7%A8%8B(asyncio)%E5%88%B0%E5%BA%95%E9%9C%80%E4%B8%8D%E9%9C%80%E8%A6%81%E5%8A%A0%E9%94%81.html","title":"并发异步编程之争：协程(asyncio)到底需不需要加锁？(线程/协程安全/挂起/主动切换)Python3","lang":"zh-CN","frontmatter":{"description":"原文转载自「刘悦的技术博客」https://v3u.cn/a_id_208","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://github.com/King-sj/tech/%E5%8D%8F%E7%A8%8B(asyncio)%E5%88%B0%E5%BA%95%E9%9C%80%E4%B8%8D%E9%9C%80%E8%A6%81%E5%8A%A0%E9%94%81.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"并发异步编程之争：协程(asyncio)到底需不需要加锁？(线程/协程安全/挂起/主动切换)Python3"}],["meta",{"property":"og:description","content":"原文转载自「刘悦的技术博客」https://v3u.cn/a_id_208"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://segmentfault.com/img/remote/1460000041568841"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"KSJ"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"并发异步编程之争：协程(asyncio)到底需不需要加锁？(线程/协程安全/挂起/主动切换)Python3\\",\\"image\\":[\\"https://segmentfault.com/img/remote/1460000041568841\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KSJ\\",\\"url\\":\\"https://github.com/King-sj\\"}]}"]]},"headers":[{"level":2,"title":"线程安全","slug":"线程安全","link":"#线程安全","children":[]},{"level":2,"title":"协程","slug":"协程","link":"#协程","children":[]},{"level":2,"title":"协程安全","slug":"协程安全","link":"#协程安全","children":[]},{"level":2,"title":"协程是否需要加锁","slug":"协程是否需要加锁","link":"#协程是否需要加锁","children":[]}],"readingTime":{"minutes":10.04,"words":3013},"filePathRelative":"tech/协程(asyncio)到底需不需要加锁.md","excerpt":"\\n<p>原文转载自「刘悦的技术博客」<a href=\\"https://link.segmentfault.com/?enc=8btt3pfGP%2FRxuxLguNqhrg%3D%3D.f%2BWWJlm9AsMAbAJjJZT%2BOQBqYNXwZgTYGW7Jx9l%2BpxQ%3D\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://v3u.cn/a_id_208</a></p>\\n","autoDesc":true}');export{f as comp,w as data};
