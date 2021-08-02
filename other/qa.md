# QA

Q: index.html `<%= title %>`?
A: npm vite-plugin-html 
EX: [commit](https://github.com/JacobHsu/vue-vite-admin/commit/bf4ce7917325460a4c9c07ef6a645a72ba991941)

---

Q: src\layouts\default\index.vue  `<style lang="less"> @prefix-cls: ~'@{namespace}-default-layout';`?  
A: src\design\var\index.less `@namespace: vben;`
Resunt: `.vben-default-layout { background-color: #f4f7f9; }`
