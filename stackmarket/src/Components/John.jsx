import React from "react";
import { FaExclamationTriangle, FaArrowRight, FaArrowUp } from 'react-icons/fa'
import { BiDotsVertical } from "react-icons/bi";
import { FaClock } from "react-icons/fa";


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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-gray-300">

        {/* Change Point Detection Summary */}
        <div className="bg-gray-800 p-10 rounded-lg shadow-md text-gray-300">
          <div className="flex">
            <div>
              <h3 className="text-xl font-semibold mb-4">Change point detection summary</h3>
            </div>
            <div>
              <BiDotsVertical className="ml-20 text-gray-300   w-6 h-8" />
            </div>
          </div>
          <hr />

          <ul className="space-y-2 ">

            <li className=" p-2 flex p-6">

              <div >
                <FaExclamationTriangle className="text-red-500 mt-4 w-12 h-6" />
              </div>
              <div className="ml-6">
                <p className="text-lg ">Gas interference</p>
                <span className=""><span className="text-2xl font-bold">4</span> potential well issue(s)</span>
              </div>
              <div >
                <FaArrowRight className="ml-28 mt-4" />
              </div>

            </li>
            <hr />

            <li className=" p-2 flex p-6">

              <div>
                <FaExclamationTriangle className="text-red-500 mt-4 w-12 h-6" />
              </div>
              <div className="ml-6">
                <p className="text-lg">Possible hole tubing</p>
                <span className=""><span className="text-2xl font-bold">3</span> potential well issue(s)</span>
              </div>
              <div>
                <FaArrowRight className="ml-28 mt-4" />
              </div>

            </li>

            <hr />

            <li className=" p-2 flex p-6">

              <div>
                <FaExclamationTriangle className="text-red-500 mt-4 w-12 h-6" />
              </div>
              <div className="ml-6">
                <p className="text-lg">Worn out pump</p>
                <span className=""><span className="text-2xl font-bold">5</span> potential well issue(s)</span>
              </div>
              <div >
                <FaArrowRight className="ml-28 mt-4" />
              </div>

            </li>

            <hr />

            <li className=" p-2 flex p-6">

              <div>
                <FaExclamationTriangle className="text-red-500 mt-4 w-12 h-6" />
              </div>
              <div className="ml-6">
                <p className="text-lg">Possible broken shaft</p>
                <span className=""> <span className="text-2xl font-bold">0</span> potential well issue(s)</span>
              </div>
              <div>
                <FaArrowRight className="ml-28 mt-4" />
              </div>

            </li>
          </ul>

          <hr />

          <button className="mt-20 bg-blue-500 px-4 py-2 rounded-md w-full">View all</button>
        </div>

        {/* Production Optimization */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">

          <div className="flex mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">Production optimization</h3>
            </div>
            <div>
              <BiDotsVertical className="ml-60 text-gray-300   w-6 h-8" />

            </div>
          </div>
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

          <div className="space-y-2 ">
            <div>
              <p className="p-1">Speed change </p>
              <span><span className="text-2xl font-bold p-1">20,859</span> Bopd Increase</span>
              <p className="p-2">From 304 wells</p>
            </div>
            <hr />
            <div >
              <p className="p-1">Pump change</p>
              <span><span className="text-2xl font-bold p-1">16,978</span> Bopd Increase</span>
              <p className="p-2">From 427 wells</p>

            </div>
            <hr />
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <button className="mt-16 bg-blue-500 px-4 py-2 rounded-md w-full">View all recommendations</button>
            </div>
            <div>
              <button className="mt-16 border border-gray-500 px-4 py-2 rounded-md w-full">View all recommendations</button>
            </div>
          </div>
        </div>

        {/* Deferred Production */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">

          <div className="flex">
            <div>
              <h3 className="text-lg font-semibold mb-4">Deferred production</h3>

            </div>
            <div>
              <BiDotsVertical className="ml-60 text-gray-300   w-6 h-8" />

            </div>
          </div>
          <hr />



          <p className="mt-4">Cumulative deferred production</p>
          <span className=""><span className="text-2xl font-bold">18,297</span> bbl</span>
          <p className="mt-6 mb-2">Top Contributors</p>
          <hr />
          <ul className="space-y-2 ">
            <li className="text-blue-300 font-semibold mt-6">GLACIER ROCK 15  </li>
            <p>Deffered Production</p>

            <div className="flex">
              <div>
                <div className="w-60 h-4 mt-2 bg-red-500 rounded-full"></div>
              </div>
              <div>
                <p><span className="text-xl ml-4">11,297</span> bbl</p>
              </div>
            </div>

            <div className="flex ">
              <div className="mb-4 ">
                <button className="border border-red-500 rounded text-red-500 h-7 w-24 ">Shutdown</button>
              </div>

              <div className="ml-12 ">
                <FaClock className="mt-2" />
              </div>
            </div>
            <hr />
            <li className="text-blue-300 font-semibold ">TITAN RIDGE 4</li>
            <p>Deffered Production </p>


            <div className="flex">
              <div>
                <div className="w-40 h-4 mt-2 bg-red-500 rounded-full"></div>
              </div>
              <div>
                <p><span className="text-xl ml-4">6,200</span> bbl</p>
              </div>
            </div>

            <div className="flex ">
              <div className="mb-4">
                <button className="border border-red-500 rounded text-red-500 h-7 w-24 ">Shutdown</button>
              </div>

              <div className="ml-12 ">
                <FaClock className="mt-2" />
              </div>
            </div>
            <hr />
            <li className="text-blue-300 font-semibold">HORIZON ECHO 7</li>
            <p>Deffered Production </p>

            <div className="flex">
              <div>
                <div className="w-8 h-4 mt-2 bg-red-500 rounded-full"></div>
              </div>
              <div>
                <p><span className="text-xl ml-4">800</span> bbl</p>
              </div>
            </div>

            <div className="flex ">
              <div className="mb-4">
                <button className="border border-red-500 rounded text-red-500 h-7 w-24 ">Shutdown</button>
              </div>

              <div className="ml-12 ">
                <FaClock className="mt-2" />
              </div>
            </div>

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
          <ul className="space-y-2 flex ">
            <div>
              <button className="border border-gray-500 mt-2 rounded p-2 w-52  flex">
                <h1 className="text-yellow-400">Oil - <span className="">43,500 bbl/day</span></h1>
                <FaArrowUp className="ml-6 mt-1 text-white-400" />
              </button>
            </div>
            <div>
              <button className="border border-gray-500 rounded p-2 ml-52 w-52  flex">
                <h1 className="text-green-400"> Gas - <span className="">3,000 mcf/day</span></h1>
                <FaArrowUp className="ml-6 mt-1 text-white-400" />

              </button>

            </div>
            <div>
              <button className="border border-gray-500 rounded p-2 ml-52 w-52  flex">
                <h1 className="text-red-400">CO2e - <span className="">3,100 kg/day</span></h1>
                <FaArrowUp className="ml-6 mt-1 text-white-400" />

              </button>

            </div>

            <h1 className="font-bold text-lg  ml-36 mt-2">Emission events</h1>

            <BiDotsVertical className="ml-36  text-gray-300   w-6 h-8" />

          </ul>
        </div>
      </div>
    </div>
  );
};

export default John;
