import React from 'react'
import moment from 'moment'
import { useState, useEffect } from 'react'

import { Form, Button, Input, Icon, DatePicker, Select, Slider } from 'antd'

import "../mine.scss"

const { RangePicker } = DatePicker

/**
 * 教育模块
 * @param {*} props 
 */
class EduModuleFrom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eduStatus: false,
      eduModules: []
    }
  }
  //  添加教育经历按钮
  addEduModules = () => {
    const tempObj = {
      startTime: '2018-08-01',
      endTime: '2020-08-01',
      eduRecord: '2',
      eduSchoolProvince: '北京',
      eduUniversity: ''
    }
    // 这里需要数组的解构变成，数组的赋值是引用传递的，react中 data = this.state.data 然后再push
    // 相当于直接this.state.data.push(obj) , 所以需要变成一个新数组
    const { form } = this.props
    const eduModulesMap = form.getFieldValue('eduModulesMap')
    console.log(eduModulesMap)
    eduModulesMap.push(tempObj)
    form.setFieldsValue({
      eduModulesMap: eduModulesMap
    })
  }
  // 删除一行教育经历
  handleRemoveEduItem = (index) => {
    const temp = this.props.form.getFieldValue('eduModulesMap')
    temp.splice(index, 1)
    this.props.form.setFieldsValue({
      eduModulesMap: temp
    })
  }
  handleInputEdu = () => {}
  render() {
    const {getFieldDecorator, getFieldValue} = this.props.form
    getFieldDecorator('eduModulesMap', { initialValue: [] })
    const eduModulesMap = getFieldValue('eduModulesMap')

    // 选择学校前面的省份
    const schoolSelectBefore = (
      <Select defaultValue="北京" style={{width: 80}}>
        <Select.Option value="北京">北京</Select.Option>
        <Select.Option value="上海">上海</Select.Option>
      </Select>
    )
    return(
      <section>
        <div className="resume-item-title">
          <span>教育经历</span>
          <Button type="dashed" icon={this.state.eduStatus ? 'save' : 'edit'} onClick={() => {this.setState({ eduStatus: !this.state.eduStatus })}}>{ this.state.eduStatus ? '保存' : '编辑'}</Button>
        </div>
        <Form style={{margin: '10px 0'}} layout="inline">
          {
            eduModulesMap.map((item, index) => {
              return <Form.Item label="学校" key={index}>
                {getFieldDecorator(`eduUniversity${index}`, {
                  initialValue: item.eduUniversity,
                  rules: [{ required: true, message: '请输入大学名称' }]
                })(<Input addonBefore={schoolSelectBefore} style={{ width: 300 }} onChange={this.handleInputEdu(index)} placeholder="请输入大学名称" />)}
                {
                  <span>
                    <Button type="primary" shape="circle" icon="close" onClick={this.handleRemoveEduItem(index)}></Button>
                  </span>
                }
              </Form.Item>
            })
          }
        </Form>
        {
          (!this.state.eduStatus && eduModulesMap.length === 0) && <p className="no-data">暂无数据</p>
        }
        {
          this.state.eduStatus ? <div className="resume-project-add primary-border">
            <Icon type="plus" style={{fontSize: 30, color: '#38adff'}} onClick={this.addEduModules}></Icon>
          </div> : ''
        }
      </section>
    )
  }
}













