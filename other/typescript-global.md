# TS扩展全局变量类型推导

::: warning
declare問題 修改 tsconfig.json
:::

types\global.d.ts `declare`

> A 'declare' modifier cannot be used in an already ambient context.ts(1038)

这里的意思是我们在一个已经存在的模块中使用了declare，因为global作用域作用在全局，应该是一个内置的模块

tsconfig.json文件配置`skipLibCheck: true` [skipLibCheck链接](https://www.typescriptlang.org/tsconfig#skipLibCheck)（vben中采用的方式）

tsconfig.json

```js
"compilerOptions": {
    "skipLibCheck": true,
}
```

include中加入我们对全局可以引用的文件

```js
  "include": [
    ...
    "types/**/*.d.ts",
    "types/**/*.ts",
    "vite.config.ts"
  ]
```

skipLibCheck的实际作用：启用它会阻止Typescript对整个导入的库进行类型检查。
相反，Typescript只会针对这些类型对您使用的代码进行类型检查。
skipLibCheck会降低类型检查的能力，理想情况下我们不会使用它。但是并不是每个库都提供完美的类型，因此跳过它可能会很好。

build\generate\generateModifyVars.ts

> Could not find a declaration file for module 'ant-design-vue/dist/theme'

```js
  "include": [
    ...
    "build/**/*.ts",
    "build/**/*.d.ts",
    "vite.config.ts"
  ]
```

## noImplicitAny

tsconfig.json

```js
"noImplicitAny": false,
```

noImplicitAny意思是是否不允許typescript編譯時隱性將沒有設定類型的變數設定為any。如果設定為true的話，如果typescript裡面有沒有設定類型的變數則會產生錯誤訊息

## References

[TS扩展全局变量类型推导](https://sunboyzgz.github.io/2021/05/20/typescript-global/)