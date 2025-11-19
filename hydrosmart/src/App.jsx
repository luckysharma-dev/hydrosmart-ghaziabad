import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Marketplace from './components/Marketplace';
import MapView from './components/MapView';
import WeatherWidget from './components/WeatherWidget'; // <--- IMPORT ADDED

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar setPage={setPage} />
      
      <main className="flex-grow pb-10">
        {page === 'home' && (
          <div className="animate-fade-in">
            <div className="text-center py-12 bg-gradient-to-r from-blue-600 to-cyan-500 text-white mb-8 shadow-lg pb-16">
              <h1 className="text-5xl font-bold mb-4">Save Every Drop.</h1>
              <p className="text-xl opacity-90">The smartest way to plan rainwater harvesting in Ghaziabad.</p>
            </div>

            {/* <--- WIDGET IS HERE */}
            <div className="-mt-12 relative z-10 mb-8">
               <WeatherWidget />
            </div>

            <Calculator />
          </div>
        )}

        {page === 'market' && <Marketplace />}
        
        {page === 'map' && <MapView />}
      </main>

      <footer className="bg-gray-800 text-gray-400 text-center py-6 mt-auto">
        <p>© 2025 HydroSmart Systems | Built for Smart India Hackathon</p>
      </footer>
    </div>
  );
}

export default App;