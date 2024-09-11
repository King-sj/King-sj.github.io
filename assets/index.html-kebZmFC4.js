import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o,c as l,b as e,f as n,e as r,a as s}from"./app-B32MuLuE.js";const d={},u=e("h1",{id:"gradle",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gradle"},[e("span",null,"gradle")])],-1),c={href:"https://mirrors.cloud.tencent.com/gradle/",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,"Android Studio下载gradle太慢可换源",-1),m={href:"https://blog.csdn.net/qq_43811536/article/details/139447518",target:"_blank",rel:"noopener noreferrer"},v=s(`<p><strong>修改 settings.gradle.kts</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pluginManagement {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4);function g(h,b){const t=a("ExternalLinkIcon");return o(),l("div",null,[u,e("p",null,[e("a",c,[n("国内镜像"),r(t)])]),p,e("p",null,[e("a",m,[n("android.plugin version 下载错误查看"),r(t)])]),v])}const q=i(d,[["render",g],["__file","index.html.vue"]]),x=JSON.parse('{"path":"/posts/Android/GRADLE/","title":"gradle","lang":"zh-CN","frontmatter":{"date":"2024-08-02T00:00:00.000Z","categories":["build-tools"],"description":"gradle 国内镜像 Android Studio下载gradle太慢可换源 android.plugin version 下载错误查看 修改 settings.gradle.kts gradle-wrapper.properties 换成对应的版本","head":[["meta",{"property":"og:url","content":"https://github.com/King-sj/posts/Android/GRADLE/"}],["meta",{"property":"og:site_name","content":"博客"}],["meta",{"property":"og:title","content":"gradle"}],["meta",{"property":"og:description","content":"gradle 国内镜像 Android Studio下载gradle太慢可换源 android.plugin version 下载错误查看 修改 settings.gradle.kts gradle-wrapper.properties 换成对应的版本"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-11T12:19:06.000Z"}],["meta",{"property":"article:author","content":"KSJ"}],["meta",{"property":"article:published_time","content":"2024-08-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-11T12:19:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"gradle\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-11T12:19:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KSJ\\",\\"url\\":\\"https://github.com/King-sj\\"}]}"]]},"headers":[],"git":{"createdTime":1726057146000,"updatedTime":1726057146000,"contributors":[{"name":"King","email":"2175616761@qq.com","commits":1}]},"readingTime":{"minutes":0.45,"words":134},"filePathRelative":"posts/Android/GRADLE/index.md","localizedDate":"2024年8月2日","excerpt":"\\n<p><a href=\\"https://mirrors.cloud.tencent.com/gradle/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">国内镜像</a></p>\\n<p>Android Studio下载gradle太慢可换源</p>\\n<p><a href=\\"https://blog.csdn.net/qq_43811536/article/details/139447518\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">android.plugin version 下载错误查看</a></p>\\n<p><strong>修改 settings.gradle.kts</strong></p>","autoDesc":true}');export{q as comp,x as data};
