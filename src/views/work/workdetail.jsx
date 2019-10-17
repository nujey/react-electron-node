import React from 'react'

import { Pagination } from 'antd'

class WorkDetail extends React.Component {
  onShowSizeChange = () => {

  }
  render() {
    return (
      <div>
        <Pagination
          showSizeChanger
          onShowSizeChange={this.onShowSizeChange}
          defaultCurrent={3}
          total={500}
        />
      </div>
    )
  }
}

export default WorkDetail