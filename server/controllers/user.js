const { query } = require('../utils/db')

let defaultResult = {
  code: 200,
  message: '',
  status: true
}
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
    const { username, password } = ctx.request.query
    await query(`SELECT * FROM user WHERE name='${username}' AND password=password('${password}');`).then(res => {
      if (res.length === 0) {
        result.code = 1005
        result.message = '用户不存在'
      } else {
        result.result = res
      }
    }).catch(err => {
      result.code = 1004
      result.message = '查询出错'
    })
    ctx.body = result
  },
  /**
   * 注销用户
   */
  async removeUser(ctx) {
    let formData = ctx.request.body
    let result = {
      code: 200,
      message: '',
      status: false
    }
    const address = JSON.stringify({
      address: formData.address
    })
    // INSERT INTO user(name, password) VALUES ('${formData.username}', password('${formData.password}'));

    // INSERT INTO user_data(address) VALUES ('${address}');
    // ALTER TABLE us  er_data ADD address VARCHAR(200) after id;
    const sql = `INSERT INTO user(name, password) VALUES ('${formData.username}', password('${formData.password}'));`
    await query(sql).then(res => {
      query(`INSERT INTO user_data(address) VALUES ('${address}');`)
      result.message = '注册成功'
    }).catch(err => {
      console.log(err)
    })
    // console.log(formData)
    ctx.body = result
  },
  /**
   * 查询用户列表
   * @param {*} ctx 
   * @param {*} param 
   */
  async getUserList(ctx) {
    let bodyParams = ctx.request.body
    let result = defaultResult
    const sql = bodyParams.username ? `SELECT * FROM user WHERE name='${bodyParams.username}'` : `SELECT * FROM user`
    await query(sql).then(res => {
      result.result = res
      ctx.body = result
    })
  }
}
