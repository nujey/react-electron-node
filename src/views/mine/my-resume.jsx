// 通过hooks来编写的简历
import React from 'react'
import moment from 'moment'
import { useState, useEffect } from 'react'

import { Form, Button, Radio, Input, Icon, InputNumber, Upload} from 'antd'

import "./mine.scss"

import EduModule from './components/edu-module'
import SkillModule from './components/skill-module'
import ProjectModule from './components/project-module'

function MyResumeFrom(props) {
  const [basicDetail, setBasicDetail] = useState({})
  const { getFieldDecorator } = props.form
  // 时间选择
  useEffect(() => {
    console.log('请求简历数据')
  }, [])
  function handleBasicSubmit() {
    const { validateFields } = props.form
    validateFields((err, values) => {
      if (err) return

      console.log(values)
    })
  }
  const uploadButton = (
    <div>
      <Icon type={'plus'} style={{fontSize: 35, color: '#38adff'}}/>
    </div>
  )
  return (
    <div className="my-resume">
      <div className="resume-buttons">
        <Button type="dashed" icon="left">返回</Button>
        <Button type="dashed" icon="download">导出</Button>
      </div>
      <div id="main-resume" className="main-resume">
        <section>
          <div className="resume-item-title">
            <span>基础信息</span>
            <Button type="dashed" icon="save" onClick={handleBasicSubmit}>保存</Button>
          </div>
          <Form className="resume-basic-form">
            <div className="resume-basic-left">
              <Form.Item label="姓名">
                {getFieldDecorator('name', {
                  initialValue: basicDetail.name,
                  rules: [{ required: true, message: '请输入你的姓名' }]
                })(
                  <Input  prefix={<Icon type="user"/>} placeholder="姓名"/>
                )}
              </Form.Item>
              <Form.Item label="年龄">
                {getFieldDecorator('age', {
                  initialValue: basicDetail.age,
                  rules: [{ required: true, message: '请输入你的年龄' }]
                })(
                  <InputNumber style={{width: '100%'}} min={18} max={50} placeholder="年龄"/>
                )}
              </Form.Item>
              <Form.Item label="性别" sty>
                {getFieldDecorator('sex', {
                  initialValue: basicDetail.sex,
                  rules: [{ required: true, message: '请选择性别' }]
                })(
                  <Radio.Group  style={{ width: '100%', height: 32, boxSizing: 'border-box'}} placeholder="">
                    <Radio value="0">男</Radio>
                    <Radio value="1">女</Radio>
                    <Radio value="2">未知</Radio>
                  </Radio.Group>
                )}
              </Form.Item>
              <Form.Item label="籍贯">
                {getFieldDecorator('home', {
                  initialValue: basicDetail.home,
                  rules: [{ required: true, message: '请输入你的籍贯' }]
                })(
                  <Input  prefix={<Icon type="home"/>} placeholder="籍贯"/>
                )}
              </Form.Item>
            </div>
            <div className="resume-basic-photo">
              {/* <Upload
                name="avatar"
                className=""
                style={{width: '100%'}}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                >
                  {basicDetail.basicImgUrl ? <img src={basicDetail.basicImgUrl} alt="本人头像"/> : uploadButton}
                </Upload> */}
                <span>不要自拍</span>
            </div>
            <Form.Item label="联系方式" style={{width: '48%', marginRight: '4%'}}>
              {getFieldDecorator('mobile', {
                initialValue: basicDetail.mobile,
                rules: [{ required: true, message: '请输入你的手机号码' }]
              })(
                <Input  prefix={<Icon type="mobile"/>} placeholder="手机号码"/>
              )}
            </Form.Item>
            <Form.Item label="现居住地" style={{width: '48%'}}>
              {getFieldDecorator('address', {
                initialValue: basicDetail.address,
                rules: [{ required: true, message: '请输入你的现居住地' }]
              })(
                <Input  prefix={<Icon type="barcode"/>} placeholder="居住地址"/>
              )}
            </Form.Item>
          </Form>
        </section>
        
        <EduModule />
        <SkillModule />
        <ProjectModule arr={[1, 2, 3]}/>
        {/* <section>
          <div className="resume-item-title">
            <span>项目经验</span>
            <Button type="dashed" icon="save">保存</Button>
          </div>

          <div className="resume-project-add">
            <Icon type="plus" style={{fontSize: 30, color: '#38adff'}}></Icon>
          </div>
        </section> */}
      </div>
    </div>
  )
}

const MyResume = Form.create()(MyResumeFrom)

export default MyResume
