const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy(
    '/api', {
      target: 'http://192.168.0.112:9090',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    },
    "", {
      target: 'http://honey.restartai.com:9090',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/pro": ""
      }
    }
  ))
}
