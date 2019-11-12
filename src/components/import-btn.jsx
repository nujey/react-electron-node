import React, { useState } from 'react'
import XLSX from 'xlsx'

function ImportBtn(props) {
  const [mapList, setMapList] = useState([])
  const handleImport = () => {
    console.log('导入')
  }
  return(
    <>
      <label for="fileSelect" class="el-button el-button--primary el-button--small">
        <i class="el-icon-baikal-daochu"></i><span>导入</span>
      </label>
      <input ref="fileUpload" onChange={handleImport} type="file" style="display: none;" name="fileSelect" id="fileSelect"  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
    </>
  )
}

export default ImportBtn
