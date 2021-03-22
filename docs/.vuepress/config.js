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
      {
        text: '主页',
        link: '/'
      },
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
          },
          {
            text: '木易杨',
            link: 'https://muyiy.cn/'
          }
        ]
      }
    ],
    sidebar: [
      {
        title: '工具方法',
        children: [
          'utils/regexp'
        ]
      },
      {
        title: 'Vue',
        path: '/vue/',
        collapsable: false,
        children: [
          {
            title: '基础组件',
            collapsable: false,
            children: [
              'vue/loading',
              'vue/footer',
              'vue/scroll'
            ]
          }
        ]
      },
      {
        title: 'React',
        path: '/react/'
      },
      {
        title: 'Java',
        children: [
          {
            title: 'maven',
            children: [
              'java/maven/knowledge',
              'java/maven/environmentalIsolation',
              'java/maven/bugSummary',
            ]
          },
          {
            title: 'spring-boot',
            children: [
              'java/springBoot/knowledge',
              'java/springBoot/pagination',
              'java/springBoot/swagger',
              'java/springBoot/bugSummary'
            ]
          }
        ]
      },
      {
        title: 'Js核心原理',
        children: [
          {
            title: '基石',
            children: [
              'js/cornerstone/typeOfData',
              'js/cornerstone/deepCopy'
            ]
          }
        ]
      },
      {
        title: 'Git',
        path: '/git/'
      },
      {
        title: '其他',
        children: [
          {
            title: '上传组件',
            path: '/other/upload'
          },
          {
            title: '图片',
            path: '/other/image'
          },
          {
            title: '登录验证',
            path: '/other/verifyLogin'
          }
        ]
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
