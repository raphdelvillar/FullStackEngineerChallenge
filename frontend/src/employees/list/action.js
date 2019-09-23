import React from "react";
import { withRouter } from "react-router-dom";

import { Button } from "antd";

class Action extends React.Component {
    constructor(props) {
        super(props);
    }

    newEmployee = () => {
        this.props.history.push("/new");
    }

    render() {
        return (
            <div className="table-operations">
                <Button type="primary" onClick={() => this.newEmployee()}>New Employee</Button>
                <Button>Clear filters</Button>
            </div>
        )
    }
}

export default withRouter(Action);