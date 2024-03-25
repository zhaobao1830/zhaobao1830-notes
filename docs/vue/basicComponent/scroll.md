# scroll滚动

## scroll滚动插件

### vue3基本滚动

#### scroll.vue

::: tip  温馨提示
该组件是以[better-scroll 2.0](https://better-scroll.github.io/docs/zh-CN/)为基础封装的，包含基本的滚动功能

项目地址：[https://github.com/zhaobao1830/vite-mobile-zb/blob/master/src/components/base/scroll/base-scroll.vue](https://github.com/zhaobao1830/vite-mobile-zb/blob/master/src/components/base/scroll/base-scroll.vue)
:::

```
<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
  import useScroll from '@/components/base/scroll/use-scroll'
  import { ref } from 'vue'

  export default {
    name: 'scroll',
    props: {
      click: {
        type: Boolean,
        default: true
      },
      probeType: {
        type: Number,
        default: 0
      }
    },
    emits: ['scroll'],
    setup(props, { emit }) {
      const rootRef = ref(null)
      const scroll = useScroll(rootRef, props, emit)

      return {
        rootRef,
        scroll
      }
    }
  }
</script>

<style scoped>

</style>

```

#### use-scroll.js

```js
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import { ref, onMounted, onUnmounted } from 'vue'

BScroll.use(ObserveDOM)

export default function useScroll(wrapperRef, options, emit) {
  const scroll = ref(null)

  onMounted(() => {
    const scrollVal = scroll.value = new BScroll(wrapperRef.value, {
      observeDOM: true, // 开启 observe-dom 插件
      ...options
    })

    // 如果probeType大于0，就会派发scroll事件，https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-options.html#probetype
    // 获取当前位置的坐标值 https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-api.html#%E4%BA%8B%E4%BB%B6
    if (options.probeType > 0) {
      scrollVal.on('scroll', (pos) => {
        emit('scroll', pos)
      })
    }
  })

  onUnmounted(() => {
    scroll.value.destroy()
  })

  return scroll
}

```

使用

```html
<scroll class="home-container">
  <div>
    这里面就是展示的内容
  </div>
</scroll>
```

::: tip  特别提示
使用的时候，home-container要固定高度，且子元素只能有一个
:::

### vue3下拉刷新、上拉加载

::: tip  温馨提示
该组件是以[better-scroll 2.0](https://better-scroll.github.io/docs/zh-CN/)为基础封装的，包含下拉加载、上拉刷新功能

项目地址：[https://github.com/zhaobao1830/vite-mobile-zb/blob/master/src/components/base/scroll/scroll-pull-up-down.vue](https://github.com/zhaobao1830/vite-mobile-zb/blob/master/src/components/base/scroll/scroll-pull-up-down.vue)
:::

#### scrollPullUpDown.vue

```
<template>
  <div
    ref="scrollWrapperRef"
    class="scroll-pull-up-down"
  >
    <div class="scroll-pull-up-down-content">
      <div ref="listWrapperRef" class="scroll-list-wrapper">
        <slot>
        </slot>
      </div>
      <slot name="pullup" :pullUpLoad="pullUpLoad" :isPullUpLoad="isPullUpLoad">
        <div class="scroll-pullup-wrapper" v-if="pullUpLoad && data.length > 0">
          <div class="before-trigger" v-if="!isPullUpLoad">
            <span>{{pullUpTxt}}</span>
          </div>
          <div class="after-trigger" v-else>
            <span class="pullup-txt">加载中...</span>
          </div>
        </div>
      </slot>
    </div>
    <div
      v-if="pullDownRefresh"
      class="scroll-pulldown"
      >
      <slot
        name="pulldown"
        :pullDownRefresh="pullDownRefresh"
        :pullDownStyle="pullDownStyle"
        :beforePullDown="beforePullDown"
        :isPullingDown="isPullingDown"
      >
        <div class="scroll-pulldown-wrapper" ref="pulldownWrapperRef" :style="pullDownStyle">
          <div class="before-trigger" v-show="beforePullDown">
            <van-icon name="down"/>
          </div>
          <div class="after-trigger" v-show="!beforePullDown">
            <div v-show="isPullingDown" class="loading">
              <span>刷新中...</span>
            </div>
            <div v-show="!isPullingDown" class="scroll-pulldown-loaded">
              <span>{{refreshTxt}}</span>
            </div>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup>
  import { defineProps, defineEmits, nextTick, onMounted, ref, watch, onActivated, onDeactivated, defineExpose } from 'vue'
  import usePullDown from './use-pullDown'
  import usePullUp from './use-pullUp'
  import BScroll from '@better-scroll/core'
  import PullDown from '@better-scroll/pull-down'
  import PullUp from '@better-scroll/pull-up'
  import { getRect } from '@/core/utils/dom'
  import { USE_TRANSITION } from '@/core/bscroll/constants'

  BScroll.use(PullDown)
  BScroll.use(PullUp)

  const DEFAULT_STOP_TIME = 600

  const props = defineProps({
    data: {
      type: Array,
      default() {
        return []
      }
    },
    options: {
      type: Object,
      default() {
        return {}
      }
    },
    refreshDelay: {
      type: Number,
      default: 20
    }
  })

  const isPullDownUpdating = ref(false)

  const scroll = ref(null)

  const scrollWrapperRef = ref(null)

  const emit = defineEmits(['pulling-down', 'pulling-up'])

  const {
    pulldownWrapperRef,
    pullDownRefresh,
    refreshTxt,
    isPullingDown,
    pullDownStyle,
    beforePullDown,

    _onPullDownRefresh,
    _pullDownRefreshChangeHandler,
    _waitResetPullDown
  } = usePullDown(scroll, props, emit, _calculateMinHeight)

  const {
    listWrapperRef,
    isPullUpLoad,
    pullUpLoad,
    pullUpHeight,
    pullUpTxt,
    pullUpNoMore,

    _onPullUpLoad,
    _pullUpLoadChangeHandler
  } = usePullUp(scroll, props, emit, _calculateMinHeight)

  onMounted(async () => {
    await nextTick()
    initBscroll()
  })

  // setup内部的资源是私有的 使用defineExpose可以将资源显示暴露 供父组件调用
  defineExpose({
    forceUpdate
  })

  watch(() => props.data, () => {
    setTimeout(() => {
      forceUpdate(true)
    }, props.refreshDelay)
  })

  onActivated(() => {
    enable()
  })

  onDeactivated(() => {
    disable()
  })

  function initBscroll() {
    if (!scrollWrapperRef.value) {
      return
    }
    _calculateMinHeight()
    const dynamicOptions = {
      scrollY: true,
      click: true,
      probeType: 1,
      useTransition: USE_TRANSITION
    }
    const options = Object.assign({}, dynamicOptions, props.options)
    scroll.value = new BScroll(scrollWrapperRef.value, options)

    if (pullDownRefresh.value) {
      _onPullDownRefresh()
      _pullDownRefreshChangeHandler()
    }

    if (pullUpLoad.value) {
      _onPullUpLoad()
      _pullUpLoadChangeHandler()
    }
  }

  function _calculateMinHeight() {
    const pullUpLoadVal = pullUpLoad.value
    const pullDownRefreshVal = pullDownRefresh.value
    let minHeight = 0
    if (pullDownRefreshVal || pullUpLoadVal) {
      const wrapperHeight = getRect(scrollWrapperRef.value).height
      minHeight = wrapperHeight + 1
      if (pullUpLoadVal && pullUpLoadVal.visible) {
        minHeight -= pullUpHeight.value
      }
    }
    listWrapperRef.value.style.minHeight = `${minHeight}px`
  }

  async function forceUpdate(dirty = false, nomore = false) {
    if (isPullDownUpdating.value) {
      return
    }
    if (pullDownRefresh.value && isPullingDown.value) {
      isPullingDown.value = false
      isPullDownUpdating.value = true
      await _waitFinishPullDown()
      isPullDownUpdating.value = false
      await _waitResetPullDown(dirty)
    } else if (pullUpLoad.value && isPullUpLoad.value) {
      isPullUpLoad.value = false
      scroll.value.finishPullUp()
      pullUpNoMore.value = !dirty || nomore
    }

    dirty && refresh()
  }

  function _waitFinishPullDown(next) {
    const { stopTime = DEFAULT_STOP_TIME } = pullDownRefresh.value
    return new Promise(resolve => {
      setTimeout(() => {
        scroll.value.finishPullDown()
        resolve()
      }, stopTime)
    })
  }

  function disable() {
    scroll.value && scroll.value.disable()
  }

  function enable() {
    scroll.value && scroll.value.enable()
  }

  function refresh() {
    _calculateMinHeight()
    scroll.value && scroll.value.refresh()
  }
</script>

<style scoped lang="scss">
  .scroll-pull-up-down{
    position: relative;
    overflow: hidden;
    .scroll-pull-up-down-content{
      position: relative;
      z-index: 1;
      .scroll-list-wrapper{
        overflow: hidden;
      }
      .scroll-pullup-wrapper{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .before-trigger{
          padding: 22px 0;
          min-height: 1em;
        }
        .after-trigger{
          padding: 19px 0;
        }
      }
    }
    .scroll-pulldown{
      .scroll-pulldown-wrapper{
        position: absolute;
        width: 100%;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all;
        overflow: hidden;
        .before-trigger{
          height: 54px;
          line-height: 0;
          padding-top: 6px
        }
        .after-trigger{
          .loading {
            padding: 8px 0;
            font-size: 14px;
          }
          .scroll-pulldown-loaded{
            padding: 8px 0;
            font-size: 14px;
          }
        }
      }
    }
  }
</style>

```

#### use-pullDown.js

```js
import { computed, nextTick, ref, watch } from 'vue'
import { getRect } from '@/core/utils/dom'

export default function usePullDown(scroll, props, emit, _calculateMinHeight) {
  const DEFAULT_REFRESH_TXT = '刷新成功'

  const pulldownWrapperRef = ref(null)

  const beforePullDown = ref(true)
  const pullDownStop = ref(40)
  const isPullingDown = ref(false)
  const pullDownStyle = ref('')
  const pullDownHeight = ref(60)
  const resetPullDownTimer = ref(null)

  const pullDownRefresh = computed(() => {
    let pullDownRefresh = props.options.pullDownRefresh
    if (!pullDownRefresh) {
      return pullDownRefresh
    }
    if (pullDownRefresh === true) {
      pullDownRefresh = {}
    }
    return Object.assign({
      stop: pullDownStop.value
    }, pullDownRefresh)
  })

  const refreshTxt = computed(() => {
    const pullDownRefreshVal = pullDownRefresh.value
    return (pullDownRefreshVal && pullDownRefreshVal.txt) || DEFAULT_REFRESH_TXT
  })

  watch(pullDownRefresh, (newVal, oldVal) => {
    if (newVal) {
      scroll.value.openPullDown(newVal)
      if (!oldVal) {
        _onPullDownRefresh()
        _pullDownRefreshChangeHandler()
      }
    }

    if (!newVal && oldVal) {
      scroll.value.closePullDown()
      _offPullDownRefresh()
      _pullDownRefreshChangeHandler()
    }
  }, {
    deep: true
  })

  function _onPullDownRefresh() {
    scroll.value.on('pullingDown', _pullDownHandle)
    scroll.value.on('scroll', _pullDownScrollHandle)
  }

  function _pullDownHandle() {
    if (resetPullDownTimer.value) {
      clearTimeout(resetPullDownTimer.value)
    }
    beforePullDown.value = false
    isPullingDown.value = true
    emit('pulling-down')
  }

  async function _pullDownRefreshChangeHandler() {
    await nextTick()
    _getPullDownEleHeight()
    _calculateMinHeight()
  }

  function _offPullDownRefresh() {
    scroll.value.off('pullingDown', _pullDownHandle)
    scroll.value.off('scroll', _pullDownScrollHandle)
  }

  function _pullDownScrollHandle(pos) {
    if (beforePullDown.value) {
      pullDownStyle.value = `top:${Math.min(pos.y - pullDownHeight.value, 0)}px`
    } else {
      pullDownStyle.value = `top:${Math.min(pos.y - pullDownStop.value, 0)}px`
    }
  }

  async function _getPullDownEleHeight() {
    const pulldownWrapper = pulldownWrapperRef.value
    if (!pulldownWrapper) {
      return
    }
    pullDownHeight.value = getRect(pulldownWrapper).height
    beforePullDown.value = false
    isPullingDown.value = true
    await nextTick()
    pullDownStop.value = getRect(pulldownWrapper).height
    beforePullDown.value = true
    isPullingDown.value = false
  }

  function _waitResetPullDown(dirty) {
    return new Promise(resolve => {
      resetPullDownTimer.value = setTimeout(() => {
        pullDownStyle.value = `top: -${pullDownHeight.value}px`
        beforePullDown.value = true
        resolve()
      }, scroll.value.options.bounceTime)
    })
  }

  return {
    pulldownWrapperRef,
    pullDownRefresh,
    refreshTxt,
    isPullingDown,
    pullDownStyle,
    beforePullDown,

    _onPullDownRefresh,
    _pullDownRefreshChangeHandler,
    _waitResetPullDown
  }
}

```

#### use-pullUp.js

```js
import { computed, nextTick, ref, watch } from 'vue'
import { getRect } from '@/core/utils/dom'

export default function usePullUp(scroll, props, emit, _calculateMinHeight) {
  const listWrapperRef = ref(null)

  const isPullUpLoad = ref(false)
  const pullUpHeight = ref(0)
  const pullUpNoMore = ref(false)

  const pullUpLoad = computed(() => {
    return props.options.pullUpLoad
  })

  const pullUpTxt = computed(() => {
    const pullUpLoadVal = pullUpLoad.value
    const txt = pullUpLoadVal && pullUpLoadVal.txt
    const moreTxt = (txt && txt.more) || ''
    const noMoreTxt = (txt && txt.noMore) || ''

    return pullUpNoMore.value ? noMoreTxt : moreTxt
  })

  watch(pullUpLoad, (newVal, oldVal) => {
    if (newVal) {
      scroll.value.openPullUp(newVal)
      if (!oldVal) {
        _onPullUpLoad()
        _pullUpLoadChangeHandler()
      }
    }

    if (!newVal && oldVal) {
      scroll.value.closePullUp()
      _offPullUpLoad()
      _pullUpLoadChangeHandler()
    }
  }, {
    deep: true
  })

  function _onPullUpLoad() {
    scroll.value.on('pullingUp', _pullUpHandle)
  }
  function _offPullUpLoad() {
    scroll.value.off('pullingUp', _pullUpHandle)
  }

  function _pullUpHandle() {
    isPullUpLoad.value = true
    emit('pulling-up')
  }

  function _pullUpLoadChangeHandler() {
    nextTick(() => {
      _getPullUpEleHeight()
      _calculateMinHeight()
    })
  }

  function _getPullUpEleHeight() {
    const listWrapper = listWrapperRef.value
    const pullup = listWrapper.nextElementSibling
    if (!pullup) {
      pullUpHeight.value = 0
      return
    }
    pullUpHeight.value = getRect(pullup).height
  }

  return {
    listWrapperRef,
    isPullUpLoad,
    pullUpLoad,
    pullUpHeight,
    pullUpNoMore,
    pullUpTxt,

    _onPullUpLoad,
    _pullUpLoadChangeHandler
  }
}

```

使用插件

"@better-scroll/core": "^2.4.2"

"@better-scroll/observe-dom": "^2.4.2"

"@better-scroll/pull-down": "^2.1.1"

"@better-scroll/pull-up": "^2.1.1"

使用

```html
<div class="ha-list">
  <scroll-pull-up-down
    :data="patientList"
    :options="options"
    @pulling-down="onPullingDown"
    @pulling-up="onPullingUp"
    ref="scroll"
  >
    <ul class="ha-ul"
    </ul>
  </scroll-pull-up-down>
</div>
```

::: tip  特别提示
使用的时候，ha-list要固定高度，内部是scroll-pull-up-down组件，再内部是展示的数据，但只能有一个子元素
:::

### vue2基本滚动

::: tip  温馨提示
该组件是以[better-scroll 2.0](https://better-scroll.github.io/docs/zh-CN/)为基础封装的，包含基本的滚动功能

项目地址：[https://github.com/zhaobao1830/vue-cli-mobile-zb/blob/master/src/components/base/scroll/base-scroll.vue](https://github.com/zhaobao1830/vue-cli-mobile-zb/blob/master/src/components/base/scroll/base-scroll.vue)
:::

base-scroll.vue

```
<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'

BScroll.use(ObserveDOM)

export default {
  name: 'base-scroll',
  props: {
    click: {
      type: Boolean,
      default: true
    },
    probeType: {
      type: Number,
      default: 0
    },
    scrollX: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll () {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        ObserveDOM: true, // 开启 observe-dom 插件
        probeType: this.probeType,
        click: this.click,
        scrollX: this.scrollX
      })
    }
  },
  destroyed() {
    this.scroll.destroy()
  }
}
</script>

<style scoped lang="scss">

</style>

```

使用

```
<base-scroll class="home-container">
  <div class="home-content">
    内容
  </div>
</base-scroll>
```
::: tip 备注
使用的时候，home-container要固定高度，且子元素只能有一个
:::

### vue2下拉刷新、上拉加载

::: tip  温馨提示
该组件是以[better-scroll 2.0](https://better-scroll.github.io/docs/zh-CN/)为基础封装的，包含基本的滚动、下拉加载、上拉刷新功能

项目地址：[https://github.com/zhaobao1830/vue-cli-mobile-zb/blob/master/src/components/base/scroll/scroll-pull-up-down.vue](https://github.com/zhaobao1830/vue-cli-mobile-zb/blob/master/src/components/base/scroll/scroll-pull-up-down.vue)
:::

scroll-pull-up-down.vue

```
<template>
  <div
    ref="bsWrapper"
    class="scroll-pull-up-down-wrapper"
  >
    <div class="scroll-pull-up-down-content">
      <div ref="listWrapper" class="scroll-pull-up-down-list-wrapper">
        <slot>
        </slot>
      </div>
      <slot name="pullup" :pullUpLoad="pullUpLoad" :isPullUpLoad="isPullUpLoad">
        <div class="scroll-pull-up-down-pullup-wrapper" v-if="pullUpLoad">
          <div class="before-trigger" v-if="!isPullUpLoad">
            <span>{{pullUpTxt}}</span>
          </div>
          <div class="after-trigger" v-else>
            <span class="pullup-txt">Loading...</span>
          </div>
        </div>
      </slot>
    </div>
    <div v-if="pullDownRefresh" class="scroll-pull-up-down-pulldown" ref="pulldown">
      <slot
        name="pulldown"
        :pullDownRefresh="pullDownRefresh"
        :pullDownStyle="pullDownStyle"
        :beforePullDown="beforePullDown"
        :isPullingDown="isPullingDown"
      >
        <div class="scroll-pull-up-down-pulldown-wrapper" :style="pullDownStyle">
          <div class="before-trigger" v-show="beforePullDown">
            <span>Pull Down and refresh</span>
          </div>
          <div class="after-trigger" v-show="!beforePullDown">
            <div v-show="isPullingDown" class="loading">
              <span>Loading...</span>
            </div>
            <div v-show="!isPullingDown" class="scroll-pull-up-down-pulldown-loaded">
              <span>{{refreshTxt}}</span>
            </div>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from '@better-scroll/core'
import PullDown from '@better-scroll/pull-down'
import Pullup from '@better-scroll/pull-up'
import { getRect } from '@/core/utils/dom'
import { camelize } from '@/core/lang/string'
import { USE_TRANSITION } from '@/core/bscroll/constants'

BScroll.use(PullDown)
BScroll.use(Pullup)

const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'
const DEFAULT_STOP_TIME = 600
const DEFAULT_REFRESH_TXT = '刷新成功'

const NEST_MODE_NONE = 'none'
const NEST_MODE_NATIVE = 'native'

const EVENT_SCROLL = 'scroll'
const EVENT_BEFORE_SCROLL_START = 'before-scroll-start'
const EVENT_SCROLL_END = 'scroll-end'

const SCROLL_EVENTS = [EVENT_SCROLL, EVENT_BEFORE_SCROLL_START, EVENT_SCROLL_END]

const DEFAULT_OPTIONS = {
  click: true,
  probeType: 1
}

const EVENT_PULLING_DOWN = 'pulling-down'
const EVENT_PULLING_UP = 'pulling-up'

export default {
  name: 'scroll-pull-up-down',
  inject: {
    parentScroll: {
      default: null
    }
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    options: {
      type: Object,
      default() {
        return {}
      }
    },
    direction: {
      type: String,
      default: DIRECTION_V
    },
    refreshDelay: {
      type: Number,
      default: 20
    },
    scrollEvents: { // 配置需要派发的 scroll 事件 可包含子项：'scroll', 'before-scroll-start', 'scroll-end'
      type: Array,
      default() {
        return []
      },
      validator(arr) {
        return arr.every((item) => {
          return SCROLL_EVENTS.indexOf(item) !== -1
        })
      }
    },
    nestMode: {
      type: String,
      default: NEST_MODE_NONE
    }
  },
  data() {
    return {
      beforePullDown: true,
      isPullingDown: false,
      isPullUpLoad: false,
      pullDownStyle: '',
      pullDownStop: 40,
      pullDownHeight: 60,
      pullUpHeight: 0,
      pullUpNoMore: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initBscroll()
    })
  },
  methods: {
    initBscroll() {
      if (!this.$refs.bsWrapper) {
        return
      }
      this._calculateMinHeight()
      const dynamicOptions = {
        scrollY: this.direction === DIRECTION_V,
        scrollX: this.direction === DIRECTION_H,
        probeType: this.needListenScroll ? 3 : 1,
        useTransition: USE_TRANSITION
      }
      const options = Object.assign({}, DEFAULT_OPTIONS, dynamicOptions, this.options)

      this.bscroll = new BScroll(this.$refs.bsWrapper, options)

      this.parentScroll && this.nestMode !== NEST_MODE_NONE && this._handleNestScroll()

      this._listenScrollEvents()

      if (this.pullDownRefresh) {
        this._onPullDownRefresh()
        this._pullDownRefreshChangeHandler()
      }

      if (this.pullUpLoad) {
        this._onPullUpLoad()
        this._pullUpLoadChangeHandler()
      }
    },
    async forceUpdate(dirty = false, nomore = false) {
      if (this.isPullDownUpdating) {
        return
      }
      if (this.pullDownRefresh && this.isPullingDown) {
        this.isPullingDown = false
        this.isPullDownUpdating = true
        await this._waitFinishPullDown()
        this.isPullDownUpdating = false
        await this._waitResetPullDown(dirty)
      } else if (this.pullUpLoad && this.isPullUpLoad) {
        this.isPullUpLoad = false
        this.bscroll.finishPullUp()
        this.pullUpNoMore = !dirty || nomore
      }

      dirty && this.refresh()
    },
    _waitFinishPullDown(next) {
      const { stopTime = DEFAULT_STOP_TIME } = this.pullDownRefresh
      return new Promise(resolve => {
        setTimeout(() => {
          this.bscroll.finishPullDown()
          resolve()
        }, stopTime)
      })
    },
    _calculateMinHeight() {
      const { bsWrapper, listWrapper } = this.$refs
      const pullUpLoad = this.pullUpLoad
      const pullDownRefresh = this.pullDownRefresh
      let minHeight = 0
      if (pullDownRefresh || pullUpLoad) {
        const wrapperHeight = getRect(bsWrapper).height
        minHeight = wrapperHeight + 1
        if (pullUpLoad && pullUpLoad.visible) {
          minHeight -= this.pullUpHeight
        }
      }
      listWrapper.style.minHeight = `${minHeight}px`
    },
    _handleNestScroll() {
      this.$nextTick(() => {
        const innerScroll = this.bscroll
        const outerScroll = this.parentScroll.scroll
        const scrolls = [innerScroll, outerScroll]
        scrolls.forEach((scroll, index, arr) => {
          // scroll ended always enable them
          scroll.on('touchEnd', () => {
            outerScroll.enable()
            innerScroll.enable()
            // when inner scroll reaching boundary, we will disable inner scroll, so when 'touchend' event fire,
            // the inner scroll will not reset initiated within '_end' method in better-scroll.
            // then lead to inner and outer scrolls together when we touch and move on the outer scroll element,
            // so here we reset inner scroll's 'initiated' manually.
            innerScroll.initiated = false
          })

          scroll.on('beforeScrollStart', () => {
            this.touchStartMoment = true
            const anotherScroll = arr[(index + 1) % 2]
            anotherScroll.stop()
            anotherScroll.resetPosition()
          })
        })

        innerScroll.on('scroll', (pos) => {
          // if scroll event triggered not by touch event, such as by 'scrollTo' method
          if (!innerScroll.initiated || innerScroll.isInTransition) {
            return
          }

          if (this.nestMode === NEST_MODE_NATIVE && !this.touchStartMoment) {
            return
          }

          const reachBoundary = this._checkReachBoundary(pos)
          if (reachBoundary) {
            innerScroll.resetPosition()
            innerScroll.disable()
            // Prevent outer scroll have a bouncing step when enabled in 'free' nestMode.
            outerScroll.pointX = innerScroll.pointX
            outerScroll.pointY = innerScroll.pointY
            outerScroll.enable()
          } else {
            outerScroll.disable()
          }
          this.touchStartMoment = false
        })
      })
    },
    _checkReachBoundary(pos) {
      const distX = this.bscroll.distX
      const distY = this.bscroll.distY
      const reachBoundaryX = distX > 0 ? pos.x >= this.bscroll.minScrollX : distX < 0 ? pos.x <= this.bscroll.maxScrollX : false
      const reachBoundaryY = distY > 0 ? pos.y >= this.bscroll.minScrollY : distY < 0 ? pos.y <= this.bscroll.maxScrollY : false
      const freeScroll = this.bscroll.freeScroll
      const hasHorizontalScroll = this.bscroll.hasHorizontalScroll
      const hasVerticalScroll = this.bscroll.hasVerticalScroll

      if (!hasHorizontalScroll && !hasVerticalScroll) {
        return true
      }

      if (freeScroll) {
        return reachBoundaryX || reachBoundaryY
      }

      let reachBoundary
      if (this.bscroll.movingDirectionX) {
        reachBoundary = reachBoundaryX
      } else if (this.bscroll.movingDirectionY) {
        reachBoundary = reachBoundaryY
      }
      return reachBoundary
    },
    _listenScrollEvents() {
      this.finalScrollEvents.forEach((event) => {
        this.bscroll.on(camelize(event), (...args) => {
          this.$emit(event, ...args)
        })
      })
    },
    _onPullDownRefresh() {
      this.bscroll.on('pullingDown', this._pullDownHandle)
      this.bscroll.on('scroll', this._pullDownScrollHandle)
    },
    _offPullDownRefresh() {
      this.bscroll.off('pullingDown', this._pullDownHandle)
      this.bscroll.off('scroll', this._pullDownScrollHandle)
    },
    _onPullUpLoad() {
      this.bscroll.on('pullingUp', this._pullUpHandle)
    },
    _offPullUpLoad() {
      this.bscroll.off('pullingUp', this._pullUpHandle)
    },
    _pullUpLoadChangeHandler() {
      this.$nextTick(() => {
        this._getPullUpEleHeight()
        this._calculateMinHeight()
      })
    },
    _waitResetPullDown(dirty) {
      return new Promise(resolve => {
        this.resetPullDownTimer = setTimeout(() => {
          this.pullDownStyle = `top: -${this.pullDownHeight}px`
          this.beforePullDown = true
          resolve()
        }, this.bscroll.options.bounceTime)
      })
    },
    _pullUpHandle() {
      this.isPullUpLoad = true
      this.$emit(EVENT_PULLING_UP)
    },
    _pullDownHandle() {
      if (this.resetPullDownTimer) {
        clearTimeout(this.resetPullDownTimer)
      }
      this.beforePullDown = false
      this.isPullingDown = true
      this.$emit(EVENT_PULLING_DOWN)
    },
    _pullDownScrollHandle(pos) {
      if (this.beforePullDown) {
        this.pullDownStyle = `top:${Math.min(pos.y - this.pullDownHeight, 0)}px`
      } else {
        this.pullDownStyle = `top:${Math.min(pos.y - this.pullDownStop, 0)}px`
      }
    },
    _pullDownRefreshChangeHandler() {
      this.$nextTick(() => {
        this._getPullDownEleHeight()
        this._calculateMinHeight()
      })
    },
    _getPullDownEleHeight() {
      let pulldown = this.$refs.pulldown
      if (!pulldown) {
        return
      }
      pulldown = pulldown.firstChild
      this.pullDownHeight = getRect(pulldown).height
      this.beforePullDown = false
      this.isPullingDown = true
      this.$nextTick(() => {
        this.pullDownStop = getRect(pulldown).height

        this.beforePullDown = true
        this.isPullingDown = false
      })
    },
    _getPullUpEleHeight() {
      const listWrapper = this.$refs.listWrapper
      const pullup = listWrapper.nextElementSibling
      if (!pullup) {
        this.pullUpHeight = 0
        return
      }
      this.pullUpHeight = getRect(pullup).height
    },
    disable() {
      this.bscroll && this.bscroll.disable()
    },
    enable() {
      this.bscroll && this.bscroll.enable()
    },
    refresh() {
      this._calculateMinHeight()
      this.bscroll && this.bscroll.refresh()
    }
  },
  watch: {
    data() {
      setTimeout(() => {
        this.forceUpdate(true)
      }, this.refreshDelay)
    },
    pullDownRefresh: {
      handler(newVal, oldVal) {
        if (newVal) {
          this.bscroll.openPullDown(newVal)
          if (!oldVal) {
            this._onPullDownRefresh()
            this._pullDownRefreshChangeHandler()
          }
        }

        if (!newVal && oldVal) {
          this.bscroll.closePullDown()
          this._offPullDownRefresh()
          this._pullDownRefreshChangeHandler()
        }
      },
      deep: true
    },
    pullUpLoad: {
      handler(newVal, oldVal) {
        if (newVal) {
          this.bscroll.openPullUp(newVal)
          if (!oldVal) {
            this._onPullUpLoad()
            this._pullUpLoadChangeHandler()
          }
        }

        if (!newVal && oldVal) {
          this.bscroll.closePullUp()
          this._offPullUpLoad()
          this._pullUpLoadChangeHandler()
        }
      },
      deep: true
    }
  },
  activated() {
    /* istanbul ignore next */
    this.enable()
  },
  deactivated() {
    /* istanbul ignore next */
    this.disable()
  },
  computed: {
    pullDownRefresh() {
      let pullDownRefresh = this.options.pullDownRefresh
      if (!pullDownRefresh) {
        return pullDownRefresh
      }
      if (pullDownRefresh === true) {
        pullDownRefresh = {}
      }
      return Object.assign({
          stop: this.pullDownStop
        }, pullDownRefresh
      )
    },
    finalScrollEvents() {
      const finalScrollEvents = this.scrollEvents.slice()

      if (!finalScrollEvents.length) {
        finalScrollEvents.push(EVENT_SCROLL)
        finalScrollEvents.push(EVENT_BEFORE_SCROLL_START)
      }
      return finalScrollEvents
    },
    needListenScroll() {
      return this.finalScrollEvents.indexOf(EVENT_SCROLL) !== -1 || this.parentScroll
    },
    pullUpLoad() {
      return this.options.pullUpLoad
    },
    pullUpTxt() {
      const pullUpLoad = this.pullUpLoad
      const txt = pullUpLoad && pullUpLoad.txt
      const moreTxt = (txt && txt.more) || ''
      const noMoreTxt = (txt && txt.noMore) || ''

      return this.pullUpNoMore ? noMoreTxt : moreTxt
    },
    refreshTxt() {
      const pullDownRefresh = this.pullDownRefresh
      return (pullDownRefresh && pullDownRefresh.txt) || DEFAULT_REFRESH_TXT
    }
  }
}
</script>

<style scoped lang="scss">
.base-scroll-wrapper{
  position: relative;
  height: 100%;
  overflow: hidden;
  .base-scroll-content{
    position: relative;
    z-index: 1;
    .base-scroll-list-wrapper{
      overflow: hidden;
    }
    .base-scroll-pullup-wrapper{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .before-trigger{
        padding: 22px 0;
        min-height: 1em;
      }
      .after-trigger{
        padding: 19px 0;
      }
    }
  }
  .base-scroll-pulldown{
    .base-scroll-pulldown-wrapper{
      position: absolute;
      width: 100%;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all;
      overflow: hidden;
      .before-trigger{
        height: 54px;
        line-height: 0;
        padding-top: 6px
      }
      .after-trigger{
        .loading {
          padding: 8px 0;
          font-size: 14px;
        }
        .base-scroll-pulldown-loaded{
          padding: 8px 0;
          font-size: 14px;
        }
      }
    }
  }
}
</style>

```

#### Props

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |

|-------------  |---------------- |---------------- |---------------------- |-------- |

| data    | 用于列表渲染的数据 | Array    | — | [] |

| options | better-scroll 配置项，具体请参考[BS](https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-options.html) 官方文档 | Object    | — | 看下面备注 |

| direction | 滚东方向 | String    | 'vertical', 'horizontal' | 'vertical' |

| refreshDelay    | data属性的数据更新后，scroll 的刷新延时 | Number    | — | 20 |

| scrollEvents    | 配置需要派发的 scroll 事件 | Array    | 可包含子项：'scroll', 'before-scroll-start', 'scroll-end' | [] |

| nestMode    | 嵌套滚动模式，默认是none，即不做嵌套处理。native只在开始滚动时判断是否到达边界并开启外层滚动，与浏览器原生的嵌套滚动保持一致。free模式下，内层滚动过程中只要触发边界，便会开启外层滚动。 | String    | 'none', 'native', 'free' | 'none' |

::: tip  温馨提示

options中 better-scroll 的几个常用配置项，pullDownRefresh、pullUpLoad这三个配置即可设为 Boolean（false 关闭该功能，true 开启该功能，并使用默认子配置），也可设为Object，开启该功能并具体定制其子配置项。

:::

##### pullDownRefresh 子配置项

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |

|-------------  |---------------- |---------------- |---------------------- |-------- |

| threshold    | 下拉刷新动作的下拉距离阈值 | Number    | — |90 |

| stop    | 回弹停留的位置 | Number    | — | 组件会自动计算回弹时显示的元素高度作为默认值 |

| stopTime    | 刷新成功的文案显示时间 | Number    | — | 600 |

| txt    | 刷新成功的文案 | String    | — | 'Refresh success' |

##### pullUpLoad 子配置项

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |

|-------------  |---------------- |---------------- |---------------------- |-------- |

| threshold    | 上拉刷新动作的上拉距离阈值 | Number    | — |0 |

| txt    | 上拉加载的相关文案 | Object    | — | { more: '', noMore: '' } |

| visible    | 内容不满一屏时，txt 文案是否可见 | Boolean    | — | false |
