import{_ as i,r as o,o as a,c as l,b as e,e as n,d as r,f as s}from"./app-Cg2LeTK3.js";const d={},u=e("h1",{id:"gradle",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gradle"},[e("span",null,"gradle")])],-1),c={href:"https://mirrors.cloud.tencent.com/gradle/",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,"Android Studio下载gradle太慢可换源",-1),m={href:"https://blog.csdn.net/qq_43811536/article/details/139447518",target:"_blank",rel:"noopener noreferrer"},v=s(`<p><strong>修改 settings.gradle.kts</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pluginManagement {
    repositories {
        maven { url=uri (&quot;https://jitpack.io&quot;) }
        maven { url=uri (&quot;https://maven.aliyun.com/repository/releases&quot;) }
//        maven { url &#39;https://maven.aliyun.com/repository/jcenter&#39; }
        maven { url=uri (&quot;https://maven.aliyun.com/repository/google&quot;) }
        maven { url=uri (&quot;https://maven.aliyun.com/repository/central&quot;) }
        maven { url=uri (&quot;https://maven.aliyun.com/repository/gradle-plugin&quot;) }
        maven { url=uri (&quot;https://maven.aliyun.com/repository/public&quot;) }
        google()
        mavenCentral()
        gradlePluginPortal()
    }
}
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        maven { url=uri (&quot;https://jitpack.io&quot;) }
        maven { url=uri (&quot;https://maven.aliyun.com/repository/releases&quot;) }
//        maven { url &#39;https://maven.aliyun.com/repository/jcenter&#39; }
        maven { url=uri (&quot;https://maven.aliyun.com/repository/google&quot;) }
        maven { url=uri (&quot;https://maven.aliyun.com/repository/central&quot;) }
        maven { url=uri (&quot;https://maven.aliyun.com/repository/gradle-plugin&quot;) }
        maven { url=uri (&quot;https://maven.aliyun.com/repository/public&quot;) }
        google()
        mavenCentral()
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>gradle-wrapper.properties 换成对应的版本</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>distributionUrl=https\\://mirrors.cloud.tencent.com/gradle/gradle-8.7-all.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4);function g(h,b){const t=o("ExternalLinkIcon");return a(),l("div",null,[u,e("p",null,[e("a",c,[n("国内镜像"),r(t)])]),p,e("p",null,[e("a",m,[n("android.plugin version 下载错误查看"),r(t)])]),v])}const y=i(d,[["render",g],["__file","android studio换源.html.vue"]]),q=JSON.parse('{"path":"/tech/android%20studio%E6%8D%A2%E6%BA%90.html","title":"android studio换源","lang":"zh-CN","frontmatter":{"title":"android studio换源","date":"2024-08-02T00:00:00.000Z","categories":["build-tools"],"description":"gradle 国内镜像 Android Studio下载gradle太慢可换源 android.plugin version 下载错误查看 修改 settings.gradle.kts gradle-wrapper.properties 换成对应的版本","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://github.com/King-sj/tech/android%20studio%E6%8D%A2%E6%BA%90.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"android studio换源"}],["meta",{"property":"og:description","content":"gradle 国内镜像 Android Studio下载gradle太慢可换源 android.plugin version 下载错误查看 修改 settings.gradle.kts gradle-wrapper.properties 换成对应的版本"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"KSJ"}],["meta",{"property":"article:published_time","content":"2024-08-02T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"android studio换源\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-02T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KSJ\\",\\"url\\":\\"https://github.com/King-sj\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.46,"words":139},"filePathRelative":"tech/android studio换源.md","localizedDate":"2024年8月2日","excerpt":"\\n<p><a href=\\"https://mirrors.cloud.tencent.com/gradle/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">国内镜像</a></p>\\n<p>Android Studio下载gradle太慢可换源</p>\\n<p><a href=\\"https://blog.csdn.net/qq_43811536/article/details/139447518\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">android.plugin version 下载错误查看</a></p>\\n<p><strong>修改 settings.gradle.kts</strong></p>","autoDesc":true}');export{y as comp,q as data};
