# vite

vite\plugin\theme.ts

> process.cwd() 返回 Node.js 进程的当前工作目录。

```js
   antdDarkThemePlugin({
      preloadFiles: [
        path.resolve(process.cwd(), 'node_modules/ant-design-vue/dist/antd.less'),
        path.resolve(process.cwd(), 'src/design/index.less'),
```

## vite.config.ts

```js
import { generateModifyVars } from './build/generate/generateModifyVars';
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: generateModifyVars(),
          javascriptEnabled: true,
        },
      },
    },
```

build\generate\icon\index.ts

[fs-extra](https://www.npmjs.com/package/fs-extra)  
> fs-extra adds file system methods that aren't included in the native fs module and adds promise support to the fs methods.

[inquirer](https://www.npmjs.com/package/inquirer)  
> A collection of common interactive command line user interfaces.

[@iconify/json](https://www.npmjs.com/package/@iconify/json)
> This is collection of SVG icons created by various authors, released under various free licenses.

`yarn add fs-extra @types/fs-extra -D`  
`yarn add inquirer @types/inquirer -D`  
`yarn add @iconify/json -D`  

## vite-plugin-purge-icons

`yarn add @iconify/iconify`  
`yarn add vite-plugin-purge-icons @iconify/json -D`

build\vite\plugin\index.ts

```js
import purgeIcons from 'vite-plugin-purge-icons';

  // vite-plugin-purge-icons
  vitePlugins.push(purgeIcons());
```

components\Icon\src\Icon.vue

```js
  import Iconify from '@purge-icons/generated';
  const svg = Iconify.renderSVG(icon, {});
```

vite.config.ts

```js
    optimizeDeps: {
      // @iconify/iconify: The dependency is dynamically and virtually loaded by @purge-icons/generated, so it needs to be specified explicitly
      include: [
        '@iconify/iconify',
```
