function AgentList() {
  const agents = [
    {
      refNo: "AGT001",
      name: "Amit Sharma",
      contact: "+91 9876543210",
      location: "Mumbai",
      status: "Active",
    },
    {
      refNo: "AGT002",
      name: "Priya Verma",
      contact: "+91 8765432109",
      location: "Pune",
      status: "Inactive",
    },
    {
      refNo: "AGT003",
      name: "Rohit Singh",
      contact: "+91 9988776655",
      location: "Delhi",
      status: "Active",
    },
    {
      refNo: "AGT004",
      name: "Neha Kapoor",
      contact: "+91 8899776655",
      location: "Bangalore",
      status: "Active",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold dark:text-white">Agent List</h2>
      <table className="w-full mt-4 border-collapse border border-gray-300 dark:border-gray-700">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="border border-gray-300 dark:border-gray-600 p-2">Ref No</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2">Agent Name</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2">Contact No</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2">Location</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent) => (
            <tr key={agent.refNo} className="hover:bg-gray-100 dark:hover:bg-gray-600">
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">{agent.refNo}</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">{agent.name}</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">{agent.contact}</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">{agent.location}</td>
              <td 
                className={`border border-gray-300 dark:border-gray-600 p-2 font-bold ${
                  agent.status === "Active" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                }`}
              >
                {agent.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AgentList;
