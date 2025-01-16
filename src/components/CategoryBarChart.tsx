import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title);

interface Props {
  data: Record<string, number>;
}

const CategoryBarChart: React.FC<Props> = ({ data }) => {
  const labels = Object.keys(data);
  const values = Object.values(data);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Queries per Category",
        data: values,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  return <Bar data={chartData} options={{ responsive: true }} />;
};

export default CategoryBarChart;
