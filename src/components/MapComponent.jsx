import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import dangerZonesData from "../assets/dangerZonesData.js";
import L from 'leaflet';

// Custom alert component
const CustomAlert = ({ message, onClose }) => (
  <div style={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(255, 0, 0, 0.8)',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
    zIndex: 1000, // Ensure it appears above the map
  }}>
    {message}
    <button onClick={onClose} style={{ marginTop: '10px', background: 'white', color: 'black' }}>Close</button>
  </div>
);

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

const isWithinTimeFrame = (zone) => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentMonth = now.getMonth() + 1;

  const [startHour, startMinute] = zone.startTime.split(":").map(Number);
  const [endHour, endMinute] = zone.endTime.split(":").map(Number);

  // Check if current time is within the zone's active time window
  const isActiveHour = (currentHour > startHour || (currentHour === startHour && currentMinute >= startMinute)) &&
                        (currentHour < endHour || (currentHour === endHour && currentMinute <= endMinute));
  const isActiveMonth = zone.activeMonths.includes(currentMonth);

  return isActiveHour && isActiveMonth;
};

const MapComponent = () => {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);
  const [activeZones, setActiveZones] = useState([]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setPosition([latitude, longitude]);
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
    if (mapLoaded && position) {
      const nowActiveZones = dangerZonesData.filter(zone => isWithinTimeFrame(zone));

      const inDangerZone = nowActiveZones.some(zone => {
        if (!zone.center || zone.center.length < 2) {
          console.warn("Invalid zone data", zone);
          return false;
        }

        const distance = calculateDistance(
          position[0],
          position[1],
          zone.center[0],
          zone.center[1]
        );
        return distance <= zone.radius;
      });

      if (inDangerZone) {
        setAlertMessage('Stay alert! You are in a hotspot area!');
      }

      setActiveZones(nowActiveZones);
    }
  }, [mapLoaded, position]);

  const handleCircleClick = (zone) => {
    setAlertMessage(`You are near: ${zone.zoneName}. Please stay safe and be aware of your surroundings.`);
  };

  const handleCircleHover = (zone) => {
    setAlertMessage(`Hotspot area: ${zone.zoneName}. Please stay safe.`);
  };

  const handleCloseAlert = () => {
    setAlertMessage(null);
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!position || !mapLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
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

        {/* Danger Zone Markers and Circles */}
        {activeZones.map(zone => (
          zone.center && zone.center.length >= 2 ? (
            <React.Fragment key={zone.id}>
              <Marker position={zone.center}>
                <Popup>
                  Danger Zone: <br /> Latitude: {zone.center[0]}, <br /> Longitude: {zone.center[1]}<br />
                  Zone Name: {zone.zoneName}
                </Popup>
              </Marker>
              <Circle
                center={zone.center}
                radius={zone.radius}
                color="red"
                fillColor="red"
                fillOpacity={0.4}
                eventHandlers={{
                  click: () => handleCircleClick(zone),
                  mouseover: () => handleCircleHover(zone),
                  mouseout: () => handleCloseAlert(),
                }}
              />
            </React.Fragment>
          ) : null
        ))}
      </MapContainer>
      {alertMessage && <CustomAlert message={alertMessage} onClose={handleCloseAlert} />}
    </>
  );
};

export default MapComponent;
