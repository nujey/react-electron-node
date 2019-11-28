const mysql = require('mysql')

// 创建数据池

const pool = mysql.createConnection({
  host: '127.0.0.1', // 数据库地址
  user: 'root', // 数据库用户
  password: 'xiaokan',
  database: 'root'
})

// 在数据池中进行会员操作
pool.getConnection(function(err, connection) {
  // 执行sql脚本对数据库进行读写
  connection.query('SELECT * FROM my_table', (error, results, fields) => {
    if (error) throw error

    // 结束会话
    connection.release()
  })  
})

