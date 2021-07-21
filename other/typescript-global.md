# TS扩展全局变量类型推导

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

skipLibCheck的实际作用：启用它会阻止Typescript对整个导入的库进行类型检查。
相反，Typescript只会针对这些类型对您使用的代码进行类型检查。
skipLibCheck会降低类型检查的能力，理想情况下我们不会使用它。但是并不是每个库都提供完美的类型，因此跳过它可能会很好。

## References

[TS扩展全局变量类型推导](https://sunboyzgz.github.io/2021/05/20/typescript-global/)