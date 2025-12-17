import React, { useState } from 'react';
import LoginModal from './LoginModal'; // Import the new modal

const Navbar = ({ setPage }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null); // Stores the username if logged in

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
            <h1 className="text-2xl font-bold tracking-tight">HydroSmart</h1>
            <span className="bg-green-400 text-blue-900 text-xs px-2 py-1 rounded-full font-bold ml-2 hidden sm:inline-block">Ghaziabad Edition</span>
          </div>

          {/* Navigation Links */}
          <ul className="flex gap-6 items-center">
            <li>
              <button
                onClick={() => setPage('home')}
                className="hover:text-blue-200 transition font-medium"
              >
                Calculator
              </button>
            </li>
            <li>
              <button
                onClick={() => setPage('market')}
                className="hover:text-blue-200 transition font-medium"
              >
                Find Experts
              </button>
            </li>

            {/* View Map Button */}
            <li>
              <button
                onClick={() => setPage('map')}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition shadow-md flex items-center gap-2"
              >
                View Map 🗺️
              </button>
            </li>

            {/* Login / User Profile Button */}
            <li>
              {user ? (
                <div className="flex items-center gap-2 bg-blue-700 px-3 py-1.5 rounded-full border border-blue-400">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-xs text-blue-900 font-bold">
                    {user[0].toUpperCase()}
                  </div>
                  <span className="font-medium text-sm">Hi, {user}</span>
                  <button
                    onClick={() => setUser(null)}
                    className="text-xs text-blue-300 hover:text-white ml-2"
                  >
                    (Logout)
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="text-white border border-white/40 px-4 py-2 rounded-lg hover:bg-white/10 transition text-sm"
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>

      {/* The Login Popup */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
};

export default Navbar;