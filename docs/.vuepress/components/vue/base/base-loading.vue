<template>
  <div class="loading">
    <img
      :width="imgStyle.width"
      :height="imgStyle.height"
      :src="imgSrc"
      alt="loadingImg"
    >
    <p
      class="desc"
      v-show="titleShow"
    >{{title}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'base-loading',
    props: {
      titleShow: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: '正在载入...'
      },
      imgStyle: {
        type: Object,
        default: function () {
          return {
            width: 24,
            height: 24
          }
        }
      },
      imgSrc: {
        type: String,
        default: require('../../../public/vue/base/loading/loading.gif')
      }
    }
  }
</script>

<style scoped lang="scss">
  .loading{
    width: 100%;
    text-align: center;
    .desc{
      line-height: 20px;
      font-size: 12px;
    }
  }
</style>
