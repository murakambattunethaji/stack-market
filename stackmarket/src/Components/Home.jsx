import { FaSyncAlt } from "react-icons/fa";
import { Scatter } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, LinearScale, PointElement } from "chart.js";
import { FaSearch, FiSearch } from "react-icons/fi";
import React, { useState } from "react";


ChartJS.register(Tooltip, Legend, LinearScale, PointElement);

const Home = () => {

  const lastUpdated = "October 25, 2023 at 2:31 PM";


  const filters = [
    { label: "Business unit", options: ["All business units", "Unit 1", "Unit 2"] },
    { label: "Area", options: ["All areas", "Area 1", "Area 2"] },
    { label: "Field", options: ["All fields", "Field 1", "Field 2"] },
    { label: "Manufacturer", options: ["All manufacturers", "Manufacturer 1", "Manufacturer 2"] },
    { label: "Well", options: ["All wells", "Well 1", "Well 2"] },
    { label: "Well group", options: ["All well groups", "Group 1", "Group 2"] },
  ];




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


  const allData = Array.from({ length: 10 }, (_, pageIndex) =>
    Array.from({ length: 10 }, (_, rowIndex) => ({
      id: pageIndex * 10 + rowIndex + 1,
      wellName: `WELL ${pageIndex * 10 + rowIndex + 1}`,
      manufacturer: ["Baker", "Champion X", "Schlumberger"][
        rowIndex % 3
      ],
      contact: ["Wade Wilson", "Nate Richards", "Chris Summers"][
        rowIndex % 3
      ],
      freq: (45 + rowIndex).toFixed(1),
      newFreq: (50 + rowIndex).toFixed(1),
      fcAdd: 300 + rowIndex,
      incChange: (45 + rowIndex / 2).toFixed(1),
      runLifeDays: 20 + rowIndex,
      motorLoad: 50 + rowIndex,
    }))
  );

  const [currentPage, setCurrentPage] = useState(1);

  const renderRows = () => {
    return allData[currentPage - 1].map((row) => (
      <tr
        key={row.id}
        className="border-b border-gray-600 hover:bg-gray-700"
      >
        <td className="p-3">
          <button className="bg-cyan-600 text-white px-5 py-2 rounded-md text-sm hover:bg-cyan-700">
            Recommend
          </button>
        </td>
        <td className="p-3">
          <input type="checkbox" className="w-4 h-4 " />
        </td>
        <td className="p-3">{row.wellName}</td>
        <td className="p-3">In Range</td>
        <td className="p-3">{row.manufacturer}</td>
        <td className="p-3">{row.contact}</td>
        <td className="p-3 bg-orange-300 text-gray-900">{row.freq}</td>
        <td className="p-3 bg-orange-300 text-gray-900">{row.newFreq}</td>
        <td className="p-3 bg-orange-300 text-gray-900">{row.fcAdd}</td>
        <td className="p-3 bg-orange-300 text-gray-900">{row.incChange}</td>
        <td className="p-3 flex items-center">
          <span className="mr-2 text-gray-300">{row.runLifeDays}</span>
          <button className=" border-green-500 text-green-500 px-4 py-1 border  rounded-md text-sm ">
            Running
          </button>
        </td>
        <td className="p-3">Fixed speed (1)</td>
        <td className="p-3">{row.motorLoad}</td>
      </tr>
    ));
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= 10) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#121212",
          padding: "1rem 2rem",
          color: "#fff",
          fontSize: "16px",
          fontFamily: "Arial, sans-serif",
          borderBottom: "1px solid #2A2A2A",
          position: "sticky", // Makes the header sticky
          top: 0, // Sticks the header to the top
          zIndex: 1000, // Ensures it stays above other content
        }}
      >
        {/* Title */}
        <div style={{ fontWeight: "bold" }}>Optimization Dashboard</div>

        {/* Last Updated and Refresh */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "14px", color: "#9E9E9E" }}>
            Last updated on {lastUpdated}
          </span>
          <FaSyncAlt
            style={{
              cursor: "pointer",
              color: "#9E9E9E",
            }}
            title="Refresh"
          />
        </div>
      </div>










      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#121212",
          padding: "1rem",
          borderBottom: "1px solid #2A2A2A",
          color: "#fff",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "flex-start" }}>
          {filters.map((filter, index) => (
            <div
              key={index}
              style={{
                flex: "0 1 auto",
                width: "130px",
              }}
            >
              <label
                style={{
                  display: "block",
                  fontSize: "12px",
                  color: "#9E9E9E",
                  marginBottom: "5px",
                }}
              >
                {filter.label}
              </label>
              <select
                style={{
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  backgroundColor: "#212121",
                  color: "#fff",
                  fontSize: "14px",
                  width: "100%",
                  height: "34px",

                }}
              >
                {filter.options.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <div
            style={{
              flex: "0 1 auto",
              width: "150px",
            }}
          >
            <label
              style={{
                display: "block",
                fontSize: "12px",
                color: "#9E9E9E",
                marginBottom: "5px",
              }}
            >
              Method of production
            </label>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.5rem",
                borderRadius: "4px",
                backgroundColor: "#212121",
                color: "#fff",
                border: "1px solid ",
                whiteSpace: "nowrap",
                width: "120px",
                height: "33px",
              }}
            >
              ESP <span style={{ cursor: "pointer", marginLeft: "60px", }}>×</span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <button
            style={{
              color: "#64B5F6",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              padding: "0",
              marginRight: "19px",
              marginTop: "20px",

            }}
          >
            Clear filters
          </button>

          <div
            style={{
              display: "flex",
              border: "1px solid #64B5F6",
              borderRadius: "4px",
              overflow: "hidden",
              fontSize: "12px",
              width: "170px",
              marginTop: "21px",
              height: "35px",


            }}
          >
            <button
              style={{
                padding: "0.5rem 1rem",
                // backgroundColor: "#64B5F6",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                // fontWeight: "bold",
                flex: 1,

              }}
            >
              My wells
            </button>
            <button
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#212121",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                flex: 1,

              }}
            >
              All wells
            </button>
          </div>
        </div>
      </div>













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














      <div className="bg-gray-900 text-white min-h-screen p-6">
        {/* Heading */}
        <h1 className="text-base font-semibold mb-2 text-left">
          Frequency Change (96)
        </h1>

        {/* Search Input */}
        <div className="mb-1 flex justify-end ">
          <div className="flex items-center w-1/4 bg-black border border-gray-600 rounded-md px-3 py-2 h-9">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full text-sm text-gray-300 bg-black focus:outline-none  "

            />
          </div>
        </div>

        {/* Table */}
        <table className="w-full border-collapse table-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg text-sm">
          <thead>
            <tr className="bg-gray-700 text-left border-b border-gray-600">
              <th className="p-3 font-medium text-gray-300">Task</th>
              <th className="p-3 font-medium text-gray-300">Not Feasible</th>
              <th className="p-3 font-medium text-gray-300">Well Name</th>
              <th className="p-3 font-medium text-gray-300">
                Outwith Defaults
              </th>
              <th className="p-3 font-medium text-gray-300">
                Manufacturer
              </th>
              <th className="p-3 font-medium text-gray-300">Contact</th>
              <th className="p-3 font-medium text-gray-300">Freq (Hz)</th>
              <th className="p-3 font-medium text-gray-300">
                New Freq (Hz)
              </th>
              <th className="p-3 font-medium text-gray-300">
                FC Add, Oil (stb/d)
              </th>
              <th className="p-3 font-medium text-gray-300">
                Inc. Change (Hz)
              </th>
              <th className="p-3 font-medium text-gray-300">
                Run Life Days
              </th>
              <th className="p-3 font-medium text-gray-300">
                PID Control Mode
              </th>
              <th className="p-3 font-medium text-gray-300">Motor Load</th>
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </table>

        {/* Pagination */}
        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`px-4 py-2 border text-white rounded-md text-sm h-9 w-40 hover:bg-gray-600 ${currentPage === 1 ? "opacity-50 cursor-not-allowed " : ""
              }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="flex space-x-2">
            {[...Array(10)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 rounded-full text-sm ${currentPage === index + 1
                    ? "bg-gray-500 text-white  "
                    : "bg-gray-900 text-gray-300 hover:bg-gray-600 "
                  }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`px-4 py-2 border text-white rounded-md text-sm h-9 w-40 hover:bg-gray-600${currentPage === 10 ? "opacity-50 cursor-not-allowed h-9 w-40 hover:bg-gray-600" : ""
              }`}
            disabled={currentPage === 10}
          >
            Next
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home
