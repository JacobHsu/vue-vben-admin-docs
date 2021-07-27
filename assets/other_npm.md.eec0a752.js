import{o as n,c as s,a}from"./app.1563fe42.js";const e='{"title":"npm","description":"","frontmatter":{},"headers":[{"level":2,"title":"@vitejs/plugin-vue-jsx","slug":"vitejs-plugin-vue-jsx"},{"level":2,"title":"vue-types","slug":"vue-types"},{"level":2,"title":"vue-router","slug":"vue-router"},{"level":2,"title":"ant-design-vue","slug":"ant-design-vue"},{"level":2,"title":"pinia","slug":"pinia"},{"level":2,"title":"@vueuse/core","slug":"vueuse-core"},{"level":2,"title":"lodash-es","slug":"lodash-es"},{"level":2,"title":"@types/node","slug":"types-node"},{"level":2,"title":"crypto-js","slug":"crypto-js"},{"level":2,"title":"vue-i18n","slug":"vue-i18n"}],"relativePath":"other/npm.md","lastUpdated":1627369960403}',t={},p=a('<h1 id="npm"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h1><p>vitejs -&gt; router -&gt; UI(ant-design-vue) -&gt; locales -&gt; store</p><h2 id="vitejs-plugin-vue-jsx"><a class="header-anchor" href="#vitejs-plugin-vue-jsx" aria-hidden="true">#</a> <a href="https://www.npmjs.com/package/@vitejs/plugin-vue-jsx" target="_blank" rel="noopener noreferrer">@vitejs/plugin-vue-jsx</a></h2><blockquote><p>Provides Vue 3 JSX &amp; TSX support with HMR.</p></blockquote><p><code>build\\vite\\plugin\\index.ts</code><br> export function createVitePlugins <code>vueJsx()</code></p><p>vite.config.ts</p><div class="language-js"><pre><code>  plugins<span class="token operator">:</span> <span class="token function">createVitePlugins</span><span class="token punctuation">(</span>viteEnv<span class="token punctuation">,</span> isBuild<span class="token punctuation">)</span><span class="token punctuation">,</span>\n</code></pre></div><h2 id="vue-types"><a class="header-anchor" href="#vue-types" aria-hidden="true">#</a> <a href="https://www.npmjs.com/package/vue-types" target="_blank" rel="noopener noreferrer">vue-types</a></h2><blockquote><p>Prop type definitions for Vue.js.</p></blockquote><p><code>src\\utils\\propTypes.ts</code></p><h2 id="vue-router"><a class="header-anchor" href="#vue-router" aria-hidden="true">#</a> <a href="https://www.npmjs.com/package/vue-router" target="_blank" rel="noopener noreferrer">vue-router</a></h2><p><code>yarn add vue-router@next</code></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>注意 先安裝 <code>ant-design-vue</code> 再按裝 <code>vue-i18n</code> 才有locales要用依賴 locales\\useLocale.ts <code>moment</code>先安裝好</p></div><p>yarn.lock</p><div class="language-js"><pre><code>ant<span class="token operator">-</span>design<span class="token operator">-</span>vue@<span class="token operator">^</span><span class="token number">2.2</span><span class="token number">.2</span><span class="token operator">:</span>\n  dependencies<span class="token operator">:</span>\n    lodash <span class="token string">&quot;^4.17.21&quot;</span>\n    lodash<span class="token operator">-</span>es <span class="token string">&quot;^4.17.15&quot;</span>\n    moment <span class="token string">&quot;^2.27.0&quot;</span>\n    omit<span class="token punctuation">.</span>js <span class="token string">&quot;^2.0.0&quot;</span>\n</code></pre></div><h2 id="ant-design-vue"><a class="header-anchor" href="#ant-design-vue" aria-hidden="true">#</a> <a href="https://antdv.com/" target="_blank" rel="noopener noreferrer">ant-design-vue</a></h2><p><code>yarn add ant-design-vue@next</code></p><h2 id="pinia"><a class="header-anchor" href="#pinia" aria-hidden="true">#</a> <a href="https://www.npmjs.com/package/pinia" target="_blank" rel="noopener noreferrer">pinia</a></h2><blockquote><p>Intuitive, type safe and flexible Store for Vue <a href="https://pinia.esm.dev/" target="_blank" rel="noopener noreferrer">Pinia Dev</a></p></blockquote><p><code>src\\store\\modules\\app.ts</code></p><p><code>yarn add pinia@next</code></p><p>main.ts</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> setupStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/store&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Configure store</span>\n  <span class="token function">setupStore</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>src\\store\\index.ts</p><div class="language-js"><pre><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">setupStore</span><span class="token punctuation">(</span><span class="token parameter">app<span class="token operator">:</span> App<span class="token operator">&lt;</span>Element<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token punctuation">{</span> store <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><p>src\\AppProvider.vue (For <code>App.vue</code>)</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useAppStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/store/modules/app&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> slots <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> appStore <span class="token operator">=</span> <span class="token function">useAppStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>src\\store\\modules\\app.ts</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> useAppStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  id<span class="token operator">:</span> <span class="token string">&#39;app&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="vueuse-core"><a class="header-anchor" href="#vueuse-core" aria-hidden="true">#</a> <a href="https://www.npmjs.com/package/@vueuse/core" target="_blank" rel="noopener noreferrer">@vueuse/core</a></h2><p><a href="https://github.com/JacobHsu/vueuse-docs" target="_blank" rel="noopener noreferrer">https://github.com/JacobHsu/vueuse-docs</a></p><p><a href="https://vueuse.org/core/usetitle/#usetitle" target="_blank" rel="noopener noreferrer">useTitle</a><br> src\\hooks\\web\\useTitle.ts</p><h2 id="lodash-es"><a class="header-anchor" href="#lodash-es" aria-hidden="true">#</a> <a href="https://www.npmjs.com/package/lodash-es" target="_blank" rel="noopener noreferrer">lodash-es</a></h2><blockquote><p>The Lodash library exported as ES modules. Lodash TS版 隨 ant-design-vue 安裝<br> ES Modules 是用于处理模块的 ECMAScript 标准。</p></blockquote><p><code>src\\utils\\cache\\persistent.ts</code></p><p>src\\store\\modules\\app.ts</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Persistent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/utils/cache/persistent&#39;</span><span class="token punctuation">;</span>\n projectConfig<span class="token operator">:</span> Persistent<span class="token punctuation">.</span><span class="token function">getLocal</span><span class="token punctuation">(</span><span class="token constant">PROJ_CFG_KEY</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n</code></pre></div><p><a href="https://lodash.com/docs/4.17.15#omit" target="_blank" rel="noopener noreferrer">lodash</a></p><p>src\\components\\Dropdown\\src\\Dropdown.vue</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> omit <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;lodash-es&#39;</span><span class="token punctuation">;</span>  <span class="token comment">// Could not find a declaration file for module &#39;lodash-es&#39;</span>\n</code></pre></div><p><code>yarn add @types/lodash-es -D</code></p><h2 id="types-node"><a class="header-anchor" href="#types-node" aria-hidden="true">#</a> <a href="https://www.npmjs.com/package/@types/node" target="_blank" rel="noopener noreferrer">@types/node</a></h2><blockquote><p>This package contains type definitions for Node.js</p></blockquote><p>vite.config.ts</p><div class="language-js"><pre><code><span class="token function">resolve</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">,</span> dir<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="crypto-js"><a class="header-anchor" href="#crypto-js" aria-hidden="true">#</a> <a href="https://www.npmjs.com/package/crypto-js" target="_blank" rel="noopener noreferrer">crypto-js</a></h2><blockquote><p>JavaScript library of crypto standards.</p></blockquote><p><code>src\\utils\\cipher.ts</code></p><h2 id="vue-i18n"><a class="header-anchor" href="#vue-i18n" aria-hidden="true">#</a> <a href="https://kazupon.github.io/vue-i18n/" target="_blank" rel="noopener noreferrer">vue-i18n</a></h2><p>Cannot find module &#39;vue-i18n&#39; or its corresponding type declarations.</p><p>vite.config.ts</p><div class="language-js"><pre><code>  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    base<span class="token operator">:</span> <span class="token constant">VITE_PUBLIC_PATH</span><span class="token punctuation">,</span>\n    root<span class="token punctuation">,</span>\n    resolve<span class="token operator">:</span> <span class="token punctuation">{</span>\n      alias<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          find<span class="token operator">:</span> <span class="token string">&#39;vue-i18n&#39;</span><span class="token punctuation">,</span>\n          replacement<span class="token operator">:</span> <span class="token string">&#39;vue-i18n/dist/vue-i18n.cjs.js&#39;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre></div>',52);t.render=function(a,e,t,o,c,r){return n(),s("div",null,[p])};export default t;export{e as __pageData};
