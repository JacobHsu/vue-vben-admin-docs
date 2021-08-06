# TS扩展全局变量类型推导

配置文件

tsconfig.json

```js
{
  "compilerOptions": {
    // ↓指定ECMAScript目标版本，esnext为最新版本
    "target": "esnext",
    // ↓指定生成哪个模块系统代码，esnext为最新版本
    "module": "esnext",
    // ↓决定如何处理模块。
    "moduleResolution": "node",
    // ↓启用所有严格类型检查选项。
    "strict": true,
    // ↓禁止对同一个文件的不一致的引用。
    "forceConsistentCasingInFileNames": true,
    // ↓允许从没有设置默认导出的模块中默认导入。这并不影响代码的输出，仅为了类型检查。
    "allowSyntheticDefaultImports": true,
    // ↓禁用函数参数双向协变检查。
    "strictFunctionTypes": false,
    // ↓在 .tsx文件里支持JSX
    "jsx": "preserve",
    // ↓解析非相对模块名的基准目录。查看 模块解析文档了解详情。
    "baseUrl": ".",
    // ↓允许编译javascript文件。
    "allowJs": true,
    // ↓生成相应的 .map文件。
    "sourceMap": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    // ↓若有未使用的局部变量则抛错。
    "noUnusedLocals": true,
    // ↓若有未使用的参数则抛错。
    "noUnusedParameters": true,
    // ↓启用实验性的ES装饰器。
    "experimentalDecorators": true,
    // ↓编译过程中需要引入的库文件的列表。
    "lib": ["dom", "esnext"],
    // ↓要包含的类型声明文件名列表。
    "types": ["vite/client"],
    // ↓要包含的类型声明文件路径列表。
    "typeRoots": ["./node_modules/@types/", "./types"],
    "incremental": true,
    // ↓在表达式和声明上有隐含的 any类型时报错。
    "noImplicitAny": false,
    // ↓忽略所有的声明文件（ *.d.ts）的类型检查。
    "skipLibCheck": true,
    // ↓模块名到基于 baseUrl的路径映射的列表。查看 模块解析文档了解详情。
    "paths": {
      "/@/*": ["src/*"],
      "/#/*": ["types/*"]
    }
  },
  // ↓指定一个匹配列表（属于自动指定该路径下的所有ts相关文件）
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "types/**/*.d.ts",
    "types/**/*.ts",
    "mock/**/*.ts"
  ],
  // 指定一个排除列表（include的反向操作）
  "exclude": ["node_modules", "dist", "**/*.js"]
}

```

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