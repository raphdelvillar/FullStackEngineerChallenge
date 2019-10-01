import React from "react";

import { navigateToUrl } from "single-spa";
import { Breadcrumb } from "antd";

export default class Header extends React.Component {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item style={{cursor:"pointer"}} onClick={() => navigateToUrl(`/performance-reviews`)}>Employees</Breadcrumb.Item>
        <Breadcrumb.Item>Initiate Performance Review</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}
