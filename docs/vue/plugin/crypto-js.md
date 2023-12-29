# crypto-js

加密、解密

## Install

```js
 npm install crypto-js
```

## Usage

```js
import CryptoJS from 'crypto-js'

const Utils = {}

// 加密
Utils.encryption = val => {
  return CryptoJS.AES.encrypt(val, 'secretKey123').toString().trim()
}

// 解密
Utils.decryption = val => {
  return CryptoJS.AES.decrypt(val, 'secretKey123').toString(CryptoJS.enc.Utf8)
}

```
