import{_ as r,r as t,o,c,b as n,d as e,w as i,a as d,e as s,f as u}from"./app-CG6sZnep.js";const p={},v={class:"table-of-contents"},m=n("h1",{id:"docker-nginx-acme-sh-部署-vue-flask-项目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-nginx-acme-sh-部署-vue-flask-项目"},[n("span",null,"docker + nginx + acme.sh 部署 vue/flask 项目")])],-1),b=n("p",null,"本文将介绍如何使用 Docker、Nginx 和 acme.sh 部署一个 Vue 和 Flask 项目。我们将详细讲解环境配置、项目结构、Nginx 配置、Docker 配置以及如何升级到 HTTPS。",-1),g=u(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>需要先申请一个域名，本文是 bupt.online</p></div><h2 id="环境" tabindex="-1"><a class="header-anchor" href="#环境"><span>环境</span></a></h2><ul><li>Ubuntu</li><li>Docker</li><li>Docker-Compose</li><li>acme.sh</li><li>(python)</li><li>nginx</li></ul><h2 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构"><span>项目结构</span></a></h2><div class="language-tree line-numbers-mode" data-ext="tree" data-title="tree"><pre class="language-tree"><code>./nginx
├── acme  # 存放SSL证书
├── conf.d
│   ├── Automaton.conf
│   ├── blog.conf
├── docker-compose.yml
├── DockerFile
├── logs # 存放日志
│   ├── access.log
│   ├── Automaton
│   ├── blog
│   └── error.log
├── nginx.conf
./project # 要部署的（前端）项目
├── Automaton
└── blog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置http服务" tabindex="-1"><a class="header-anchor" href="#配置http服务"><span>配置http服务</span></a></h2><p>在准备好前端项目及安装相应环境后，进行如下操作(<strong>部分路径以实际为准，进行修改</strong>)</p><h3 id="配置nginx" tabindex="-1"><a class="header-anchor" href="#配置nginx"><span>配置nginx</span></a></h3><p><strong>nginx.conf</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>user  nginx;
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

events <span class="token punctuation">{</span>
  worker_connections  4096;
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
  include       /etc/nginx/mime.types;
  default_type  application/octet<span class="token punctuation">-</span>stream;

  log_format  main  &#39;$remote_addr <span class="token punctuation">-</span> $remote_user <span class="token punctuation">[</span>$time_local<span class="token punctuation">]</span> &quot;$request&quot; &#39;
                    &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                    &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

  <span class="token comment"># access_log  /var/log/nginx/access.log  main;</span>
  access_log off;
  error_log /var/log/nginx/error.log warn;

  sendfile        on;
  <span class="token comment">#tcp_nopush     on;</span>

  keepalive_timeout  65;

  <span class="token comment"># 定义DNS解析器</span>
  resolver 8.8.8.8 114.114.114.114 valid=300s;
  resolver_timeout 10s;
  <span class="token comment"># 增加请求头和Cookie的大小限制</span>
  client_header_buffer_size 16k;
  large_client_header_buffers 4 32k;

  include /etc/nginx/conf.d/<span class="token important">*.conf;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Automaton.conf</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>server <span class="token punctuation">{</span>
  listen 80;
  server_name Automaton.bupt.online;
  location / <span class="token punctuation">{</span>
    root /usr/share/nginx/html/Automaton;
    try_files $uri $uri/ =404;
  <span class="token punctuation">}</span>
  access_log /var/log/nginx/Automaton/access.log;
  error_log /var/log/nginx/Automaton/error.log warn;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>blog.conf</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>server <span class="token punctuation">{</span>
  listen 80;
  server_name bupt.online www.bupt.online;

  location / <span class="token punctuation">{</span>
    root /usr/share/nginx/html/blog;
    try_files $uri $uri/ =404;
    <span class="token comment"># access_log /var/log/nginx/blog/access.log;</span>
    error_log /var/log/nginx/blog/error.log warn;
  <span class="token punctuation">}</span>

  location /Automaton <span class="token punctuation">{</span>
    <span class="token comment"># 使用 proxy_pass 或 rewrite 重定向到Automaton.bupt.online 失败</span>
    alias /usr/share/nginx/html/Automaton/;
    try_files $uri $uri/ =404;
    <span class="token comment"># access_log /var/log/nginx/Automaton/access.log;</span>
    error_log /var/log/nginx/Automaton/error.log warn;
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置docker" tabindex="-1"><a class="header-anchor" href="#配置docker"><span>配置docker</span></a></h3><p><strong>DockerFile</strong></p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> nginx:latest</span>

<span class="token instruction"><span class="token keyword">COPY</span> nginx.conf /etc/nginx/nginx.conf</span>
<span class="token instruction"><span class="token keyword">COPY</span> conf.d /etc/nginx/conf.d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>docker-compose.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">nginx</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span>
      <span class="token key atrule">context</span><span class="token punctuation">:</span> .
      <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> DockerFile
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;80:80&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;443:443&quot;</span>

    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ../project/blog<span class="token punctuation">:</span>/usr/share/nginx/html/blog
      <span class="token punctuation">-</span> ../project/Automaton<span class="token punctuation">:</span>/usr/share/nginx/html/Automaton
      <span class="token punctuation">-</span> ./logs<span class="token punctuation">:</span>/var/log/nginx
      <span class="token punctuation">-</span> ./conf.d<span class="token punctuation">:</span>/etc/nginx/conf.d
      <span class="token punctuation">-</span> ./acme<span class="token punctuation">:</span>/etc/letsencrypt/live
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> webnet

    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> TZ=Asia/Shanghai

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">webnet</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动项目" tabindex="-1"><a class="header-anchor" href="#启动项目"><span>启动项目</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span> <span class="token parameter variable">--build</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后就能正常访问 http://bupt.online 及 http://automaton.bupt.online ， http://bupt.online/Automaton</p><h2 id="升级为https" tabindex="-1"><a class="header-anchor" href="#升级为https"><span>升级为https</span></a></h2><h3 id="申请证书" tabindex="-1"><a class="header-anchor" href="#申请证书"><span>申请证书</span></a></h3><p>进入acme.sh的安装目录(/root/.acme.sh)</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">su</span> root
acme.sh  <span class="token parameter variable">--issue</span>  <span class="token parameter variable">-d</span> bupt.online  <span class="token parameter variable">--nginx</span>   <span class="token comment"># Nginx</span>
acme.sh  <span class="token parameter variable">--issue</span>  <span class="token parameter variable">-d</span> Automaton.bupt.online  <span class="token parameter variable">--nginx</span>   <span class="token comment"># Nginx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装证书" tabindex="-1"><a class="header-anchor" href="#安装证书"><span>安装证书</span></a></h4><p>这里将目录修改为目标目录</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># sudo su root</span>
<span class="token comment"># cd .acme.sh</span>
<span class="token comment"># use like below</span>
acme.sh --install-cert <span class="token parameter variable">-d</span> bupt.online <span class="token punctuation">\\</span>
--cert-file      /home/ubuntu/nginx/acme/bupt.online/cert.cer  <span class="token punctuation">\\</span>
--key-file        /home/ubuntu/nginx/acme/bupt.online/privkey.key <span class="token punctuation">\\</span>
--fullchain-file  /home/ubuntu/nginx/acme/bupt.online/fullchain.cer <span class="token punctuation">\\</span>
<span class="token parameter variable">--reloadcmd</span>     <span class="token string">&quot;cd /home/ubuntu/nginx &amp;&amp; docker-compose up -d --build&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改配置" tabindex="-1"><a class="header-anchor" href="#修改配置"><span>修改配置</span></a></h3><p><strong>blog.conf</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>server <span class="token punctuation">{</span>
  listen 80;
  server_name bupt.online www.bupt.online;
  return 301 https<span class="token punctuation">:</span>//$host$request_uri;
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
  listen 443 ssl;
  server_name bupt.online;

  ssl_certificate /etc/letsencrypt/live/bupt.online/fullchain.cer;
  ssl_certificate_key /etc/letsencrypt/live/bupt.online/privkey.key;

  location / <span class="token punctuation">{</span>
    root /usr/share/nginx/html/blog;
    try_files $uri $uri/ =404;
    <span class="token comment"># access_log /var/log/nginx/blog/access.log;</span>
    error_log /var/log/nginx/blog/error.log warn;
  <span class="token punctuation">}</span>

  location /Automaton <span class="token punctuation">{</span>
    <span class="token comment"># 使用 proxy_pass 或 rewrite 重定向到Automaton.bupt.online 失败</span>
    alias /usr/share/nginx/html/Automaton/;
    try_files $uri $uri/ =404;
    <span class="token comment"># access_log /var/log/nginx/Automaton/access.log;</span>
    error_log /var/log/nginx/Automaton/error.log warn;
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
  listen 443 ssl;
  server_name www.bupt.online;

  ssl_certificate /etc/letsencrypt/live/www.bupt.online/fullchain.cer;
  ssl_certificate_key /etc/letsencrypt/live/www.bupt.online/privkey.key;


  location / <span class="token punctuation">{</span>
    root /usr/share/nginx/html/blog;
    try_files $uri $uri/ =404;
    <span class="token comment"># access_log /var/log/nginx/blog/access.log;</span>
    error_log /var/log/nginx/blog/error.log warn;
  <span class="token punctuation">}</span>

  location /Automaton <span class="token punctuation">{</span>
    <span class="token comment"># 使用 proxy_pass 或 rewrite 重定向到Automaton.bupt.online 失败</span>
    alias /usr/share/nginx/html/Automaton/;
    try_files $uri $uri/ =404;
    <span class="token comment"># access_log /var/log/nginx/Automaton/access.log;</span>
    error_log /var/log/nginx/Automaton/error.log warn;
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Automaton.conf</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>server <span class="token punctuation">{</span>
  listen 80;
  server_name Automaton.bupt.online;
  location / <span class="token punctuation">{</span>
    return 301 https<span class="token punctuation">:</span>//$host$request_uri;
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
  listen 443 ssl;
  server_name Automaton.bupt.online;
  ssl_certificate /etc/letsencrypt/live/Automaton.bupt.online/fullchain.cer;
  ssl_certificate_key /etc/letsencrypt/live/Automaton.bupt.online/privkey.key;
  location / <span class="token punctuation">{</span>
    root /usr/share/nginx/html/Automaton;
    try_files $uri $uri/ =404;
  <span class="token punctuation">}</span>
  access_log /var/log/nginx/Automaton/access.log;
  error_log /var/log/nginx/Automaton/error.log warn;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重启container" tabindex="-1"><a class="header-anchor" href="#重启container"><span>重启container</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span> <span class="token parameter variable">--build</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置nginx反向代理-使flask支持-https" tabindex="-1"><a class="header-anchor" href="#配置nginx反向代理-使flask支持-https"><span>配置nginx反向代理，使flask支持 https</span></a></h2><p>#TODO - 添加flask+nginx配置</p><h1 id="改进方向" tabindex="-1"><a class="header-anchor" href="#改进方向"><span>改进方向</span></a></h1><p>[ ] 将卷的挂载目录改为由命令输入，而不是硬编码</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>`,41),h={href:"https://nginx.org/en/docs/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://flask.palletsprojects.com/en/2.0.x/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.digitalocean.com/community/tutorials/understanding-nginx-http-proxying-load-balancing-buffering-and-caching",target:"_blank",rel:"noopener noreferrer"},x={href:"https://letsencrypt.org/getting-started/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://zhuanlan.zhihu.com/p/347064501",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.cnblogs.com/vishun/p/15746849.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://sleele.com/2021/04/15/docker-acme-with-docker-nginx/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://geek-docs.com/flask/flask-questions/4_flask_can_you_add_https_functionality_to_a_python_flask_web_server.html#google_vignette",target:"_blank",rel:"noopener noreferrer"};function $(D,N){const a=t("router-link"),l=t("ExternalLinkIcon");return o(),c("div",null,[n("nav",v,[n("ul",null,[n("li",null,[e(a,{to:"#环境"},{default:i(()=>[s("环境")]),_:1})]),n("li",null,[e(a,{to:"#项目结构"},{default:i(()=>[s("项目结构")]),_:1})]),n("li",null,[e(a,{to:"#配置http服务"},{default:i(()=>[s("配置http服务")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#配置nginx"},{default:i(()=>[s("配置nginx")]),_:1})]),n("li",null,[e(a,{to:"#配置docker"},{default:i(()=>[s("配置docker")]),_:1})]),n("li",null,[e(a,{to:"#启动项目"},{default:i(()=>[s("启动项目")]),_:1})])])]),n("li",null,[e(a,{to:"#升级为https"},{default:i(()=>[s("升级为https")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#申请证书"},{default:i(()=>[s("申请证书")]),_:1})]),n("li",null,[e(a,{to:"#修改配置"},{default:i(()=>[s("修改配置")]),_:1})]),n("li",null,[e(a,{to:"#重启container"},{default:i(()=>[s("重启container")]),_:1})])])]),n("li",null,[e(a,{to:"#配置nginx反向代理-使flask支持-https"},{default:i(()=>[s("配置nginx反向代理，使flask支持 https")]),_:1})]),n("li",null,[e(a,{to:"#参考资料"},{default:i(()=>[s("参考资料")]),_:1})])])]),m,b,d(" more "),g,n("ol",null,[n("li",null,[n("a",h,[s("Nginx Documentation"),e(l)])]),n("li",null,[n("a",k,[s("Flask Documentation"),e(l)])]),n("li",null,[n("a",_,[s("Reverse Proxy Guide"),e(l)])]),n("li",null,[n("a",x,[s("SSL Certificates"),e(l)])]),n("li",null,[n("a",f,[s("用acme.sh帮你免费且自动更新的HTTPS证书，省时又省力"),e(l)])]),n("li",null,[n("a",y,[s("docker部署certbot与nginx来获取ssl证书添加https及自动更新"),e(l)])]),n("li",null,[n("a",w,[s("使用docker acme申请、续订泛域名证书，并自动重载docker nginx"),e(l)])]),n("li",null,[n("a",A,[s("Flask: 如何给Python Flask Web服务器添加HTTPS功能"),e(l)])])])])}const q=r(p,[["render",$],["__file","docker_nginx部署web项目.html.vue"]]),S=JSON.parse('{"path":"/tech/docker_nginx%E9%83%A8%E7%BD%B2web%E9%A1%B9%E7%9B%AE.html","title":"docker + nginx + acme.sh 部署 vue/flask 项目","lang":"zh-CN","frontmatter":{"author":"King-sj","date":"2024-09-16T00:00:00.000Z","category":["nginx"],"tag":["部署"],"star":true,"description":"docker + nginx + acme.sh 部署 vue/flask 项目 本文将介绍如何使用 Docker、Nginx 和 acme.sh 部署一个 Vue 和 Flask 项目。我们将详细讲解环境配置、项目结构、Nginx 配置、Docker 配置以及如何升级到 HTTPS。","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://github.com/King-sj/tech/docker_nginx%E9%83%A8%E7%BD%B2web%E9%A1%B9%E7%9B%AE.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"docker + nginx + acme.sh 部署 vue/flask 项目"}],["meta",{"property":"og:description","content":"docker + nginx + acme.sh 部署 vue/flask 项目 本文将介绍如何使用 Docker、Nginx 和 acme.sh 部署一个 Vue 和 Flask 项目。我们将详细讲解环境配置、项目结构、Nginx 配置、Docker 配置以及如何升级到 HTTPS。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"King-sj"}],["meta",{"property":"article:tag","content":"部署"}],["meta",{"property":"article:published_time","content":"2024-09-16T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"docker + nginx + acme.sh 部署 vue/flask 项目\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-09-16T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"King-sj\\"}]}"]]},"headers":[{"level":2,"title":"环境","slug":"环境","link":"#环境","children":[]},{"level":2,"title":"项目结构","slug":"项目结构","link":"#项目结构","children":[]},{"level":2,"title":"配置http服务","slug":"配置http服务","link":"#配置http服务","children":[{"level":3,"title":"配置nginx","slug":"配置nginx","link":"#配置nginx","children":[]},{"level":3,"title":"配置docker","slug":"配置docker","link":"#配置docker","children":[]},{"level":3,"title":"启动项目","slug":"启动项目","link":"#启动项目","children":[]}]},{"level":2,"title":"升级为https","slug":"升级为https","link":"#升级为https","children":[{"level":3,"title":"申请证书","slug":"申请证书","link":"#申请证书","children":[]},{"level":3,"title":"修改配置","slug":"修改配置","link":"#修改配置","children":[]},{"level":3,"title":"重启container","slug":"重启container","link":"#重启container","children":[]}]},{"level":2,"title":"配置nginx反向代理，使flask支持 https","slug":"配置nginx反向代理-使flask支持-https","link":"#配置nginx反向代理-使flask支持-https","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"readingTime":{"minutes":2.69,"words":808},"filePathRelative":"tech/docker+nginx部署web项目.md","localizedDate":"2024年9月16日","excerpt":"\\n<h1>docker + nginx + acme.sh 部署 vue/flask 项目</h1>\\n<p>本文将介绍如何使用 Docker、Nginx 和 acme.sh 部署一个 Vue 和 Flask 项目。我们将详细讲解环境配置、项目结构、Nginx 配置、Docker 配置以及如何升级到 HTTPS。</p>\\n","autoDesc":true}');export{q as comp,S as data};
