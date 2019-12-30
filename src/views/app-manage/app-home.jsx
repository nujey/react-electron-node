import React from 'react'
import { withRouter } from 'react-router'
import { Card, Icon, Skeleton, Avatar, Tooltip } from 'antd'

import './application.scss'

class AppHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cardList: [{
        avatar: false,
        active: false,
        content: '这是一段内容',
        url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=341418735,2450747172&fm=26&gp=0.jpg',
        loading: false
      }, {
        avatar: true,
        active: false,
        content: '这是一段内容',
        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1266814829,3745986683&fm=26&gp=0.jpg',
        loading: true
      }, {
        avatar: false,
        active: true,
        content: '这是一段内容',
        url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1540374900,2472491941&fm=26&gp=0.jpg',
        loading: false
      }]
    }
  }
  handleSetting(index){
    const tempList = this.state.cardList
    tempList[index].loading = !this.state.cardList[index].loading
    this.setState({
      cardList: tempList
    })
  }
  cardItem(list = []) {
    return list.map((item, index) => {
      return  <Card
                key={index}
                style={{ width: 300, height: 240, margin: 12 }}
                actions={[
                  <Tooltip placement="top" title="设置"><Icon type="setting" key="setting" onClick={(e) => this.handleSetting(index, e)}/></Tooltip>,
                  <Tooltip placement="top" title="编辑"><Icon type="edit" key="edit" /></Tooltip>
                ]}
                hoverable={true}
                bodyStyle={{height: 200}}>
                  <Skeleton avatar={item.avatar} active={item.active} loading={item.loading}>
                    <Card.Meta avatar={ <Avatar src={item.url} ></Avatar> } description={item.content + index}></Card.Meta>
                  </Skeleton>
              </Card>
    })
  }
  render() {
    return (
      <div className="app-home card-list">
        {this.cardItem(this.state.cardList)}
      </div>
    )
  }
}

export default withRouter(AppHome)
