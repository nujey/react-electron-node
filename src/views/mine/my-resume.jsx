// 通过hooks来编写的简历
import React from 'react'
import { useState } from 'react'

import { Form, Button, Input, Icon } from 'antd'

import "./mine.scss"

function MyResumeFrom(props) {
  const [name, setName] = useState('1111')
  const { getFieldDecorator } = props.form
  return (
    <div className="my-resume">
      <div className="resume-buttons">
        <Button type="dashed" icon="left">返回</Button>
        <Button type="dashed" icon="edit">编辑</Button>
      </div>
      <div id="main-resume" className="main-resume">
        <section>
          <div className="resume-item-title">
            <span>基础信息</span>
            <Button type="dashed" icon="save">保存</Button>
          </div>
          <Form>
            <Form.Item label="姓名">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入你的姓名' }]
              })(
                <Input  prefix={<Icon type="user"/>} placeholder="姓名"/>
              )}
            </Form.Item>
            <Form.Item label="年龄">
              {getFieldDecorator('age', {
                rules: [{ required: true, message: '请输入你的年龄' }]
              })(
                <Input  prefix={<Icon type="age"/>} placeholder="年龄"/>
              )}
            </Form.Item>
            <Form.Item label="联系方式">
              {getFieldDecorator('mobile', {
                rules: [{ required: true, message: '请输入你的手机号码' }]
              })(
                <Input  prefix={<Icon type="user"/>} placeholder="手机号码"/>
              )}
            </Form.Item>
            <Form.Item label="籍贯">
              {getFieldDecorator('home', {
                rules: [{ required: true, message: '请输入你的籍贯' }]
              })(
                <Input  prefix={<Icon type="user"/>} placeholder="籍贯"/>
              )}
            </Form.Item>
            <Form.Item label="">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入你的姓名' }]
              })(
                <Input  prefix={<Icon type="user"/>} placeholder="姓名"/>
              )}
            </Form.Item>
          </Form>
          {/* <div className="resume-basic">
            <div className="resume-basic-left">

            </div>
            <div className="resume-basic-right">

            </div>
          </div> */}
        </section>
      </div>
    </div>
  )
}
const MyResume = Form.create()(MyResumeFrom)
export default MyResume
