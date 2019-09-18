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
                PayPay ©2019 Created with
                &nbsp;<Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /> 
                &nbsp;by {this.state.author}
                </center>
            </Footer>
        )
    }
}