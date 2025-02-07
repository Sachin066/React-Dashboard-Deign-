function Report() {
    const reports = [
      { date: "2025-02-05", calls: 120, resolved: 100, pending: 20 },
      { date: "2025-02-06", calls: 150, resolved: 130, pending: 20 },
      { date: "2025-02-07", calls: 180, resolved: 160, pending: 20 },
    ];
  
    return (
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Daily Reports</h3>
        <table className="w-full border border-gray-300 dark:border-gray-700 rounded-lg">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white">
              <th className="p-3 border border-gray-300 dark:border-gray-700 text-left">Date</th>
              <th className="p-3 border border-gray-300 dark:border-gray-700 text-left">Total Calls</th>
              <th className="p-3 border border-gray-300 dark:border-gray-700 text-left">Resolved Cases</th>
              <th className="p-3 border border-gray-300 dark:border-gray-700 text-left">Pending Cases</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index} className="border border-gray-300 dark:border-gray-700 dark:text-gray-200">
                <td className="p-3 border border-gray-300 dark:border-gray-700">{report.date}</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">{report.calls}</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">{report.resolved}</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">{report.pending}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Report;
  