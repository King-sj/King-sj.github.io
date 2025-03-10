import{_ as n,o as s,c as a,f as t}from"./app-Cy2ZwSf8.js";const e={},p=t(`<h1 id="翻转链表" tabindex="-1"><a class="header-anchor" href="#翻转链表"><span>翻转链表</span></a></h1><p>https://www.nowcoder.com/share/jump/8561783581740796593241</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">/**
 * struct ListNode {
 *	int val;
 *	struct ListNode *next;
 *	ListNode(int x) : val(x), next(nullptr) {}
 * };
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token comment">/**
     * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
     *
     *
     * @param head ListNode类
     * @return ListNode类
     */</span>
    ListNode<span class="token operator">*</span> <span class="token function">ReverseList</span><span class="token punctuation">(</span>ListNode<span class="token operator">*</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// write code here</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span><span class="token keyword">return</span> head<span class="token punctuation">;</span>
        <span class="token keyword">auto</span> pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">auto</span> cur <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        pre<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">auto</span> nxt <span class="token operator">=</span> cur<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
            cur<span class="token operator">-&gt;</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
            pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
            cur <span class="token operator">=</span> nxt<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(r,l){return s(),a("div",null,o)}const u=n(e,[["render",c],["__file","reserve_list.html.vue"]]),d=JSON.parse('{"path":"/tutorials/oi/nowcoder/reserve_list.html","title":"翻转链表","lang":"zh-CN","frontmatter":{"description":"翻转链表 https://www.nowcoder.com/share/jump/8561783581740796593241","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://github.com/King-sj/tutorials/oi/nowcoder/reserve_list.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"翻转链表"}],["meta",{"property":"og:description","content":"翻转链表 https://www.nowcoder.com/share/jump/8561783581740796593241"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"KSJ"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"翻转链表\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KSJ\\",\\"url\\":\\"https://github.com/King-sj\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.35,"words":104},"filePathRelative":"tutorials/oi/nowcoder/reserve_list.md","excerpt":"\\n<p>https://www.nowcoder.com/share/jump/8561783581740796593241</p>\\n<div class=\\"language-cpp\\" data-ext=\\"cpp\\" data-title=\\"cpp\\"><pre class=\\"language-cpp\\"><code><span class=\\"token comment\\">/**\\n * struct ListNode {\\n *\\tint val;\\n *\\tstruct ListNode *next;\\n *\\tListNode(int x) : val(x), next(nullptr) {}\\n * };\\n */</span>\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Solution</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">public</span><span class=\\"token operator\\">:</span>\\n    <span class=\\"token comment\\">/**\\n     * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可\\n     *\\n     *\\n     * @param head ListNode类\\n     * @return ListNode类\\n     */</span>\\n    ListNode<span class=\\"token operator\\">*</span> <span class=\\"token function\\">ReverseList</span><span class=\\"token punctuation\\">(</span>ListNode<span class=\\"token operator\\">*</span> head<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// write code here</span>\\n        <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>head<span class=\\"token punctuation\\">)</span><span class=\\"token keyword\\">return</span> head<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">auto</span> pre <span class=\\"token operator\\">=</span> head<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">auto</span> cur <span class=\\"token operator\\">=</span> head<span class=\\"token operator\\">-&gt;</span>next<span class=\\"token punctuation\\">;</span>\\n        pre<span class=\\"token operator\\">-&gt;</span>next <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">nullptr</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">while</span><span class=\\"token punctuation\\">(</span>cur<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">auto</span> nxt <span class=\\"token operator\\">=</span> cur<span class=\\"token operator\\">-&gt;</span>next<span class=\\"token punctuation\\">;</span>\\n            cur<span class=\\"token operator\\">-&gt;</span>next <span class=\\"token operator\\">=</span> pre<span class=\\"token punctuation\\">;</span>\\n            pre <span class=\\"token operator\\">=</span> cur<span class=\\"token punctuation\\">;</span>\\n            cur <span class=\\"token operator\\">=</span> nxt<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">return</span> pre<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}');export{u as comp,d as data};
