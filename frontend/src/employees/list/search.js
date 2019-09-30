import React from "react";

import { Input } from "antd";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Input placeholder="Search Employee..." />;
  }
}
