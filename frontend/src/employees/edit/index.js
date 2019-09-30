import React from "react";

import Header from "./header";
import Edit from "./edit";

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Edit />
      </div>
    );
  }
}
