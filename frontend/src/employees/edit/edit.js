import React from "react";

import { Form, Input, Radio, DatePicker, Button } from "antd";

import api from "../../data";

class Edit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        api.Employee().Patch("", values, response => {
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
          {getFieldDecorator("FullName", {
            rules: [
              {
                required: true,
                message: "Name is required"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Designation">
          {getFieldDecorator("Designation", {
            rules: [
              {
                required: true,
                message: "Designation is required"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Email">
          {getFieldDecorator("Email", {
            rules: [
              {
                required: true,
                message: "Email is required"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Gender">
          {getFieldDecorator("Gender", {
            rules: [
              {
                required: true,
                message: "Gender is required"
              }
            ]
          })(
            <Radio.Group style={{ marginTop: 10 }}>
              <Radio value={"Male"}>Male</Radio>
              <Radio value={"Female"}>Female</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="Join Date">
          {getFieldDecorator("JoinDate", {
            rules: [
              {
                required: true,
                message: "Join Date is required"
              }
            ]
          })(<DatePicker style={{ marginTop: 5 }} />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: "edit employee" })(Edit);
