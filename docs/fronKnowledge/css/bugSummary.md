# css bug总结

项目开发中遇到的关于css的Bug

1、父元素的样式中有transform属性，子元素样式中的position: absolute;top: 20px会失效

解决办法：子元素位置移动使用transform
