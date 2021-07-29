# css

config: vite.config.ts -> build/generate/generateModifyVars -> src/design/color.less  
load:  main.ts ->  design/index.less ->  src\design\public.less  
usage: vite.config.ts -> build\vite\plugin\index.ts ->  build\vite\plugin\theme.ts

## config

vite.config.ts

```js
import { generateModifyVars } from './build/generate/generateModifyVars';
import { createVitePlugins } from './build/vite/plugin';

 return {
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: generateModifyVars(),
          javascriptEnabled: true,
        },
      },
    },

    // The vite plugin used by the project. The quantity is large, so it is separately extracted and managed
    plugins: createVitePlugins(viteEnv, isBuild),
 }
```

build/generate/generateModifyVars

```js
return {
    hack: `${modifyVars.hack} @import (reference) "${resolve('src/design/config.less')}";`,
```

src/design/config.less

```js
@import (reference) 'color.less';
```

src/design/color.less

```js
// Dark-dark
@border-color-dark: #b6b7b9;
```

## load

main.ts

```js
import '/@/design/index.less';
```

design/index.less

```js
@import 'public.less';
```

src\design\public.less

```js
::-webkit-scrollbar-thumb:hover {
  background-color: @border-color-dark;
}
```

## usage

build\vite\plugin\index.ts

```js
import { configThemePlugin } from './theme';
```

build\vite\plugin\theme.ts

```js
import { generateModifyVars } from '../../generate/generateModifyVars';

 antdDarkThemePlugin({
      preloadFiles: [
        path.resolve(process.cwd(), 'node_modules/ant-design-vue/dist/antd.less'),
        path.resolve(process.cwd(), 'src/design/index.less'),
      ],
      ...
      // extractCss: false,
      darkModifyVars: {
        ...generateModifyVars(true),
        'text-color': '#c9d1d9',
```

## debug

> UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch().

src\design\public.less

```js
::-webkit-scrollbar-thumb:hover {
  background-color: @border-color-dark; // `@border-color-dark` 無法辨識
}
```
