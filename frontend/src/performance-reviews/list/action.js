import React from "react";
import { withRouter } from "react-router-dom";

import { Button } from "antd";

class Action extends React.Component {
  constructor(props) {
    super(props);
  }

  newPerformanceReview = () => {
    this.props.history.push("/new");
  }

  render() {
    return <div className="table-operations">
      <Button type="primary" onClick={() => this.newPerformanceReview()}>
        Initiate Performance Review
      </Button>
    </div>;
  }
}

export default withRouter(Action);
