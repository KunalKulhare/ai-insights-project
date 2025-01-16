import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement
);

interface Props {
  data: { date: string; average_time: number }[];
}

const ResponseLineChart: React.FC<Props> = ({ data }) => {
  const labels = data.map((item) => item.date);
  const values = data.map((item) => item.average_time);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Average Response Time (s)",
        data: values,
        borderColor: "rgba(75, 192, 192, 0.6)",
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Average Response Time (Day-wise)",
      },
      tooltip: {
        enabled: true,
        mode: "nearest" as "nearest",
        intersect: false,
      },
    },
    scales: {
      x: {
        type: "category" as const,
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        type: "linear" as const,
        title: {
          display: true,
          text: "Average Time (s)",
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return <Line data={chartData} options={options as any} />;
};

export default ResponseLineChart;
