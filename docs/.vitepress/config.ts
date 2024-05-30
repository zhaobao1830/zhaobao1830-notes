import { defineConfig } from 'vitepress'

import { nav, sidebar, algolia } from './configs'

export default defineConfig({
  outDir: '../dist',
  base: process.env.APP_BASE_PATH || '/zhaobao1830-notes',

  lang: 'zh-CN',
  title: 'zhaobao1830的博客',
  description: '前后端常用知识、踩坑记录、封装的插件、随手笔记等',

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/home.webp',

    nav,
    sidebar,
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/zhaobao1830' }],

    footer: {
      message: '如有转载或 CV 的请标注本站原文地址',
      copyright: 'Copyright © 2024-present zhaobao1830'
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',

    /* Algolia DocSearch 配置 */
     search: {
       provider: 'algolia',
       options: algolia
     },

    // 本地搜索
    // search: {
    //   provider: 'local'
    // },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
