# loading指令

## 使用

```vue
v-loading:[loadingText]="noResult"
```

loadingText：对应loding.vue里的title值

## main.js

注册全局loading指令

```js
import loadingDirective from '@/components/base/loading/directive'

createApp(App).directive('loading', loadingDirective).mount('#app')

```

## directive.js

```js
import Loading from './loading'
import createLoadingLikeDirective from '@/assets/js/create-loading-like-directive'

const loadingDirective = createLoadingLikeDirective(Loading)

export default loadingDirective
```

## loading.vue

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

## create-loading-like-directive.js

抽取的公共方法

[自定义指令](https://v3.cn.vuejs.org/guide/custom-directive.html#%E7%AE%80%E4%BB%8B)

```js
import { createApp } from 'vue'
import { addClass, removeClass } from '@/assets/js/dom'

const relativeCls = 'g-relative'

export default function createLoadingLikeDirective(Comp) {
  return {
    mounted(el, binding) {
      const app = createApp(Comp)
      const instance = app.mount(document.createElement('div'))
      // 出现bug：同一地方使用不同的指令，会出现覆盖情况
      // 解决办法：使用el[name]，同组件的name是不一样的，这样可以区分开
      // 如果直接用el，会出现不同组件覆盖的情况
      const name = Comp.name
      if (!el[name]) {
        el[name] = {}
      }
      el[name].instance = instance
      const title = binding.arg // 对应的就是loadingText值
      if (typeof title !== 'undefined') {
        instance.setTitle(title)
      }
      if (binding.value) {
        append(el)
      }
    },
    updated(el, binding) {
      const title = binding.arg
      const name = Comp.name
      if (typeof title !== 'undefined') {
        el[name].instance.setTitle(title)
      }
      if (binding.value !== binding.oldValue) {
        binding.value ? append(el) : remove(el)
      }
    }
  }
  function append(el) {
    const name = Comp.name
    const style = getComputedStyle(el)
    if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
      addClass(el, relativeCls)
    }
    el.appendChild(el[name].instance.$el)
  }

  function remove(el) {
    const name = Comp.name
    removeClass(el, relativeCls)
    el.removeChild(el[name].instance.$el)
  }
}
```
