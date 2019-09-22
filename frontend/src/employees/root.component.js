import React from "react";

import Action from "./list/action";
import Search from "./list/search";
import Table from "./list/list";

export default class Employees extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Action />
                <Search />
                <Table />
            </div>
        )
    }
}