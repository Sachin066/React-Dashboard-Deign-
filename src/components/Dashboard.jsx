import { useState } from "react";
import { Sun, Moon } from "lucide-react"; 
import Sidebar from "./Sidebar";
import Card from "./Card";
import Table from "./AgentList";
import Chart from "./Chart";
import Report from "./Report";
import AgencyList from "./AgencyList"; // ✅ New Component Added

function Dashboard() {
  const [view, setView] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        
        {/* Sidebar */}
        <Sidebar setView={setView} />

        {/* Main Content */}
        <div className="flex-1 p-6 relative">
          
          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="fixed top-4 right-4 p-2 rounded-full bg-gray-300 dark:bg-gray-700 shadow-lg"
          >
            {darkMode ? <Sun size={24} className="text-yellow-500" /> : <Moon size={24} className="text-gray-900" />}
          </button>

          {/* Show Content Based on View */}
          {view === "dashboard" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card title="Total Calls" value="1200" />
                <Card title="Active Agents" value="50" />
                <Card title="Resolved Issues" value="890" />
                <Card title="Pending Queries" value="310" />
              </div>
              <div className="mt-6">
                <Chart />
              </div>
            </>
          )}

          {view === "agents" && <Table />}
          {view === "agencies" && <AgencyList />}  {/* ✅ Agency List Added */}
          {view === "reports" && <Report />}
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
