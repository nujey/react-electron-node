/**
 * 整合所有的子路由
 */

 const router = require('koa-router')()

 const user = require('./user')
//  const work = require('./work')
console.log(user)

 router.use('/user', user.routes(), user.allowedMethods())

 module.exports = router
