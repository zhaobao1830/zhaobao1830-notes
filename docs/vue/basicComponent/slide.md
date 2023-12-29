# slide轮播

## slide轮播

参考文档：[better-scroll的slide插件](https://better-scroll.github.io/docs/zh-CN/plugins/slide.html#%E4%BB%8B%E7%BB%8D)

### 使用

```vue
<template>
  <div class="recommend">
    <div class="slider-wrapper">
      <div class="slider-content">
         <slider
           v-if="sliders.length > 0"
           :sliders="sliders"
         ></slider>
      </div>
    </div>
  </div>
</template>

<script>
  import { getRecommend } from '@/service/recommend'
  import Slider from '@/components/base/slider/slider'

  export default {
    name: 'recommend',
    components: {
      Slider
    },
    data() {
      return {
        sliders: [],
        albums: []
      }
    },
    async created () {
      const result = await getRecommend()
      this.sliders = result.sliders
      this.albums = result.albums
    }
  }
</script>

```


::: tip  温馨提示
v-if="sliders.length > 0" 确保有了数据以后再初始化轮播图，不然会报错
:::

### slide.vue

```vue
<template>
  <div class="slider" ref="rootRef">
    <div class="slider-group">
      <div
        class="slider-page"
        v-for="item in sliders"
        :key="item.id"
      >
        <a :href="item.link">
          <img :src="item.pic"/>
        </a>
      </div>
    </div>
    <div class="dots-wrapper">
      <span
        class="dot"
        v-for="(item, index) in sliders"
        :key="item.id"
        :class="{'active': currentPageIndex === index}"
      ></span>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import useSlider from './use-slider'

  export default {
    name: 'slider',
    props: {
      sliders: {
        type: Array,
        default() {
          return []
        }
      }
    },
    setup() {
      const rootRef = ref(null)
      const { currentPageIndex } = useSlider(rootRef)

      return {
        rootRef,
        currentPageIndex
      }
    }
  }
</script>

<style scoped lang="scss">
  .slider {
    min-height: 1px;
    font-size: 0;
    touch-action: pan-y;
    .slider-group {
      position: relative;
      overflow: hidden;
      white-space: nowrap;
      .slider-page {
        display: inline-block;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        a {
          display: block;
          width: 100%;
        }
        img {
          display: block;
          width: 100%;
        }
      }
    }
    .dots-wrapper {
      position: absolute;
      left: 50%;
      bottom: 12px;
      line-height: 12px;
      transform: translateX(-50%);
      .dot {
        display: inline-block;
        margin: 0 4px;
        width: 8px;
        height: 8px;
        transform: translateZ(1px);
        border-radius: 50%;
        background: $color-text-l;
        &.active {
          width: 20px;
          border-radius: 5px;
          background: $color-text-ll;
        }
      }
    }
  }
</style>

```


### use-slider.js

```js
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
import { onMounted, onUnmounted, ref } from 'vue'

BScroll.use(Slide)

export default function useSlider(wrapperRef) {
  const slider = ref(null)
  const currentPageIndex = ref(0)

  onMounted(() => {
    // 在mount生命周期里，才能通过ref获取到dom
    const sliderVal = slider.value = new BScroll(wrapperRef.value, {
      click: true,
      scrollX: true,
      scrollY: false,
      momentum: false,
      bounce: false,
      probeType: 2,
      slide: true
    })

    sliderVal.on('slideWillChange', (page) => {
      currentPageIndex.value = page.pageX
    })
  })

  onUnmounted(() => {
    slider.value.destroy()
  })

  return {
    slider,
    currentPageIndex
  }
}

```
