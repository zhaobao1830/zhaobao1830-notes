# footer

## footer底部导航

::: tip  温馨提示
该组件是以vant框架的[tabbar](https://vant-contrib.gitee.io/vant/#/zh-CN/tabbar)为基础封装的
:::

![Image text](../../public/vue/base/footer/demo.png)

````vue
<template>
  <div class="base-footer">
    <van-tabbar
        v-model="activeIndex"
        active-color="#07A37B"
        inactive-color="#999999"
        route
    >
      <van-tabbar-item
          v-for="(item, index) in footerTabbarList"
          :key="index"
          :to="item.to"
      >
        <span>{{item.name}}</span>
        <template #icon="props">
          <img :src="props.active ? item.icon.active : item.icon.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  const defaultFooterTabbarList = [
    {
      name: '工作台',
      icon: {
        active: require('../../../public/vue/base/footer/tab_work_sel@2x.png'),
        inactive: require('../../../public/vue/base/footer/tab_work_nor@2x.png')
      },
      to: '/'
    },
    {
      name: '消息',
      icon: {
        active: require('../../../public/vue/base/footer/tab_message_sel@2x.png'),
        inactive: require('../../../public/vue/base/footer/tab_message_nor@2x.png')
      },
      to: ''
    },
    {
      name: '居民',
      icon: {
        active: require('../../../public/vue/base/footer/tab_people_sel@2x.png'),
        inactive: require('../../../public/vue/base/footer/tab_people_nor@2x.png')
      },
      to: '/resident'
    },
    {
      name: '我的',
      icon: {
        active: require('../../../public/vue/base/footer/tab_Personal_center_sel@2x.png'),
        inactive: require('../../../public/vue/base/footer/tab_Personal_center_nor@2x.png')
      },
      to: '/my'
    }
  ]

  export default {
    name: 'base-footer',
    props: {
      // 当前选中的名称或索引值,默认绑定选中标签的索引值
      active: {
        type: [Number, String],
        default: 0
      },
      // 展示的列表，包含名称、选中/未选中的图标、跳转的路径
      footerTabbarList: {
        type: Array,
        default: function () {
          return defaultFooterTabbarList
        }
      }
    },
    data() {
      return {
        // vant框架的tabbar传入的值必须是data里定义的
        activeIndex: this.active
      }
    }
  }
</script>

<style scoped lang="scss">
  .base-footer{
    position: relative;
    height: 50px;
    width: 100%;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    border-top: 1px solid rgba(0, 0, 0, 0.25);
  }
</style>

````
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
