---
title: 图片懒加载                  
sidebarDepth: 2
---

## 图片懒加载

当图片没有加载的时候，展示默认图片

### vue2项目

参考地址：[vue-lazyload](https://github.com/hilongjw/vue-lazyload)

安装

```
npm i vue-lazyload -S

yarn add vue-lazyload
```

main.js引入

```js
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})
```

### vue2项目

参考地址：[vue3-lazy](https://github.com/ustbhuangyi/vue3-lazy)

安装

```
npm install vue3-lazy -S
```

main.js引入

```js
import lazyPlugin from 'vue3-lazy'

createApp(App).use(store).use(router).use(lazyPlugin, {
  loading: require('@/assets/images/default.png')
}).mount('#app')
```

使用

```vue
<ul>
  <li v-for="img in list">
    <img v-lazy="img.src" >
  </li>
</ul>
```
