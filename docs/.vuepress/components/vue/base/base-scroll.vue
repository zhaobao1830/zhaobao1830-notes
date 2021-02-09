<template>
  <div
    ref="bsWrapper"
    class="base-scroll-wrapper"
  >
    <div class="base-scroll-content">
      <div ref="listWrapper" class="base-scroll-list-wrapper">
        <slot>
        </slot>
      </div>
      <slot name="pullup" :pullUpLoad="pullUpLoad" :isPullUpLoad="isPullUpLoad">
        <div class="base-scroll-pullup-wrapper" v-if="pullUpLoad">
          <div class="before-trigger" v-if="!isPullUpLoad">
            <span>{{pullUpTxt}}</span>
          </div>
          <div class="after-trigger" v-else>
            <span class="pullup-txt">Loading...</span>
          </div>
        </div>
      </slot>
    </div>
    <div v-if="pullDownRefresh" class="base-scroll-pulldown" ref="pulldown">
      <slot
        name="pulldown"
        :pullDownRefresh="pullDownRefresh"
        :pullDownStyle="pullDownStyle"
        :beforePullDown="beforePullDown"
        :isPullingDown="isPullingDown"
      >
        <div class="base-scroll-pulldown-wrapper" :style="pullDownStyle">
          <div class="before-trigger" v-show="beforePullDown">
            <span>Pull Down and refresh</span>
          </div>
          <div class="after-trigger" v-show="!beforePullDown">
            <div v-show="isPullingDown" class="loading">
              <span>Loading...</span>
            </div>
            <div v-show="!isPullingDown" class="base-scroll-pulldown-loaded">
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
  import { getRect } from '../../../js/base-scroll/dom'
  import { camelize } from '../../../js/base-scroll/string'
  import { USE_TRANSITION } from '../../../js/base-scroll/constants'

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
    name: 'baseScrolls',
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
      async pullingDownHandler() {
        this.beforePullDown = false
        this.isPullingDown = true
        this.$emit(EVENT_PULLING_DOWN)
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
          },
          pullDownRefresh
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
        .base-scroll-list{
          .base-scrool-item{
            height: 60px;
            line-height: 60px;
            font-size: 18px;
            padding-left: 20px;
          }
        }
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
