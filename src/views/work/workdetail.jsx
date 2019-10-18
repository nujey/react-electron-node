import React from 'react'

import Page from '../../components/pagination'

class WorkDetail extends React.Component {
  onShowSizeChange = () => {

  }
  render() {
    return (
      <div>
        <Page total={50}/>
      </div>
    )
  }
}

export default WorkDetail