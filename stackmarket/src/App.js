import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import SideBar from "./Components/SideBar";
import FrequencyTable from "./Components/FrequencyTable";
import HeaderBar from "./Components/HeaderBar";
import HeaderFilter from "./Components/HeaderFilter";
import RecommendationChart from "./Components/RecommendationChart";
import TrackedFrequency from "./Components/TrackedFrequency";
import Dashboard from "./Components/Controlroom";
import LocationPage from "./Components/LocationPage";
import Home from "./Components/Home"
import John from "./Components/John";
function App() {
  return (
    <div className="flex h-screen bg-gray-900">

      <SideBar />

      {/* Main Content Section */}
      <div className="w-[95%] h-screen overflow-y-auto">
        {/* <HeaderBar /> */}
        {/* <HeaderFilter /> */}
        {/* <RecommendationChart /> */}
        {/* <FrequencyTable /> */}
        {/* <TrackedFrequency /> */}

        {/* <Dashboard/> */}

        {/* <LocationPage /> */}

        {/* <John /> */}







        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="John" element={<John />} />
          <Route path="Dashboard" element={< Dashboard/>} />
          <Route path="LocationPage" element={<LocationPage />} />
        </Routes>

        
      </div>
    </div>
  );
}

export default App;

