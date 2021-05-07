const fronKnowledgeSidebar = [
  {
    title: '介绍',
    collapsable: false,
    children: ['introduction/']
  },
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
    title: 'css',
    collapsable: false,
    children: [
      'css/bugSummary'
    ]
  }
]
const vueSidebar = [
  {
    title: '介绍',
    collapsable: false,
    children: ['introduction/']
  },
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
      'basicComponent/scroll'
    ]
  },
  {
    title: '基础方法',
    collapsable: false,
    children: [
      'basicMethod/axios'
    ]
  },
]
const javaSidebar = [
  {
    title: '介绍',
    collapsable: false,
    children: ['introduction/']
  },
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

module.exports = {
  fronKnowledgeSidebar,
  vueSidebar,
  javaSidebar
}
