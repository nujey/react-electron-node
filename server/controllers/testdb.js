const { query } = require('../utils/db')

async function selectAllData() {
  let sql = 'SELECT * FROM nini.node'
  let dataList = await query(sql)
  return dataList
}

async function getData () {
  let dataList = await selectAllData()
  console.log(dataList)
}

getData()
