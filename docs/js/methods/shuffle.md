# 随机数组

需求：提供一个数组，获取随机的新数组

核心：遍历原数组，获取0到下标值之间的随机数，将下标值和随机数对应的元素位置交换

```js
// 遍历原数组，获取0到下标值之间的随机数，将随机数和下标值表示的元素位置交换
export function shuffle(source) {
  const arr = source.slice() // 从已有的数据返回选定的元素 操作arr数组，不会对原数组产生影响
  for (let i = 0; i < arr.length; i++) {
    const j = getRandomInt(i)
    swap(arr, i, j)
  }
  return arr
}

// 获取0到max之间的随机数（整数）
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

// 根据下标交换数组里的元素
function swap(arr, i, j) {
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}
```
