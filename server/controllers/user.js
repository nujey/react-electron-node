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
    console.log(ctx)
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