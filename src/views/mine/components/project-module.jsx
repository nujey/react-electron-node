import React from 'react'
import moment from 'moment'

import { useState, useEffect, useMemo } from 'react'
import { Input, Button, Icon, DatePicker, message, Tooltip, Form } from 'antd'
import "../mine.scss"
const { RangePicker } = DatePicker

let num = 0

function ProjectForm(props) {
  const [projectList, setProjectList] = useState([])
  const [projectStatus, setProjectStatus] = useState(false)
  const { getFieldDecorator, getFieldValue } = props.form

  // 点击添加项目经历
  function handleAddProject() {
    const obj = {
      id: num++,
      startTime: '',
      endTime: '',
      projectName: '',
      projectDetail: ''
    }
    const temp = props.form.getFieldValue('projectMap')
    temp.push(obj)
    props.form.setFieldsValue({
      projectMap: temp
    })
  }
  // 项目时间
  function handleTimeChange(index, data, dataString) {
    const temp = props.form.getFieldValue('projectMap')
    temp[index].startTime = dataString[0]
    temp[index].endTime = dataString[1]
    props.form.setFieldsValue({
      projectMap: temp
    })
  }
  // 点击保存
  function handleEduSave() {
    if (!projectStatus) {
      setProjectStatus(!projectStatus)
    } else {
      const arr = props.form.getFieldValue('projectMap')
      console.log(arr)
    }
  }
  getFieldDecorator('projectMap', { initialValue: projectList })
  const projectMap = getFieldValue('projectMap')
  return (
    <section className="project-module">
      <div className="resume-item-title">
        <span>项目经验</span>
        <Button type="dashed" icon={projectStatus ? 'save' : 'edit'} onClick={handleEduSave}>{projectStatus ? '保存' : '编辑'}</Button>
      </div>
      {
        projectMap.map((item, index) => 
          <Form key={item.id} className="project-form-item">
            <Form.Item label="项目时间" style={{marginRight: 20}}>
              {
                getFieldDecorator(`projectTime${item.id}`, {
                  initialValue: item.startTime && item.endTime ? [moment(item.startTime), moment(item.endTime)] : null
                })(<RangePicker format="YYYY-MM-DD" placeholder={['开始时间', '结束时间']} onChange={handleTimeChange.bind(this, index)}/>)
              }
            </Form.Item>
            <Form.Item label="项目名称" style={{flex: 1}}>
              {
                getFieldDecorator(`projectName${item.id}`, {
                  initialValue: '',
                  rules: [{
                    required: true, message: '请输入项目名称'
                  }]
                })(<Input placeholder="请输入项目名称"/>)
              }
            </Form.Item>
            <Form.Item label="项目描述" style={{width: '100%'}}>
              {
                getFieldDecorator(`projectDetail${item.id}`, {
                  initialValue: '',
                  rules: [{
                    required: true, message: '请输入项目描述，包括用到的技术栈'
                  }]
                })(<Input.TextArea placeholder="请输入项目描述，包括用到的技术栈"/>)
              }
            </Form.Item>
          </Form>
        )
      }
      {
        (!projectStatus && projectMap.length === 0) && <p className="no-data">暂无数据</p>
      }
      {
        projectStatus ? <div className="resume-project-add">
          <Icon type="plus" style={{fontSize: 30, color: '#38adff'}} onClick={handleAddProject}></Icon>
        </div> : ''
      }
    </section>
  )
}

const ProjectModule = Form.create({name: 'project-module-form'})(ProjectForm)

export default ProjectModule
