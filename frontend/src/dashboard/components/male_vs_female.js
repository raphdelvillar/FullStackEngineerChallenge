import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Female", "Male"],
  datasets: [
    {
      data: [300, 50],
      backgroundColor: ["#FF6384", "#36A2EB"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB"]
    }
  ]
};

export default class MaleVsFemale extends React.Component {
  render() {
    return (
      <div>
        <Doughnut data={data} options={{ maintainAspectRatio: false }} />
      </div>
    );
  }
}
