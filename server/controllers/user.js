/**
 * 用户中心接口 业务逻辑
 */
module.exports = {
  /**
   * 登录
   * @param {object} ctx 上下文对象
   */
  async loginIn(ctx) {
    let result = {
      code: 200,
      message: '',
      status: false
    }
    const { username, passward } = ctx.request.query
    
    if (username !== 'admin' || passward !== '123456') {
      result.code = 102
      result.message = '登录名或者密码错误'
    } else {
      result.message = '登录成功'
      result.status = true
    }
    ctx.body = result
  },
  async removeUser(ctx) {
    let formData = ctx.request.body
    let result = {
      code: 200,
      message: '',
      status: false
    }
    console.log(formData)
    ctx.body = result
  }
}