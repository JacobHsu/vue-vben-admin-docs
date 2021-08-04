# QA

Q: index.html `<%= title %>`?
A: npm vite-plugin-html 
EX: [commit](https://github.com/JacobHsu/vue-vite-admin/commit/bf4ce7917325460a4c9c07ef6a645a72ba991941)

---

Q: src\layouts\default\index.vue  `<style lang="less"> @prefix-cls: ~'@{namespace}-default-layout';`?  
A: src\design\var\index.less `@namespace: vben;`
Resunt: `.vben-default-layout { background-color: #f4f7f9; }`

> Uncaught ReferenceError: Cannot access 'Icon' before initialization

src\components\Icon\src\SvgIcon.vue

```js
  import { useDesign } from '/@/hooks/web/useDesign';
  const { prefixCls } = useDesign('svg-icon');
```

---

Q: src\components\Application\index.ts `AppLocalePicker` Error?
A: App.vue 的 `AppProvider` 要先加載 `AppLocalePicker` 使用 useContext  `AppProvider` 提供 `createContext`

import { createContext, useContext } from '/@/hooks/core/useContext';

useContext FAIL 在 createContext 沒生成  
src\components\Application\src\AppProvider.vue  生成 createContext

src\components\Application\index.ts

```js
export const AppProvider = withInstall(appProvider); // 必須先執行 生成 createContext
export const AppLocalePicker = withInstall(appLocalePicker); // useContext 才能使用
```
