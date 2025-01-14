import React from "react";
import { navigateToUrl } from "single-spa";

import { Layout, Menu, Icon } from "antd";

const { Header } = Layout;
const { SubMenu } = Menu;

import { decodeToken } from "../utils/token";

export default class Appbar extends React.Component {
  logout = () => {
    localStorage.clear();
    navigateToUrl("/dashboard");
    window.location.reload();
  };

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div id="logo" />
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
            <Menu.Item onClick={() => navigateToUrl("/dashboard")}>
              Dashboard
            </Menu.Item>
            <Menu.Item onClick={() => navigateToUrl("/employees")}>
              Employees
            </Menu.Item>
            <Menu.Item onClick={() => navigateToUrl("/performance-reviews")}>
              Performance Reviews
            </Menu.Item>

            <SubMenu
              style={{ float: "right" }}
              title={
                <span className="submenu-title-wrapper">
                  {decodeToken().role === "Administrator" && (
                    <Icon
                      type="crown"
                      theme="twoTone"
                      twoToneColor="orange"
                      style={{
                        fontSize: 22,
                        verticalAlign: "middle",
                        marginRight: 20
                      }}
                    />
                  )}
                  {decodeToken().role === "Employee" && (
                    <Icon
                      type="smile"
                      theme="twoTone"
                      twoToneColor="blue"
                      style={{
                        fontSize: 22,
                        verticalAlign: "middle",
                        marginRight: 20
                      }}
                    />
                  )}
                  {decodeToken().display_name}
                  <Icon type="down" style={{ fontSize: 10, marginLeft: 10 }} />
                </span>
              }
            >
              <Menu.Item onClick={() => this.logout()}>Logout</Menu.Item>
            </SubMenu>
          </Menu>
        </Header>
      </Layout>
    );
  }
}
