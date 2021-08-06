# 项目配置项

Vite创建的项目时使用的是`vue-ts`模板，所以在创建项目的时候`package.json`就自带`了typescript`。该依赖会编译我们的ts文件。

[官方文档-tsconfig.json文件](https://www.tslang.cn/docs/handbook/tsconfig-json.html)  
[官方文档-TS编译选项](https://www.tslang.cn/docs/handbook/compiler-options.html)  
[参考链接](https://www.kuxiaoxin.com/archives/9)  

## 配置文件 tsconfig.json

tsconfig.json

```json
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

## 安装ESLint

`ESLint`简单的来说就是去判断你的JS代码写的格式对不对的一个依赖。有了它你的代码可以写的更漂亮。
`Vue3`对应`eslint-plugin-vue`。

[ESLint的配置规则](https://eslint.org/docs/rules/)

`yarn add eslint -D` or `yarn add eslint --dev`

.eslintrc.js

```js
module.exports = {
  // ↓默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。如果你想要你所有项目都遵循一个特定的约定时，这将会很有用，但有时候会导致意想不到的结果。为了将 ESLint 限制到一个特定的项目，在你项目根目录下的 package.json 文件或者 .eslintrc.* 文件里的 eslintConfig 字段下设置 "root": true。ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
  // ↓此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  // ↓指定你想启用的环境
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // ↓设置解析器
  parser: "",
  // ↓解析器选项
  parserOptions: {},
  // ↓扩展项
  extends: [],
  // ↓自定义规则配置
  rules: {},
};
```

.eslintignore

```js
*.sh
node_modules
*.md
*.woff
*.ttf
.vscode
.idea
dist
/public
/docs
.husky
.local
/bin
Dockerfile
```

## 安装eslint-plugin-vue

> `ESLint`是检查JS代码的依赖，那么它怎么去检查`Vue`语法的文件呢？  
需要安装vue官方开发的`ESLint`插件`eslint-plugin-vue`。  
这样`ESLint`就知道该怎么检查`vue`的文件了。

vue-eslint-parser

[vue eslint 升级_ESLint 的 parser 是个什么东西](https://blog.csdn.net/weixin_34138673/article/details/113536473)  
ESLint 会对我们的代码进行校验，而 parser 的作用是将我们写的代码转换为 ESTree，ESLint 会对 ESTree 进行校验。

::: tip
怎么理解`eslint-plugin-vue`和`vue-eslint-parser`的关系呢?
:::

`vue-eslint-parser`将vue文件转换成`ESTree`。然后使用`eslint-plugin-vue`来检查这个`ESTree`。查出的结果交给`ESLint`。

> `yarn add eslint-plugin-vue vue-eslint-parser -D`

将插件配置进ESLint

.eslintrc.js

```js
module.exports = {
  // ...
  parser: 'vue-eslint-parser',
  // ...
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  // ...
};
```

## 安装@typescript-eslint

安装`eslint-plugin-vue`和`vue-eslint-parser`
同理需要安装`@typescript-eslint/eslint-plugin`和`@typescript-eslint/parser`

[TS-ESLint规则](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)

`yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser -D`

将插件配置进ESLint

.eslintrc.js

```js
module.exports = {
  // ...
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  extends: ["plugin:vue/vue3-recommended", "plugin:@typescript-eslint/recommended"],
  // ...
};
```

## 安装eslint-plugin-prettier

`prettier`用来格式化代码的。一般IDE都有prettier的插件，在保存的时候格式化代码。  
`eslint-plugin-prettier`就是通过JS来判断代码格式是否正确。而`eslint-plugin-prettier`插件依赖于prettier依赖。

prettier.config.js

```js
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  vueIndentScriptAndStyle: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  bracketSpacing: true,
  trailingComma: 'es5',
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  arrowParens: 'always',
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'auto',
  rangeStart: 0,
};
```

.prettierignore

::: tip
那么`eslint-config-prettier`插件又是干嘛的?
:::

`prettier`和`ESLint`之间有些规则有冲突。`eslint-config-prettier`将`prettier`解决冲突一些规则默认关闭。

> yarn add prettier eslint-plugin-prettier eslint-config-prettier -D


配置进ESLint

```js
module.exports = {
  // ...
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  // ...
};
```

## 自定义ESLint检查规则

`ESLint`是用来检查代码的。又安装了那么多的插件。
但是官方默认的方案有时不一样符合我们的要求。我们需要自定义自己的规则。

修改规则

[.eslintrc.js](https://www.kuxiaoxin.com/archives/14) rules字段

```js
module.exports = {
  // ...
  rules: {
    // ↓禁止使用@ts-ignore来消除ESLint检查
    '@typescript-eslint/ban-ts-ignore': 'off',
    // ↓在函数和类方法上需要显式的返回类型
    '@typescript-eslint/explicit-function-return-type': 'off',
    // ↓禁止使用any类型
    '@typescript-eslint/no-explicit-any': 'off',
    // ↓除导入语句外，禁止使用require语句
    '@typescript-eslint/no-var-requires': 'off',
    // ↓禁止使用空函数
    '@typescript-eslint/no-empty-function': 'off',
    // ↓对自定义事件名称强制使用特定的大小写
    'vue/custom-event-name-casing': 'off',
    // ↓禁止定义前使用
    'no-use-before-define': 'off',
    // ↓在定义变量之前不允许使用变量
    '@typescript-eslint/no-use-before-define': 'off',
    // ↓禁止使用@ts-注解
    '@typescript-eslint/ban-ts-comment': 'off',
    // ↓禁止使用特定类型
    '@typescript-eslint/ban-types': 'off',
    // ↓禁止使用!后缀运算符进行非null断言
    '@typescript-eslint/no-non-null-assertion': 'off',
    // ↓在导出的函数和类的公共类方法上需要显式的返回值和参数类型
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // ↓禁止使用未使用的变量
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$',
      },
    ],
    // ↓禁止使用未使用的变量
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$',
      },
    ],
    // ↓在函数括号前需要或不允许有空格
    'space-before-function-paren': 'off',

    // ↓强制属性顺序
    'vue/attributes-order': 'off',
    // ↓强制每个组件应位于其自己的文件中
    'vue/one-component-per-file': 'off',
    // ↓在标签的右括号之前要求或不允许换行
    'vue/html-closing-bracket-newline': 'off',
    // ↓强制每行的最大属性数
    'vue/max-attributes-per-line': 'off',
    // ↓在多行元素的内容之前和之后需要换行
    'vue/multiline-html-element-content-newline': 'off',
    // ↓在单行元素的内容之前和之后需要换行
    'vue/singleline-html-element-content-newline': 'off',
    // ↓在模板中的自定义组件上实施属性命名样式
    'vue/attribute-hyphenation': 'off',
    // ↓需要道具的默认值
    'vue/require-default-prop': 'off',
    // ↓实施自我封闭的风格
    // 'vue/html-self-closing': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
};
```

## package.json

```js
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^4.28.3", // eslint-plugin-prettier
    "@typescript-eslint/parser": "^4.28.3", // vue-eslint-parser
    "eslint-config-prettier": "^8.3.0", // eslint-plugin-prettier
    "eslint-plugin-prettier": "^3.4.0",
    "eslint-plugin-vue": "^7.14.0",
    "vue-eslint-parser": "^7.9.0",
    "prettier": "^2.3.2",
```
