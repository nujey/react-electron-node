export default [
  {
    title: '用户中心',
    icon: 'icon-home',
    key: '1',
    routes: [{
      name: '用户列表',
      key: '1-1',
      path: '/index/user/user-list', // 路由url
      component: '', // 路由组件
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