import React from "react";

import { Layout, Card, Form, Icon, Input, Button } from "antd";

class Authorization extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout
        style={{
          backgroundColor: "ghostwhite"
        }}
      >
        <center>
          <Card
            style={{
              marginTop: 50,
              width: 500
            }}
          >
            <img src="data:image/jpeg;base64,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" />
            <h1 style={{ marginBottom: 50 }}>Full Stack Engineer Challenge</h1>
            <Form
              onSubmit={this.handleSubmit}
              style={{
                textAlign: "left"
              }}
            >
              <Form.Item>
                {" "}
                {getFieldDecorator("username", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your username!"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon
                        type="user"
                        style={{
                          color: "rgba(0,0,0,.25)"
                        }}
                      />
                    }
                    placeholder="Username"
                  />
                )}{" "}
              </Form.Item>{" "}
              <Form.Item>
                {" "}
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Password!"
                    }
                  ]
                })(
                  <Input
                    style={{ marginTop: 10 }}
                    prefix={
                      <Icon
                        type="lock"
                        style={{
                          color: "rgba(0,0,0,.25)"
                        }}
                      />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}{" "}
              </Form.Item>{" "}
              <Form.Item>
                <Button
                  style={{
                    marginTop: 20,
                    width: "100%"
                  }}
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>{" "}
              </Form.Item>{" "}
            </Form>{" "}
          </Card>{" "}
        </center>{" "}
      </Layout>
    );
  }
}

const WrappedAuthorizationForm = Form.create({
  name: "login"
})(Authorization);

export default WrappedAuthorizationForm;
