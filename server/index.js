const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')
const createAllTables = require('./sql/index')
const routers = require('./routers/index')
const app = new Koa()

app.use(cors({
  origin: function(ctx) {
    if (ctx.url === '/dev') {
      return '*'
    }
    return 'http://localhost:3000'
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 600,
  credentials: true,
  allowedMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

app.use(bodyParser())

// 执行脚本文件
createAllTables()
app.use(routers.routes()).use(routers.allowedMethods())

app.listen(9090)
