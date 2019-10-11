export default [
  {
    title: '我的事务',
    icon: 'icon-home',
    routes: [{
      name: '待审批',
      path: '/front/approval/undo', // 路由url
      component: 'ApprovalUndo', // 路由组件
    }, {
      name: '已处理',
      path: '/front/approval/done',
      auth: 'add', // 访问所需权限
      component: 'ApprovalDone'
    }]
  }
]
