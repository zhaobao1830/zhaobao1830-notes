const fronKnowledgeSidebar = [
  {
    title: '工具方法',
    collapsable: false,
    children: [
      'utils/regexp'
    ]
  },
  {
    title: '常用组件',
    collapsable: false,
    children: [
      'common/image',
      'common/upload',
      'common/verifyLogin'
    ]
  },
  {
    title: 'Git',
    collapsable: false,
    children: [
      'git/',
      'git/command'
    ]
  },
  {
    title: '性能优化',
    collapsable: false,
    children: [
      'performance/'
    ]
  },
  {
    title: 'eslint',
    collapsable: false,
    children: [
      'eslint/'
    ]
  }
]
const jsSidebar = [
  {
    title: '通用方法',
    collapsable: false,
    children: [
      'methods/shuffle',
      'methods/timeFormat'
    ]
  }
]
const vueSidebar = [
  {
    title: 'vue bug总结',
    collapsable: false,
    children: [
      'bugSummary'
    ]
  },
  {
    title: '基础组件',
    collapsable: false,
    children: [
      'basicComponent/loading',
      'basicComponent/footer',
      'basicComponent/imageLazy',
      'basicComponent/scroll',
      'basicComponent/slide'
    ]
  },
  {
    title: '基础方法',
    collapsable: false,
    children: [
      'basicMethod/axios'
    ]
  },
  {
    title: '插件',
    collapsable: false,
    children: [
      'plugin/good-storage',
      'plugin/crypto-js'
    ]
  },
  {
    title: '指令',
    collapsable: false,
    children: [
      'directive/loading',
      'directive/permission'
    ]
  },
  {
    title: 'eslint配置',
    collapsable: false,
    children: [
      'eslint'
    ]
  },
]
const javaSidebar = [
  {
    title: 'springBoot',
    collapsable: false,
    children: [
      'springBoot/knowledge',
      'springBoot/bugSummary',
      'springBoot/pagination',
      'springBoot/swagger'
    ]
  },
  {
    title: 'maven',
    collapsable: false,
    children: [
      'maven/knowledge',
      'maven/bugSummary',
      'maven/environmentalIsolation'
    ]
  },
  {
    title: 'mybatis',
    collapsable: false,
    children: [
      'mybatis/tkmybatis'
    ]
  },
  {
    title: 'maven',
    collapsable: false,
    children: [
      'maven/knowledge'
    ]
  },
  {
    title: 'database',
    collapsable: false,
    children: [
      'database/knowledge'
    ]
  },
  {
    title: 'notes',
    collapsable: false,
    children: [
      'notes/notes'
    ]
  }
]

const takeNotesSidebar = [
  {
    title: 'css',
    collapsable: false,
    children: [
      'css/01',
      'css/02',
      'css/03',
      'css/04'
    ]
  },
  {
    title: 'vue',
    collapsable: false,
    children: [
      'vue/01',
      'vue/02'
    ]
  },
  {
    title: 'http',
    collapsable: false,
    children: [
      'http/01'
    ]
  }
]

module.exports = {
  fronKnowledgeSidebar,
  jsSidebar,
  vueSidebar,
  javaSidebar,
  takeNotesSidebar
}
