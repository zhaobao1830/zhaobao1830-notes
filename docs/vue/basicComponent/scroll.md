---
title: scroll                  
sidebarDepth: 2
---

## scroll滚动插件

::: tip  温馨提示
该组件是以[better-scroll 2.0](https://better-scroll.github.io/docs/zh-CN/)为基础封装的
包含基本的滚动、下拉加载、上拉刷新功能
:::

<component-block>

<<< docs/.vuepress/components/vue/base/base-scroll.vue

</component-block>

### Props

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| data    | 用于列表渲染的数据 | Array    | — | [] |
| options | better-scroll 配置项，具体请参考[BS](https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-options.html) 官方文档 | Object    | — | 看下面备注 |
| direction | 滚东方向 | String    | 'vertical', 'horizontal' | 'vertical' |
| refreshDelay    | data属性的数据更新后，scroll 的刷新延时 | Number    | — | 20 |
| scrollEvents    | 配置需要派发的 scroll 事件 | Array    | 可包含子项：'scroll', 'before-scroll-start', 'scroll-end' | [] |
| nestMode    | 嵌套滚动模式，默认是none，即不做嵌套处理。native只在开始滚动时判断是否到达边界并开启外层滚动，与浏览器原生的嵌套滚动保持一致。free模式下，内层滚动过程中只要触发边界，便会开启外层滚动。 | String    | 'none', 'native', 'free' | 'none' |

::: tip  温馨提示
options中 better-scroll 的几个常用配置项，pullDownRefresh、pullUpLoad这三个配置即可设为 Boolean（false 关闭该功能，true 开启该功能，并使用默认子配置），也可设为Object，开启该功能并具体定制其子配置项。
:::

#### pullDownRefresh 子配置项

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| threshold    | 下拉刷新动作的下拉距离阈值 | Number    | — |90 |
| stop    | 回弹停留的位置 | Number    | — | 组件会自动计算回弹时显示的元素高度作为默认值 |
| stopTime    | 刷新成功的文案显示时间 | Number    | — | 600 |
| txt    | 刷新成功的文案 | String    | — | 'Refresh success' |

#### pullUpLoad 子配置项

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| threshold    | 上拉刷新动作的上拉距离阈值 | Number    | — |0 |
| txt    | 上拉加载的相关文案 | Object    | — | { more: '', noMore: '' } |
| visible    | 内容不满一屏时，txt 文案是否可见 | Boolean    | — | false |

