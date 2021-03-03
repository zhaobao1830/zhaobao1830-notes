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

### 第二种判断方法：instanceof

我们 new 一个对象，那么这个新对象就是它原型链继承上面的对象了，通过 instanceof 我们能判断这个对象是否是之前那个构造函数生成的对象，这样就基本可以判断出这个新对象的数据类型。

```js
let Car = function() {}

let benz = new Car()

benz instanceof Car // true

let car = new String('Mercedes Benz')

car instanceof String // true

let str = 'Covid-19'

str instanceof String // false

```

上面就是用 instanceof 方法判断数据类型的大致流程，那么如果让你自己实现一个 instanceof 的底层实现，应该怎么写呢？请看下面的代码。

```js
function myInstanceof(left, right) {

  // 这里先用typeof来判断基础数据类型，如果是，直接返回false

  if(typeof left !== 'object' || left === null) return false;

  // getProtypeOf是Object对象自带的API，能够拿到参数的原型对象

  let proto = Object.getPrototypeOf(left);

  while(true) {                  //循环往下寻找，直到找到相同的原型对象

    if(proto === null) return false;

    if(proto === right.prototype) return true;//找到相同原型对象，返回true

    proto = Object.getPrototypeof(proto);

    }

}

// 验证一下自己实现的myInstanceof是否OK

console.log(myInstanceof(new Number(123), Number));    // true

console.log(myInstanceof(123, Number));                // false
```

::: tip  typeOf和instanceof的区别
instanceof 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型；

而 typeof 也存在弊端，它虽然可以判断基础数据类型（null 除外），但是引用数据类型中，除了 function 类型以外，其他的也无法判断。
::: 
