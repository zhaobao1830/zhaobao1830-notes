# 项目bug总结

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
