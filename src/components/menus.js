export default [
  {
    title: '我的事务',
    icon: 'icon-home',
    key: '1',
    routes: [{
      name: '待审批',
      key: '1-1',
      path: '/front/approval/undo', // 路由url
      component: 'ApprovalUndo', // 路由组件
    }, {
      name: '已处理',
      key: '1-2',
      path: '/front/approval/done',
      auth: 'add', // 访问所需权限
      component: 'ApprovalDone'
    }]
  },
  {
    title: '傻瓜蛋儿',
    icon: 'icon-home',
    key: '2',
    routes: [{
      name: '小傻瓜蛋儿',
      key: '2-1',
      path: '/front/approval/undo', // 路由url
      component: 'ApprovalUndo', // 路由组件
    }, {
      name: '大傻瓜',
      key: '2-2',
      path: '/front/approval/done',
      auth: 'add', // 访问所需权限
      component: 'ApprovalDone'
    }]
  },
  {
    title: '工作流程',
    icon: 'icon-home',
    key: '3'
  }
]