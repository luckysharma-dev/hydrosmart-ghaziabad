import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { vendors } from '../data/vendors';

// --- FIX FOR MISSING MARKER ICONS ---
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;
// ------------------------------------

const MapView = () => {
  const ghaziabadCenter = [28.6692, 77.4538];

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Community Impact Map</h2>
        <p className="text-gray-600 mt-2">See active projects and verified experts across Ghaziabad.</p>
      </div>

      <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-2xl border-4 border-white">
        <MapContainer center={ghaziabadCenter} zoom={12} scrollWheelZoom={false} className="h-full w-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* Map Markers for Vendors */}
          {vendors.map((vendor) => (
            <Marker key={vendor.id} position={[vendor.lat, vendor.lng]}>
              <Popup>
                <div className="text-center">
                  <h3 className="font-bold text-blue-600">{vendor.name}</h3>
                  <p className="text-xs">{vendor.type}</p>
                  <p className="text-xs font-semibold">⭐ {vendor.rating}</p>
                </div>
              </Popup>
            </Marker>
          ))}

          {/* A Fake "Community Project" Marker to show impact */}
          <Marker position={[28.675, 77.460]}>
             <Popup>
                <b>Community Rain Pit #12</b><br/>
                Active since 2023<br/>
                Saved: 1.2 Lakh Liters
             </Popup>
          </Marker>

        </MapContainer>
      </div>
      
      <div className="mt-6 flex justify-center gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-2"><span className="w-3 h-3 bg-blue-500 rounded-full"></span> Verified Vendor</div>
        <div className="flex items-center gap-2"><span className="w-3 h-3 bg-blue-500 rounded-full"></span> Active Site</div>
      </div>
    </div>
  );
};

export default MapView;