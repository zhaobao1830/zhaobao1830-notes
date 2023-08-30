---
title: svg                  
sidebarDepth: 2
---

# svg组件

在vite里通过vite-plugin-svg-icons动态使用svg图片

## 步骤

**第一、安装vite-plugin-svg-icons插件**

```npm
npm i vite-plugin-svg-icons -D
// 或者
yarn add vite-plugin-svg-icons -D
// 或者
pnpm i vite-plugin-svg-icons -D
```

**第二、在main.js引入**

```js
import 'virtual:svg-icons-register'
```

**第三、新建svg图片文件夹**

![Image text](../../.vuepress/public/vue/base/svg/01.png)

**第四、vite.config.js配置**

```js
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定要缓存的文件夹
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId
      symbolId: 'icon-[name]'
    })
  ]
})

```

**第五、封装svg组件**

```vue
<template>
  <svg
    :class="svgClass"
    aria-hidden="true"
    :style="{ width: size + 'px', height: size + 'px' }"
  >
    <use :href="svgName" />
  </svg>
</template>

<script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    // svg尺寸
    size: {
      type: String,
      default: '14'
    },
    // svg样式
    iconClass: {
      type: String,
      default: ''
    },
    // svg名称
    iconName: {
      type: String,
      required: true
    }
  })
  
  const svgClass = computed(() => {
    return props.iconClass ? 'svg-icon ' + props.iconClass : 'svg-icon'
  })
  
  const svgName = computed(() => `#icon-${props.iconName}`)
</script>

<style scoped>
  // 自定义每个svg图片的样式
  .pub_add_class{
    fill: aqua;
  }
</style>

```

**第六、使用**

```vue
<template>
  <div>
    <his-svg-icon
      :icon-class="iconClass"
      :icon-name="iconName"
      size="18"
      color="#fff"
    ></his-svg-icon>
  </div>
</template>

<script setup>
  import HisSvgIcon from '@/components/base/HisSvgIcon/index.vue'
  import { ref } from 'vue'
  
  const iconClass = ref('pub_add_class')
  const iconName = ref('pub_add')
</script>

<style scoped>

</style>

```

## 总结

这种使用svg的方法，有个缺点，项目里会有很多svg图片
