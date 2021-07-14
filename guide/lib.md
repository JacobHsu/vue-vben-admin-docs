# 引入外部模块

除了自带组件以，有时我们还需要引入其他外部模块。我们以`ant-design-vue`为例：

## 安装

安装 `ant-design-vue`

```bash
# 在终端输入下面的命令完成安装
# 注意要加@next 安裝才是v2.x版的
yarn add ant-design-vue@next
```

ant-design-vue [Version](https://www.npmjs.com/package/ant-design-vue)

## 使用

### 全局使用

```ts
import { createApp } from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
const app = createApp(App);
app.use(Antd);
app.mount('#app');
```

### 局部使用

```vue
<template>
  <Button>text</Button>
</template>

<script>
  import { defineComponent } from 'vue';
  import { Button } from 'ant-design-vue';
  export default defineComponent({
    components: {
      Button,
    },
  });
</script>
```

## 注意

- 如果组件有需要导入样式，则需要再引入样式文件
