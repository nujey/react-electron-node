import React from 'react'
import { useState, useEffect, useMemo } from 'react'
import { Input, Button, Slider, Icon, message, Tooltip } from 'antd'

let num = 0

function SkillModule(props) {
  const [skillStatus, setSkillStatus] = useState(false)
  const [sikllMap, setSkillMap] = useState([])
  // 点击添加
  function addModules() {
    const obj = {
      id: num++,
      skillName: '',
      skillLevel: 0
    }
    const tempMap = [...sikllMap]
    tempMap.push(obj)
    setSkillMap(tempMap)
  }
  // 输入技能名称
  function skillInputName(index, e) {
    console.log(index, e.target.value)
    const tempMap = [...sikllMap]
    tempMap[index].skillName = e.target.value
    setSkillMap(tempMap)
  }
  // 滑动块滑动的时候
  function changeSlider(index, value) {
    const tempMap = [...sikllMap]
    tempMap[index].skillLevel = value
    setSkillMap(tempMap)
  }
  // 保存教育模块
  function handleSave() {
    if (!skillStatus) {
      setSkillStatus(!skillStatus)
    } else {
      if (sikllMap.length === 0) return false
      for(let i = 0; i <= sikllMap.length; i++) {
        if (sikllMap[i].skillName === '') {
          message.error('有个技能没填呢～')
          return false
        } else {
          console.log(sikllMap)
        }
      }
    }
  }
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
          sikllMap.map((item, index) => <div className="skill-item" key={item.id} style={{padding: '12px 0px'}}>
            <Input placeholder="请输入技能名称"
                   allowClear
                   disabled={skillStatus ? false : true}
                   style={{ width: 150 }}
                   defaultValue={item.skillName}
                   onChange={skillInputName.bind(this, index)}
                   ></Input>
            <Slider marks={skillMarks} step={null} defaultValue={item.skillLevel} onAfterChange={changeSlider.bind(this, index)}/>
          </div>)
        }
        {
          (!skillStatus && sikllMap.length === 0) && <p className="no-data">暂无数据</p>
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
