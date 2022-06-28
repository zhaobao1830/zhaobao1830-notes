const { searchPlugin } = require('@vuepress/plugin-search')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { defaultTheme } = require('vuepress')

const stage = require('./config/stage.ts')
const {
  javaSidebar,
  jsSidebar,
  vueSidebar,
  fronKnowledgeSidebar,
  takeNotesSidebar
} = stage

module.exports = {
  title: '技术博客',
  description: '前后端常用知识、踩坑记录、封装的插件、随手笔记等',
  dest: 'dist', // 设置输出目录
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
    navbar: [
      {
        text: '前端知识点',
        link: '/fronKnowledge/utils/regexp'
      },
      {
        text: 'js',
        link: '/js/methods/shuffle'
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
        text: '外网链接',
        children: [
          {
            text: '被删的前端游乐场',
            link: 'http://godbasin.com/'
          },
          {
            text: 'helloworld',
            link: 'https://www.helloworld.net/'
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
            link: 'https://github.com/zhaobao1830/spbtzb'
          }
        ]
      }
    ],
    sidebar: {
      '/java/': javaSidebar,
      '/js/': jsSidebar,
      '/vue/': vueSidebar,
      '/fronKnowledge/': fronKnowledgeSidebar,
      '/takeNotes/': takeNotesSidebar
    }
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        }
      }
    }),
    // 回到顶部
    backToTopPlugin(),
    mediumZoomPlugin({
      // 配置项
    })
  ]
}
