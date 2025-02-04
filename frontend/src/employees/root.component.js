import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { Card } from "antd";

import List from "./list";
import New from "./new";
import Edit from "./edit";

export default class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basename: "employees"
    };
  }

  render() {
    let { basename } = this.state;
    if (this.props.match && this.props.match.path) {
      basename = this.props.match.path;
    }
    return (
      <div>
        <Card>
          <Router basename={basename}>
            <Route path="/" exact component={List} />
            <Route path="/new" exact component={New} />
            <Route path="/edit/:id" exact component={Edit} />
          </Router>
        </Card>
      </div>
    );
  }
}
