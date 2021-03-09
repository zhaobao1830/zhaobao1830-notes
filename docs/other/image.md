# 图片

## 图片预览的方式

不要等上传完毕再显示，需要一种快速本地预览图片的方法

### URL.createObjectURL()

+ [文档地址](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL)
  
+ 一个静态方法，创建一个DOMString，返回一个URL，URL和document绑定，表示指定的File对象

```js
url = URL.createObjectURL(File对象)
```

### FileReader.readAsDataURL()

+ [文档地址](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader/readAsDataURL)

+ 一FileReader上面的实例方法，读取指定的File对象，读取完成偶调用回调，返回URL格式的字符串（base64）

```js
const fileReader = new FileReader()
fileReader.readAsDataURL(uploadedFile)
fileReader.addEventListener('load', () => {
  fileObj.url = fileReader.result as string
})
```

### 对比

1、返回值

(1)、FileReader.readAsDataURL(flie)返回的是base64的字符串
 
(2)、URL.createObjectURL(file)返回的是当前文件的内存url

2、执行机制

(1)、FileReader.readAsDataURL(flie)通过回调的形式返回，异步执行

(2)、URL.createObjectURL(file)直接返回，同步执行

3、内存清理

(1)、FileReader.readAsDataURL(flie)按照JS垃圾回收机制自动从内存中清理

(2)、URL.createObjectURL(file)存在于当前docmount内，清除方式只有unload()事件或revokeObjectURL()手动清除

### 总结

1、URL.createObjectURL(file)得到本地内存容器的URL地址，同步使用，比较方便快捷，多次使用需要注意手动释放内存的问题，性能优秀

2、FileReader.readAsDataURL(flie)胜在直接转为base64格式，可以直接用于业务，无序二次转换
