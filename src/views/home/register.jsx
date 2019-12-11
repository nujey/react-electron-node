import React from 'react'
import { Form, Input, Cascader, Checkbox, Button, message } from 'antd'
import { withRouter } from 'react-router'

import './register.scss'

import { httpPost } from '../../utils/fetch'

const addressMap = require('./address')

// @withRouter

class RegisterTemplate extends React.Component {
  state = {
    confirmDirty: false
  }
  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }
  validateAgreement = (rule, value, callback) => {
    const { form } = this.props
    if(value !== true) {
      callback('请同意协议啊！！！')
    }
    callback()
  }
  handleSubmit = e => {
    e.preventDefault()
    const { validateFields } = this.props.form
    validateFields((errors, values) => {
      if (errors) {
        // console.log(errors)
      } else {
        console.log(values)
        const data = {
          username: values.username,
          password: values.password,
          address: values.address
        }
        httpPost({url: '/user/removeUser', data }).then(res => {
            message.success('注册成功')
            this.props.history.push('/')
        })
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 10,
          offset: 10,
        },
        sm: {
          span: 24,
          offset: 1,
        },
      },
    };
    return (
      <div className="regitser-template">
        <h3 className="regitser-title">注册</h3>
        <Form className="form" onSubmit={this.handleSubmit}>
          <Form.Item label="用户名" className="self-form-item">
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名' }]
            })(<Input placeholder="请输入用户名"/>)}
          </Form.Item>
          <Form.Item label="密码" className="self-form-item">
            {getFieldDecorator('password', {
              rules: [{ required: true, min: 6,  message: '请输入密码' },
                      { validator: this.validateToNextPassword }]
            })(<Input.Password placeholder="请输入密码"/>)}
          </Form.Item>
          <Form.Item label="地区" className="self-form-item">
            {getFieldDecorator('address', {
              initialValue: ['zhejiang', 'hangzhou', 'xihu'],
              rules: [{ type: 'array', required: true, message: '请选择注册地址' }]
            })(<Cascader options={addressMap}/>)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
              rules: [{ required: true, message: '请先阅读并同意用户协议' },
                      { validator: this.validateAgreement }]
            })(
              <Checkbox>
                请阅读并同意<a href="#">闪电协议</a>
              </Checkbox>,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const RegisterPage = Form.create()(RegisterTemplate)

export default withRouter(RegisterPage)

// export default RegisterTemplate
