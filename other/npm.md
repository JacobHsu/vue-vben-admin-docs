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

## [lodash-es](https://www.npmjs.com/package/lodash-es)
> The Lodash library exported as ES modules.

ES Modules 是用于处理模块的 ECMAScript 标准。

`src\utils\cache\persistent.ts`

src\store\modules\app.ts

```js
import { Persistent } from '/@/utils/cache/persistent';
 projectConfig: Persistent.getLocal(PROJ_CFG_KEY),
```

## [@types/node](https://www.npmjs.com/package/@types/node)
> This package contains type definitions for Node.js

vite.config.ts

```js
resolve(process.cwd(), '.', dir);
```

## [crypto-js](https://www.npmjs.com/package/crypto-js)
> JavaScript library of crypto standards.

`src\utils\cipher.ts`
