# 分页

项目地址：[https://github.com/zhaobao1830/fenxiuzb](https://github.com/zhaobao1830/fenxiuzb)

代码在fenxiuzb项目中的paging.js

## 简介

将前端项目中的分页功能进行封装，使用的时候简单调用就行

**分页需要考虑的点：**

1、一条数据也没有

2、返回总条数、总页数、当前页数

3、是否有更多

4、发送请求后在接口返回数据前，暂停发起请求（节流、防抖、锁）

## 代码

paging.js

```js
/**
 * 用来处理分页的逻辑
 * 将逻辑封装在class中，使用方便
 *
 */
import Http from "./http";

export default class Paging {

  start // 获取记录的起始序号，从0开始
  count // 一次获取记录的条数
  req // 参数对象，包含url、data、method
  locker = false  // 锁
  url // 赋值为req对象中的url，为了拼接成新的url
  moreData = true
  accumulator = [] // 屡次请求的数据的拼装

  constructor (req, count = 10, start = 0 ) {
    this.start = start
    this.count = count
    this.req = req
    this.url = req.url
  }

  async getMoreData () {
    if (!this.moreData) {
      return
    }
    if (!this._getLocker()) {
      return
    }
    const data = await this._actualGetData()
    this._releaseLocker()
    return data
  }

  // 发送请求
  async _actualGetData () {
    const req = this._getCurrentReq()
    let paging = await Http.request(req)
    if (!paging) {
      return null
    }
    if (paging.total === 0) {
      return {
        empty: true,
        items: [], // 当前请求的页数的数据
        moreData: false,
        accumulator: [] // 屡次请求的数据的拼装
      }
    }

    this.moreData = this._moreData(paging.total_page, paging.page)
    if (this.moreData) {
      this.start += this.count
    }
    this._accumulator(paging.items)
    return {
      empty: false,
      items: paging.items, // 当前请求的页数的数据
      moreData: this.moreData,
      accumulator: this.accumulator // 屡次请求的数据的拼装
    }
  }

  _accumulator (items) {
    this.accumulator = this.accumulator.concat(items)
  }

  _moreData (totalPage, pageNum) {
    return pageNum < totalPage - 1
  }

  // 拼装url
  _getCurrentReq () {
    let url = this.url
    const params = `start=${this.start}&count=${this.count}`
    if (url.includes('?')) {
      url += '&' + params

    } else {
      url += '?' + params
    }
    this.req.url = url
    return this.req
  }


  // 获取锁
  _getLocker () {
    if (this.locker) {
      return false
    }
    this.locker = true
    return true
  }

  // 释放锁
  _releaseLocker () {
    this.locker = false
  }
}

```

封装接口方法的时候，通过new Paging类，传入对应的参数

spu-paging.js

```js
import Paging from '../utils/paging'

export default class SpuPaging {
  static async getLatest () {
    return new Paging({
      url: 'spu/latest'
    }, 5)
  }
}
```

调用封装的接口，返回的是类的对象，通过对象调用类里封装的方法

```js
const paging = await SpuPaging.getLatest()

paging.getMoreData()
```