function EduModuleFrom1(props) {
  const [eduModules, setEduModules] = useState([])
  const [eduStatus, setEduStatus] = useState(false)
  const { getFieldDecorator, getFieldValue } = props.form

  //  添加教育经历按钮
  function addEduModules() {
    const tempObj = {
      startTime: '2018-08-01',
      endTime: '2020-08-01',
      eduRecord: '2',
      eduSchoolProvince: '北京',
      eduUniversity: ''
    }
    // 这里需要数组的解构变成，数组的赋值是引用传递的，react中 data = this.state.data 然后再push
    // 相当于直接this.state.data.push(obj) , 所以需要变成一个新数组
    const eduModulesMap = props.form.getFieldValue('eduModulesMap')
    console.log(eduModulesMap)
    eduModulesMap.push(tempObj)
    // setEduModules(temp)
    props.form.setFieldsValue({
      eduModulesMap: eduModulesMap
    })
  }
  // 选择时间
  function handleTimeChange(index, value, dataString) {
    const temp = [...eduModules]
    temp[index].startTime = dataString[0]
    temp[index].endTime = dataString[1]
    setEduModules(temp)
  }
  // 选择学历
  function handleSelectEduRecord(index, e) {
    const temp = [...eduModules]
    temp[index].eduRecord = e
    setEduModules(temp)
  }
  // 输入大学名称
  function handleInputEdu(index, e){
    const temp = [...eduModules]
    // temp[index].eduUniversity = e.target.value
    setEduModules(temp)
  }
  // 删除一行教育经历
  function handleRemoveEduItem(index) {
    // const temp = [...eduModulesMap]
    const temp = props.form.getFieldValue('eduModulesMap')
    temp.splice(index, 1)
    props.form.setFieldsValue({
      eduModulesMap: temp
    })
  }
  // 选择学校前面的省份
  const schoolSelectBefore = (
    <Select defaultValue="北京" style={{width: 80}}>
      <Select.Option value="北京">北京</Select.Option>
      <Select.Option value="上海">上海</Select.Option>
    </Select>
  )
  getFieldDecorator('eduModulesMap', { initialValue: eduModules })
  const eduModulesMap = getFieldValue('eduModulesMap')
  return (
    <section>
      <div className="resume-item-title">
        <span>教育经历</span>
        <Button type="dashed" icon={eduStatus ? 'save' : 'edit'} onClick={() => {setEduStatus(!eduStatus)}}>{ eduStatus ? '保存' : '编辑'}</Button>
      </div>
      <Form style={{margin: '10px 0'}} layout="inline">
        {
          eduModulesMap.map((item, index) => {
            return <Form.Item label="学校" key={index}>
              {getFieldDecorator(`eduUniversity${index}`, {
                initialValue: item.eduUniversity,
                rules: [{ required: true, message: '请输入大学名称' }]
              })(<Input addonBefore={schoolSelectBefore} style={{ width: 300 }} onChange={handleInputEdu.bind(this, index)} placeholder="请输入大学名称" />)}
              {
                eduStatus ? <span>
                  <Button type="primary" shape="circle" icon="close" onClick={handleRemoveEduItem.bind(this, index)}></Button>
                </span> : ''
              }
            </Form.Item>
          })
        }
      </Form>

      {/* {
        eduModulesMap.length > 0 &&
        eduModulesMap.map((item, index) => {
            return <div style={{display: 'flex', alignItems: 'center'}} key={index} className={`testHHH${index}`}>
              <Form style={{display: 'flex', margin: '10px 0'}} layout="inline">
                <Form.Item label="就读时间">
                  {getFieldDecorator(`eduTime${index}`, {
                    initialValue: [moment(item.startTime), moment(item.endTime)],
                    rules: [{ required: true, message: '请选择学习时间段' }]
                  })(
                    <RangePicker format="YYYY-MM-DD" onChange={handleTimeChange.bind(this, index)}/>
                  )}
                </Form.Item>
                <Form.Item label="学历">
                  {getFieldDecorator(`eduRecord${index}`, {
                    initialValue: item.eduRecord,
                    rules: [{ required: true, message: '请选择学历' }]
                  })(
                    <Select style={{ width: 120 }} onChange={handleSelectEduRecord.bind(this, index)}>
                      <Select.Option value="0">高中</Select.Option>
                      <Select.Option value="1">大专</Select.Option>
                      <Select.Option value="2">本科</Select.Option>
                      <Select.Option value="3">硕士研究生</Select.Option>
                      <Select.Option value="4">博士</Select.Option>
                    </Select>
                  )}
                </Form.Item>
                <Form.Item label="学校">
                  {getFieldDecorator(`eduUniversity${index}`, {
                    initialValue: item.eduUniversity,
                    rules: [{ required: true, message: '请输入大学名称' }]
                  })(
                    <div>
                      <Input addonBefore={schoolSelectBefore} style={{ width: 300 }} onChange={handleInputEdu.bind(this, index)} placeholder="请输入大学名称" />
                      {
                        eduStatus ? <span>
                          <Button type="primary" shape="circle" icon="close" onClick={handleRemoveEduItem.bind(this, index)}></Button>
                        </span> : ''
                      }
                    </div>
                  )}
                </Form.Item>
              </Form>
              {
                eduStatus ? <div>
                  <Button type="primary" shape="circle" icon="close" onClick={handleRemoveEduItem.bind(this, index)}></Button>
                </div> : ''
              }
            </div>
          })
      } */}
      {
        (!eduStatus && eduModulesMap.length === 0) && <p className="no-data">暂无数据</p>
      }
      {
        eduStatus ? <div className="resume-project-add primary-border">
          <Icon type="plus" style={{fontSize: 30, color: '#38adff'}} onClick={addEduModules}></Icon>
        </div> : ''
      }
    </section>
  )
}

const EduModule = Form.create()(EduModuleFrom)

export default EduModule
