import{o as e,c as s,a}from"./app.09f17e8a.js";const n='{"title":"npm","description":"","frontmatter":{},"headers":[{"level":2,"title":"vue-typess","slug":"vue-typess"},{"level":2,"title":"pinia","slug":"pinia"},{"level":2,"title":"lodash-es","slug":"lodash-es"},{"level":2,"title":"@types/node","slug":"types-node"},{"level":2,"title":"crypto-js","slug":"crypto-js"}],"relativePath":"other/npm.md","lastUpdated":1626775160222}',t={},p=a('<h1 id="npm"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h1><h2 id="vue-typess"><a class="header-anchor" href="#vue-typess" aria-hidden="true">#</a> <a href="https://www.npmjs.com/package/vue-types" target="_blank" rel="noopener noreferrer">vue-types</a>s</h2><blockquote><p>Prop type definitions for Vue.js.</p></blockquote><p><code>src\\utils\\propTypes.ts</code></p><h2 id="pinia"><a class="header-anchor" href="#pinia" aria-hidden="true">#</a> <a href="https://www.npmjs.com/package/pinia" target="_blank" rel="noopener noreferrer">pinia</a></h2><blockquote><p>Intuitive, type safe and flexible Store for Vue</p></blockquote><p><code>src\\store\\modules\\app.ts</code></p><p><code>yarn add pinia@next</code></p><h2 id="lodash-es"><a class="header-anchor" href="#lodash-es" aria-hidden="true">#</a> <a href="https://www.npmjs.com/package/lodash-es" target="_blank" rel="noopener noreferrer">lodash-es</a></h2><blockquote><p>The Lodash library exported as ES modules.</p></blockquote><p>ES Modules 是用于处理模块的 ECMAScript 标准。</p><p><code>src\\utils\\cache\\persistent.ts</code></p><p>src\\store\\modules\\app.ts</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Persistent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/utils/cache/persistent&#39;</span><span class="token punctuation">;</span>\n projectConfig<span class="token operator">:</span> Persistent<span class="token punctuation">.</span><span class="token function">getLocal</span><span class="token punctuation">(</span><span class="token constant">PROJ_CFG_KEY</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n</code></pre></div><h2 id="types-node"><a class="header-anchor" href="#types-node" aria-hidden="true">#</a> <a href="https://www.npmjs.com/package/@types/node" target="_blank" rel="noopener noreferrer">@types/node</a></h2><blockquote><p>This package contains type definitions for Node.js</p></blockquote><p>vite.config.ts</p><div class="language-js"><pre><code><span class="token function">resolve</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">,</span> dir<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="crypto-js"><a class="header-anchor" href="#crypto-js" aria-hidden="true">#</a> <a href="https://www.npmjs.com/package/crypto-js" target="_blank" rel="noopener noreferrer">crypto-js</a></h2><blockquote><p>JavaScript library of crypto standards.</p></blockquote><p><code>src\\utils\\cipher.ts</code></p>',21);t.render=function(a,n,t,o,r,c){return e(),s("div",null,[p])};export default t;export{n as __pageData};
