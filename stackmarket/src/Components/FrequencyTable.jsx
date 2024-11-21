import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

function FrequencyTable() {
  // Mock data for 10 pages
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

  // Function to render rows for the current page
  const renderRows = () => {
    return allData[currentPage - 1].map((row) => (
      <tr
        key={row.id}
        className="border-b border-gray-600 hover:bg-gray-700"
      >
        <td className="p-3">
          <button className="bg-blue-500 text-white px-5 py-2 rounded-md text-sm hover:bg-blue-400">
            Recommend
          </button>
        </td>
        <td className="p-3">
          <input type="checkbox" className="w-4 h-4" />
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
          <button className="bg-blue-500 text-white px-4 py-1 border border-blue-500 rounded-md text-sm hover:bg-blue-400">
            Running
          </button>
        </td>
        <td className="p-3">Fixed speed (1)</td>
        <td className="p-3">{row.motorLoad}</td>
      </tr>
    ));
  };

  // Function to handle page navigation
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= 10) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      {/* Heading */}
      <h1 className="text-2xl font-semibold mb-6 text-left">
        Frequency Change (96)
      </h1>

      {/* Search Input */}
      <div className="mb-6 flex justify-end">
        <div className="flex items-center w-1/4 bg-black border border-gray-600 rounded-md px-3 py-2">
          <FiSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full text-sm text-gray-300 bg-black focus:outline-none"
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
          className={`px-4 py-2 bg-blue-500 text-white rounded-md text-sm ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
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
              className={`px-3 py-1 rounded-md text-sm ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-4 py-2 bg-blue-500 text-white rounded-md text-sm ${
            currentPage === 10 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === 10}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default FrequencyTable;
