# vue-vben-admin-docs

[vitepress.vuejs.org](https://vitepress.vuejs.org/guide/getting-started.html)

`yarn add --dev vitepress`

[vue-vben-admin-doc](https://anncwb.github.io/vue-vben-admin-doc/guide/introduction.html)

`yarn add -D vite-plugin-components vite-plugin-icons`
`yarn add -D vite-plugin-windicss windicss`

`yarn add @iconify/json @vueuse/core`

## vitejs.dev

[Vite 官方中文文档](https://cn.vitejs.dev/) v2.4  
vitejs / [docs-cn](https://github.com/vitejs/docs-cn)

## deploy

`yarn build` .vitepress\dist

## theme

blade-icons/[ri-github-line](https://blade-ui-kit.com/blade-icons/ri-github-line)

## Notes

"vitepress": "^0.14.1" vitepress 必須使用 0.14.x 版本 

"vitepress": "^0.15.5" 版本需要額外處理  `<template functional>` 問題

[3.x Syntax  Components Created by Functions](https://v3.vuejs.org/guide/migration/functional-components.html#_2-x-syntax)

> [vite] Internal server error: `<template functional>` is no longer supported in Vue 3, since functional components no longer have significant performancedifference from stateful ones. Just use a normal `<template>` instead.
> Plugin: vite:vue
