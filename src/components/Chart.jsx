import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: "Jan", calls: 400, agents: 24 },
  { name: "Feb", calls: 300, agents: 22 },
  { name: "Mar", calls: 500, agents: 27 },
  { name: "Apr", calls: 700, agents: 30 },
  { name: "May", calls: 600, agents: 29 },
];

function Chart() {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold dark:text-white mb-4">Call Performance</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="name" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="calls" stroke="#8884d8" strokeWidth={2} />
          <Line type="monotone" dataKey="agents" stroke="#82ca9d" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
