import React from "react";

import { Col, Row, Card } from "antd";

import AccessLineChart from "./components/access_line_chart";
import MaleVsFemale from "./components/male_vs_female";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Row gutter={10}>
          <Col span={12}>
            <Card>
              <center>
                <h4>Access Tracker</h4>
              </center>
              <AccessLineChart />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <center>
                <h4>Employees - Male / Female Ratio</h4>
              </center>
              <MaleVsFemale />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
