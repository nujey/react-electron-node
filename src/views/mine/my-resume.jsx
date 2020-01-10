// 通过hooks来编写的简历
import React from 'react'
import moment from 'moment'
import { useState, useEffect } from 'react'

import { Form, Button, Input, Icon, DatePicker, Select, Slider } from 'antd'

import "./mine.scss"

import FormTest from './test'
import EduModule from './components/edu-module'
import SkillModule from './components/skill-module'
const { RangePicker } = DatePicker

function MyResumeFrom(props) {
  const { getFieldDecorator } = props.form
  // 时间选择
  useEffect(() => {
    
  })
  return (
    <div className="my-resume">
      <div className="resume-buttons">
        <Button type="dashed" icon="left">返回</Button>
        <Button type="dashed" icon="form">编辑</Button>
      </div>
      <div id="main-resume" className="main-resume">
        <section>
          <div className="resume-item-title">
            <span>基础信息</span>
            <Button type="dashed" icon="save">保存</Button>
          </div>
          <Form className="resume-basic-form">
            <div className="resume-basic-left">
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
                  <Input  prefix={<Icon type="heart"/>} placeholder="年龄"/>
                )}
              </Form.Item>
              <Form.Item label="性别">
                {getFieldDecorator('sex', {
                  rules: [{ required: true, message: '请选择性别' }]
                })(
                  <Input  prefix={<Icon type="woman"/>} placeholder=""/>
                )}
              </Form.Item>
              <Form.Item label="籍贯">
                {getFieldDecorator('home', {
                  rules: [{ required: true, message: '请输入你的籍贯' }]
                })(
                  <Input  prefix={<Icon type="home"/>} placeholder="籍贯"/>
                )}
              </Form.Item>
            </div>
            <div className="resume-basic-photo">

            </div>
            <Form.Item label="联系方式" style={{width: '48%', marginRight: '4%'}}>
              {getFieldDecorator('mobile', {
                rules: [{ required: true, message: '请输入你的手机号码' }]
              })(
                <Input  prefix={<Icon type="mobile"/>} placeholder="手机号码"/>
              )}
            </Form.Item>
            <Form.Item label="现居住地" style={{width: '48%'}}>
              {getFieldDecorator('address', {
                rules: [{ required: true, message: '请输入你的现居住地' }]
              })(
                <Input  prefix={<Icon type="barcode"/>} placeholder="居住地址"/>
              )}
            </Form.Item>
          </Form>
        </section>
        
        <EduModule />
        <SkillModule />
        <section>
          <div className="resume-item-title">
            <span>项目经验</span>
            <Button type="dashed" icon="save">保存</Button>
          </div>

          <div className="resume-project-add">
            <Icon type="plus" style={{fontSize: 30, color: '#38adff'}}></Icon>
          </div>
        </section>
      </div>
    </div>
  )
}

const MyResume = Form.create()(MyResumeFrom)

export default MyResume
