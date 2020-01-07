// 通过hooks来编写的简历
import React from 'react'
import moment from 'moment'
import { useState, useEffect } from 'react'

import { Form, Button, Input, Icon, DatePicker, Select, Slider } from 'antd'

import "./mine.scss"

const { RangePicker } = DatePicker

/**
 * 教育模块
 * @param {*} props 
 */
function EduModule(props) {
  const [eduModules, setEduModules] = useState([])
  const [eduStatus, setEduStatus] = useState(false)
  const { getFieldDecorator } = props.form

  //  添加教育经历按钮
  function addEduModules() {
    const tempObj = {
      startTime: '',
      endTime: '',
      eduRecord: '2',
      eduSchoolProvince: '北京',
      eduUniversity: ''
    }
    // 这里需要数组的解构变成，数组的赋值是引用传递的，react中 data = this.state.data 然后再push
    // 相当于直接this.state.data.push(obj) , 所以需要变成一个新数组
    const temp = [...eduModules]
    // const temp = eduModules.slice(0)
    temp.push(tempObj)

    setEduModules(temp)
  }
  // 选择时间
  function handleTimeChange(item, index, value, dataString) {
    const temp = [...eduModules]
    console.log(index)
    // temp[index].startTime = dataString[0]
    // temp[index].endTime = dataString[1]
    // setEduModules(temp)
    // console.log(eduModules)
  }
  useEffect(() => {
    // console.log(eduModules)
  })
  // 选择学校前面的省份
  const schoolSelectBefore = (
    <Select defaultValue="北京" style={{width: 80}}>
      <Select.Option value="北京">北京</Select.Option>
      <Select.Option value="上海">上海</Select.Option>
    </Select>
  )
  return (
    <section>
      <div className="resume-item-title">
        <span>教育经历</span>
        <Button type="dashed" icon={eduStatus ? 'save' : 'edit'} onClick={() => {setEduStatus(!eduStatus)}}>{ eduStatus ? '保存' : '编辑'}</Button>
      </div>
      {
        eduModules.length > 0 &&
          eduModules.map((item, index) => {
            return <div style={{display: 'flex', alignItems: 'center'}} key={index}>
              <Form style={{display: 'flex', margin: '10px 0'}} layout="inline">
                <Form.Item label="就读时间">
                  {getFieldDecorator('eduTime', {
                    rules: [{ required: true, message: '请选择学习时间段' }]
                  })(
                    <RangePicker format="YYYY-MM-DD" onChange={handleTimeChange.bind(this, item, index)}/>
                  )}
                </Form.Item>
                <Form.Item label="学历">
                  {getFieldDecorator('eduRecord', {
                    rules: [{ required: true, message: '请选择学历' }]
                  })(
                    <Select style={{ width: 120 }}>
                      <Select.Option value="0">高中</Select.Option>
                      <Select.Option value="1">大专</Select.Option>
                      <Select.Option value="2">本科</Select.Option>
                      <Select.Option value="3">硕士研究生</Select.Option>
                      <Select.Option value="4">博士</Select.Option>
                    </Select>
                  )}
                </Form.Item>
                <Form.Item label="学校">
                  {getFieldDecorator('eduUniversity', {
                    rules: [{ required: true, message: '请输入大学名称' }]
                  })(
                    <Input addonBefore={schoolSelectBefore} style={{ width: 300 }} placeholder="请输入大学名称" />
                  )}
                </Form.Item>
              </Form>
              {
                eduStatus ? <div>
                  <Button type="primary" shape="circle" icon="close"></Button>
                </div> : ''
              }
            </div>
          })
      }
      {
        (!eduStatus && eduModules.length === 0) && <p className="no-data">暂无数据</p>
      }
      {
        eduStatus ? <div className="resume-project-add primary-border">
          <Icon type="plus" style={{fontSize: 30, color: '#38adff'}} onClick={addEduModules}></Icon>
        </div> : ''
      }
    </section>
  )
}

function MyResumeFrom(props) {
  // const [eduModules, setEduModules] = useState([])
  // const [eduStatus, setEduStatus] = useState(false)
  const { getFieldDecorator } = props.form
  // 技能对象
  const skillMarks = {
    0: '熟悉',
    25: '熟练',
    50: '掌握',
    75: '精通',
    100: {
      style: { color: '#f50' },
      label: <span>专家</span>
    }
  }

  // 选择学校前面的省份
  // const schoolSelectBefore = (
  //   <Select defaultValue="北京" style={{width: 80}}>
  //     <Select.Option value="北京">北京</Select.Option>
  //     <Select.Option value="上海">上海</Select.Option>
  //   </Select>
  // )
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
        
        <EduModule form={props.form}/>
        
        <section>
          <div className="resume-item-title">
            <span>专业技能</span>
            <Button type="dashed" icon="save">保存</Button>
          </div>
          <div className="skill-module">
            <div className="skill-item">
              <Input placeholder="请输入技能名称" style={{ width: 100 }}></Input>
              <Slider marks={skillMarks}/>
            </div>
            <div className="skill-item">
              <Input placeholder="请输入技能名称" style={{ width: 100 }}></Input>
              <Slider marks={skillMarks}/>
            </div>
            <div className="skill-item">
              <Input placeholder="请输入技能名称" style={{ width: 100 }}></Input>
              <Slider marks={skillMarks}/>
            </div>
          </div>
        </section>
        
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
