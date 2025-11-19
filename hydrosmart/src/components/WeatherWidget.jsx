import React, { useState, useEffect } from 'react';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

 
  const API_KEY = "ed70701cd28d5779412d67309e02a92f"; 
  const CITY = "Ghaziabad";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        
        if (API_KEY === "YOUR_API_KEY_HERE") {
            throw new Error("No API Key");
        }

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`
        );
        const data = await response.json();
        setWeather({
          temp: Math.round(data.main.temp),
          condition: data.weather[0].main,
          desc: data.weather[0].description,
          icon: data.weather[0].icon
        });
        setLoading(false);
      } catch (error) {
        console.log("Using Demo Weather Data");
        
        setTimeout(() => {
            setWeather({
                temp: 28,
                condition: "Rain",
                desc: "light rain",
                icon: "10d"
            });
            setLoading(false);
        }, 1000);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div className="text-white animate-pulse">Checking weather...</div>;

  
  const getTip = (condition) => {
    if (condition === "Rain" || condition === "Drizzle" || condition === "Thunderstorm") 
        return "🌧️ It's Raining! Check your filters and inlet pipes.";
    if (condition === "Clouds") 
        return "☁️ Cloudy. Rain might be coming soon.";
    return "☀️ Clear skies. Good time for tank maintenance.";
  };

  return (
    <div className="bg-blue-800/80 backdrop-blur-md border border border-blue-600 p-4 rounded-xl shadow-lg flex items-center justify-between max-w-md mx-auto mt-[-30px] mb-6 relative z-10 text-white">
      <div className="flex items-center gap-4">
        {/* Weather Icon */}
        <img 
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} 
            alt="weather" 
            className="w-16 h-16 bg-white/30 rounded-full"
        />
        <div>
          <h3 className="text-2xl font-bold">{weather.temp}°C</h3>
          <p className="capitalize text-sm opacity-90">{weather.desc} in {CITY}</p>
        </div>
      </div>
      
      <div className="text-right max-w-[150px]">
        <p className="text-xs font-semibold bg-white text-blue-600 px-2 py-1 rounded-lg inline-block mb-1">
          HydroTip
        </p>
        <p className="text-xs leading-tight">{getTip(weather.condition)}</p>
      </div>
    </div>
  );
};

export default WeatherWidget;