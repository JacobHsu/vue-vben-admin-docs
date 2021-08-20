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

## script

script是用于Vben的动态配置环境变量的。

生成配置文件  
`build\script\buildConf.ts`  

`yarn add fs-extra @types/fs-extra --dev`

```js
import fs, { writeFileSync } from 'fs-extra';
 // ↓创建dist文件夹
  fs.mkdirp(getRootPath(OUTPUT_DIR));
  // ↓将字符串写入到dist文件下的指定JS文件名的文件中
  writeFileSync(getRootPath(`${OUTPUT_DIR}/${configFileName}`), configStr);

export function runBuildConfig() {
  // ↓获取我们可以配置的环境变量对象
  const config = getEnvConfig();
  // ↓获取配置文件的JS名
  const configFileName = getConfigFileName(config);
  // ↓创建文件
  createConfig({ config, configName: configFileName });
}
```

[yargs](https://www.npmjs.com/package/yargs)：读取你执行的命令行命令中的参数选项。

```sh
yarn add yargs --dev
yarn add @types/yargs --dev
```

脚本触发文件
`build\script\postBuild.ts`

[esno](https://www.npmjs.com/package/esno) 命令行执行一个TS文件

TypeScript / ESNext node runtime powered by esbuild

package.json

```js
    "build": "cross-env NODE_ENV=production vite build && esno ./build/script/postBuild.ts",
    "build:test": "cross-env vite build --mode test && esno ./build/script/postBuild.ts",
```

index.html注入配置文件

`build\vite\plugin\html.ts`
