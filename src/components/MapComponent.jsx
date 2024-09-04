import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Haversine formula to calculate distance between two lat/long points
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  const R = 6371e3; // Earth's radius in meters

  const φ1 = toRadians(lat1);
  const φ2 = toRadians(lat2);
  const Δφ = toRadians(lat2 - lat1);
  const Δλ = toRadians(lon2 - lon1);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in meters
};

const MapComponent = () => {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);
  const [dangerZone, setDangerZone] = useState(null); // State to store danger zone center
  const [mapLoaded, setMapLoaded] = useState(false); // State to track if the map has loaded

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setPosition([latitude, longitude]);

            // Set the user's position as the danger zone center
            setDangerZone({
              center: [latitude, longitude],
              radius: 1000, // You can adjust the radius as needed
            });

            // Set mapLoaded to true
            setMapLoaded(true);
          },
          (error) => {
            console.error("Error getting location:", error);
            setError("Unable to retrieve your location. Please make sure location services are enabled.");
          },
          {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 0,
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
        setError("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    if (mapLoaded && position && dangerZone) {
      // Check if the user is within the danger zone
      const distance = calculateDistance(
        position[0],
        position[1],
        dangerZone.center[0],
        dangerZone.center[1]
      );

      if (distance <= dangerZone.radius) {
        console.log('You are in a danger zone!');
      }
    }
  }, [mapLoaded, position, dangerZone]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!position || !dangerZone) {
    return <div>Loading...</div>;
  }

  return (
    <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {/* User Location Marker */}
      <Marker position={position}>
        <Popup>
          You are here: <br /> Latitude: {position[0]}, <br /> Longitude: {position[1]}
        </Popup>
      </Marker>

      {/* Danger Zone Marker and Circle */}
      <Marker position={dangerZone.center}>
        <Popup>
          Danger Zone: <br /> Latitude: {dangerZone.center[0]}, <br /> Longitude: {dangerZone.center[1]}
        </Popup>
      </Marker>
      <Circle
        center={dangerZone.center}
        radius={dangerZone.radius}
        color="red"
        fillColor="red"
        fillOpacity={0.4}
      />
    </MapContainer>
  );
};

export default MapComponent;
