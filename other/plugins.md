# 插件

:::tip 注意
Vite 旨在为常见的 web 开发工作提供开箱即用的支持。在搜索一个 Vite 或 Rollup 兼容插件之前，请先查看 [功能指引](https://cn.vitejs.dev/guide/features.html)。很多场景下，在 Rollup 项目中需要添加插件，而在 Vite 中已经内建支持了。
:::

## 官方插件

### [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)

- 提供 Vue 3 单文件组件支持

### [@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx) 

- 提供 Vue 3 JSX 支持（通过 [专用的 Babel 转换插件](https://github.com/vuejs/jsx-next)）。  
`vben-admin-thin-next\build\vite\plugin\index.ts`

### [@vitejs/plugin-react-refresh](https://github.com/vitejs/vite/tree/main/packages/plugin-react-refresh) 

- 提供 React Fast Refresh 支持

### [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy) 

- 为打包后的文件提供传统浏览器兼容性支持

## vite-plugin

build\vite\plugin\index.ts

yarn add @vitejs/plugin-vue @vitejs/plugin-vue-jsx

```js
    "@vitejs/plugin-vue": "^1.2.5",
    "@vitejs/plugin-vue-jsx": "^1.1.6",
```


src\components\Icon\src\IconPicker.vue  
`import svgIcons from 'virtual:svg-icons-names';`

```js
  "devDependencies": {
    "vite-plugin-compression": "^0.3.1",
    "vite-plugin-html": "^2.0.7",
    "vite-plugin-imagemin": "^0.4.1",
    "vite-plugin-mock": "^2.9.3",
    "vite-plugin-purge-icons": "^0.7.0",
    "vite-plugin-pwa": "^0.8.1",
    "vite-plugin-style-import": "^1.0.1",
    "vite-plugin-svg-icons": "^1.0.1",
    "vite-plugin-theme": "^0.8.1",
```

### [vite-plugin-theme](https://www.npmjs.com/package/vite-plugin-theme)
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

### [vite-plugin-svg-icons](https://www.npmjs.com/packagevite-plugin-svg-icons)

`yarn add vite-plugin-svg-icons -D`  

build\vite\plugin\index.ts

```js
import { configSvgIconsPlugin } from './svgSprite';
  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild));
```

build\vite\plugin\svgSprite.ts

```js
import SvgIconsPlugin from 'vite-plugin-svg-icons';
  const svgIconsPlugin = SvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
```

src\components\Icon\src\IconPicker.vue

```js
import svgIcons from 'virtual:svg-icons-names';
```

## 社区插件

> 查看 [awesome-vite](https://github.com/vitejs/awesome-vite#plugins) - 你也可以通过 PR 的方式将你的插件添加到此列表中。

## Rollup 插件

[Vite 插件](https://cn.vitejs.dev/guide/api-plugin.html) 是 Rollup 插件接口的一种扩展。查看 [Rollup 插件兼容性章节](https://cn.vitejs.dev/guide/api-plugin.html#rollup-plugin-compatibility) 获取更多信息。
