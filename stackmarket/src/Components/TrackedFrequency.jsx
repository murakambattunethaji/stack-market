import React, { useState } from "react";
import { FaTrash, FaSearch } from "react-icons/fa";

const TrackedFrequency = () => {
  const rowsPerPage = 11; // Number of rows per page
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Sample Data (repeat or adjust as needed for testing)
  const data = Array.from({ length: 230 }, (_, i) => ({
    status: "Actively tracked",
    wellName: `WELL ${i + 1}`,
    runLifeDays: 300 + i,
    runType: "Before Current",
    dates: "06-Aug-2024 to 13-Aug-2024",
    freq: "45.0, 49 (Target 49)",
    oil: "45.0, 49 (Target 49)",
    cumulative: 100 + i,
    bFactor: 1.2,
    del: 0.79081,
    dnom: 0.79081,
    curveStatus: "Calculation completed",
  }));

  // Filter and paginate data
  const filteredData = data.filter((row) =>
    row.wellName.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const displayedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Handle Pagination
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Determine which page numbers to show (limit to 10)
  const getPageNumbers = () => {
    const startPage = Math.max(currentPage - 5, 1);
    const endPage = Math.min(startPage + 9, totalPages);
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-1">
        <div>
          <div className="text-white font-semibold">
            Tracked frequency changes (230)
          </div>
          {/* Flex row for statuses */}
          <div className="flex space-x-4 mt-2 text-sm">
            <div className="text-blue-500">● Awaiting test</div>
            <div className="text-green-500">● Actively tracked</div>
            <div className="text-red-500">● No longer tracked</div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-end items-center mb-1">
        <div className="relative">
          <FaSearch className="absolute left-3 top-2 text-gray-400 "/>
          <input

            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="  pl-10 pr-4 h-9 border border-gray-600 rounded-md focus:outline-none w-80 bg-black"

          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-auto bg-gray-800 rounded-lg">
        <table className="min-w-full text-sm text-white">
          <thead className="bg-gray-700 text-gray-300">
            <tr>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Well name</th>
              <th className="py-2 px-4 text-left">Run life days</th>
              <th className="py-2 px-4 text-left">Dates</th>
              <th className="py-2 px-4 text-left">Freq (Hz)</th>
              <th className="py-2 px-4 text-left">Oil (stb/d)</th>
              <th className="py-2 px-4 text-left">Cumulative (stb/d)</th>
              <th className="py-2 px-4 text-left">BFactor</th>
              <th className="py-2 px-4 text-left">Del</th>
              <th className="py-2 px-4 text-left">Dnom</th>
              <th className="py-2 px-4 text-left">Curve Status</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((row, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-2 px-4">
                  <span
                    className={`inline-block w-3 h-3 rounded-full ${
                      row.status === "Actively tracked"
                        ? "bg-green-500"
                        : "bg-gray-400"
                    }`}
                  ></span>
                </td>
                <td className="py-2 px-4">{row.wellName}</td>
                <td className="py-2 px-4">{row.runLifeDays}</td>
                <td className="py-2 px-4">{row.dates}</td>
                <td className="py-2 px-4">{row.freq}</td>
                <td className="py-2 px-4">{row.oil}</td>
                <td className="py-2 px-4">{row.cumulative}</td>
                <td className="py-2 px-4">{row.bFactor}</td>
                <td className="py-2 px-4">{row.del}</td>
                <td className="py-2 px-4">{row.dnom}</td>
                <td className="py-2 px-4">{row.curveStatus}</td>
                <td className="py-2 px-4 text-center">
                  <button className=" hover:underline">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-white">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 border w-40 h-10 rounded-md ${
            currentPage === 1 ? " text-gray-500" : " hover:bg-gray-600"
          }`}
        >
          Previous
        </button>
        <div className="flex space-x-2">
          {getPageNumbers().map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded-full ${
                currentPage === page
                  ?"bg-gray-500 text-white  "
                  : "bg-gray-900 text-gray-300 hover:bg-gray-600 "
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border w-40 h-10 rounded-md ${
            currentPage === totalPages ? " text-gray-500" : " hover:bg-gray-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TrackedFrequency;
