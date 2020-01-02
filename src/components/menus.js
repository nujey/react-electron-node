export default [
  {
    title: '用户中心',
    icon: 'icon-home',
    key: '1',
    routes: [{
      name: '用户列表',
      key: '1-1',
      path: '/index/user/user-list', // 路由url
    }]
  },
  {
    title: '商户中心',
    icon: 'icon-home',
    key: '2',
    routes: [{
      name: '商家列表',
      key: '2-1',
      path: '/111', // 路由url
    }]
  },
  {
    title: '私人定制',
    icon: 'icon-home',
    key: '3',
    routes: [{
      name: '小程序定制',
      key: '3-1',
      path: '/index/app/app-home'
    }, {
      name: '图标管理',
      key: '3-2',
      path: '/index/app/app-icon'
    }]
  },
  {
    title: '运维管理',
    icon: 'icon-home',
    key: '4',
    routes: [{
      name: '公告文章',
      key: '4-1',
      path: '/index/app/app-article'
    }]
  },
  {
    title: '个人中心',
    icon: 'icon-home',
    key: '5',
    routes: [{
      name: '我的简历',
      key: '5-1',
      path: '/index/mine/my-resume'
    }]
  }
]