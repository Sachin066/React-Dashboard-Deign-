function AgencyList() {
    const agencies = [
      {
        id: 1,
        name: "XYZ Pvt Ltd",
        manager: "Rahul Sharma",
        contact: "+91 9876543210",
        address: "101, Business Tower, Mumbai",
        status: "Active",
      },
      {
        id: 2,
        name: "ABC Solutions",
        manager: "Priya Verma",
        contact: "+91 8765432109",
        address: "502, IT Park, Pune",
        status: "Inactive",
      },
      {
        id: 3,
        name: "LMN Corp",
        manager: "Amit Singh",
        contact: "+91 9988776655",
        address: "22, Corporate Hub, Delhi",
        status: "Active",
      },
      {
        id: 4,
        name: "PQR Enterprises",
        manager: "Neha Kapoor",
        contact: "+91 8899776655",
        address: "44, Trade Center, Bangalore",
        status: "Active",
      },
    ];
  
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold dark:text-white">Agency List</h2>
        <table className="w-full mt-4 border-collapse border border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="border border-gray-300 dark:border-gray-600 p-2">ID</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Agency Name</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Manager Name</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Contact No</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Address</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {agencies.map((agency) => (
              <tr key={agency.id} className="hover:bg-gray-100 dark:hover:bg-gray-600">
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">{agency.id}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{agency.name}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{agency.manager}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{agency.contact}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{agency.address}</td>
                <td 
                  className={`border border-gray-300 dark:border-gray-600 p-2 font-bold ${
                    agency.status === "Active" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {agency.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default AgencyList;
  