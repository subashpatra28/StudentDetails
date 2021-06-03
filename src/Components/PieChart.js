import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart() {
  const data = {
    labels: ["BasketBall", "Tennis", "Football", "Hockey", "Cricket"],
    datasets: [
      {
        label: "Students",
        data: [1, 1, 1, 1, 1],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(153, 102, 255, 1)",
        ],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Pie Chart",
    },
  };

  return <Pie data={data} options={options} />;
}

export default PieChart;
