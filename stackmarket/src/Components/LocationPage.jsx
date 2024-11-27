import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom Icon for Markers
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Replace with desired icon
  iconSize: [30, 30],
  iconAnchor: [15, 15],
});

// Alert Card Component
const AlertCard = ({ title, timeSent, alertThreshold, source }) => (
  <div className="p-4 border border-blue-500 rounded-md mb-4 bg-gray-800 text-white">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-lg font-semibold">{title}</h3>
      <span className="px-2 py-1 bg-red-500 text-xs rounded-md">Active alert</span>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <p className="text-sm text-gray-400">Alert sent</p>
        <p className="text-sm bg-gray-700 p-2 rounded-md">{timeSent}</p>
      </div>
      <div>
        <p className="text-sm text-gray-400">Alerting source</p>
        <p className="text-sm bg-gray-700 p-2 rounded-md">{source}</p>
      </div>
      <div>
        <p className="text-sm text-gray-400">Alert Threshold</p>
        <p className="text-sm bg-gray-700 p-2 rounded-md">{alertThreshold}</p>
      </div>
    </div>
  </div>
);

// Sample Alert Data
const alerts = [
  {
    title: "GLACIER ROCK 15",
    timeSent: "9:45 pm CT, 6/26/2023",
    source: "[Value]",
    alertThreshold: "[Num] kg/hr @ 4hr CH4",
  },
  {
    title: "TITAN RIDGE 4",
    timeSent: "8:30 pm CT, 6/24/2023",
    source: "[Value]",
    alertThreshold: "[Num] kg/hr @ 4hr CH4",
  },
  {
    title: "HORIZON ECHO 7",
    timeSent: "7:15 pm CT, 6/23/2023",
    source: "[Value]",
    alertThreshold: "[Num] kg/hr @ 4hr CH4",
  },
  {
    title: "SUMMIT PEAK 11",
    timeSent: "7:15 pm CT, 6/23/2023",
    source: "[Value]",
    alertThreshold: "[Num] kg/hr @ 4hr CH4",
  },
];

// Locations Data for Markers on the Map
const locations = [
  { id: 1, name: "Well 1", lat: 31.845, lng: -102.368 },
  { id: 2, name: "Well 2", lat: 31.843, lng: -102.369 },
  { id: 3, name: "Well 3", lat: 31.847, lng: -102.362 },
  { id: 4, name: "Well 4", lat: 31.842, lng: -102.364 },
  { id: 5, name: "Well 5", lat: 31.840, lng: -102.370 },
];

const LocationPage = () => {
  const [activeTab, setActiveTab] = useState("emission");

  return (
    <div>
      {/* Header Section */}
      <div className="bg-gray-900 text-white flex items-center justify-between p-3">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="flex items-center px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700">
              <span>Operations overview</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700">
            <span>10/25/2024 5:00 PM - 10/26/2024 5:00 PM</span>
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700">
            <span>Hierarchy / Sites</span>
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700">
            <span>Status</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search customers, sites or issues"
              className="px-4 py-2 bg-gray-800 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar for Alerts */}
        <div className="p-4 bg-gray-900 min-h-screen text-white w-1/3">
          {/* Tabs for Emission and Asset Alerts */}
          <div className="flex space-x-4 mb-4 border-b border-gray-700">
            <button
              onClick={() => setActiveTab("emission")}
              className={`px-4 py-2 ${
                activeTab === "emission" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-400"
              }`}
            >
              Emission alerts
            </button>
            <button
              onClick={() => setActiveTab("asset")}
              className={`px-4 py-2 ${
                activeTab === "asset" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-400"
              }`}
            >
              Asset alerts
            </button>
          </div>

          {/* Display Emission Alerts */}
          {activeTab === "emission" && (
            <div>
              {alerts.map((alert, index) => (
                <AlertCard
                  key={index}
                  title={alert.title}
                  timeSent={alert.timeSent}
                  source={alert.source}
                  alertThreshold={alert.alertThreshold}
                />
              ))}
            </div>
          )}

          {/* Display Asset Alerts (Placeholder) */}
          {activeTab === "asset" && <div>No asset alerts available.</div>}
        </div>

        {/* Right Section for Map */}
        <div className="h-screen w-2/3">
          <MapContainer
            center={[31.845, -102.368]}
            zoom={12}
            style={{ height: "100%", width: "100%" }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {locations.map((location) => (
              <Marker
                key={location.id}
                position={[location.lat, location.lng]}
                icon={customIcon}
              >
                <Popup>
                  <span>{location.name}</span>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          {/* Right Sidebar Controls */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2">
            <button className="p-2 bg-blue-500 text-white rounded shadow">
              Tool 1
            </button>
            <button className="p-2 bg-green-500 text-white rounded shadow">
              Tool 2
            </button>
            <button className="p-2 bg-gray-500 text-white rounded shadow">
              Tool 3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;