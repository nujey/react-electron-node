import React from 'react'

import { Pagination } from 'antd'

class Page extends React.Component {
  handleChange(page) {
    console.log(page)
  }
  render() {
    return (
      <div>
        <Pagination 
          showQuickJumper
          showSizeChanger
          size={this.props.size ? this.props.size : 'small'}
          total={this.props.total}
          onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Page