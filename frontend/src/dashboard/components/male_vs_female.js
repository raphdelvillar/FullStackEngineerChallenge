import React from "react";

import api from "../../data";

import { Doughnut } from "react-chartjs-2";

export default class MaleVsFemale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Male: 0,
      Female: 0,
    };
  }

  componentDidMount = () => {
    api.Dashboard(null, "dashboard/male-vs-female").Get({}, response => {
      this.setState({
        Male: response.Data.Male,
        Female: response.Data.Female,
      });
    });
  }

  render() {
    const { Male, Female } = this.state;
    let data = {
      labels: ["Female", "Male"],
      datasets: [
        {
          data: [Female, Male],
          backgroundColor: ["#FF6384", "#36A2EB"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB"]
        }
      ]
    };
    return (
      <div>
        <Doughnut data={data} options={{ maintainAspectRatio: false }} />
      </div>
    );
  }
}
