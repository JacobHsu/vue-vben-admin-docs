# build\vite\plugin

### [Vite配置-server.hmr](https://cn.vitejs.dev/config/#server-hmr)

禁用或配置 HMR 连接（用于 HMR websocket 必须使用不同的 http 服务器地址的情况）。

设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层。

这个就是配置Vite的热更新的。文档中说的服务器错误遮罩层，就是你在代码中编写编写错误的代码，编译不通过的时候，浏览器页面也会同时展示一个灰屏上面显示你的代码错误。

build\vite\plugin

```js
import { configHmrPlugin } from './hmr';

  // TODO
  !isBuild && vitePlugins.push(configHmrPlugin());
```

### [Vite配置-build.minify](https://cn.vitejs.dev/config/#build-minify)

默认为 Terser，虽然 [Terser](https://github.com/terser/terser) 相对较慢，但大多数情况下构建后的文件体积更小。ESbuild 最小化混淆更快但构建后的文件相对更大

其实不用配置，默认即可。

build\vite\plugin

```js
import { configHtmlPlugin } from './html';

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));
```

vite.config.ts

```js
build: {
    terserOptions: {
    compress: {
        keep_infinity: true, // 通过true以防止Infinity被压缩为1/0，这可能会导致Chrome出现性能问题。
        // Used to delete console in production environment 用于删除生产环境中的console
        drop_console: VITE_DROP_CONSOLE, // -传递true以放弃对console.*函数的调用。 .env.development false | .env.production : true
    },
    },
```

### [Vite配置-build.brotlisize](https://cn.vitejs.dev/config/#build-brotlisize)

启用/禁用 brotli 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。

禁用就好。

vite.config.ts

```js
build: {
    ...   
    // Turning off brotliSize display can slightly reduce packaging time
    brotliSize: false,
```

### [Vite配置-build.chunksizewarninglimit](https://cn.vitejs.dev/config/#build-chunksizewarninglimit)

在编写代码时，您可能已经添加了许多代码拆分点以按需加载内容。编译后，您可能会注意到一些块太小了-造成更大的HTTP开销。LimitChunkCountPlugin可以通过合并来对您的块进行后处理。

vite.config.ts

```js
build: {
    ...   
    chunkSizeWarningLimit: 2000,
```

### [Vite配置- css.preprocessorOptions](https://www.pipipi.net/vite/config/#css-preprocessoroptions)

指定传递给 CSS 预处理器的选项。

vite.config.ts

```js
import { generateModifyVars } from './build/generate/generateModifyVars';
css: {
    preprocessorOptions: {
        // 用于全局导入，以避免需要单独导入每个样式文件。
        less: {
            // 在全局less文件后面添加变量的配置。modifyVars对应的对象属性名会加上@追加到less文件后。
            modifyVars: generateModifyVars(),
            javascriptEnabled: true,
        },
    },
},
```

Antd框架使用的是`less`  
`src\design\index.less`：全局样式，在`main.ts`中使用。  
`src\design\config.less`：全局变量，在`vite.config.ts`中使用。  