import React from "react";

const Dashboard = () => {
  const wellsData = [
    { name: "GLACIER ROCK 15", operator: "Roxxon", uptime: "30%", change: "-20%" },
    { name: "WENDIGO EAST D 706WA", operator: "Roxxon", uptime: "40%", change: "-10%" },
    { name: "CREED HA 7 703JM", operator: "Roxxon", uptime: "35%", change: "-15%" },
    { name: "BLOCK HA 7 704LS", operator: "Roxxon", uptime: "50%", change: "-25%" },
    { name: "SMYRNA WEST D 3404WB", operator: "Hammer", uptime: "40%", change: "-30%" },
    { name: "HAMILTON COTT (A) 1LB", operator: "A.I.M", uptime: "50%", change: "-35%" },
    { name: "GRIDIRON N004WA", operator: "A.I.M", uptime: "55%", change: "-40%" },
    { name: "GUARDIAN 250 E 5WA", operator: "Roxxon", uptime: "30%", change: "-40%" },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      {/* Header */}
      <header className="flex justify-between items-center pb-6">
        <h1 className="text-2xl font-bold">Control Room</h1>
        <p>Last updated on October 25, 2023 at 2:31 PM</p>
      </header>

      {/* Tabs */}
      <nav className="flex space-x-6 text-sm mb-8">
        <button className="text-blue-400 border-b-2 border-blue-400">Wells</button>
        <button className="text-gray-500 hover:text-blue-400">Tickets</button>
        <button className="text-gray-500 hover:text-blue-400">Tasks</button>
      </nav>

      {/* Watchlists */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-800 p-4 rounded shadow">
          <h3 className="text-sm text-gray-400">All wells</h3>
          <p className="text-sm text-gray-500">All active wells in region A</p>
          <p className="text-4xl font-bold">34</p>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow border border-cyan-500">
          <h3 className="text-sm text-gray-400">Shutdown wells</h3>
          <p className="text-sm text-gray-500">All wells with a shutdown status or a health score of 0</p>
          <p className="text-4xl font-bold">8</p>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow">
          <h3 className="text-sm text-gray-400">Low performing wells</h3>
          <p className="text-sm text-gray-500">All wells with a health score below 70</p>
          <p className="text-4xl font-bold">10</p>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow">
          <h3 className="text-sm text-gray-400">Personal well watchlist</h3>
          <p className="text-sm text-gray-500">Wells I'm currently monitoring for optimization</p>
          <p className="text-4xl font-bold">10</p>
        </div>
      </div>

      {/* Shutdown Wells Table */}
      <div className="bg-gray-800 p-6 rounded shadow">
        <h3 className="text-lg font-bold mb-4">Shutdown wells</h3>
        <div className="flex items-center mb-4">
          <input
            type="text"
            className="bg-gray-700 text-sm text-white placeholder-gray-400 py-2 px-4 rounded w-full"
            placeholder="Search by well name or operator"
          />
          <button className="ml-4 bg-gray-700 text-sm py-2 px-4 rounded hover:bg-gray-600">
            Filter
          </button>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left pb-2">Health Score</th>
              <th className="text-left pb-2">Well name</th>
              <th className="text-left pb-2">Operator</th>
              <th className="text-left pb-2">Uptime</th>
              <th className="text-left pb-2">7 day change</th>
            </tr>
          </thead>
          <tbody>
            {wellsData.map((well, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-2">
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center bg-red-500 text-white rounded-full text-xs">
                      0
                    </div>
                  </div>
                </td>
                <td className="py-2 text-blue-400">{well.name}</td>
                <td className="py-2">{well.operator}</td>
                <td className="py-2">{well.uptime}</td>
                <td className="py-2 text-red-500">{well.change}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
