/**
 * 用户中心相关接口
 * @author zhangfeng
 */

 const router = require('koa-router')()
//  const admin = require()

const routers = router.get('/api/login', async ctx => {
  const obj = {a: 'aaa', b: 'bbb'}
  ctx.body = obj
}).post('/api/removeItem', async (ctx, next) => {
  console.log(ctx.request)
  ctx.body = 'aaa'
})

module.exports = routers
