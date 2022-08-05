---
title: button                  
sidebarDepth: 2
---

## 全局button组件

全局定义button组件，使用的时候不需要再单独引入

BasicButton.vue

```vue
<template>
  <van-button type="success">点击</van-button>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'AButton'
  })
</script>
<script setup>

</script>

<style scoped lang="scss">

</style>

```

index.js

```js
import { withInstall } from '@/utils'
import button from './BasicButton.vue'

export const Button = withInstall(button)

```

utils.js

```js
export const withInstall = (component, alias) => {
  const comp = component
  comp.install = (app) => {
    app.component(comp.name || comp.displayName, component)
    if (alias) {
      app.config.globalProperties[alias] = component
    }
  }
  return component
}
```

registerGlobComp.js

将调用全局组件的方法放在这个js文件
```js
import { Button } from './Button'

export function registerGlobComp(app) {
  app.use(Button)
}
```

::: tip 温馨提示
使用插件的方式来注册全局组件
:::

main.js

在main.js里调用registerGlobComp方法

```js
const app = createApp(App)

// 注册全局组件
registerGlobComp(app)
```

::: tip 温馨提示
在index.js里调用withInstall方法注册组件后，可以在组件里引用后使用
:::

```vue
  import { Button } from '@/components/base/Button'

  <Button></Button>
```
