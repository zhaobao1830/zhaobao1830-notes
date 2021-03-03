# 数据类型

## 数据类型概念

JavsScript的数据类型有下图所示的8种：

![Image text](../../.vuepress/public/js/cornerstone/typeOfData/01.png)

数据类型大致可以分成两类来进行存储：

1、基础类型存储在栈内存，被引用或拷贝时，会创建一个完全相等的变量；

2、引用类型存储在堆内存，存储的是地址，多个引用指向同一个地址，这里会涉及一个“共享”的概念。

## 数据类型检测

### 第一种判断方法：typeof

```js
typeof 1 // 'number'

typeof '1' // 'string'

typeof undefined // 'undefined'

typeof true // 'boolean'

typeof Symbol() // 'symbol'

typeof null // 'object'

typeof [] // 'object'

typeof {} // 'object'

typeof console // 'object'

typeof console.log // 'function'

```

::: tip  温馨提示
typeof null 为'object'这是JS存在的一个bug，不代表null就是引用数据类型，并且null本身也不是对象，
如果需要在if语句中判断是否为null,直接通过'===null'来判断就行
::: 

::: tip  温馨提示 
引用数据类型 Object，用 typeof 来判断的话，除了 function 会判断为 OK 以外，其余都是 'object'，是无法判断出来的。
::: 
