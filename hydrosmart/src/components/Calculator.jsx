import React, { useState } from 'react';

const Calculator = () => {
  const [area, setArea] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const roofArea = parseFloat(area);
    if (!roofArea) return;

    // 1. Calculate Annual Water Potential (Liters)
    // Ghaziabad Avg Rainfall = 750mm | Runoff Coefficient = 0.8
    const waterSaved = Math.round((roofArea * 0.0929) * 750 * 0.8);
    
    // 2. Dynamic Cost Calculation (Realism Upgrade)
    // Base Setup (Filter + Labor) = ₹10,000
    // Variable Cost (Tank Capacity) = Approx ₹0.50 per liter of annual potential
    let estimatedCost = 10000 + (waterSaved * 0.5);

    // Round to nearest ₹100 for a cleaner look
    estimatedCost = Math.round(estimatedCost / 100) * 100;

    setResult({ waterSaved, totalCost: estimatedCost });
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg mx-auto border-t-4 border-blue-500">
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
        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Annual Water Saving:</span>
            <span className="text-2xl font-bold text-blue-700">{result.waterSaved.toLocaleString()} Liters</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Est. Setup Cost:</span>
            <span className="text-xl font-bold text-gray-800">₹{result.totalCost.toLocaleString()}</span>
          </div>
          <hr className="my-3 border-blue-200"/>
          <p className="text-xs text-gray-500 text-center">Includes Tank, Filter & Installation estimates.</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;