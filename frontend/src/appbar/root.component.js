import React from "react";
import { navigateToUrl } from "single-spa";

import { Layout, Menu } from "antd";

const { Header } = Layout;

export default class Appbar extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div id="logo" />
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
            <Menu.Item onClick={() => navigateToUrl("/my-reviews")}>
              My Reviews
            </Menu.Item>
            <Menu.Item onClick={() => navigateToUrl("/employees")}>
              Employees
            </Menu.Item>
            <Menu.Item onClick={() => navigateToUrl("/performance-reviews")}>
              Performance Reviews
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    );
  }
}
