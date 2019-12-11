const mysql = require('mysql')

// 创建数据池

const pool = mysql.createPool({
  host: '127.0.0.1', // 数据库地址
  user: 'root', // 数据库用户
  password: 'xiaokan',
  database: 'nini' // 库名
})
// const connection = mysql.createConnection({ multipleStatements: true })

// let query = function(sql, values) {
//   connection.query(sql, values, (err , result) => {
//     return new Promise((resolve, reject) => {
//       // 在数据池中进行会话操作
//       if (err) {
//         reject(err)
//       } else {
//         resolve(result)
//       }
//     })
//   })
// }

let query = function(sql, values) {
  return new Promise((resolve, reject) => {
    // 在数据池中进行会员操作
    pool.getConnection(function(err, connection) {
      if (err) {
        reject(err)
      } else {
        // 执行sql脚本对数据库进行读写
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          // 结束会话
          connection.release()
        })
      }
    })
  })
}

module.exports = { query }

// // 在数据池中进行会员操作
// pool.getConnection(function(err, connection) {
//   // 执行sql脚本对数据库进行读写
//   connection.query('SELECT * FROM my_table', (error, results, fields) => {
//     if (error) throw error

//     // 结束会话
//     connection.release()
//   })
// })
