import React, { useState } from 'react'
import FileSaver from 'file-saver'
import XLSX from 'xlsx'

import { Button } from 'antd'

function ImportBtn(props) {
  const [mapList, setMapList] = useState([])
  const handleImport = () => {
    console.log('导入')
  }
  return(
    <>
      <Button type="primary" onClick={handleImport}>导入</Button>
    </>
  )
}

export default ImportBtn