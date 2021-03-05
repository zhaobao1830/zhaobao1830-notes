# 上传组件

## 基础知识点

### 传统模式

```js
    <form method="post" action="http://123.57.138.48/api/upload/" enctype="multipart/form-data" >
      <input type="file"/>
      <button type="submit">submit</button>
    </form>
```

使用form表单提交，提交的路径是action，enctype设置为multipart/form-data

### 现在流行模式

```js
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
使用axios模拟form表单提交

1、e.target.files是FileList对象 [文档](https://developer.mozilla.org/zh-CN/docs/Web/API/FileList) FileList是一个类数组，不是真的数组

2、files[索引]拿到对应的文件，它是File对象 [文档](https://developer.mozilla.org/zh-CN/docs/Web/API/File)

3、传递数据必须把数据放到FormData中 [文档](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData)

