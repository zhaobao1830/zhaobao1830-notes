---
title: loading                  
sidebarDepth: 2
---

## loading组件

加载数据时显示

<base-loading></base-loading>

<component-block>

<<< docs/.vuepress/components/vue/base/base-loading.vue

</component-block>

### Props

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| titleShow    | 是否显示title | boolean    | — | true |
| title        | title值      | string     | — | 正在载入... |
| imgStyle     | 图片样式      | object     | — | {width: 24, height: 24} |
| imgSrc        | 图片路径     | string     | — | require('../public//loading/loading.gif') |

::: tip  温馨提示
imgStyle是个对象，里面包含图片的width和height，可以只传一个值
::: 

::: tip  温馨提示
imgSrc的值必须通过require将图片路径引入，否则无法识别
::: 

## loading指令

将loading封装成指令

组件代码：

```vue
<template>
  <div class="loading">
    <div class="loading-content">
      <img width="24" height="24" src="./loading.gif">
      <p class="desc">{{title}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loading',
    data() {
      return {
        title: '正在载入...'
      }
    },
    methods: {
      setTitle(title) {
        this.title = title
      }
    }
  }
</script>

<style lang="scss" scoped>
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    .loading-content {
      text-align: center;
      .desc {
        line-height: 20px;
        font-size: $font-size-small;
        color: $color-text-l;
      }
    }
  }
</style>

```

directive.js

```js
import { createApp } from 'vue'
import loading from './loading'
import { addClass, removeClass } from '@/assets/js/dom'

const relativeCls = 'g-relative'

const loadingDirective = {
    mounted(el, binding) {
        const app = createApp(loading)
        const instance = app.mount(document.createElement('div'))
        el.instance = instance
        const title = binding.arg
        if (typeof title !== 'undefined') {
            instance.setTitle(title)
        }
        if (binding.value) {
            append(el)
        }
    },
    updated(el, binding) {
        const title = binding.arg
        if (typeof title !== 'undefined') {
            el.instance.setTitle(title)
        }
        if (binding.value !== binding.oldValue) {
            binding.value ? append(el) : remove(el)
        }
    }
}

function append(el) {
    const style = getComputedStyle(el)
    if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
        addClass(el, relativeCls)
    }
    el.appendChild(el.instance.$el)
}

function remove(el) {
    removeClass(el, relativeCls)
    el.removeChild(el.instance.$el)
}

export default loadingDirective
```

main.js

将loading指令挂载到全局

```js
createApp(App).directive('loading', loadingDirective).mount('#app')
```

使用：

直接在组件的最外层div上绑定v-loading指令

```vue
    <div class="recommend" v-loading:[loadingText]="loading"></div>
```

::: tip 说明
loading：判断指令显示/隐藏

loadingText：自定义title值
:::