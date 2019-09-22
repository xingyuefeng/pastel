export default {
  documents: [
    {
      name: 'QuickStart',
      description: '快速上手',
      module: () => import('@/README.md'),
    },
    // {
    //   name: 'ChangeLog',
    //   description: '更新日志',
    //   module: () => import('@/CHANGELOG.md'),
    // },
  ],
  components: {
    basicComponents: [
      {
        name: 'Button',
        description: '按钮',
        module: () => import('@/components/Button/index.md'),
      },
    ]
  }

}