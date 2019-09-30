import React from "react";

import Header from "./header";
import New from "./new";

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <New />
      </div>
    );
  }
}
