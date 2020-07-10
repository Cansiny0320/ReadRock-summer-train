1. 用 Vue2 写一个 todolist，通过提供的 api：[jsonplaceholder](https://jsonplaceholder.typicode.com/) 的 todos api 获取初始的 todolist，之后删除完成的请求不作要求（Vue2 应用的创建可以直接用 [vue-cli](https://cli.vuejs.org/zh/)，当然能用 Webpack 自己搭建就更好了）
   ![img](https://ahabhgk.github.io/static/4ea87b07ae61e0aa6cf5d79cccef7bd9/7d769/todos-api.png)

1. 现在 [Slowly Render](https://github.com/ahabhgk/slowly-render) 已经有了 HashRouter，为了更完善的使用方式，用 history api 完成 HistoryRouter 吧（要求使用方式同 HashRouter）

1. 将作业 1 用 Vue3 的 [Composition API](https://composition-api.vuejs.org/zh/api.html) 进行重构，并阅读 [Composition API 的 RFC](https://composition-api.vuejs.org/zh/)
   Vue3 尝鲜方式：

- - 直接用 [vite 创建 Vue3 应用](https://github.com/vitejs/vite)

- - 在 vue-cli 中使用 [vue-cli-plugin-vue-next](https://github.com/vuejs/vue-cli-plugin-vue-next)

- - 在 Vue2 中使用 [@vue/composition-api 插件](https://github.com/vuejs/composition-api/blob/master/README.zh-CN.md)