const Koa = require('koa')
const app = new Koa()

app.use9((ctx, next) => {
  ctx.body = 'hello world'
})

app.listen(3333)
