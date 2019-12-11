/**
 * 用户中心相关接口
 * @author zhangfeng
 */

 const router = require('koa-router')()
 const user = require("../controllers/user")

const routers = router
  .get('/login', user.loginIn)
  .post('/removeUser', user.removeUser)
  .post('/getUserList', user.getUserList)

module.exports = routers
