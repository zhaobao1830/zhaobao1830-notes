# permission指令

## 使用

```
控制dom的显示/隐藏
v-permission="'搜索日志'"

v-permission="['修改信息','修改密码']"

在button上使用，控制按钮能否点击
<button v-permission="{ permission: '删除图书', type: 'disabled'}">删除</button>

```

## js

```js
import Vue from 'vue'
import store from '@/store'

function isAllowed(permission, user, permissions) {
  if (typeof permission === 'string') {
    return permissions.includes(permission)
  }
  if (permission instanceof Array) {
    return permission.some(auth => permissions.indexOf(auth) >= 0)
  }
  return false
}

// 权限指令
Vue.directive('permission', {
  bind(el, binding) {
    let permission
    let type
    if (Object.prototype.toString.call(binding.value) === '[object Object]') {
      // eslint-disable-next-line prefer-destructuring
      permission = binding.value.permission
      // eslint-disable-next-line prefer-destructuring
      type = binding.value.type
    } else {
      permission = binding.value
    }
    const isAllow = isAllowed(permission, store.state.user || {}, store.state.permissions)
    const element = el
    if (!isAllow && permission) {
      if (type) {
        element.disabled = true
        element.style.opacity = 0.4
        element.style.cursor = 'not-allowed'
      } else {
        element.style.display = 'none'
      }
    }
  },
})

export default Vue.directive('permission')

```

## demo

```
<div
  class="add"
  v-permission="'system:role:add'"
  @click="showAddDialogFormVisible"  
>     
  <i class="el-icon-plus"></i>
  <span>添加</span>
</div>


<el-button
   type="primary"
   plain
   v-permission="{ permission: 'system:role:edit', type: 'disabled'}"
   @click.native.prevent.stop="handleEdit(scope.row)"
>编辑</el-button>            
```
