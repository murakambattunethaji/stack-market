import React from "react";
import { Scatter } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, LinearScale, PointElement } from "chart.js";
import { FaSearch , FiSearch} from "react-icons/fi";

// Register Chart.js components
ChartJS.register(Tooltip, Legend, LinearScale, PointElement);

const RecommendationChart = () => {
  
  const data = {
    datasets: [
      {
        label: "Min PIP",
        data: Array.from({ length: 50 }, () => ({
          x: Math.random() * (90 - 30) + 30,
          y: Math.random() * 6000,
        })),
        backgroundColor: "#1E88E5",
        borderColor: "#1E88E5",
        borderWidth: 1,
        pointStyle: "triangle",
      },
      {
        label: "Max HZ",
        data: Array.from({ length: 50 }, () => ({
          x: Math.random() * (90 - 30) + 30,
          y: Math.random() * 6000,
        })),
        backgroundColor: "#64B5F6",
        borderColor: "#64B5F6",
        borderWidth: 1,
        pointStyle: "triangle",
      },
      {
        label: "Wells",
        data: Array.from({ length: 50 }, () => ({
          x: Math.random() * (90 - 30) + 30,
          y: Math.random() * 6000,
        })),
        backgroundColor: "#BBDEFB",
        borderColor: "#BBDEFB",
        borderWidth: 1,
        pointStyle: "triangle",
      },
    ],
  };

  
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Frequency (Hz)",
          color: "#fff",
          font: { size: 14 },
        },
        grid: { color: "#2A2A2A" },
        ticks: { color: "#fff" },
      },
      y: {
        title: {
          display: true,
          text: "Pump Intake Pressure (psig)",
          color: "#fff",
          font: { size: 14 },
        },
        grid: { color: "#2A2A2A" },
        ticks: { color: "#fff" },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#fff",
          usePointStyle: true,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div
      style={{
        backgroundColor: "#121212",
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
      <h3 style={{ color: "#fff", textAlign: "left" }}>Recommendations</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
       
        <p style={{ color: "#9E9E9E", fontSize: "14px", margin: 0, }}>
          Optimization opportunities
        </p>
        <div className="flex items-center w-1/4 bg-black border border-gray-600 rounded-md px-3 py-2 ">
          <FiSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full text-sm text-gray-300 bg-black focus:outline-none mt-10px"
            
          />
        </div>
      </div>

      <div style={{ height: "400px" }}>
        <Scatter data={data} options={options} />
      </div>

    </div>
  );
};

export default RecommendationChart;
