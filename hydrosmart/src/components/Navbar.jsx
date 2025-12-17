import React, { useState } from 'react';
import LoginModal from './LoginModal';

const Navbar = ({ setPage }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <>
      <nav className="bg-blue-600 text-white p-4 shadow-lg sticky top-0 z-40">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setPage('home')}
          >
            <span className="text-2xl">💧</span>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight">HydroSmart</h1>
          </div>

          {/* Navigation Links */}
          <ul className="flex gap-3 md:gap-6 items-center">
            {/* Hide these text links on mobile (hidden block md:block) */}
            <li className="hidden md:block">
              <button onClick={() => setPage('home')} className="hover:text-blue-200 transition font-medium">Calculator</button>
            </li>
            <li className="hidden md:block">
              <button onClick={() => setPage('market')} className="hover:text-blue-200 transition font-medium">Find Experts</button>
            </li>

            {/* Keep Map button visible but smaller on mobile */}
            <li>
              <button
                onClick={() => setPage('map')}
                className="bg-white text-blue-600 px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-bold hover:bg-gray-100 transition shadow-md flex items-center gap-2 text-xs md:text-sm"
              >
                Map 🗺️
              </button>
            </li>

            {/* Login Button */}
            <li>
              {user ? (
                <div className="flex items-center gap-2 bg-blue-700 px-2 py-1 md:px-3 md:py-1.5 rounded-full border border-blue-400">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-xs text-blue-900 font-bold">
                    {user[0].toUpperCase()}
                  </div>
                  <span className="font-medium text-xs hidden md:inline">Hi, {user}</span>
                </div>
              ) : (
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="text-white border border-white/40 px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:bg-white/10 transition text-xs md:text-sm"
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
};

export default Navbar;