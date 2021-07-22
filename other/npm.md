# npm

## [vue-types](https://www.npmjs.com/package/vue-types)
> Prop type definitions for Vue.js.  

`src\utils\propTypes.ts`

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

## [crypto-js](https://www.npmjs.com/package/crypto-js)
> JavaScript library of crypto standards.

`src\utils\cipher.ts`

## [vue-i18n](https://kazupon.github.io/vue-i18n/)

Cannot find module 'vue-i18n' or its corresponding type declarations.

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
