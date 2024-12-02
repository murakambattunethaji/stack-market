import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const productionData = [
  { date: "Jun 09", potential: 140, current: 130 },
  { date: "Jun 10", potential: 150, current: 140 },
  { date: "Jun 11", potential: 160, current: 150 },
  { date: "Jun 12", potential: 170, current: 160 },
  { date: "Jun 13", potential: 180, current: 170 },
  { date: "Jun 14", potential: 190, current: 180 },
  { date: "Jun 15", potential: 200, current: 190 },
];

const sustainableData = [
  { metric: "Q1", oil: 40000, gas: 3000, co2: 2900 },
  { metric: "Q2", oil: 42000, gas: 3200, co2: 3100 },
  { metric: "Q3", oil: 43500, gas: 3400, co2: 3300 },
  { metric: "Q4", oil: 45000, gas: 3600, co2: 3500 },
];

const John = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div className=" text-4xl">Conne<span className="text-orange-400">x</span>ia</div>
        <div className="flex items-center space-x-4">

          <div className="flex space-x-4">
            <span>🔍 Search</span>
            <span>🔔Notification</span>
            <span>👤 My Profile</span>
          </div>
        </div>
      </header>

      <div className="p-6 grid grid-cols-6 mb-4">
        <span className=" grid col-span-2 text-2xl">
          <div className="flex">
            <img
              src="https://img.freepik.com/free-vector/young-prince-royal-attire_1308-176144.jpg?t=st=1733117070~exp=1733120670~hmac=19d53e3c0d4ca8dbfd52c20f66ea2833291cc19fdd1d227de083fdd558a9e8d9&w=740"
              alt="User Profile"
              className="w-10 h-10 rounded-full ml-1 flex"
            />
            <div className="ml-2 mt-1">Hello, Jason</div>
          </div>
          
        </span>
        <button className="bg-cyan-600 px-4 py-2 w-70 ml-">My Insights</button>
        <button className="bg-gray-700 px-4 py-2 w-50">My Apps</button>
        <button></button>
        <button className="border border-gray-500 w-10 h-9 rounded text-xl ml-56 text-gray-300 mt-1 ">+</button>

      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Change Point Detection Summary */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Change point detection summary</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Gas interference</span>
              <span className="text-red-500">4 potential well issue(s)</span>
            </li>
            <li className="flex justify-between">
              <span>Possible hole in tubing</span>
              <span className="text-red-500">3 potential well issue(s)</span>
            </li>
            <li className="flex justify-between">
              <span>Worn out pump</span>
              <span className="text-red-500">5 potential well issue(s)</span>
            </li>
            <li className="flex justify-between">
              <span>Possible broken shaft</span>
              <span className="text-green-500">0 potential well issue(s)</span>
            </li>
          </ul>
          <button className="mt-4 bg-blue-500 px-4 py-2 rounded-md w-full">View all</button>
        </div>

        {/* Production Optimization */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Production optimization</h3>
          <div className="h-60 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={productionData}>
                <CartesianGrid stroke="#444" />
                <XAxis dataKey="date" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="potential" stroke="#82ca9d" />
                <Line type="monotone" dataKey="current" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
            <p>Speed change: <span className="text-green-500">20,859 Bopd Increase</span></p>
            <p>Pump change: <span className="text-green-500">16,978 Bopd Increase</span></p>
          </div>
          <button className="mt-4 bg-blue-500 px-4 py-2 rounded-md w-full">View all recommendations</button>
        </div>

        {/* Deferred Production */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Deferred production</h3>
          <p className="mb-4">Cumulative deferred production: <span className="text-red-500">18,297 bbl</span></p>
          <ul className="space-y-2">
            <li>GLACIER ROCK 15 - <span className="text-red-500">11,297 bbl</span></li>
            <li>TITAN RIDGE 4 - <span className="text-red-500">6,200 bbl</span></li>
            <li>HORIZON ECHO 7 - <span className="text-red-500">800 bbl</span></li>
          </ul>
          <button className="mt-4 bg-blue-500 px-4 py-2 rounded-md w-full">View all</button>
        </div>

        {/* Sustainable Production */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md col-span-1 lg:col-span-3">
          <h3 className="text-lg font-semibold mb-4">Sustainable production</h3>
          <div className="h-60 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sustainableData}>
                <CartesianGrid stroke="#444" />
                <XAxis dataKey="metric" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="oil" stroke="#facc15" />
                <Line type="monotone" dataKey="gas" stroke="#82ca9d" />
                <Line type="monotone" dataKey="co2" stroke="#f87171" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <ul className="space-y-2">
            <li>Oil: <span className="text-green-500">43,500 bbl/day</span></li>
            <li>Gas: <span className="text-green-500">3,000 mcf/day</span></li>
            <li>CO2e: <span className="text-green-500">3,100 kg/day</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default John;
