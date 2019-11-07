import React, { useState } from 'react'
import { Button } from 'antd'

function ImportBtn(props) {
  const [mapList, setMapList] = useState([])

  return(
    <>
      <Button type="primary">导入</Button>
    </>
  )
}

export default ImportBtn