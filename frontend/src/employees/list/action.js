import React from "react";

import { Button } from "antd";

export default class Action extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="table-operations">
                <Button type="primary">New Employee</Button>
                <Button>Clear filters</Button>
            </div>
        )
    }
}