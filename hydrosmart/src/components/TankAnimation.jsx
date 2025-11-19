import React from 'react';

const TankAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg border border-blue-100">
      <h3 className="text-xl font-bold text-blue-800 mb-4">Live Storage Monitor</h3>
      
      {/* Tank Container */}
      <div className="relative w-40 h-52 border-4 border-gray-400 rounded-lg bg-gray-50 overflow-hidden shadow-inner">
        
        {/* Water Level (Animated) */}
        <div className="absolute bottom-0 w-full bg-blue-500 opacity-90 animate-fill-water h-0">
           {/* Bubbles */}
           <div className="absolute w-2 h-2 bg-white rounded-full left-4 bottom-2 animate-bubble opacity-0"></div>
           <div className="absolute w-3 h-3 bg-white rounded-full left-10 bottom-8 animate-bubble delay-100 opacity-0"></div>
           <div className="absolute w-2 h-2 bg-white rounded-full left-24 bottom-4 animate-bubble delay-300 opacity-0"></div>
           <div className="absolute w-1 h-1 bg-white rounded-full left-32 bottom-10 animate-bubble delay-500 opacity-0"></div>
        </div>

        {/* Measurement Lines */}
        <div className="absolute right-0 top-10 w-3 h-0.5 bg-gray-400"></div>
        <div className="absolute right-0 top-24 w-3 h-0.5 bg-gray-400"></div>
        <div className="absolute right-0 top-38 w-3 h-0.5 bg-gray-400"></div>

        {/* Glass Glare Effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/30 to-transparent pointer-events-none"></div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-3xl font-bold text-blue-600">75%</p>
        <p className="text-xs text-gray-500">Current Capacity</p>
      </div>
      
      {/* CSS Animations defined locally */}
      <style>{`
        @keyframes fill-water {
          0% { height: 10%; }
          50% { height: 60%; }
          100% { height: 75%; }
        }
        @keyframes bubble {
          0% { bottom: 0; opacity: 0; }
          50% { opacity: 0.5; }
          100% { bottom: 100%; opacity: 0; }
        }
        .animate-fill-water { animation: fill-water 2.5s ease-out forwards; }
        .animate-bubble { animation: bubble 3s infinite; }
      `}</style>
    </div>
  );
};

export default TankAnimation;