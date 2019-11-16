import React, { useState } from 'react'
import { Button, Icon } from 'antd'

import XLSX from 'xlsx'

function ImportBtn(props) {
  const [mapList, setMapList] = useState([])
  const handleImport = (e) => {
    let { files } = e.target
    
    const fileReader = new FileReader()
    fileReader.onload = event => {
      try {
        const { result } = event.target
        const workbook = XLSX.read(result, { type: 'binary' })
        let xlsxSrc = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]])
        let data = []
        xlsxSrc.map(item => {
          let temp = {}
          for (let attr in props.mapList) {
            temp[attr] = item[props.mapList[attr]]
          }
          data.push(temp)
        })
        console.log(data)
      } catch(e) {
        console.log(e, 'catch')
      }
    }
    fileReader.readAsBinaryString(files[0])
  }
  const accept = ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
  return(
    <>
      <label htmlFor="fileSelect">
        <span>导入</span>
      </label>
      <input onChange={(e) => { handleImport(e) } } style={{display: 'none'}} type="file" name="fileSelect" id="fileSelect" accept={accept}/>
    </>
  )
}

export default ImportBtn
