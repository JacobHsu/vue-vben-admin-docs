import{o as e,c as r,a as t}from"./app.a32f4b09.js";const n='{"title":"介绍","description":"","frontmatter":{},"headers":[{"level":2,"title":"简介","slug":"简介"},{"level":2,"title":"文档","slug":"文档"},{"level":3,"title":"本地运行文档","slug":"本地运行文档"},{"level":2,"title":"需要掌握的基础知识","slug":"需要掌握的基础知识"},{"level":2,"title":"模版","slug":"模版"},{"level":2,"title":"vite 插件推荐","slug":"vite-插件推荐"},{"level":2,"title":"浏览器支持","slug":"浏览器支持"},{"level":2,"title":"如何加入我们","slug":"如何加入我们"}],"relativePath":"guide/introduction.md","lastUpdated":1625126129064}',a={},o=t('<h1 id="介绍"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><h2 id="简介"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><a href="https://github.com/anncwb/vue-vben-admin" target="_blank" rel="noopener noreferrer">Vue-Vben-Admin</a>是一个基于<a href="https://github.com/vuejs/vue-next" target="_blank" rel="noopener noreferrer">Vue3.0</a>、<a href="https://github.com/vitejs/vite" target="_blank" rel="noopener noreferrer">Vite</a>、 <a href="https://2x.antdv.com/docs/vue/introduce-cn/" target="_blank" rel="noopener noreferrer">Ant-Design-Vue</a>、<a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a>的后台解决方案，目标是为中大型项目开发,提供现成的开箱解决方案，二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。项目所使用的技术都是前端较新的技术栈，可以用来作为项目的启动模版，可以帮助你快速搭建企业级中后台产品原型。也可以作为一个示例，用于学习<code>vue3</code>，<code>vite</code>，<code>ts</code>等等主流技术。该项目会一直持续跟进最新技术,将最新的东西应用与项目之中。</p><h2 id="文档"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h2><ul><li>中文文档地址为<a href="https://github.com/anncwb/vue-vben-admin-doc" target="_blank" rel="noopener noreferrer">vben-admin-doc</a>，采用 Vitepress 开发，如果文档有错误或者不对的，可以提交 pr 帮助我们进行修复。</li><li>英文文档暂时没有时间来写，欢迎有时间的同学来帮忙写英文文档。</li></ul><h3 id="本地运行文档"><a class="header-anchor" href="#本地运行文档" aria-hidden="true">#</a> 本地运行文档</h3><p>如果需要本地运行文档，只需要将代码拉取到本地进行运行即可。</p><div class="language-bash"><pre><code><span class="token comment"># 拉取代码</span>\n<span class="token function">git</span> clone https://github.com/anncwb/vue-vben-admin-doc\n\n<span class="token comment"># 安装依赖</span>\n<span class="token function">yarn</span>\n\n<span class="token comment"># 运行项目</span>\n<span class="token function">yarn</span> dev\n</code></pre></div><h2 id="需要掌握的基础知识"><a class="header-anchor" href="#需要掌握的基础知识" aria-hidden="true">#</a> 需要掌握的基础知识</h2><p>整个项目需要一定基础才能理解，不建议对 vue 不会的新手使用，需要能处理一些常见的 vue 问题。</p><p>所以在开发前可以先学一下以下内容,方便对项目的理解,提前了解和学习这些知识会非常有帮助:</p><ul><li><a href="https://v3.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue3 文档</a></li><li><a href="https://github.com/vuejs/rfcs" target="_blank" rel="noopener noreferrer">Vue-RFCS</a></li><li><a href="https://v3.vuejs.org/guide/migration/introduction.html" target="_blank" rel="noopener noreferrer">Vue2 迁移到 3</a></li><li><a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a></li><li><a href="https://next.router.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue-router</a></li><li><a href="https://2x.antdv.com/docs/vue/introduce-cn/" target="_blank" rel="noopener noreferrer">Ant-Design-Vue</a></li><li><a href="https://es6.ruanyifeng.com/" target="_blank" rel="noopener noreferrer">Es6</a></li><li><a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vitejs</a></li><li><a href="https://windicss.netlify.app/" target="_blank" rel="noopener noreferrer">WindiCss</a></li></ul><h2 id="模版"><a class="header-anchor" href="#模版" aria-hidden="true">#</a> 模版</h2><ul><li><a href="https://github.com/anncwb/vue-vben-admin" target="_blank" rel="noopener noreferrer">vue-vben-admin</a></li></ul><p>该版本主要是提供一些 <code>Demo</code> 示例及插件的使用集成方式，主要用于参考。如果对项目不是很熟悉，不建议在这基础上进行开发，可以使用下方提供的精简版本。</p><ul><li><a href="https://github.com/anncwb/vben-admin-thin-next" target="_blank" rel="noopener noreferrer">vue-vben-admin-thin</a></li></ul><p><code>vue-vben-admin</code>精简版本。删除了相关示例，无用文件及功能、依赖。可以根据自身要求安装对应的依赖。因为使用的是<code>vite</code>，依赖删除不会导致相关组件或者<code>hook</code>发出及警告。只在需要的时候<strong>安装对应的库</strong>即可。</p><h2 id="vite-插件推荐"><a class="header-anchor" href="#vite-插件推荐" aria-hidden="true">#</a> vite 插件推荐</h2><p>如果这些插件对你有帮助，可以给一个 star 支持下</p><ul><li><a href="https://github.com/vbenjs/vite-plugin-mock" target="_blank" rel="noopener noreferrer">vite-plugin-mock</a> - 用于本地及开发环境数据 <code>mock</code></li><li><a href="https://github.com/vbenjs/vite-plugin-html" target="_blank" rel="noopener noreferrer">vite-plugin-html</a> - 用于 <code>html</code> 模版转换,可以在<code>html</code>文件内进行书写模版语法</li><li><a href="https://github.com/vbenjs/vite-plugin-style-import" target="_blank" rel="noopener noreferrer">vite-plugin-style-import</a> - 用于组件库样式按需引入</li><li><a href="https://github.com/vbenjs/vite-plugin-imagemin" target="_blank" rel="noopener noreferrer">vite-plugin-imagemin</a> - 用于打包压缩图片资源</li><li><a href="https://github.com/vbenjs/vite-plugin-theme" target="_blank" rel="noopener noreferrer">vite-plugin-theme</a> - 用于在线切换主题色/黑暗主题适配等主题相关配置</li><li><a href="https://github.com/vbenjs/vite-plugin-theme" target="_blank" rel="noopener noreferrer">vite-plugin-compression</a> - 用于打包输出<code>.gz</code>|<code>.br</code>文件</li><li><a href="https://github.com/vbenjs/vite-plugin-svg-icons" target="_blank" rel="noopener noreferrer">vite-plugin-svg-icons</a> - 快速生成 <code>svg sprite</code></li></ul><h2 id="浏览器支持"><a class="header-anchor" href="#浏览器支持" aria-hidden="true">#</a> 浏览器支持</h2><p><strong>本地开发</strong>推荐使用<code>Chrome 最新版</code>浏览器,<strong>不支持</strong><code>Chrome 80</code>以下版本。</p><p><strong>生产环境</strong>支持现代浏览器, 不支持 IE。</p><table><thead><tr><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"></a>IE</th><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px"></a>Edge</th><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px"></a>Firefox</th><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px"></a>Chrome</th><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px"></a>Safari</th></tr></thead><tbody><tr><td style="text-align:center;">not support</td><td style="text-align:center;">last 2 versions</td><td style="text-align:center;">last 2 versions</td><td style="text-align:center;">last 2 versions</td><td style="text-align:center;">last 2 versions</td></tr></tbody></table><h2 id="如何加入我们"><a class="header-anchor" href="#如何加入我们" aria-hidden="true">#</a> 如何加入我们</h2><ul><li><a href="https://github.com/anncwb/vue-vben-admin" target="_blank" rel="noopener noreferrer">Vue-Vben-Admin</a> 还在持续更新中,本项目欢迎您的参与，共同维护,逐步完善，将项目做得更强。同时整个项目本着一切免费的原则，原则上不会收取任何费用及版权，可以放心使用。</li><li>如果你想加入我们，可以多提供一些好的建议或者 提交 pull request, 会根据你的活跃度邀请你加入我们。</li></ul>',26);a.render=function(t,n,a,i,l,s){return e(),r("div",null,[o])};export default a;export{n as __pageData};
