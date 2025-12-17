import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Marketplace from './components/Marketplace';
import MapView from './components/MapView';
import WeatherWidget from './components/WeatherWidget';
import HydroBot from './components/HydroBot';
import TankAnimation from './components/TankAnimation';
import PledgeCard from './components/PledgeCard';
import ROIGraph from './components/ROIGraph';
import KnowledgeHub from './components/KnowledgeHub';

function App() {
  const [page, setPage] = useState('home');

  return (
    // CHANGED: Removed background image, added Cream White color (bg-[#fafaf9])
    <div className="min-h-screen flex flex-col relative font-sans bg-[#fafaf9] text-gray-800">

      <Navbar setPage={setPage} />

      <main className="flex-grow">
        {page === 'home' && (
          <div className="animate-fade-in">
            {/* Hero Section - Solid Gradient */}
            <div className="text-center py-16 bg-gradient-to-r from-blue-700 to-cyan-600 text-white mb-8 shadow-xl pb-20 rounded-b-[3rem]">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Save Every Drop.</h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">The smartest way to plan rainwater harvesting in Ghaziabad. Join the movement today.</p>
            </div>

            {/* Weather Widget */}
            <div className="-mt-16 relative z-10 mb-12 px-4">
              <WeatherWidget />
            </div>

            {/* Pledge Card */}
            <div className="px-4 mb-12">
              <PledgeCard />
            </div>

            {/* Main Tools Grid */}
            <div className="container mx-auto px-4 max-w-6xl mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <Calculator />
                  <ROIGraph />
                </div>
                <div className="flex flex-col gap-6">
                  <TankAnimation />
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
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

            {/* Knowledge Hub Section */}
            <KnowledgeHub />

          </div>
        )}

        {page === 'market' && <Marketplace />}
        {page === 'map' && <MapView />}
      </main>

      {/* RICH FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-auto border-t border-gray-800">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold text-lg mb-4">HydroSmart 💧</h4>
            <p className="text-sm opacity-70">Empowering Ghaziabad to save water, one roof at a time.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li className="hover:text-white cursor-pointer" onClick={() => setPage('home')}>Calculator</li>
              <li className="hover:text-white cursor-pointer" onClick={() => setPage('market')}>Find Experts</li>
              <li className="hover:text-white cursor-pointer" onClick={() => setPage('map')}>Live Map</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="text-sm space-y-2">
              <li className="hover:text-white cursor-pointer">Govt. Subsidies</li>
              <li className="hover:text-white cursor-pointer">Maintenance Guide</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <p className="text-sm">support@hydrosmart.in</p>
            <p className="text-sm">+91 98765 43210</p>
            <div className="flex gap-4 mt-4">
              <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer">𝕏</span>
              <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 cursor-pointer">📸</span>
            </div>
          </div>
        </div>
        <div className="text-center text-xs opacity-50 border-t border-gray-800 pt-8">
          © 2025 HydroSmart Systems | Built for 2nd Year Mini Project
        </div>
      </footer>

      <HydroBot />
    </div>
  );
}

export default App;