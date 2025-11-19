import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: 'Year 0', savings: -30000 },
  { year: 'Year 1', savings: -22000 },
  { year: 'Year 2', savings: -14000 },
  { year: 'Year 3', savings: -6000 },
  { year: 'Year 4', savings: 2000 },
  { year: 'Year 5', savings: 10000 },
];

const ROIGraph = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mt-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">💰 Financial Savings Over 5 Years</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip contentStyle={{ backgroundColor: '#f3f4f6', borderRadius: '8px' }} formatter={(value) => [`₹${value}`, 'Net Savings']} />
            <Line type="monotone" dataKey="savings" stroke="#2563eb" strokeWidth={3} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ROIGraph;