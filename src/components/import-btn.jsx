import React, { useState } from 'react'
import { Button, Icon } from 'antd'

import XLSX from 'xlsx'

function ImportBtn(props) {
  const [mapList, setMapList] = useState([])
  const handleImport = (e) => {
    let self = this
    let files = e.target.files
    for (let i = 0, f = files[i]; i !== files.length; ++i) {
      let reader = new FileReader()
      self.fileName = f.name
      reader.onload = function (e) {
        let data = e.target.result

        let workbook = XLSX.read(data, {
          type: 'binary'
        })
        // 取第一个SheetNames标签workbook.SheetNames[0]
        let xlsxSrc = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]])
        let content = []

        // 复制一份防止excel文件过来的文件有空字段这个属性就读出不来
        let list = {}

        xlsxSrc.map(function (item) {
          for (let attr in self.mapList) {
            list[self.mapList[attr]] = ''
          }
          for (let attr in item) {
            list[self.mapList[attr]] = item[attr] // 去除空格
          }
          const obj = JSON.parse(JSON.stringify(list))
          content.push(obj)

          // $(self).val(''); //解决同文件上传问题
        })
      }
      reader.readAsBinaryString(f)
    }
  }
  const accept = ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
  return(
    <>
      <label htmlFor="fileSelect">
        <Button type="primary" ><Icon type="left" /> 导入</Button>
      </label>
      <input onChange={handleImport} style={{display: 'none'}} type="file" name="fileSelect" id="fileSelect" accept={accept}/>
    </>
  )
}

export default ImportBtn
