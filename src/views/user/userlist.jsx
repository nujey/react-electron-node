import React from 'react'
import { Table, Divider, Input, Pagination, Modal, message } from 'antd'
import { httpPost } from '../../utils/fetch'
import './userlist.scss'

import { getUserList } from '../../api/user'

class WorkList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colorStatus: false,
      tableData: []
    }
  }
  handleItem(obj) {
    console.log(obj)
    // this.props.history.push({ state: { a: 'a'}, pathname: '/index/work-detail', query: {...obj}})
  }
  getList(value) {
    getUserList({username: value ? value : ''}).then(res => {
      if (res.code === 102) {
        message.error('该账号未登录')
        this.props.history.push({pathname: '/'})
      } else {
        this.setState({
          tableData: res.result
        })
      }
    })
  }
  handleRemoveUser(item){
    const that = this
    Modal.confirm({
      title: '删除确认',
      content: '你确认删除该用户吗',
      cancelText: '取消',
      okText: '删除',
      okType: 'danger',
      onOk() {
        httpPost({url: '/user/removeUserItem', data: { uuid: item.uuid }}).then(res => {
          message('操作成功')
          that.getList()
        }).catch(err => {
          message(err.message)
        })
      }
    })
  }
  componentDidMount() {
    this.getList()
  }
  render() {
    const colums = [
      {
        title: '名字',
        dataIndex: 'name',
        key: 'name',
        render: text => <a style={{color: this.state.colorStatus ? '#f00': 'blue'}}>{text}</a>
      },
      {
        title: '昵称',
        dataIndex: 'name',
        key: 'nick',
        render: text => <span>{'***' + text}</span>
      },
      {
        title: '密码',
        dataIndex: 'password',
        key: 'password',
        render: () => <span>{'******'}</span> 
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text, record, index) => (
          <span>
            <a onClick={this.handleItem.bind(this, {index, record, text})}>{record.name}</a>
            <Divider type="vertical"/>
            <a onClick={this.handleRemoveUser.bind(this, record)}>删除</a>
          </span>
        )
      }
    ]
    return (
      <div className="main-list">
        <div className="screen-box">
          <Input.Search placeholder="请输入用户名" onSearch={value => {this.getList(value)}} style={{width: 200}}/>
        </div>
        <Table rowKey={record => record.id} columns={colums} dataSource={this.state.tableData} pagination={false}/>
        <div className="page">
          <Pagination
            showSizeChanger
            onShowSizeChange={this.onShowSizeChange}
            defaultCurrent={3}
            total={this.state.tableData.length}
          />
        </div>
      </div>
    )
  }
}

export default WorkList
