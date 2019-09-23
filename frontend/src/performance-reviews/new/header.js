import React from "react";

import { Breadcrumb } from 'antd';

export default class Header extends React.Component {
    render() {
        return (
        <Breadcrumb>
            <Breadcrumb.Item>Employees</Breadcrumb.Item>
            <Breadcrumb.Item>Add Review</Breadcrumb.Item>
        </Breadcrumb>
        )
    }
}