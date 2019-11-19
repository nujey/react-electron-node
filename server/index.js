const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa-cors')

const fs = require('fs')

const app = new Koa()
const router = new Router()

app.use(cors({
  origin: function(ctx) {
    if (ctx.url === '/dev') {
      return '*'
    }
    return 'http://localhost:3000'
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowedMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

router.get('/api/login', async ctx => {
  // const obj = {a: 'aaa', b: 'bbb'}
  ctx.body = '恭喜你，憨憨'
})


app.use(router.routes()).use(router.allowedMethods())
// app.use((ctx, next) => {
//   ctx.body = 'hello world'
// })

app.listen(9090)
