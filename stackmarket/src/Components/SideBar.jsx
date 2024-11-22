import React from "react";
import {
  FaHome,
  FaProjectDiagram,
  FaBell,
  FaClock,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="h-screen w-[4%] bg-gray-900 flex flex-col justify-between items-center py-4 sticky top-0">
      {/* Top Section */}
      <div className="space-y-8">
        {/* Logo */}
        <div className="text-orange-500 text-4xl font-bold ml-3">X</div>

        {/* Icons */}
        <div className="space-y-6 ">
          <button className="w-10 h-8 flex items-center justify-center bg-gray-700 rounded-md hover:bg-gray-600 ml-1 ">
            <FaHome className="text-white text-xl " />
          </button>
          <button className="w-12 h-7 flex items-center justify-center hover:bg-gray-600 ">
            <FaProjectDiagram className="text-white text-xl mt-0" />
          </button>
          <button className="w-12 h-7 flex items-center justify-center hover:bg-gray-600">
            <FaBell className="text-white text-xl " />
          </button>
          <button className="w-12 h-7 flex items-center justify-center hover:bg-gray-600">
            <FaClock className="text-white text-xl" />
          </button>
          <button className="w-12 h-7 flex items-center justify-center hover:bg-gray-600">
            <FaCog className="text-white text-xl" />
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-6">
        {/* User Profile */}
        <img
          src="https://via.placeholder.com/40" // Replace with your profile image URL
          alt="User Profile"
          className="w-10 h-10 rounded-full ml-1"
        />
        {/* Logout */}
        <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-600">
          <FaSignOutAlt className="text-white text-xl" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
