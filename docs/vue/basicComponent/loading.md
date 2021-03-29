---
title: loading                  
sidebarDepth: 2
---

## loading加载

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
