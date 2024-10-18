import{_ as e,o as t,c as i,e as o}from"./app-DP5VP1rc.js";const n={},c=o('<h1 id="vscode-plugin" tabindex="-1"><a class="header-anchor" href="#vscode-plugin"><span>vscode plugin</span></a></h1><p>// TODO https://code.visualstudio.com/api/get-started/your-first-extension</p><h1 id="tips" tabindex="-1"><a class="header-anchor" href="#tips"><span>tips</span></a></h1><ul><li>若activate function执行时间过长，会导致<code>Activating extension &#39;undefined_publisher.kcodetime&#39; failed: AggregateError.</code>, 从而启动失败</li><li>若deactivate function执行时间超过5s, 会被强行终止，导致插件无法正常退出。</li><li>关闭vscode 不会触发onDidCloseTextDocument事件</li></ul>',4),a=[c];function s(r,d){return t(),i("div",null,a)}const l=e(n,[["render",s],["__file","vsocde插件开发小记.html.vue"]]),u=JSON.parse(`{"path":"/tech/vsocde%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91%E5%B0%8F%E8%AE%B0.html","title":"vscode plugin","lang":"zh-CN","frontmatter":{"description":"vscode plugin // TODO https://code.visualstudio.com/api/get-started/your-first-extension tips 若activate function执行时间过长，会导致Activating extension 'undefined_publisher.kcodetime' fa...","head":[["meta",{"property":"og:url","content":"https://github.com/King-sj/tech/vsocde%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91%E5%B0%8F%E8%AE%B0.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"vscode plugin"}],["meta",{"property":"og:description","content":"vscode plugin // TODO https://code.visualstudio.com/api/get-started/your-first-extension tips 若activate function执行时间过长，会导致Activating extension 'undefined_publisher.kcodetime' fa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-18T03:49:23.000Z"}],["meta",{"property":"article:author","content":"KSJ"}],["meta",{"property":"article:modified_time","content":"2024-10-18T03:49:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vscode plugin\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-18T03:49:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KSJ\\",\\"url\\":\\"https://github.com/King-sj\\"}]}"]]},"headers":[],"git":{"createdTime":1729223363000,"updatedTime":1729223363000,"contributors":[{"name":"King","email":"2175616761@qq.com","commits":1}]},"readingTime":{"minutes":0.23,"words":69},"filePathRelative":"tech/vsocde插件开发小记.md","localizedDate":"2024年10月18日","excerpt":"\\n<p>// TODO\\nhttps://code.visualstudio.com/api/get-started/your-first-extension</p>\\n<h1>tips</h1>\\n<ul>\\n<li>若activate function执行时间过长，会导致<code>Activating extension 'undefined_publisher.kcodetime' failed: AggregateError.</code>, 从而启动失败</li>\\n<li>若deactivate function执行时间超过5s, 会被强行终止，导致插件无法正常退出。</li>\\n<li>关闭vscode 不会触发onDidCloseTextDocument事件</li>\\n</ul>","autoDesc":true}`);export{l as comp,u as data};
