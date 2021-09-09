# package.json

## [http-server](https://www.npmjs.com/package/http-server)

项目编译之后的静态文件是不能直接本地访问的。因为本地访问使用的是`file://`协议。而`file://`不支持跨域和一些其他特性。比如JavaScript模块、PWA等等。

那么此时就需要换一种访问本地文件的方式了，就是让本地成为一个服务器。通过http来访问。

`http-server`就可以实现以http形式访问本地文件的目的。

`yarn add http-server -D`

package.json

```js
{
  // ...
  "scripts": {
    // ...
    "test:gzip": "http-server dist --cors --gzip -c-1",
    "test:br": "http-server dist --cors --brotli -c-1",
    // ...
  },
  // ...
}
```
