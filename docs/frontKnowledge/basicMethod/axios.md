---
title: axios                  
sidebarDepth: 2
---

## axios全局封装

vue中请求接口一般用[axios](http://axios-js.com/zh-cn/docs/)，对axios进行全局封装，可以减少大量代码，同时也更好管理

### 代码

axios.js

简单版：

项目地址：[https://github.com/zhaobao1830/vue-cli-mobile-zb/blob/master/src/core/models/axios.js](https://github.com/zhaobao1830/vue-cli-mobile-zb/blob/master/src/core/models/axios.js)

```js
import axios from 'docs/frontKnowledge/basicMethod/axios'
import Config from '@/core/config'
import {Toast} from 'vant'

const config = {
  baseURL: Config.baseUrl,
  timeout: 5 * 10000, // 请求超时时间设置
  // 跨域时允许携带凭证
  widthCredentials: true
}

// 创建请求实例
const _axios = axios.create(config)
_axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'

let cancel
// 对axios的request配置
_axios.interceptors.request.use(async (config) => {
  // 发起请求的时候，如果之前的请求没有完成，就将之前的请求取消
  if (typeof (cancel) === 'function' && config.isCancel === true) {
    cancel('强制取消了请求')
  }
  config.cancelToken = new axios.CancelToken(function (c) {
    cancel = c
  })
  return config
}, error => {
  return Promise.reject(error)
})

// 对axios的response配置
_axios.interceptors.response.use((response) => {
  cancel = null
  const res = response.data
  if (res.code === 501) {
    // 501是和后端商定的错误码
    return Promise.reject(response)
  } else {
    return Promise.resolve(res)
  }
}, err => {
  cancel = null
  if (axios.isCancel(err)) {
    // 中断promise链接
    return new Promise(() => {
    })
  } else {
    Toast('请求错误，请重新发起请求！')
    // 把错误继续向下传递
    return Promise.reject(err)
  }
})

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 * @param isCancel 是否触发取消
 */
export function post(url, data = {}, params = {}, isCancel = false) {
  return _axios({
    method: 'post',
    url,
    data,
    params,
    isCancel
  }).catch((err) => {
    console.log(err)
  })
}

/**
 * @param {string} url
 * @param {object} params
 * @param isCancel 是否触发取消
 */
export function get(url, params = {}, isCancel = false) {
  return _axios({
    method: 'get',
    url,
    params,
    isCancel
  }).catch((err) => {
    console.log(err)
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
  }).catch((err) => {
    console.log(err)
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
  }).catch((err) => {
    console.log(err)
  })
}

export default _axios
```

复杂版：

项目地址：[https://github.com/zhaobao1830/cms-vue-zb/core/models/axios](https://github.com/zhaobao1830/cms-vue-zb)

```js
import axios from 'axios'
import Config from '@/core/config'
import { ElMessage } from 'element-plus'
import autoJump from '@/core/util/auto-jump'
import { createApp } from 'vue'
import { setupStore } from '@/store'
import { useUserStore } from '@/store/modules/user'
import router from '@/router'
import ApiService from '@/core/config/apiService.js'
import {getToken, saveAccessToken} from '@/core/util/token.js'
import ErrorCode from '@/core/config/error-code.js'

const app = createApp()
setupStore(app)

const userStore = useUserStore()

const config = {
  baseURL: Config.baseUrl,
  timeout: 5 * 10000, // 请求超时时间设置
  crossDomain: true,
  // 跨域时允许携带凭证
  widthCredentials: true
}

/**
 * 错误码是否是refresh相关
 * @param { number } code 错误码
 */
function refreshTokenException(code) {
  const codes = [10000, 10012, 10042, 10050, 10052]
  return codes.includes(code)
}

// 创建请求实例
const _axios = axios.create(config)

// 对axios的request配置
_axios.interceptors.request.use(async (config) => {
  // 有 API 请求重新计时
  autoJump(router, userStore)

  // step1: 容错处理
  if (!config.url) {
    console.log('request need url')
  }

  // 大小写容错
  config.method = config.method.toLowerCase()

  // 参数容错
  if (config.method === 'get') {
    if (!config.params) {
      config.params = config.data || {}
    }
  } else if (config.method === 'post'){
    if (!config.data) {
      config.data = config.params || {}
    }

    // 检测是否包含文件类型, 若包含则进行 formData 封装
    let hasFile = false
    Object.keys(config.data).forEach(key => {
      if (typeof config.data[key] === 'object') {
        const item = config.data[key]
        if (item instanceof FileList || item instanceof File || item instanceof Blob) {
          hasFile = true
        }
      }
    })

    // 检测到存在文件使用 FormData 提交数据
    if (hasFile) {
      const formData = new FormData()
      Object.keys(config.data).forEach(key => {
        formData.append(key, config.data[key])
      })
      config.data = formData
    }
  }

  // step2: permission 处理
  if (config.url === ApiService.refresh) {
    const refreshToken = getToken('refresh_token')
    if (refreshToken) {
      config.headers.Authorization = refreshToken
    }
  } else {
    const accessToken = getToken('access_token')
    if (accessToken) {
      config.headers.Authorization = accessToken
    }
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 对axios的response配置
_axios.interceptors.response.use(
  async (res) => {
    return res.data
},
  async error => {

    const res = error.response

    if (!res) {
      ElMessage.error('请检查 API 是否异常')
    }

    // 判断请求超时
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
      ElMessage.warning('请求超时')
    }

    const {code, message} = res.data

    // eslint-disable-next-line no-async-promise-executor
    return new Promise( async (resolve, reject) => {
      let tipMessage = ''
      const {url} = res.config

      // refresh_token 异常，直接登出
      if (refreshTokenException(code)) {
        setTimeout(() => {
          userStore.loginOut()
          const {origin} = window.location
          window.location.href = origin
        }, 1500)
        return resolve(null)
      }
      // assessToken相关，刷新令牌
      if (code === 10041 || code === 10051) {
        const cache = {}
        if (cache.url !== url) {
          cache.url = url
          const refreshResult = await _axios(ApiService.refresh)
          saveAccessToken(refreshResult.access_token)
          // 将上次失败请求重发
          const result = await _axios(res.config)
          return resolve(result)
        }
      }

      // 弹出信息提示的第一种情况：直接提示后端返回的异常信息（框架默认为此配置）；
      // 特殊情况：如果本次请求添加了 handleError: true，用户自行通过 try catch 处理，框架不做额外处理
      if (res.config.handleError) {
        return reject(res)
      }

      // 弹出信息提示的第二种情况：采用前端自己定义的一套异常提示信息（需自行在配置项开启）；
      // 特殊情况：如果本次请求添加了 showBackend: true, 弹出后端返回错误信息。
      if (Config.useFrontEndErrorMsg && !res.config.showBackend) {
        // 弹出前端自定义错误信息
        const errorArr = Object.entries(ErrorCode).filter(v => v[0] === code.toString())
        // 匹配到前端自定义的错误码
        if (errorArr.length > 0 && errorArr[0][1] !== '') {
          tipMessage = errorArr
        } else {
          tipMessage = ErrorCode['777']
        }
      }
      if (typeof message === 'string') {
        tipMessage = message
      }
      if (Object.prototype.toString.call(message) === '[object Object]') {
        [tipMessage] = Object.values(message).flat()
      }
      if (Object.prototype.toString.call(message) === '[object Array]') {
        [tipMessage] = message
      }

      ElMessage.error(tipMessage)

      reject(res)
    })
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
    data,
    params
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

config.js

```js
// 全局配置
const config = {
  baseUrl: process.env.VUE_APP_BASE_URL || '/api/'
}

export default config
```

### 知识点

axios源码可以[点击这](https://github.com/zhaobao1830/ts-axios-zb)，源码对应的文档[点击这](https://github.com/zhaobao1830/ts-axios-doc)

1、axios的核心就是利用XMLHttpRequests发起请求

2、可以使用[qs](https://www.npmjs.com/package/qs)对参数进行处理，qs.stringify()是将对象序列化成URL的形式，以&进行拼接；qs.parse()是将URL解析成对象的形式

一般我是用在get方法中，提前对参数进行处理

3、axios对url参数的默认处理：

（1）、参数为数组foo: ['bar', 'baz']，会转换成url?foo[]=bar&foo[]=baz
（2）、参数为对象foo: { bar: 'baz' }，会转换成foo=%7B%22bar%22:%22baz%22%7D，foo 后面拼接的是 {"bar":"baz"} encode 后的结果
（3）、参数为Date类型，会执行date.toISOString()
（4）、对于字符 @、:、$、,、、[、]，是可以出现在url中的
（5）、对于值为 null 或者 undefined 的属性，会进行忽略
（6）、会忽略url中的hash值

4、拦截器的执行顺序，对于请求拦截器，先执行后添加的，再执行先添加的；而对于响应拦截器，先执行先添加的，后执行后添加的。

### 备注

1、取消请求功能：适用场景：tab切换、页面切换时，取消掉之前发起但没有完成的请求。通过isCancel参数来确定当前请求方法是否需要取消请求。一个组件里的方法，必须都放在created里或者mounted里，不然会出现无法请求的错误（忘了为什么）

