import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { FiSearch, FiFilter } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { BiDotsVertical } from "react-icons/bi";
import { FaArrowUp } from 'react-icons/fa'
import { FaArrowDown } from 'react-icons/fa'





const Controlroom = () => {
  // Sample data for production trends
  const productionData = [
    [
      { name: "Day 1", value: 100 },
      { name: "Day 2", value: 90 },
      { name: "Day 3", value: 80 },
      { name: "Day 4", value: 70 },
      { name: "Day 5", value: 50 },
    ],
    [
      { name: "Day 1", value: 100 },
      { name: "Day 2", value: 95 },
      { name: "Day 3", value: 85 },
      { name: "Day 4", value: 80 },
      { name: "Day 5", value: 75 },
    ],
    [
      { name: "Day 1", value: 100 },
      { name: "Day 2", value: 85 },
      { name: "Day 3", value: 70 },
      { name: "Day 4", value: 60 },
      { name: "Day 5", value: 40 },
    ],
  ];

  const wells = [
    { name: "GLACIER ROCK 15", operator: "Roxxon", uptime: "30%", change: "-20%", graphIndex: 0 },
    { name: "WENDIGO EAST D 706WA", operator: "Roxxon", uptime: "40%", change: "-10%", graphIndex: 1 },
    { name: "CREED HA 7 703JM", operator: "Roxxon", uptime: "35%", change: "-15%", graphIndex: 2 },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      {/* Header Section */}
      <header className="flex justify-between items-center border-b border-gray-700 pb-4 mb-6">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-semibold">Control Room</h1>

        </div>
        <div className="text-sm text-gray-400">
          Last updated on October 25, 2023 at 2:31 PM
        </div>


      </header>

      {/* Well Watchlists Section */}
      <section className="mb-8">

        <nav className="flex space-x-6 mb-5">
          <a href="#" className="text-gray-300 hover:text-blue-500 underline  decoration-red-500">
            Wells
          </a>
          <a href="#" className="text-gray-300 hover:text-blue-500">
            Tickets
          </a>
          <a href="#" className="text-gray-300 hover:text-blue-500">
            Tasks
          </a>
        </nav>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Well Watchlists</h2>
          <button className="bg-cyan-700 px-4 py-2 rounded text-sm font-medium hover:bg-blue-700">
            + Build watchlist
          </button>
        </div>


        <div className="grid grid-cols-4 gap-4">

          <div className="p-4 rounded-lg border border-gray-700 bg-gray-800 border    
              hover:border-blue-500 bg-gray-800  grid grid-cols-[70%_30%] justify-between   w-full ">
            <h4 className="text-gray-300 ">All Wells</h4>
            <BiDotsVertical className="w-6 h-4 ml-16 " />
            <h6 className="text-gray-300 text-sm mt-2">All Active Wells in regine A</h6>
            <h1 className=" ml-12 mt-10 text-4xl font-semibold"> 34</h1>
          </div>

          <div className="p-4 rounded-lg border  border-gray-700 bg-gray-800 border hover:border-blue-500 bg-gray-800 grid grid-cols-[70%_30%]">
            <h4 className="text-gray-300">Shutdown Wells</h4>
            <BiDotsVertical className="w-6 h-4 ml-16" />
            <h6 className="text-gray-300 text-sm mt-2">All wells with a shutdown status or a health score of 0</h6>
            <h1 className="ml-16 mt-10 text-4xl font-semibold ">8</h1>
          </div>

          <div className="p-4 rounded-lg border  border border-gray-700  border hover:border-blue-500 bg-gray-800 grid grid-cols-[70%_30%]">
            <h4 className="text-gray-300">Low Performing Wells</h4>
            <BiDotsVertical className="w-6 h-4 ml-16" />
            <h6 className="text-gray-300 text-sm mt-2">All wells with a health score below 70</h6>
            <h1 className="ml-14 mt-10 text-4xl font-semibold">10</h1>
          </div>

          <div className="p-4 rounded-lg  border border-gray-700 bg-gray-800 border hover:border-blue-500 bg-gray-800 grid grid-cols-[70%_30%]">
            <h4 className="text-gray-300">Personal Well Watch List</h4>
            <BiDotsVertical className="w-6 h-4 ml-16" />
            <h6 className="text-gray-300 text-sm mt-2">Wells i'm currently monitaring for optimization</h6>
            <h1 className="ml-12 mt-10 text-4xl font-semibold">10</h1>
          </div>

        </div>
      </section >

      {/* Shutdown Wells Section */}
      < section >
        <div className="flex justify-between ">
          <h2 className="text-xl font-semibold mb-4  items-center w-1/2">Shutdown wells</h2>

          <div className="flex items-center w-1/3 bg-black border border-gray-600 rounded-md px-3 py-2 h-9 ml-80 ">
            <FiSearch className="text-gray-400 mr-2 ml-2" />
            <input
              type="text"
              placeholder="Search by well name  or operator"
              className="w-full text-sm text-gray-300 bg-black focus:outline-none  "

            />
          </div>

          <div className=" mb-4 ml-6 flex items-center justify-center text-gray-300">
            <button className="border border-gray-600 rounded-md hover:bg-gray-600  w-24 h-9 flex items-center justify-center">
              <FiFilter className="mr-2" /> Filter
            </button>
          </div>

        </div>

        <div className="bg-gray-800 rounded-lg overflow-auto">
          <table className="w-full text-sm text-gray-300">
            <thead>
              <tr className="border-b border-gray-700 text-left">
                <th></th>
                <th className="py-3 px-4 flex">Health Score
                  <FaArrowUp className="ml-2 mt-1"/>
                </th>
                <th className="py-3 px-4">Well Name</th>
                <th className="py-3 px-4">Operator</th>
                <th className="py-3 px-4">Uptime</th>
                <th className="py-3 px-4">Production</th>
                <th className="py-3 px-4">7-day Change</th>
                <th></th>
              </tr>
            </thead>

            <tbody>

              {wells.map((well, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-700 hover:bg-gray-700"
                >
                  <AiFillStar className="mt-6 ml-6 w-5 h-5" />
                  <td className="py-3 px-4"><button className="border-2 rounded-full border-red-500 w-8 h-8">0</button></td>
                  <td className="py-3 px-4 text-blue-300 font-medium text-sm">{well.name}</td>
                  <td className="py-3 px-4">{well.operator}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <span>{well.uptime}</span>
                      <div className="w-full bg-gray-600 h-2 rounded">
                        <div
                          className="bg-red-500 h-2"
                          style={{ width: well.uptime }}
                        ></div>
                      </div>
                    </div>
                  </td>


                  <td className="py-3 px-4">
                    <ResponsiveContainer width={100} height={40}>
                      <LineChart data={productionData[well.graphIndex]}>
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#8884d8"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </td>
                  <td className="py-3 px-4 text-red-500"><button className="border  border-red-500 w-16 rounded h-6">{well.change}</button></td>
                  <BiDotsVertical className="w-8 h-6" />

                </tr>
              ))}
            </tbody>






            <tbody>
              {wells.map((well, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-700 hover:bg-gray-700"
                >
                  <AiFillStar className="mt-6 ml-6 w-5 h-5" />

                  <td className="py-3 px-4"><button className="border-2 rounded-full border-red-500 w-8 h-8">0</button></td>
                  <td className="py-3 px-4 text-blue-300 font-medium text-sm">{well.name}</td>
                  <td className="py-3 px-4">{well.operator}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <span>{well.uptime}</span>
                      <div className="w-full bg-gray-600 h-2 rounded">
                        <div
                          className="bg-red-500 h-2"
                          style={{ width: well.uptime }}
                        ></div>
                      </div>
                    </div>
                  </td>


                  <td className="py-3 px-4">
                    <ResponsiveContainer width={100} height={40}>
                      <LineChart data={productionData[well.graphIndex]}>
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#8884d8"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </td>
                  <td className="py-3 px-4 text-red-500 "><button className="border  border-red-500 w-16 rounded h-6">{well.change}</button></td>
                  <BiDotsVertical className="w-8 h-6" />

                </tr>

              ))}
            </tbody>

          </table>
        </div>
      </section >
    </div >
  );
};

export default Controlroom;
