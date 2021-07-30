# npm

vitejs -> router -> UI(ant-design-vue) -> store -> locales

## [@vitejs/plugin-vue-jsx](https://www.npmjs.com/package/@vitejs/plugin-vue-jsx)
> Provides Vue 3 JSX & TSX support with HMR.  

`build\vite\plugin\index.ts`  
export function createVitePlugins `vueJsx()`  

vite.config.ts

```js
  plugins: createVitePlugins(viteEnv, isBuild),
```

## [vue-types](https://www.npmjs.com/package/vue-types)
> Prop type definitions for Vue.js.  

`src\utils\propTypes.ts`

## [vue-router](https://www.npmjs.com/package/vue-router)  

`yarn add vue-router@next`

::: tip
注意 先安裝 `ant-design-vue` 再按裝 `vue-i18n`  
才有locales要用依賴 locales\useLocale.ts `moment`先安裝好
:::

yarn.lock

```js
ant-design-vue@^2.2.2:
  dependencies:
    lodash "^4.17.21"
    lodash-es "^4.17.15"
    moment "^2.27.0"
    omit.js "^2.0.0"
```

## [ant-design-vue](https://antdv.com/)

`yarn add ant-design-vue@next`

## [pinia](https://www.npmjs.com/package/pinia)
> Intuitive, type safe and flexible Store for Vue  [Pinia Dev](https://pinia.esm.dev/)

`src\store\modules\app.ts`

`yarn add pinia@next`

main.ts

```js
import { setupStore } from '/@/store';
async function bootstrap() {
  // Configure store
  setupStore(app);
}
```

src\store\index.ts

```js
import type { App } from 'vue';
import { createPinia } from 'pinia';

const store = createPinia();

export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };
```

src\AppProvider.vue (For `App.vue`)

```js
import { useAppStore } from '/@/store/modules/app';
export default defineComponent({
    setup(props, { slots }) {
        const appStore = useAppStore();
```

src\store\modules\app.ts

```js
import { defineStore } from 'pinia';

export const useAppStore = defineStore({
  id: 'app',
});
```

## [@vueuse/core](https://www.npmjs.com/package/@vueuse/core)

https://github.com/JacobHsu/vueuse-docs  

[useTitle](https://vueuse.org/core/usetitle/#usetitle)  
src\hooks\web\useTitle.ts

## [lodash-es](https://www.npmjs.com/package/lodash-es)
> The Lodash library exported as ES modules. Lodash TS版  
隨 ant-design-vue 安裝  但type檢查要另外安裝 `@types/lodash-es`  
ES Modules 是用于处理模块的 ECMAScript 标准。

`src\utils\cache\persistent.ts`

src\store\modules\app.ts

```js
import { Persistent } from '/@/utils/cache/persistent';
 projectConfig: Persistent.getLocal(PROJ_CFG_KEY),
```

[lodash](https://lodash.com/docs/4.17.15#omit)

src\components\Dropdown\src\Dropdown.vue

```js
import { omit } from 'lodash-es';  // Could not find a declaration file for module 'lodash-es'
```

`yarn add @types/lodash-es -D`

## [@types/node](https://www.npmjs.com/package/@types/node)
> This package contains type definitions for Node.js

vite.config.ts

```js
resolve(process.cwd(), '.', dir);
```

## [vite-plugin-theme](https://www.npmjs.com/package/vite-plugin-theme)
> Vite plugin for dynamically changing the theme color of the interface

::: tip
vite-plugin-xx 要至`build\vite\plugin\` vitePlugins.push 加載
與到 `tsconfig.json` 設定 types
:::

src\logics\theme\index.ts  
`yarn add vite-plugin-theme -D`  

build\vite\plugin\theme.ts [viteThemePlugin](https://www.npmjs.com/package/vite-plugin-theme)

build\vite\plugin\index.ts

```js
 //vite-plugin-theme
  vitePlugins.push(configThemePlugin(isBuild));
```

> Uncaught ReferenceError: __COLOR_PLUGIN_OUTPUT_FILE_NAME__ is not defined

src\logics\theme\dark.ts

```js
import { darkCssIsReady, loadDarkThemeCss } from 'vite-plugin-theme/es/client';
```

tsconfig.json

```js
  "compilerOptions": {
    ...
    "typeRoots": ["./node_modules/@types/", "./types"],
```

## [crypto-js](https://www.npmjs.com/package/crypto-js)
> JavaScript library of crypto standards.

`src\utils\cipher.ts`

src\utils\cache\storageCache.ts

```js
import type { EncryptionParams } from '/@/utils/cipher';
import { AesEncryption } from '/@/utils/cipher';
```

`yarn add crypto-js`  
`yarn add @types/crypto-js -D`  

## [vue-i18n](https://kazupon.github.io/vue-i18n/)

Cannot find module 'vue-i18n' or its corresponding type declarations.

`yarn add vue-i18n@next`  

vite.config.ts

```js
  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: [
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        },
```

## [commitizen](https://www.npmjs.com/package/commitizen)  

`yarn add commitizen -D`

commitizen@^4.0.3, commitizen@^4.2.4:
 dependencies:
  inquirer "6.5.2"

[inquirer](https://www.npmjs.com/package/inquirer)
> A collection of common interactive command line user interfaces.

## [@iconify/iconify](https://www.npmjs.com/package/@iconify/iconify)

vite.config.ts

```js
    // The vite plugin used by the project. The quantity is large, so it is separately extracted and managed
    plugins: createVitePlugins(viteEnv, isBuild),

    optimizeDeps: {
      // @iconify/iconify: The dependency is dynamically and virtually loaded by @purge-icons/generated, so it needs to be specified explicitly
      include: [
        '@iconify/iconify',
        'ant-design-vue/es/locale/zh_CN',
        'moment/dist/locale/zh-cn',
        'ant-design-vue/es/locale/en_US',
        'moment/dist/locale/eu',
      ],
      exclude: ['vue-demi', 'consolidate'],
    },
```

[@purge-icons/generated](https://www.npmjs.com/package/@purge-icons/generated)

`yarn add @purge-icons/generated -D`

src\components\Icon\src\Icon.vue

```js
import Iconify from '@purge-icons/generated';
```

::: warning
error An unexpected error occurred: `"EPERM: operation not permitted, unlink 'C:\\vue-vite-admin\\node_modules\\vite\\node_modules\\esbuild\\esbuild.exe'"`.  
要關閉運行中的程式 再進行安裝NPM
:::