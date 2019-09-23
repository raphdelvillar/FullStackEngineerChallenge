import React from "react";

import Action from "./action";
import Search from "./search";
import List from "./list";

export default class Root extends React.Component {
    render() {
        return (
            <div>
                <Action />
                <Search />
                <List />
            </div>
        )
    }
}