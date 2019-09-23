import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import List from "./list";
import New from "./new";
import Edit from "./edit";

export default class Employees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            basename: "employees"
        }
    }

    render() {
        let { basename } = this.state;
        if (this.props.match && this.props.match.path) {
            basename = this.props.match.path;
        }
        return (
            <div>
                <Router basename={basename} >
                    <Route path="/" exact component={List} />
                    <Route path="/new" exact component={New} />
                    <Route path="/edit" exact component={Edit} />
                </Router>
            </div>
        )
    }
}