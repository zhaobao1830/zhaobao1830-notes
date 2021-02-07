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
    nav: [
      { text: '主页', link: '/' },
      {
        text: 'Vue',
        link: '/vue/'
      },
      {
        text: 'React',
        link: '/react/'
      },
      {
        text: 'Java',
        link: '/java/'
      },
      {
        text: '外网链接',
        items: [
          {
            text: 'helloworld',
            link: 'https://www.helloworld.net/'
          }
        ]
      }
    ],
    sidebar: [
      {
        title: 'Vue',
        path: '/vue/'
      },
      {
        title: 'React',
        path: '/react/'
      },
      {
        title: 'Java',
        path: '/java/'
      },
      {
        title: 'Git',
        path: '/git/'
      }
    ]
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
