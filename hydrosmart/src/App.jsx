import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Marketplace from './components/Marketplace';
import MapView from './components/MapView';
import WeatherWidget from './components/WeatherWidget';
import HydroBot from './components/HydroBot';
import TankAnimation from './components/TankAnimation'; 

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 relative">
      <Navbar setPage={setPage} />
      
      <main className="flex-grow pb-10">
        {page === 'home' && (
          <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="text-center py-12 bg-gradient-to-r from-blue-600 to-cyan-500 text-white mb-8 shadow-lg pb-16">
              <h1 className="text-5xl font-bold mb-4">Save Every Drop.</h1>
              <p className="text-xl opacity-90">The smartest way to plan rainwater harvesting in Ghaziabad.</p>
            </div>
            
            {/* Weather Widget */}
            <div className="-mt-12 relative z-10 mb-12">
               <WeatherWidget />
            </div>

            {/* Main Content Grid */}
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                
                {/* Left Column: Calculator */}
                <div>
                   <Calculator />
                </div>

                {/* Right Column: Tank Animation & Info */}
                <div className="flex flex-col gap-6">
                   <TankAnimation />
                   
                   {/* Simple Text Card */}
                   <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-blue-800 mb-2">Why Harvest Rain?</h3>
                      <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                        <li>Reduces water bills by up to 40%.</li>
                        <li>Improves groundwater levels in Ghaziabad.</li>
                        <li>Provides backup water during shortages.</li>
                      </ul>
                   </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {page === 'market' && <Marketplace />}
        
        {page === 'map' && <MapView />}
      </main>

      <footer className="bg-gray-800 text-gray-400 text-center py-6 mt-auto">
        <p>© 2025 HydroSmart Systems | Built for Smart India Hackathon</p>
      </footer>

      <HydroBot />
    </div>
  );
}

export default App;