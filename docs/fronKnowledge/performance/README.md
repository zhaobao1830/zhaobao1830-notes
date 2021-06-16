# 性能优化

1、将开发环境使用到的模块，在生产环境打包时剔除，用cdn引入，比如emement-ui、vue、vuex

剔除方法：

(1)、webpack.base.conf.js 中 externals部分配置：
```js
externals: {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'axios':'axios',
  'element-ui': 'ElementUI',
}
```
（2）、在 main.js 中去除Vue.use(ElementUI)
