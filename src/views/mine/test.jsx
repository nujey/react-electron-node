import React from 'react'

import { Form, Input, Icon, Button } from 'antd';

let id = 0;

class DynamicFieldSet extends React.Component {
  add = () => {
    const obj = {
      id: id++,
      name: '',
      age: '20'
    }
    const { form } = this.props;
    const newkeys = form.getFieldValue('keys')
    newkeys.push(obj)
    form.setFieldsValue({
      keys: newkeys
    })
  }

  remove = k => {
    const { form } = this.props;
    const keys2 = [...form.getFieldValue('keys')];
    keys2.splice(k, 1)
    form.setFieldsValue({
      keys: keys2
    })
  }

  // remove = k => {
  //   const { form } = this.props;
  //   const keys = form.getFieldValue('keys');
  //   form.setFieldsValue({
  //     keys: keys.filter((key, i) => i !== k),
  //   })
  // }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => {
      return <Form.Item
        label={index === 0 ? 'Passengers' : ''}
        required={false}
        key={k.id}
      >
        {getFieldDecorator(`names${k.id}`, {
          initialValue: k.age,
        })(<Input placeholder="passenger name" style={{ width: '60%', marginRight: 8 }} />)}
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            onClick={() => this.remove(index)} />
      </Form.Item>
    });
    return (
      <Form onSubmit={this.handleSubmit}>
        {formItems}
        <Form.Item {...formItemLayoutWithOutLabel}>
          <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
            <Icon type="plus" /> Add field
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const FormTest = Form.create({ name: 'dynamic_form_item' })(DynamicFieldSet);

export default FormTest
