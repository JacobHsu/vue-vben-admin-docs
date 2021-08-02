# Ant Design Vue

## [Spin](https://antdv.com/components/spin/#Spin)

src\utils\factory\createAsyncComponent.tsx

```js
import { Spin } from 'ant-design-vue';
<Spin spinning={true} size={size} />;
```

## [BackTop](https://antdv.com/components/back-top/#BackTop)

src\layouts\default\feature\index.vue

```js
import { BackTop } from 'ant-design-vue';
getTarget: () => document.body,
<BackTop v-if="getUseOpenBackTop" :target="getTarget" />
```
