import React from "react";

import { Layout, Menu } from "antd";

const { Header } = Layout;

export default class Appbar extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div id="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item>
                            Employees
                        </Menu.Item>
                        <Menu.Item>
                            My Reviews
                        </Menu.Item>
                        <Menu.Item>
                            Performance Reviews
                        </Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        )
    }
}
