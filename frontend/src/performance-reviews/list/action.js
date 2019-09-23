import React from "react";
import { withRouter } from "react-router-dom";

import { Button } from "antd";

class Action extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="table-operations">
            </div>
        )
    }
}

export default withRouter(Action);