import React from "react";

import { Layout, Icon } from "antd";
const { Footer } = Layout;

export default class FooterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "Raph Wilson Del Villar"
        }
    }

    render() {
        return (
            <Footer>
                <center>
                PayPay - FullStackEngineerChallenge ©2019 Created
                by {this.state.author}
                </center>
            </Footer>
        )
    }
}