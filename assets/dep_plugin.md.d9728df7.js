import{o as n,c as s,a}from"./app.1e087f38.js";const p='{"title":"vite插件","description":"","frontmatter":{},"headers":[{"level":2,"title":"vite-plugin-svg-icon","slug":"vite-plugin-svg-icon"},{"level":2,"title":"vite-plugin-mock","slug":"vite-plugin-mock"},{"level":2,"title":"vite-plugin-purge-icons","slug":"vite-plugin-purge-icons"},{"level":2,"title":"vite-plugin-style-import","slug":"vite-plugin-style-import"}],"relativePath":"dep/plugin.md","lastUpdated":1630314544007}',t={},o=a('<h1 id="vite插件"><a class="header-anchor" href="#vite插件" aria-hidden="true">#</a> vite插件</h1><h2 id="vite-plugin-svg-icon"><a class="header-anchor" href="#vite-plugin-svg-icon" aria-hidden="true">#</a> <a href="https://www.npmjs.com/package/vite-plugin-svg-icons" target="_blank" rel="noopener noreferrer">vite-plugin-svg-icon</a></h2><p>当你使用该插件的时候，指定好存放<code>svg</code>的文件夹。再按照指定的方式去访问svg图片。就可以再不产生http请求的情况下渲染出<code>svg</code>图片。</p><p>使用该插件时，插件会自动将所有svg图片加载到<code>HTML</code>中。并且每一个svg将会被过滤去无用的信息数据。让svg达到最小的值。之后使用svg图片就只需要操作<code>DOM</code>即可，而不需要发送<code>http</code>请求。</p><p>安装</p><p><code>yarn add vite-plugin-svg-icons --dev</code></p><p>创建配置</p><p>build\\vite\\plugin\\svgSprite.ts</p><div class="language-js"><pre><code><span class="token comment">/**\n *  Vite Plugin for fast creating SVG sprites.\n * https://github.com/anncwb/vite-plugin-svg-icons\n */</span>\n\n<span class="token keyword">import</span> SvgIconsPlugin <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-svg-icons&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">configSvgIconsPlugin</span><span class="token punctuation">(</span><span class="token parameter">isBuild<span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> svgIconsPlugin <span class="token operator">=</span> <span class="token function">SvgIconsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token comment">// ↓本地svg图片地址</span>\n    iconDirs<span class="token operator">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;src/assets/icons&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    svgoOptions<span class="token operator">:</span> isBuild<span class="token punctuation">,</span>\n    <span class="token comment">// 图标ID的样式</span>\n    symbolId<span class="token operator">:</span> <span class="token string">&#39;icon-[dir]-[name]&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> svgIconsPlugin<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>用于配置</p><div class="language-js"><pre><code><span class="token comment">// ...</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> configSvgIconsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./svgSprite&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createVitePlugins</span><span class="token punctuation">(</span><span class="token parameter">viteEnv<span class="token operator">:</span> ViteEnv<span class="token punctuation">,</span> isBuild<span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token comment">// vite-plugin-svg-icons</span>\n  vitePlugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">configSvgIconsPlugin</span><span class="token punctuation">(</span>isBuild<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// ...</span>\n  <span class="token keyword">return</span> vitePlugins<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>main导入</p><p>src\\main.ts</p><div class="language-js"><pre><code><span class="token comment">// ...</span>\n<span class="token keyword">import</span> <span class="token string">&#39;vite-plugin-svg-icons/register&#39;</span><span class="token punctuation">;</span>\n<span class="token comment">// ...</span>\n</code></pre></div><p>创建Svg组件</p><p>src\\components\\Icon\\index.ts</p><div class="language-js"><pre><code><span class="token keyword">import</span> SvgIcon <span class="token keyword">from</span> <span class="token string">&#39;./src/SvgIcon.vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token punctuation">{</span> Icon<span class="token punctuation">,</span> IconPicker<span class="token punctuation">,</span> SvgIcon <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><p>src\\components\\Icon\\src\\SvgIcon.vue</p><div class="language-js"><pre><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span>svg <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;vben-svg-icon&quot;</span> <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;[$attrs.class]&quot;</span> <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;getStyle&quot;</span> aria<span class="token operator">-</span>hidden<span class="token operator">=</span><span class="token string">&quot;true&quot;</span><span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>use <span class="token operator">:</span>xlink<span class="token operator">:</span>href<span class="token operator">=</span><span class="token string">&quot;symbolId&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>svg<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>\n  <span class="token keyword">import</span> type <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token comment">// import { useDesign } from &#39;/@/hooks/web/useDesign&#39;;</span>\n\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;SvgIcon&#39;</span><span class="token punctuation">,</span>\n    props<span class="token operator">:</span> <span class="token punctuation">{</span>\n      prefix<span class="token operator">:</span> <span class="token punctuation">{</span>\n        type<span class="token operator">:</span> String<span class="token punctuation">,</span>\n        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      name<span class="token operator">:</span> <span class="token punctuation">{</span>\n        type<span class="token operator">:</span> String<span class="token punctuation">,</span>\n        required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      size<span class="token operator">:</span> <span class="token punctuation">{</span>\n        type<span class="token operator">:</span> <span class="token punctuation">[</span>Number<span class="token punctuation">,</span> String<span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// const { prefixCls } = useDesign(&#39;svg-icon&#39;);</span>\n      <span class="token keyword">const</span> symbolId <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>props<span class="token punctuation">.</span>prefix<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>props<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">const</span> getStyle <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span>\n        <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">CSSProperties</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          <span class="token keyword">const</span> <span class="token punctuation">{</span> size <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>\n          <span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n          s <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>s<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;px&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n          <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            width<span class="token operator">:</span> s<span class="token punctuation">,</span>\n            height<span class="token operator">:</span> s<span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t  <span class="token comment">// prefixCls,</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span> symbolId<span class="token punctuation">,</span> getStyle <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;less&quot;</span> scoped<span class="token operator">&gt;</span>\n  <span class="token comment">// @prefix-cls: ~&#39;@{namespace}-svg-icon&#39;;</span>\n\n  <span class="token comment">// .@{prefix-cls} {</span>\n  <span class="token punctuation">.</span>vben<span class="token operator">-</span>svg<span class="token operator">-</span>icon <span class="token punctuation">{</span>\n    overflow<span class="token operator">:</span> hidden<span class="token punctuation">;</span>\n    vertical<span class="token operator">-</span>align<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">0.15</span>em<span class="token punctuation">;</span>\n    fill<span class="token operator">:</span> currentColor<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>\n</code></pre></div><h2 id="vite-plugin-mock"><a class="header-anchor" href="#vite-plugin-mock" aria-hidden="true">#</a> <a href="https://www.npmjs.com/package/vite-plugin-mock" target="_blank" rel="noopener noreferrer">vite-plugin-mock</a></h2><p><code>localEnabled</code>控制mock开发环境是否启动。<br> 如果生产环境想要使用mock，只有<code>prodEnabled</code>为<code>true</code>，<code>injectCode</code>注入指定代码时才会生效。</p><p><code>yarn add mockjs</code><br><code>yarn add vite-plugin-mock -D</code></p><p>编写Mock用例<br><code>mock\\_util.ts</code>：里面封装的是数据请求结构类型。<br><code>mock\\_createProductionServer.ts</code>：用于配置生产环境动态Mock的js文件，文档中有说。</p><p>配置Mock<br><code>build\\vite\\plugin\\mock.ts</code></p><div class="language-js"><pre><code><span class="token comment">/**\n * Mock plugin for development and production.\n * https://github.com/anncwb/vite-plugin-mock\n */</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> viteMockServe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-mock&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">configMockPlugin</span><span class="token punctuation">(</span><span class="token parameter">isBuild<span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">viteMockServe</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token comment">// ↓忽略以_开头的文件</span>\n    ignore<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\_</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n    <span class="token comment">// ↓解析根目录下的mock文件夹</span>\n    mockPath<span class="token operator">:</span> <span class="token string">&#39;mock&#39;</span><span class="token punctuation">,</span>\n    localEnabled<span class="token operator">:</span> <span class="token operator">!</span>isBuild<span class="token punctuation">,</span>\n    prodEnabled<span class="token operator">:</span> isBuild<span class="token punctuation">,</span>\n    injectCode<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n      import { setupProdMockServer } from &#39;../mock/_createProductionServer&#39;;\n      setupProdMockServer();\n      </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>配置进Vite</p><div class="language-js"><pre><code><span class="token comment">// ...</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> configMockPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./mock&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createVitePlugins</span><span class="token punctuation">(</span><span class="token parameter">viteEnv<span class="token operator">:</span> ViteEnv<span class="token punctuation">,</span> isBuild<span class="token operator">:</span> boolean<span class="token punctuation">,</span> pkg<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token comment">// vite-plugin-mock</span>\n  <span class="token constant">VITE_USE_MOCK</span> <span class="token operator">&amp;&amp;</span> vitePlugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">configMockPlugin</span><span class="token punctuation">(</span>isBuild<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> vitePlugins<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="vite-plugin-purge-icons"><a class="header-anchor" href="#vite-plugin-purge-icons" aria-hidden="true">#</a> <a href="https://www.npmjs.com/package/vite-plugin-purge-icons" target="_blank" rel="noopener noreferrer">vite-plugin-purge-icons</a></h2><p>高效的使用<a href="https://iconify.design/" target="_blank" rel="noopener noreferrer">Iconify</a>中所有的图标。</p><p><code>Iconify</code>各个版本插件的区别：</p><ul><li><a href="https://docs.iconify.design/implementations/vue/" target="_blank" rel="noopener noreferrer">Vue3版Iconify插件</a>：使用时需要安装指定库的图标，然后静态引用。每一次引用都会产生一次http请求。</li><li><a href="https://github.com/antfu/purge-icons" target="_blank" rel="noopener noreferrer">PurgeIcons</a>：将我们所使用的Iconify图标都已html的dom节点形式保存在html中，这样我们就可以不发送http请求就可以使用图标了。</li><li><a href="https://www.npmjs.com/package/vite-plugin-purge-icons" target="_blank" rel="noopener noreferrer">vite-plugin-purge-icons</a>：就是Vite版的PurgeIcons。</li></ul><p>安装</p><p><code>yarn add @iconify/iconify</code><br><code>yarn add vite-plugin-purge-icons @iconify/json --dev</code></p><p>配置Vite</p><p><code>build\\vite\\plugin\\index.ts</code></p><div class="language-js"><pre><code><span class="token comment">// ...</span>\n<span class="token keyword">import</span> PurgeIcons <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-purge-icons&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createVitePlugins</span><span class="token punctuation">(</span><span class="token parameter">viteEnv<span class="token operator">:</span> ViteEnv<span class="token punctuation">,</span> isBuild<span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token comment">// vite-plugin-purge-icons</span>\n  vitePlugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">PurgeIcons</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// ...</span>\n  <span class="token keyword">return</span> vitePlugins<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="vite-plugin-style-import"><a class="header-anchor" href="#vite-plugin-style-import" aria-hidden="true">#</a> <a href="https://www.npmjs.com/package/vite-plugin-style-import" target="_blank" rel="noopener noreferrer">vite-plugin-style-import</a></h2><p><code>yarn add vite-plugin-style-import -D</code></p><p>配置插件</p><p><code>build\\vite\\plugin\\styleImport.ts</code></p><div class="language-js"><pre><code><span class="token comment">/**\n *  Introduces component library styles on demand.\n * https://github.com/anncwb/vite-plugin-style-import\n */</span>\n<span class="token keyword">import</span> styleImport <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-style-import&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">configStyleImportPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// if (!isBuild) return [];</span>\n  <span class="token keyword">const</span> pwaPlugin <span class="token operator">=</span> <span class="token function">styleImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    libs<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        libraryName<span class="token operator">:</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">,</span>\n        esModule<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token function-variable function">resolveStyle</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">ant-design-vue/es/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/style/index</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> pwaPlugin<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>配置Vite</p><p><code>build\\vite\\plugin\\index.ts</code></p><div class="language-js"><pre><code><span class="token comment">// ...</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> configStyleImportPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./styleImport&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createVitePlugins</span><span class="token punctuation">(</span><span class="token parameter">viteEnv<span class="token operator">:</span> ViteEnv<span class="token punctuation">,</span> isBuild<span class="token operator">:</span> boolean<span class="token punctuation">,</span> pkg<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token comment">// vite-plugin-style-import</span>\n  vitePlugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">configStyleImportPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> vitePlugins<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',44);t.render=function(a,p,t,e,c,l){return n(),s("div",null,[o])};export default t;export{p as __pageData};
