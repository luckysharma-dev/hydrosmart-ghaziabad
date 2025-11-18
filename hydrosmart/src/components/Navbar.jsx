import React from 'react';

const Navbar = ({ setPage }) => {
  return (
    <nav className="bg-blue-700 p-4 text-white flex justify-between items-center shadow-md sticky top-0 z-[1000]">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => setPage('home')}>💧 HydroSmart</h1>
        <span className="bg-green-500 text-xs px-2 py-1 rounded font-semibold">Ghaziabad Edition</span>
      </div>
      <div className="space-x-6 font-medium hidden md:block">
        <button onClick={() => setPage('home')} className="hover:text-blue-200 transition">Calculator</button>
        <button onClick={() => setPage('market')} className="hover:text-blue-200 transition">Find Experts</button>
        <button onClick={() => setPage('map')} className="bg-white text-blue-700 px-3 py-1 rounded hover:bg-gray-100 transition">View Map 🗺️</button>
      </div>
    </nav>
  );
};

export default Navbar;