import React from 'react'
import moment from 'moment'
import jsonp from '../../../utils/jsonp'
import { httpPost } from '../../../utils/fetch'
import localStorage from '../../../utils/localstorage'

import { useState, useEffect } from 'react'

import { Form, Button, Input, Icon, DatePicker, Select, AutoComplete, message } from 'antd'


const { RangePicker } = DatePicker


function EduModuleFrom(props) {
  const [eduModules, setEduModules] = useState(props.eduList)
  const [eduStatus, setEduStatus] = useState(false)
  const [eduProvinceSchool, setEduProvinceSchool] = useState([])
  const [eduSchool, setEduSchool] = useState([])
  const { getFieldDecorator, getFieldValue } = props.form
  
  //  添加教育经历按钮
  function addEduModules() {
    let id = eduModules.length
    const tempObj = {
      id: id++,
      startTime: '2018-08-01',
      endTime: '2020-08-01',
      eduRecord: '2',
      eduSchoolProvince: '北京',
      eduUniversity: ''
    }
    // 这里需要数组的解构变成，数组的赋值是引用传递的，react中 data = this.state.data 然后再push
    // 相当于直接this.state.data.push(obj) , 所以需要变成一个新数组
    const eduModulesMap = props.form.getFieldValue('eduModulesMap')
    eduModulesMap.push(tempObj)

    setEduModules(eduModulesMap)

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
  // 选择学校所在省份
  function handleSelectEduProvince(index, e) {
    const eduModulesMap = props.form.getFieldValue('eduModulesMap')
    jsonp(`https://api.restartai.com/kedis/kdict/keys/gx_${e}`, function(err, data) {
      setEduSchool(data.data)
      eduModulesMap[index].eduSchoolProvince = e
      eduModulesMap[index].eduUniversity = ''
      console.log(eduModulesMap[index])
      props.form.setFieldsValue({
        eduModulesMap: eduModulesMap
      })
    })
  }
  // 获取焦点的时候请求大学数据
  function handleAutoFocus(index) {
    const eduModulesMap = props.form.getFieldValue('eduModulesMap')
    jsonp(`https://api.restartai.com/kedis/kdict/keys/gx_${eduModulesMap[index].eduSchoolProvince}`, function(err, data) {
      setEduSchool(data.data)
    })
  }
  // 输入大学名称模糊搜索
  function handleInputEdu(index, e){
    // const eduModulesMap = props.form.getFieldValue('eduModulesMap')
    // eduModulesMap[index].eduUniversity = e.target.value
    // props.form.setFieldsValue({
    //   eduModulesMap: eduModulesMap
    // })
    console.log(index, e)
  }
  // 自动补全的change
  function changeAutoComplete(index, value) {
    const eduModulesMap = props.form.getFieldValue('eduModulesMap')
    eduModulesMap[index].eduUniversity = value
    props.form.setFieldsValue({
      eduModulesMap: eduModulesMap
    })
  }
  // 删除一行教育经历
  function handleRemoveEduItem(index) {
    const temp = [...props.form.getFieldValue('eduModulesMap')]
    temp.splice(index, 1)
    props.form.setFieldsValue({
      eduModulesMap: temp
    })
  }
  // 选择学校前面的省份
  function schoolSelectBefore (item, index) {
    return <Select defaultValue={item.eduSchoolProvince} disabled={!eduStatus} style={{width: 80}} onChange={(e) => handleSelectEduProvince(index, e)}>
      {
        eduProvinceSchool.map(item => <Select.Option value={item} key={index}>{item}</Select.Option>)
      }
    </Select>
  }
  // 保存教育模块
  function handleEduSave() {
    if (!eduStatus) {
      setEduStatus(!eduStatus)
    } else {
      const arr = props.form.getFieldValue('eduModulesMap')
      const { validateFields } = props.form
      validateFields((errs, values) => {
        if(errs) return false
        httpPost({
          url: '/user/setUserResumeEdu',
          data: {
            uuid: localStorage.getItem('uuid', true),
            eduModule: arr
          }
        }).then(res => {
          message.success('保存成功')
          setEduStatus(!eduStatus)
        })
      })
    }
  }
  // 获取学校的省份
  function getProvince() {
    jsonp('https://api.restartai.com/kedis/kdict/keys/gxlinks', function(err, data) {
      setEduProvinceSchool(data.data)
    })
  }
  useEffect(() => {
    getProvince()
  }, [])
  useEffect(() => {
    setEduModules(props.eduList)
  })
  getFieldDecorator('eduModulesMap', { initialValue: eduModules })
  const eduModulesMap = getFieldValue('eduModulesMap')

  return (
    <section>
      <div className="resume-item-title">
        <span>教育经历</span>
        <Button type="dashed" icon={eduStatus ? 'save' : 'edit'} onClick={() => handleEduSave()}>{ eduStatus ? '保存' : '编辑'}</Button>
      </div>
      {
        eduModulesMap.map((item, index) =>
          <Form style={{display: 'flex', alignItems: 'center', margin: '10px 0'}} layout="inline" key={item.id} onSubmit={handleEduSave}>
            <Form.Item label="就读时间">
              {getFieldDecorator(`eduTime${item.id}`, {
                initialValue: [moment(item.startTime), moment(item.endTime)],
                rules: [{ required: true, message: '请选择学习时间段' }]
              })(
                <RangePicker disabled={!eduStatus} format="YYYY-MM-DD" onChange={handleTimeChange.bind(this, index)}/>
              )}
            </Form.Item>
            <Form.Item label="学历">
              {getFieldDecorator(`eduRecord${item.id}`, {
                initialValue: item.eduRecord,
                rules: [{ required: true, message: '请选择学历' }]
              })(
                <Select disabled={!eduStatus} style={{ width: 120 }} onChange={handleSelectEduRecord.bind(this, index)}>
                  <Select.Option value="0">高中</Select.Option>
                  <Select.Option value="1">大专</Select.Option>
                  <Select.Option value="2">本科</Select.Option>
                  <Select.Option value="3">硕士研究生</Select.Option>
                  <Select.Option value="4">博士</Select.Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item label="学校">
              {getFieldDecorator(`eduUniversity${item.id}`, {
                initialValue: item.eduUniversity,
                rules: [{ required: true, message: '请输入大学名称' }]
              })(<Input.Group compact style={{width: 300}}>
                {schoolSelectBefore(item, index)}
                <AutoComplete dataSource={eduSchool}
                  disabled={!eduStatus}
                  style={{ width: 220 }}
                  value={item.eduUniversity}
                  defaultValue={item.eduUniversity}
                  placeholder="请输入大学名称"
                  onFocus={handleAutoFocus.bind(this, index)}
                  onChange={changeAutoComplete.bind(this, index)}
                  onSearch={handleInputEdu.bind(this, index)} />
                </Input.Group>)}       
              {
                // <Icon className="item-delete-button" type="minus-circle-o" onClick={handleRemoveEduItem.bind(this, index)}/>
                eduStatus ? <span style={{marginLeft: 10, display: 'inline'}}>
                  <Button type="dashed" icon="minus-circle-o" onClick={handleRemoveEduItem.bind(this, index)}></Button>
                </span> : ''
              }
            </Form.Item>
          </Form>
        )
      }
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

const EduModule = Form.create({ name: 'edu_form_item' })(EduModuleFrom)

export default EduModule









/**
 * 教育模块
 * @param {*} props 
 */
class EduModuleFrom111 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      eduStatus: false
    }
  }
  //  添加教育经历按钮
  addEduModules = () => {
    const tempObj = {
      id: 0,
      startTime: '2018-08-01',
      endTime: '2020-08-01',
      eduRecord: '2',
      eduSchoolProvince: '北京',
      eduUniversity: ''
    }
    // 这里需要数组的解构变成，数组的赋值是引用传递的，react中 data = this.state.data 然后再push
    // 相当于直接this.state.data.push(obj) , 所以需要变成一个新数组
    const { form } = this.props
    const newkeys = form.getFieldValue('eduModulesMap')
    newkeys.push(tempObj)
    form.setFieldsValue({
      eduModulesMap: newkeys
    })
  }
  // 删除一行教育经历
  handleRemoveEduItem = (index) => {
    const { form } = this.props
    const temp = form.getFieldValue('eduModulesMap')
    form.setFieldsValue({
      eduModulesMap: temp.filter((key, i) => i !== index)
    })
  }
  handleInputEdu = (e, index) => {
    const { form } = this.props
    const temp = form.getFieldValue('eduModulesMap')
    temp[index].eduUniversity = e.target.value
    form.setFieldsValue({
      eduModulesMap: temp
    })
  }
  render() {
    const {getFieldDecorator, getFieldValue} = this.props.form
    // 选择学校前面的省份
    const schoolSelectBefore = (
      <Select defaultValue="北京" style={{width: 80}}>
        <Select.Option value="北京">北京</Select.Option>
        <Select.Option value="上海">上海</Select.Option>
      </Select>
    )

    getFieldDecorator('eduModulesMap', { initialValue: [] });
    const eduModulesMap = getFieldValue('eduModulesMap');
    return(
      <section>
        <div className="resume-item-title">
          <span>教育经历</span>
          <Button type="dashed" icon={this.state.eduStatus ? 'save' : 'edit'} onClick={() => {this.setState({ eduStatus: !this.state.eduStatus })}}>{ this.state.eduStatus ? '保存' : '编辑'}</Button>
        </div>
        <Form style={{margin: '10px 0'}} layout="inline">
          {
            eduModulesMap.map((item, index) => (
              <Form.Item label="学校" key={item.id}>
                {getFieldDecorator(`eduUniversity${item.id}`, {
                  initialValue: item.eduUniversity,
                  rules: [{ required: true, message: '请输入大学名称' }]
                })(<Input addonBefore={schoolSelectBefore} onChange={(e) => this.handleInputEdu(e, index)} style={{ width: 300 }} placeholder="请输入大学名称" />)}
                <span>
                  <Button type="primary" shape="circle" icon="close" onClick={() => this.handleRemoveEduItem(index)}></Button>
                </span>
              </Form.Item>
            ))
          }
        </Form>
        {
          (!this.state.eduStatus && eduModulesMap.length === 0) && <p className="no-data">暂无数据</p>
        }
        {
          this.state.eduStatus ? <div className="resume-project-add primary-border">
            <Icon type="plus" style={{fontSize: 30, color: '#38adff'}} onClick={() => this.addEduModules()}></Icon>
          </div> : ''
        }
      </section>
    )
  }
}
