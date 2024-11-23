import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

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
          <a href="#" className="text-gray-300 hover:text-blue-500 underline decoration-red-500">
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
          {["All wells", "Shutdown wells", "Low performing wells", "Personal well watchlist"].map(
            (watchlist, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border border hover:border-blue-500 ${index === 1 ? "bg-gray-800 border hover:border-blue-500 " : "bg-gray-800"
                  }`}
              >
                <h3 className="text-sm text-gray-400">{watchlist}</h3>
                <p className="text-xl font-bold mt-2">{index === 0 ? 34 : 10}</p>
                <p className="text-sm text-gray-500">
                  {index === 0
                    ? "All active wells in region A"
                    : "Details based on monitoring"}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Shutdown Wells Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Shutdown wells</h2>
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search by well name or operator"
            className="bg-gray-800 p-3 rounded-lg w-2/3 text-sm placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">
            Filter
          </button>
        </div>
        <div className="bg-gray-800 rounded-lg overflow-auto">
          <table className="w-full text-sm text-gray-300">
            <thead>
              <tr className="border-b border-gray-700 text-left">
                <th className="py-3 px-4">Health Score</th>
                <th className="py-3 px-4">Well Name</th>
                <th className="py-3 px-4">Operator</th>
                <th className="py-3 px-4">Uptime</th>
                <th className="py-3 px-4">Production</th>
                <th className="py-3 px-4">7-day Change</th>
              </tr>
            </thead>

            <tbody>
              {wells.map((well, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-700 hover:bg-gray-700"
                >
                  <td className="py-3 px-4">0</td>
                  <td className="py-3 px-4">{well.name}</td>
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
                  <td className="py-3 px-4 text-red-500">{well.change}</td>
                </tr>
              ))}
            </tbody>






            <tbody>
              {wells.map((well, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-700 hover:bg-gray-700"
                >
                  <td className="py-3 px-4">0</td>
                  <td className="py-3 px-4">{well.name}</td>
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
                  <td className="py-3 px-4 text-red-500">{well.change}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </section>
    </div>
  );
};

export default Controlroom;
