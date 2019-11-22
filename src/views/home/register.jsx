import React from 'react'
import { Form, Input } from 'antd'

import './register.scss'

class RegisterTemplate extends React.Component {
  state = {
    confirmDirty: false
  }
  validateToNextPassword = (rule, value, callback) => {
    console.log(value)
    const { form } = this.props
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="regitser-template">
        <h3 className="regitser-title">注册</h3>
        <Form className="form">
          <Form.Item label="用户名" className="self-form-item">
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名' }]
            })(<Input placeholder="请输入用户名"/>)}
          </Form.Item>
          <Form.Item label="密码" className="self-form-item">
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' },
                      { validator: this.validateToNextPassword }]
            })(<Input.Password placeholder="请输入密码"/>)}
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const RegisterPage = Form.create()(RegisterTemplate)

export default RegisterPage
