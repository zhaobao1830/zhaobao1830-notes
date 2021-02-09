// 用来进行vue的配置，比如vue全局注册
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant'
import 'vant/lib/index.css'
// 用来包裹代码
import ComponentBlock from './components/common/component-block'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Vue.use(Vant) // 引入vant
  Vue.use(ElementUI) // 引入element-ui
  Vue.component('component-block', ComponentBlock)
  Register()
}

// Vue全局注册方法
function Register() {
  const files = require.context('./components', true, /.vue$/)
  files.keys().forEach((key) => {
    let fileUrl = './components' + key.substring(1)
    import(fileUrl+'').then(res => {
      let { default: component } = res
      Vue.component(component.name, component)
    })
  })
}
