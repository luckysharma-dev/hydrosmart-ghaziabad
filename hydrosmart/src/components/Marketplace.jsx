import React from 'react';
import { vendors } from '../data/vendors';

const Marketplace = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Trusted Contractors</h2>
        <p className="text-gray-600 mt-2">Verified professionals in Ghaziabad for installation and maintenance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vendors.map((vendor) => (
          <div key={vendor.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition duration-300 border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-800">{vendor.name}</h3>
                <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded">★ {vendor.rating}</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">📍 {vendor.location}</p>
              <div className="mt-4">
                <span className="inline-block bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium border border-blue-100">
                  {vendor.type}
                </span>
              </div>
            </div>
            
            <button className="w-full mt-6 border-2 border-blue-600 text-blue-600 font-semibold py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
              Contact Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace; 