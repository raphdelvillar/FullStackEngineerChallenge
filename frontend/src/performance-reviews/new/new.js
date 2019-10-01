import React from "react";

import { Form, Input, Radio, DatePicker, Button } from "antd";

import api from "../../data";

class New extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        api.Review().Post(values, response => {
          console.log(response);
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Name">
          {getFieldDecorator("fullname", {
            rules: [
              {
                required: true,
                message: "Name is required"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <h3 style={{marginLeft: "30%"}}>Performance</h3>
        <h3 style={{marginLeft: "30%"}}>Competency</h3>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: "new employee" })(New);
