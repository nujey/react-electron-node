import React from 'react'
import { Card, Icon } from 'antd'

import localStorage from '../../utils/localstorage'

class MineResume extends React.Component {
  constructor() {
    super()
    this.state = {
      resumeList: [{
        name: '前端简历',
        level: 80
      }]
    }
  }
  handleClickResume(id) {
    this.props.history.push({ pathname: '/index/mine/my-resume', state: {a: id}})
  }
  render() {
    return (
      <div className="resume-list">
        {
          this.state.resumeList.map(item => 
            <Card style={{width: 300, margin: 12, height: 240}}
                  hoverable={true}
                  actions={[
                    <Icon type="setting" key="setting" />,
                    <Icon type="edit" key="edit" />
                  ]}
                  bodyStyle={{height: 144}}
                  title={item.name}
                  onClick={() => this.handleClickResume('111')}>
                  <h4>完成度{item.level}%</h4>
            </Card>
          )
        }
      </div>
    )
  }
}

export default MineResume
