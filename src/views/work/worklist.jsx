import React from 'react'

import { Table, Divider, Tag, Pagination } from 'antd'
import './work.scss'

class WorkList extends React.Component {
  render() {
    const colums = [
      {
        title: '名字',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>
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
        render: (text, record) => (
          <span>
            <a>{record.name}</a>
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
