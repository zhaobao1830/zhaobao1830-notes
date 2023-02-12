import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

import {
  javaSidebar,
  jsSidebar,
  vueSidebar,
  uniappSidebar,
  fronKnowledgeSidebar,
  takeNotesSidebar,
  interviewSidebar
} from './config/stage'

export default {
  title: '技术博客',
  description: '前后端常用知识、踩坑记录、封装的插件、随手笔记等',
  // 这里与https://zhaobao1830.github.io/zhaobao1830-notes/中的zhaobao1830-notes一致，
  // 如果网站是https://zhaobao1830.github.io/，那base值就是/
  base: '/zhaobao1830-notes/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '技术博客',
      description: '前后端常用知识、踩坑记录、封装的插件、随手笔记等'
    }
  },
  theme: defaultTheme({
    repo: 'zhaobao1830/zhaobao1830-notes/',
    editLink: false,
    contributors: false,
    lastUpdatedText: '上次更新时间',
    navbar: [
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
            text: 'Vite基础项目',
            link: 'https://github.com/zhaobao1830/vitezb'
          },
          {
            text: 'VueCli移动端项目',
            link: 'https://github.com/zhaobao1830/vueclimobilezb'
          },
          {
            text: 'VueCli PC端项目',
            link: 'https://github.com/zhaobao1830/vueclipczb'
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
    ],
    sidebar: {
      '/java/': javaSidebar,
      '/js/': jsSidebar,
      '/vue/': vueSidebar,
      '/uniapp/': uniappSidebar,
      '/fronKnowledge/': fronKnowledgeSidebar,
      '/takeNotes/': takeNotesSidebar,
      '/interview': interviewSidebar
    }
  }),
  plugins: [
    docsearchPlugin({
      appId: 'G0W1RASOD3',
      apiKey: '473cca412f78e6a7233a3400d0ef2c54',
      indexName: 'zhaobao1830',
      locales: {
        '/': {
          placeholder: '搜索',
          translations: {
            button: {
              buttonText: '搜索',
              buttonAriaLabel: '搜索'
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消'
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除'
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接'
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者'
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈'
              }
            }
          }
        }
      }
    })
  ]
}
