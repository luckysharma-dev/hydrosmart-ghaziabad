import React, { useState } from 'react';

const Calculator = () => {
  const [area, setArea] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const roofArea = parseFloat(area);
    if (!roofArea) return;

    // Ghaziabad Logic: Area * Rainfall (750mm) * Runoff (0.8)
    const waterSaved = Math.round((roofArea * 0.0929) * 750 * 0.8);
    
    // Cost Logic
    let tankCost = waterSaved < 20000 ? 15000 : 30000;
    const totalCost = tankCost + 9000; // Labor + Filter

    setResult({ waterSaved, totalCost });
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg mx-auto mt-10 border-t-4 border-blue-500">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Calculate Savings</h2>
      <p className="text-gray-500 mb-6">Enter your roof area to see how much water (and money) you can save.</p>
      
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Roof Area (sq ft)</label>
        <input 
          type="number" 
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition"
          placeholder="e.g., 1000"
        />
      </div>

      <button 
        onClick={calculate}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg"
      >
        Check Potential
      </button>

      {result && (
        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100 animation-fade-in">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Annual Water Saving:</span>
            <span className="text-2xl font-bold text-blue-700">{result.waterSaved.toLocaleString()} Liters</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Est. Setup Cost:</span>
            <span className="text-xl font-bold text-gray-800">₹{result.totalCost.toLocaleString()}</span>
          </div>
          <hr className="my-3 border-blue-200"/>
          <p className="text-xs text-gray-500 text-center">Based on Ghaziabad average rainfall (750mm)</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;