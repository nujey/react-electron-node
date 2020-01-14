import React from 'react'
import { Form, Icon, Input, Button, message } from 'antd'

import bgImg from '../../assets/images/home.jpg'
import "./home.scss"

import history from '../../utils/history'
import { httpGet } from '../../utils/fetch'
import localStorage from '../../utils/localstorage'

class Home extends React.Component {
  render() {
    return (
      <div className="main-content">
        <img src={bgImg} alt="" className="image-bg"/>
        <div className="image-bg opacity-box">
          <div className="login-box">
            <h3>欢迎来到血小板实验室</h3>
            <LoginForm />
          </div>
        </div>
      </div>
    )
  }
}

class LoginFormTemplate extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    const { validateFields } = this.props.form
    validateFields((errors, values) => {
      if(errors) {
        return false
      }
      httpGet({url: `/user/login?username=${values.username}&password=${values.password}` }).then(res => {
        localStorage.setItem('uuis', res.uuid)
        localStorage.setItem('name', res.name)
        localStorage.setItem('token', res.token)
        history.push({ pathname: '/index/work-list' })
      }).catch(err => {
        message.error(err.message, 3)
      })
    })
  }
  handleRegister = () => {
    history.push({pathname: '/register', query: { id: 'list'}, state: { a: 'a' }})
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form className="login-form" onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator('username', {
            initialValue: 'admin',
            rules: [{ required: true, message: '请输入用户名' }]
          })(
            <Input prefix={<Icon type="user" style={{color: '#38adff'}}/>} placeholder="请输入用户名" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }]
          })(
            <Input prefix={<Icon type="lock" style={{color: '#38adff'}}/>} placeholder="请输密码" />
          )}
        </Form.Item>
        <Form.Item>
          <div className="button-groups">
            <Button type="primary" htmlType="submit">登录</Button>
            <Button type="dashed" htmlType="button" onClick={this.handleRegister}>注册</Button>
          </div>
        </Form.Item>
      </Form>
    )
  }
}
const LoginForm = Form.create()(LoginFormTemplate)

export default Home
