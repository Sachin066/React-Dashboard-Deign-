function Sidebar({ setView }) {
    return (
      <div className="w-64 bg-gray-200 dark:bg-gray-800 text-black dark:text-white h-screen p-5 shadow-lg">
        <h2 className="text-lg font-bold">Dashboard</h2>
        <ul className="mt-4">
          <li 
            className="py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700 rounded cursor-pointer"
            onClick={() => setView("dashboard")}
          >
            Home
          </li>
          <li 
            className="py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700 rounded cursor-pointer"
            onClick={() => setView("agents")}
          >
            Agents
          </li>
          <li 
            className="py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700 rounded cursor-pointer"
            onClick={() => setView("agencies")}
          >
            Agency
          </li>
          <li 
            className="py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700 rounded cursor-pointer"
            onClick={() => setView("reports")}
          >
            Reports
          </li>
        </ul>
      </div>
    );
  }
  
  export default Sidebar;
  