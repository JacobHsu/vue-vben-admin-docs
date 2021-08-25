# vite插件

## [vite-plugin-svg-icon](https://www.npmjs.com/package/vite-plugin-svg-icons)

当你使用该插件的时候，指定好存放`svg`的文件夹。再按照指定的方式去访问svg图片。就可以再不产生http请求的情况下渲染出`svg`图片。

使用该插件时，插件会自动将所有svg图片加载到`HTML`中。并且每一个svg将会被过滤去无用的信息数据。让svg达到最小的值。之后使用svg图片就只需要操作`DOM`即可，而不需要发送`http`请求。

安装

`yarn add vite-plugin-svg-icons --dev`

创建配置

build\vite\plugin\svgSprite.ts

```js
/**
 *  Vite Plugin for fast creating SVG sprites.
 * https://github.com/anncwb/vite-plugin-svg-icons
 */

import SvgIconsPlugin from 'vite-plugin-svg-icons';
import path from 'path';

export function configSvgIconsPlugin(isBuild: boolean) {
  const svgIconsPlugin = SvgIconsPlugin({
    // ↓本地svg图片地址
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    svgoOptions: isBuild,
    // 图标ID的样式
    symbolId: 'icon-[dir]-[name]',
  });
  return svgIconsPlugin;
}
```

用于配置

```js
// ...
import { configSvgIconsPlugin } from './svgSprite';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  // ...
  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild));
  // ...
  return vitePlugins;
}
```

main导入

src\main.ts

```js
// ...
import 'vite-plugin-svg-icons/register';
// ...
```

创建Svg组件

src\components\Icon\index.ts

```js
import SvgIcon from './src/SvgIcon.vue';
export { Icon, IconPicker, SvgIcon };
```

src\components\Icon\src\SvgIcon.vue

```js
<template>
  <svg class="vben-svg-icon" :class="[$attrs.class]" :style="getStyle" aria-hidden="true">
    <use :xlink:href="symbolId" />
  </svg>
</template>
<script lang="ts">
  import type { CSSProperties } from 'vue';
  import { defineComponent, computed } from 'vue';
  // import { useDesign } from '/@/hooks/web/useDesign';

  export default defineComponent({
    name: 'SvgIcon',
    props: {
      prefix: {
        type: String,
        default: 'icon',
      },
      name: {
        type: String,
        required: true,
      },
      size: {
        type: [Number, String],
        default: 16,
      },
    },
    setup(props) {
      // const { prefixCls } = useDesign('svg-icon');
      const symbolId = computed(() => `#${props.prefix}-${props.name}`);

      const getStyle = computed(
        (): CSSProperties => {
          const { size } = props;
          let s = `${size}`;
          s = `${s.replace('px', '')}px`;
          return {
            width: s,
            height: s,
          };
        }
      );
	  // prefixCls,
      return { symbolId, getStyle };
    },
  });
</script>
<style lang="less" scoped>
  // @prefix-cls: ~'@{namespace}-svg-icon';

  // .@{prefix-cls} {
  .vben-svg-icon {
    overflow: hidden;
    vertical-align: -0.15em;
    fill: currentColor;
  }
</style>
```

## [vite-plugin-mock](https://www.npmjs.com/package/vite-plugin-mock)

`localEnabled`控制mock开发环境是否启动。  
如果生产环境想要使用mock，只有`prodEnabled`为`true`，`injectCode`注入指定代码时才会生效。

`yarn add mockjs`  
`yarn add vite-plugin-mock -D`  

编写Mock用例  
`mock\_util.ts`：里面封装的是数据请求结构类型。  
`mock\_createProductionServer.ts`：用于配置生产环境动态Mock的js文件，文档中有说。

配置Mock  
`build\vite\plugin\mock.ts`

```js
/**
 * Mock plugin for development and production.
 * https://github.com/anncwb/vite-plugin-mock
 */
import { viteMockServe } from 'vite-plugin-mock';

export function configMockPlugin(isBuild: boolean) {
  return viteMockServe({
    // ↓忽略以_开头的文件
    ignore: /^\_/,
    // ↓解析根目录下的mock文件夹
    mockPath: 'mock',
    localEnabled: !isBuild,
    prodEnabled: isBuild,
    injectCode: `
      import { setupProdMockServer } from '../mock/_createProductionServer';
      setupProdMockServer();
      `,
  });
}
```

配置进Vite

```js
// ...
import { configMockPlugin } from './mock';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean, pkg: any) {
  // ...
  // vite-plugin-mock
  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild));

  return vitePlugins;
}
```