import React from 'react'
import moment from 'moment'

import { useState, useEffect, useMemo } from 'react'
import { Input, Button, Icon, DatePicker, message, Tooltip, Form } from 'antd'
import "../mine.scss"
import { httpPost } from '../../../utils/fetch'
import localStorage from '../../../utils/localstorage'

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
  // 项目名称
  function handleInputProjectName(index, e) {
    const temp = props.form.getFieldValue('projectMap')
    temp[index].projectName = e.target.value
    props.form.setFieldsValue({
      projectMap: temp
    })
  }
  // 项目描述
  function handleInputDetail(index, e) {
    const temp = props.form.getFieldValue('projectMap')
    temp[index].projectDetail = e.target.value
    props.form.setFieldsValue({
      projectMap: temp
    })
  }
  // 删除项目
  function handleRemoveEduItem(index) {
    const temp = props.form.getFieldValue('projectMap')
    temp.splice(index, 1)
    props.form.setFieldsValue({
      projectMap: temp
    })
  }
  // 点击保存
  function handleEduSave() {
    if (!projectStatus) {
      setProjectStatus(!projectStatus)
    } else {
      const { validateFields } = props.form
      validateFields((errors, value) => {
        if (errors) return false
        const arr = props.form.getFieldValue('projectMap')
        httpPost({
          url: '/user/setUserResumeProject',
          data: {
            uuid: localStorage.getItem('uuid', true),
            projectModule: arr
          }
        }).then(res => {
          message.success('更新成功')
          setProjectStatus(!projectStatus)
        })
      })
    }
  }
  useEffect(() => {
    setProjectList(props.projectList)
  }, [props.projectList])
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
          <div className="project-item">
            <Form key={item.id} className="project-form-item">
              <Form.Item label="项目时间" style={{marginRight: 20}}>
                {
                  getFieldDecorator(`projectTime${item.id}`, {
                    initialValue: item.startTime && item.endTime ? [moment(item.startTime), moment(item.endTime)] : null
                  })(<RangePicker format="YYYY-MM-DD" disabled={!projectStatus} placeholder={['开始时间', '结束时间']} onChange={handleTimeChange.bind(this, index)}/>)
                }
              </Form.Item>
              <Form.Item label="项目名称" style={{flex: 1}}>
                {
                  getFieldDecorator(`projectName${item.id}`, {
                    initialValue: item.projectName,
                    rules: [{
                      required: true, message: '请输入项目名称'
                    }]
                  })(<Input placeholder="请输入项目名称" disabled={!projectStatus} onChange={handleInputProjectName.bind(this, index)}/>)
                }
              </Form.Item>
              <Form.Item label="项目描述" style={{width: '100%'}}>
                {
                  getFieldDecorator(`projectDetail${item.id}`, {
                    initialValue: item.projectDetail,
                    rules: [{
                      required: true, message: '请输入项目描述，包括用到的技术栈'
                    }]
                  })(<Input.TextArea rows={5}  disabled={!projectStatus} onChange={handleInputDetail.bind(this, index)} placeholder="请输入项目描述，包括用到的技术栈"/>)
                }
              </Form.Item>
            </Form>
            {
                projectStatus ? <span style={{marginLeft: 10, display: 'inline'}}>
                <Button type="dashed" icon="minus-circle-o" onClick={handleRemoveEduItem.bind(this, index)}></Button>
              </span> : ''
            }
          </div>
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
