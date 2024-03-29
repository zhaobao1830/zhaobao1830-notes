# 上传文件

## 基础知识点

### 传统模式

使用form表单提交，提交的路径是action，enctype设置为multipart/form-data

```js
    <form method="post" action="http://123.57.138.48/api/upload/" enctype="multipart/form-data" >
      <input type="file"/>
      <button type="submit">submit</button>
    </form>
```

### 现在流行模式

使用axios模拟form表单提交，核心还是使用input，绑定change方法，当值改变的时候触发

```vue
<template>
  <input
    ref="fileInput"
    type="file"
    @change="handleFileChange"
  />
  
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import axios from 'axios'

  export default defineComponent({
    name: 'Uploader',
    setup() {
      const handleFileChange = (e: Event) => {
        const target = e.target as HTMLInputElement
        const files = target.files
        if (files) {
          const uploadFile = files[0]
          const formData = new FormData()
          formData.append(uploadFile.name, uploadFile)
          axios.post('http://123.57.138.48/api/upload/', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(resp => {
            console.log(resp.data)
          })
        }
      }
      return {
        handleFileChange
      }
    }
  })
</script>
```

element-ui的upload源码：[https://github.com/element-plus/element-plus/tree/dev/packages/components/upload](https://github.com/element-plus/element-plus/tree/dev/packages/components/upload)

element-ui库中的upload组件，也是通过input上传文件，将文件放到FormData中发送到后端

可以参考的项目[lego-zb](https://github.com/zhaobao1830/lego-zb)中的styled-uploader、uploader组件，这里面实现了基本的上传功能

1、e.target.files是FileList对象 [文档](https://developer.mozilla.org/zh-CN/docs/Web/API/FileList) FileList是一个类数组，不是真的数组

2、files[索引]拿到对应的文件，它是File对象 [文档](https://developer.mozilla.org/zh-CN/docs/Web/API/File)

3、传递数据必须把数据放到FormData中 [文档](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData)

### 上传遇到的问题

1、formdata里字段的值为file或者图片，而且值有多个，不能放在数组里，然后赋值。而应该给当前字段多次赋值

错误示例：这种方式传递会报错
```js
const formData = new FormData()
const fileList = []
fileList.push(file2)
fileList.push(file3)
formData.append('file', JSON.stringify(fileList))
```

正确示例：
```js
const formData = new FormData()
formData.append('file', file2)
formData.append('file', file3)
```

后端Java接收代码：
```java
@RequestMapping(value = "upload.do")
public void upload(@RequestParam MultipartFile[] file,String name) {
    System.out.println(Arrays.toString(file));
    System.out.println(name);
}
```
使用MultipartFile类型，如果当前参数有多个值，就用MultipartFile[]

### Js相关方法

将base64格式转换成Blob方法(可以把base64格式转换成Blob格式，保存到formdata里传给后端)

```js
/**
 * 将以base64的图片url数据转换为Blob
 */
export function convertBase64UrlToBlob(urlData) {
  const bytes = window.atob(urlData.split(',')[1]) // 去掉url的头，并转换为byte
  // 处理异常,将ascii码小于0的转换为大于0
  const ab = new ArrayBuffer(bytes.length)
  const ia = new Uint8Array(ab)
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i)
  }

  return new Blob([ab], {
    type: 'image/png'
  })
}
```

## element-ui的上传组件

使用element-ui的组件手动上传文件

```html
<el-upload
  class="avatar-uploader"
  :limit="1"
  accept=".jpg,.jpeg,.png"
  drag
  action="#"
  :file-list="logoList"
  :show-file-list="false"
  :auto-upload="false"
  :on-change="logoUploader"
>
  <el-button type="primary">点击上传</el-button>
</el-upload>
```

文档地址：[上传组件](https://element-plus.org/zh-CN/component/upload.html)

::: tip 备注
上面是简单版，auto-upload设置为false（不自动上传文件），
使用on-change获取上传的文件信息，在这个方法里，将文件信息进程处理后调用接口，传给后端
:::
