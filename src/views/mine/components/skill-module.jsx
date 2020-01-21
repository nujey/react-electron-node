import React from 'react'
import { useState, useEffect, useMemo } from 'react'
import { Input, Button, Slider, Icon, message, Tooltip } from 'antd'
import { httpPost } from '../../../utils/fetch'
import localStorage from '../../../utils/localstorage'


function SkillModule(props) {
  const [skillStatus, setSkillStatus] = useState(false)
  const [skillMap, setSkillMap] = useState([])
  // 点击添加
  function addModules() {
    let num = skillMap.length
    const obj = {
      id: num++,
      skillName: '',
      skillLevel: 0
    }
    const tempMap = [...skillMap]
    tempMap.push(obj)
    setSkillMap(tempMap)
  }
  // 输入技能名称
  function skillInputName(index, e) {
    const tempMap = [...skillMap]
    tempMap[index].skillName = e.target.value
    setSkillMap(tempMap)
  }
  // 滑动块滑动的时候
  function changeSlider(index, value) {
    const tempMap = [...skillMap]
    tempMap[index].skillLevel = value
    setSkillMap(tempMap)
  }
  // 删除模块
  function handleRemoveEduItem(index) {
    const tempMap = [...skillMap]
    tempMap.splice(index, 1)
    setSkillMap(tempMap)
  }
  // 保存模块
  function handleSave() {
    if (!skillStatus) {
      setSkillStatus(!skillStatus)
    } else {
      for(let i = 0; i <= skillMap.length - 1; i++) {
        if (skillMap[i].skillName === '') {
          message.error('有个技能没填呢～')
          return false
        }
      }
      httpPost({
        url: '/user/setUserResumeSkill',
        data: {
          uuid: localStorage.getItem('uuid', true),
          skillModule: skillMap
        }
      }).then (() => {
        message.success('保存成功')
        setSkillStatus(!skillStatus)
      })
    }
  }
  useEffect(() => {
    setSkillMap(props.skillList)
  }, [props.skillList])
  // 技能对象
  const skillMarks = {
    0: {
      style: { color: '#93f' },
      label: <Tooltip title="或许你只是听过" placement="bottomRight">熟悉</Tooltip>
    },
    33: {
      style: { color: '#63f' },
      label: <Tooltip title="难道你能写项目？" placement="bottom">熟练</Tooltip>
    },
    66: {
      style: { color: '#33f' },
      label: <Tooltip title="亲～带带我" placement="bottom">精通</Tooltip>
    },
    100: {
      style: { color: '#036' },
      label: <Tooltip title="大佬！大佬！大佬！膜拜大佬！" placement="bottomLeft">专家</Tooltip>
    }
  }
  return (
    <section>
      <div className="resume-item-title">
        <span>专业技能</span>
        <Button type="dashed" icon={skillStatus ? 'save' : 'edit'} onClick={handleSave}>{skillStatus ? '保存' : '编辑'}</Button>
      </div>
      <div className="skill-module">
        {
          skillMap.map((item, index) => <div className="skill-item" key={item.id} style={{padding: '12px 0px'}}>
            <Input placeholder="请输入技能名称"
                   allowClear
                   disabled={skillStatus ? false : true}
                   style={{ width: 150 }}
                   defaultValue={item.skillName}
                   onChange={skillInputName.bind(this, index)}
                   ></Input>
            <Slider marks={skillMarks} disabled={!skillStatus} step={null} defaultValue={item.skillLevel} onAfterChange={changeSlider.bind(this, index)}/>
            {
              skillStatus ? <span style={{marginLeft: 10, display: 'inline'}}>
                <Button type="dashed" icon="minus-circle-o" onClick={handleRemoveEduItem.bind(this, index)}></Button>
              </span> : ''
            }
          </div>)
        }
        {
          (!skillStatus && skillMap.length === 0) && <p className="no-data">暂无数据</p>
        }
      </div>
      {
        skillStatus ? <div className="resume-project-add primary-border">
          <Icon type="plus" style={{fontSize: 30, color: '#38adff'}} onClick={addModules}></Icon>
        </div> : ''
      }
    </section>
  )
}

export default SkillModule
