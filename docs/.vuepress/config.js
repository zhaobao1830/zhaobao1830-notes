const pkg = require('../../package.json')

module.exports = {
  title: pkg.name,
  description: 'zhaobao1830的技术文档',
  dest: 'dist',   // 设置输出目录1
  base: '/zhaobao1830-notes/',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' }
    ],
    sidebarDepth: 1
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
