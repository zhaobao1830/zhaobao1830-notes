import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
  {
    text: '前端知识点',
    link: '/fronKnowledge/utils/regexp'
  },
  {
    text: 'vue',
    link: '/vue/basicComponent/loading'
  },
  {
    text: 'java',
    link: '/java/springBoot/knowledge'
  },
  {
    text: '随手笔记',
    link: '/takeNotes/css/01'
  },
  {
    text: '基础',
    link: '/interview/js/01'
  },
  {
    text: '外网链接',
    children: [
      {
        text: '被删的前端游乐场',
        link: 'http://godbasin.com/'
      },
      {
        text: '木易杨',
        link: 'https://muyiy.cn/'
      },
      {
        text: '刀刀的知识积累',
        link: 'https://ostask.github.io/daodao-knowledge/'
      },
      {
        text: '茂茂物语',
        link: 'https://notes.fe-mm.com/'
      },
      {
        text: '汪图南',
        link: 'https://wangtunan.github.io/blog/'
      },
      {
        text: 'Vue.js 技术揭秘',
        link: 'https://ustbhuangyi.github.io/vue-analysis/'
      },
      {
        text: 'yqwoshuai',
        link: 'https://yqwoshuai.github.io/note/'
      },
      {
        text: '斌',
        link: 'https://idenet.github.io/blog/'
      },
      {
        text: '山月',
        link: 'https://q.shanyue.tech/'
      },
      {
        text: '山月',
        link: 'https://q.shanyue.tech/'
      }
    ]
  },
  {
    text: '开源项目',
    children: [
      {
        text: 'Java基础项目',
        link: 'https://github.com/zhaobao1830/spbtzb'
      },
      {
        text: 'Vite移动端项目',
        link: 'https://github.com/zhaobao1830/vite-mobile-zb'
      },
      {
        text: 'Vite PC端项目',
        link: 'https://github.com/zhaobao1830/vite-pc-zb'
      },
      {
        text: 'VueCli移动端项目',
        link: 'https://github.com/zhaobao1830/vue-cli-mobile-zb'
      },
      {
        text: 'VueCli PC端项目',
        link: 'https://github.com/zhaobao1830/vue-cli-pc-zb'
      }
    ]
  },
  {
    text: '官网',
    children: [
      {
        text: 'MDN-前端开发手册',
        link: 'https://developer.mozilla.org/zh-CN/'
      },
      {
        text: 'Node中文官网',
        link: 'https://nodejs.org/zh-cn/'
      },
      {
        text: 'Vue2文档',
        link: 'https://v2.cn.vuejs.org/'
      },
      {
        text: 'Vue3文档',
        link: 'https://cn.vuejs.org/'
      },
      {
        text: 'React文档',
        link: 'https://react.docschina.org/'
      },
      {
        text: 'Vue-cli(vue2脚手架)',
        link: 'https://cli.vuejs.org/zh/'
      },
      {
        text: 'Vite(脚手架)',
        link: 'https://vitejs.cn/'
      },
      {
        text: 'Pinia(状态管理工具)',
        link: 'https://pinia.vuejs.org/zh/'
      },
      {
        text: 'Vuepress(静态网站生成器)',
        link: 'https://v2.vuepress.vuejs.org/zh/'
      },
      {
        text: 'Element(vue2桌面端组件库)',
        link: 'https://element.eleme.cn/#/zh-CN/component/installation'
      },
      {
        text: 'Element-plus(Vue3桌面端组件库)',
        link: 'https://element-plus.gitee.io/zh-CN/guide/design.html'
      },
      {
        text: 'Vant4(Vue3移动端组件库)',
        link: 'https://vant-contrib.gitee.io/vant/#/zh-CN'
      },
      {
        text: '查询兼容性网站',
        link: 'https://caniuse.com/'
      },
      {
        text: '慕课网',
        link: 'https://www.imooc.com/'
      },
      {
        text: '极客时间',
        link: 'https://time.geekbang.org/'
      },
      {
        text: '拉勾教育',
        link: 'https://kaiwu.lagou.com/'
      },
      {
        text: '掘金',
        link: 'https://juejin.cn/'
      }
    ]
  }
]
