import React from 'react'
import { Link } from 'react-router-dom'

import { Table, Divider, Tag, Pagination } from 'antd'
import './work.scss'

class WorkList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colorStatus: false
    }
  }
  componentWillMount() {
    console.log(this.props, 111)
  }
  componentDidMount() {
    console.log(this.props, 222)
  }
  handleItem(obj) {
    this.props.history.push({ state: { a: 'a'}, pathname: '/index/work-detail', query: {...obj}})
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
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
      },
      {
        title: '标签',
        dataIndex: 'tags',
        key: 'tags',
        render: tags => (
          <span>
            { tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green'
              if (tag === 'loser') {
                color = 'volcano'
              }
              return (
                <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>
              )
            })}
          </span>
        )
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text, record, index) => (
          <span>
            <a onClick={this.handleItem.bind(this, {index, record, text})}>{record.name}</a>
            <Divider type="vertical"/>
            <a>删除</a>
          </span>
        )
      }
    ]
    const data = [
      {
        key: '1',
        name: '阿呆',
        age: '30',
        address: '西安市市政府办公室',
        tags: ['winner']
      },
      {
        key: '2',
        name: '阿旺',
        age: '15',
        address: '杭州市市政府办公室',
        tags: ['loser']
      },
      {
        key: '3',
        name: 'CC',
        age: '30',
        address: '深圳市政府办公室',
        tags: ['winner', 'cool', 'teacher']
      }
    ]
    return (
      <div className="main-list">
        <Table columns={colums} dataSource={data} pagination={false}/>
        <div>
          <Link to="/index/hooks-glance">去Hooks</Link>
        </div>
        <div className="page">
          <Pagination
            showSizeChanger
            onShowSizeChange={this.onShowSizeChange}
            defaultCurrent={3}
            total={100}
          />
        </div>
      </div>
    )
  }
}

export default WorkList
