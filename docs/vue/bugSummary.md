# vue bug总结

vue开发项目遇到的bug

1、vant的search输入框在移动端需要点击好几次才能获取焦点

解决办法： 安装fastclick，在main.js里引入下面的代码

```js
// 为了解决vant输入框要多次点击才能获取焦点的Bug
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    fastclick.attach(document.body)
  }, false)
}

fastclick.prototype.focus = function (targetElement) {
  let length
  if (targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
    length = targetElement.value.length
    targetElement.focus()
    targetElement.setSelectionRange(length, length)
  } else {
    targetElement.focus()
  }
}
```

2、组件里使用better-scroll实现下拉刷新和上拉加载，在安卓手机里，使用软键盘输入后查询，下拉div里的提示信息会出现在
页面上

错误原因：软键盘将可视区域高度缩小，better-scroll里的base-scroll-list-wrapper高度缩小，base-scroll-pulldown就会
在页面中显示（正常情况下，base-scroll-list-wrapper的高度是可视区域高度，base-scroll-pulldown在可视区域外面）

解决办法：判断软键盘是否收起，如果收起，就调用better-scroll实例的refresh()方法，重新计算base-scroll-list-wrapper的高度

```js
// 监控安卓手机键盘是否收起，如果收起，就调用bScroll的refresh方法，重新计算高度
      keyboardCollapsedBScrollRefresh() {
        const _this = this
        let originHeight = document.documentElement.clientHeight || document.body.clientHeight
        window.addEventListener('resize', () => {
          const resizeHeight = document.documentElement.clientHeight || document.body.clientHeight
          // Android 键盘收起后操作
          if (originHeight < resizeHeight) {
              // 这块有时候会报找不到refresh方法的错误（未处理）
            _this.$refs.bScroll.refresh()
          }
          originHeight = resizeHeight
        }, false)
      }
```

::: tip 温馨提示
base-scroll-list-wrapper和base-scroll-pulldown都是better-scroll封装的组件里的div，详情可以查看
基础组件里的scroll组件
:::

3、混合开发中，安卓软键盘会遮挡输入框

错误原因：（1）、组件最外层的div设置了position：fixed；（2）、输入框添加了autosize属性

解决办法：组件最外层的div去掉position: fixed;输入框去掉autosize属性，这样获取焦点的时候，页面会自动被键盘顶上去
