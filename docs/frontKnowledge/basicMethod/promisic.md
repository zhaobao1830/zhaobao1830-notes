# promisic

使用promisic函数对小程序的原生API进行封装，搭配async、await将异步API转换为同步

## 问题

微信小程序的开发中虽然已经支持了ES6语法，但是在微信原生的API中仍然使用的还是ES5的回调函数， 在项目中使用不方便。

::: tip 备注
基础库 2.10.2 版本起，[异步 API](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/api.html#API) 支持 callback & promise 两种调用方式。当接口参数 Object 对象中不包含 success/fail/complete 时将默认返回 promise，否则仍按回调方式执行，无返回值。

但downloadFile, request, uploadFile, connectSocket, createCamera这些方法不支持promise
:::

## 解决

**until.js**

```js
export const promisic = function (func) {
  return function (params = {}) {
    return new Promise((resolve, reject) => {
      const args = Object.assign(params, {
        success: (res) => {
          resolve(res)
        },
        fail: (error) => {
          reject(error)
        }
      })
      func(args)
    })
  }
}

```

**解析：**

promisic函数的核心是对方法进行promise封装，方法执行完后，返回promise函数

参数传递使用柯里化思想

需要传入的参数有俩个：执行的方法名称和方法调用时需要的参数

**http.js**

使用promisic封装request方法

```js
import { config } from "../config/config";
import { promisic } from "./util";

export default class Http {
  static async request({
                   url,
                   data,
                   method = 'GET'
  }) {
    const res = await promisic(wx.request)({
      url: `${config.apiBaseUrl}${url}`,
      data,
      method,
      header: {
        appkey: config.appKey
      }
    })
    return res.data
  }
}

```

::: tip 备注
上面只是封装的wx.request，如果想封装其他方法，可以传其他方法名称
:::

使用

**banner.js**

```js
import Http from "../utils/http";

export default class Banner {
  static locationB = 'b-1'

  static async getHomeLocationB() {
    return await Http.request({
      url: `banner/name/${Banner.locationB}`
    })
  }
}

```

**home.js**

```js
const bannerB = await Banner.getHomeLocationB()
```

## 备注

promisic既可以封装微信小程序原生API，也可以封装uniapp里的API
