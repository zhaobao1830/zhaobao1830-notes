---
title: footer                  
sidebarDepth: 2
---

## footer底部导航

::: tip  温馨提示
该组件是以vant框架的[tabbar](https://vant-contrib.gitee.io/vant/#/zh-CN/tabbar)为基础封装的
:::

![Image text](../.vuepress/public/vue/base/footer/demo.png)

<component-block>

<<< docs/.vuepress/components/vue/base/base-footer.vue

</component-block>

### Props

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| activeIndex    | 选中标签的索引值 | [number, string]    | — | 0 |
| footerTabbarList    | 展示列表 | Array    | — | [] |

::: tip  温馨提示
activeIndex vant框架的tabbar传入的值必须是data里定义的
:::

::: tip  温馨提示
footerTabbarList包含名称、选中/未选中的图标、跳转的路径
::: 
