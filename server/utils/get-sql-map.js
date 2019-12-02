const fs = require('fs')
// const walkFile = require('./walk-file')

/**
 * 获取sql目录下的文件目录数据
 * @return {object}
 */

function getSqlMap() {
  let basePath = __dirname
  console.log(basePath, 111)
  basePath = basePath.replace(/\\/g, '\/')
  console.log(basePath, 222)
  let pathArr = basePath.split('\/')
  console.log(pathArr, 333)
  pathArr = pathArr.splice(0, pathArr.length - 1)
  console.log(pathArr, 444)
  basePath = pathArr.join('/') + '/sql/'
  console.log(basePath, 555)
  
  // let fileList = walkFile(basePath, 'sql')
  // return fileList
}

 getSqlMap()

 module.exports = getSqlMap

