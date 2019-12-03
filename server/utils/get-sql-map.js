const fs = require('fs')
const walkFile = require('./walk-file')

/**
 * 获取sql目录下的文件目录数据
 * @return {object}
 */

function getSqlMap() {
  let basePath = __dirname
  basePath = basePath.replace(/\\/g, '\/')
  let pathArr = basePath.split('\/')
  pathArr = pathArr.splice(0, pathArr.length - 1)
  basePath = pathArr.join('/') + '/sql/'
  
  let fileList = walkFile(basePath, 'sql')
  console.log(fileList, '获取到的sql目录吓的文件数据')
  return fileList
}

//  getSqlMap()

 module.exports = getSqlMap
