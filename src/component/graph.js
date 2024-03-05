import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const Graph = () => {
    const data1 = [5, 3, 66, 56, 69, 96, 91.1, 9.11];


    const labels = [0, 10, 20, 30, 40, 50, 60, 70, 80];
    
    return (
      <Line
        datasetIdKey="id"
        data={{
          labels: labels,
          datasets: [
            {
              id: 1,
              label: "Power",
              data: data1,
            }
          ],
        }}
      />
    );
}

export default Graph;