import React from 'react'
import { Form, Input, Cascader, Checkbox, Button } from 'antd'

import './register.scss'

const addressMap = [{
  value: 'zhejiang',
  label: '浙江',
  children: [{
    value: 'hangzhou',
    label: '杭州',
    children: [{
      value: 'xihu',
      label: '西湖'
    },{
      value: 'tianjiang',
      label: '钱塘新区'
    }]
  },{
    value: 'shaoxing',
    label: '绍兴',
    children: [{
      value: 'yuecheng',
      label: '越城区'
    }]
  }]
}]


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
          <Form.Item label="地区" className="self-form-item">
            {getFieldDecorator('address', {
              initialValue: ['zhejiang', 'hangzhou', 'xihu'],
              rules: [{ type: 'array', required: true, message: '请选择注册地址' }]
            })(<Cascader options={addressMap}/>)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
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

export default RegisterPage
