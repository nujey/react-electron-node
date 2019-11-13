import React, { useState } from 'react'
import XLSX from 'xlsx'

function ImportBtn(props) {
  const [mapList, setMapList] = useState([])
  const handleImport = () => {
    console.log('导入')
  }
  const accept = ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
  return(
    <>
      <label for="fileSelect" class="el-button el-button--primary el-button--small">
        <i class="el-icon-baikal-daochu"></i><span>导入</span>
      </label>
      <input onChange={handleImport} style={{display: 'none'}} type="file" name="fileSelect" id="fileSelect" accept={accept}/>
    </>
  )
}

export default ImportBtn
