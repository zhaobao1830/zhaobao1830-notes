const stage = require('./config/stage.js')
const { javaSidebar, vueSidebar, fronKnowledgeSidebar } = stage
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
  themeConfig: {
    repo: 'zhaobao1830/zhaobao1830-notes/',
    nav: [
      {
        text: '前端知识点',
        link: '/fronKnowledge/introduction/'
      },
      {
        text: 'vue',
        link: '/vue/introduction/'
      },
      {
        text: 'java',
        link: '/java/introduction/'
      },
      {
        text: '外网链接',
        items: [
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
          }
        ]
      },
      {
        text: '开源项目',
        items: [
          {
            text: 'Java基础项目',
            link: 'https://github.com/zhaobao1830/spbtzb'
          }
        ]
      }
    ],
    sidebar:{
      '/java/': javaSidebar,
      '/vue/': vueSidebar,
      '/fronKnowledge/': fronKnowledgeSidebar
    }
  },
  plugins: [
    // 回到顶部
    '@vuepress/back-to-top',

    // 放大
    ['@vuepress/medium-zoom',
      {
        selector: 'img'
      }
    ]
  ]
}
