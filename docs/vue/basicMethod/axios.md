---
title: axios                  
sidebarDepth: 2
---

## axios全局封装

vue中请求接口一般用axios,对axios进行全局封装，可以减少大量代码，同时也更好管理

### 基础封装

```js
import axios from 'axios'
import Config from '@/core/config'
import Parameter from '@/core/utils/parameter'
const config = {
  baseURL: Config.baseUrl,
  timeout: 5 * 10000 // 请求超时时间设置
}

// 创建请求实例
const _axios = axios.create(config)
_axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'

// 对axios的request配置
_axios.interceptors.request.use(async (config) => {
    // 配置token
  if (config.url === 'nethisDocController/loginForApp') {
    config.headers.token = 'ysd#token'
  } else {
    if (localStorage.getItem('userInfo')) {
      config.headers.token = 'ysd#token'
    }
  }
  // 对参数进行加密处理
  if (config.method === 'post') {
    const dataObject = config.data
    const datAObjectValueList = Object.values(dataObject)
    const sign = Parameter.getSigns(datAObjectValueList)
    config.data = await Parameter.encryption(sign, config.data)
  }
  return config
}, error => {
    console.log(error)
    return Promise.reject(error)
  })

// 对axios的response配置
_axios.interceptors.response.use((res) => {
  return res.data
}, err => {
    // 把错误继续向下传递
    return Promise.reject(err)
})

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function post(url, data = {}, params = {}) {
  return _axios({
    method: 'post',
    url,
    data,
    params
  })
}

/**
 * @param {string} url
 * @param {object} params
 */
export function get(url, params = {}) {
  return _axios({
    method: 'get',
    url,
    params
  })
}

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function put(url, data = {}, params = {}) {
  return _axios({
    method: 'put',
    url,
    params,
    data
  })
}

/**
 * @param {string} url
 * @param {object} params
 */
export function _delete(url, params = {}) {
  return _axios({
    method: 'delete',
    url,
    params
  })
}

export default _axios

```

### 升级封装

加入了取消功能，当之前的请求没有完成，就发起新的请求，那之前的请求就会取消

适用场景：tab切换、页面切换时，取消掉之前发起但没有完成的请求

::: tip  提示
axios全局封装里加了取消请求功能，一个组件里的方法，必须都放在created里或者mounted里，不然会出现无法请求的错误
:::
```js
import axios from 'axios'
import Config from '@/core/config'
import Parameter from '@/core/utils/parameter'
const config = {
  baseURL: Config.baseUrl,
  timeout: 5 * 10000 // 请求超时时间设置
}

// 创建请求实例
const _axios = axios.create(config)
_axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'

let cancel
// 对axios的request配置
_axios.interceptors.request.use(async (config) => {
    // 配置token
  if (config.url === 'nethisDocController/loginForApp') {
    config.headers.token = 'ysd#token'
  } else {
    if (localStorage.getItem('userInfo')) {
      config.headers.token = 'ysd#token'
    }
  }
    // 对参数进行加密处理
  if (config.method === 'post') {
    const dataObject = config.data
    const datAObjectValueList = Object.values(dataObject)
    const sign = Parameter.getSigns(datAObjectValueList)
    config.data = await Parameter.encryption(sign, config.data)
  }
  // 发起请求的时候，如果之前的请求没有完成，就将之前的请求取消
  if (typeof (cancel) === 'function') {
    cancel('强制取消了请求')
  }
  config.cancelToken = new axios.CancelToken(function(c) {
    cancel = c
  })
  return config
}, error => {
    console.log(error)
    return Promise.reject(error)
  })

// 对axios的response配置
_axios.interceptors.response.use((res) => {
  cancel = null
  return res.data
}, err => {
  cancel = null
  if (axios.isCancel(err)) {
    // 中断promise链接
    return new Promise(() => {})
  } else {
    // 把错误继续向下传递
    return Promise.reject(err)
  }
})

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function post(url, data = {}, params = {}) {
  return _axios({
    method: 'post',
    url,
    data,
    params
  })
}

/**
 * @param {string} url
 * @param {object} params
 */
export function get(url, params = {}) {
  return _axios({
    method: 'get',
    url,
    params
  })
}

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function put(url, data = {}, params = {}) {
  return _axios({
    method: 'put',
    url,
    params,
    data
  })
}

/**
 * @param {string} url
 * @param {object} params
 */
export function _delete(url, params = {}) {
  return _axios({
    method: 'delete',
    url,
    params
  })
}

export default _axios
```