import React, { useState } from 'react'
import { Button, Icon } from 'antd'

import XLSX from 'xlsx'

function ImportBtn(props) {
  const [mapList, setMapList] = useState([])
  const handleImport = (e) => {
    // console.log(e.target)
    let { files } = e.target

    const fileReader = new FileReader()
    fileReader.onload = event => {
      console.log(event)
      try {
        const { result } = event.target
        const workbook = XLSX.read(result, { type: 'binary' })
        let data = []
        for (const sheet in workbook.Sheets) {
          if (workbook.Sheets.hasOwnProperty(sheet)) {
            data = data.concat(XLSX.utils.sheet_add_json(workbook.Sheets[sheet]))
          }
        }
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
