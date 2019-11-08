import React, { useState } from 'react'
import XLSX from 'xlsx'
import fileSaver from 'file-saver'

import { Button } from 'antd'

function s2ab(s) {
  if (typeof ArrayBuffer !== 'undefined') {
    var buf = new ArrayBuffer(s.length)
    var view = new Uint8Array(buf)
    for (var i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF
    return buf
  } else {
    var buf = new Array(s.length)
    for (var i = 0; i !== s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF
    return buf
  }
}
function ExportBtn(props) {
  const [mapList, setMapList] = useState([])

  const changeData = (list) => {
    const res = []
    const tempMap = []
    const tempArr = list.map((item, index) => {
      tempMap[index] = {}
      for(let mapItem in props.mapList) {
        if (props.mapList[mapItem] !== undefined) {
          tempMap[index][props.mapList[mapItem]] = item[mapItem]
        }
      }
    })
    return tempMap
  }
  const handleExport = () => {
    const list = [{ name: 'aaa', idcardNumber: '6666', startTime: '2020-01-01'},
                  { name: 'bbb', idcardNumber: '7777', startTime: '2020-02-02'},
                  { name: 'ccc', idcardNumber: '8888', startTime: '2020-01-01'},
                  { name: 'ddd', idcardNumber: '9999', startTime: '2020-01-01'}]
    const wopts = {
      bookType: 'xlsx',
      bookSST: false,
      type: 'binary'
    }
    const wb = {
      SheetNames: ['Sheet1'],
      Sheets: {},
      Props: {}
    }
    const newData = changeData(list)
    wb.Sheets['Sheet1'] = XLSX.utils.json_to_sheet(newData)
    fileSaver.saveAs(new Blob([s2ab(XLSX.write(wb, wopts))], {
      type: 'application/octet-stream'
    }), `${props.exportName}.xlsx`) 
  }

  return(
    <>
      <Button type="primary" onClick={handleExport}>导出</Button>
    </>
  )
}

export default ExportBtn
