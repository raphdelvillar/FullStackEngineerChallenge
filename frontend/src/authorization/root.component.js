import React from "react";
import { navigateToUrl } from "single-spa";
import { Layout, Card, Form, Icon, Input, Button, notification } from "antd";
import api from "../data";
import PaypayLogo from "./logo";

class Authorization extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        api
          .Authorization(null, "authorization/login")
          .Post(values, response => {
            if (response.Error == null) {
              let token = response.Data.access_token;
              if (token != undefined) {
                localStorage.setItem("access_token", token);
                navigateToUrl("/")
                window.location.reload();
              }
            }

            notification["error"]({
              placement: "bottomRight",
              message: "500",
              description: "Internal Server Error"
            });
          });
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
            <PaypayLogo />
            <h1 style={{ marginBottom: 50 }}>Full Stack Engineer Challenge</h1>
            <Form
              onSubmit={this.handleSubmit}
              style={{
                textAlign: "left"
              }}
            >
              <Form.Item>
                {" "}
                {getFieldDecorator("Username", {
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
                {getFieldDecorator("Password", {
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
