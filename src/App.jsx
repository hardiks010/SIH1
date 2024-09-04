import React from 'react';
import MapComponent from './components/MapComponent';
import Testing from './components/Testing';

export default function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="h-[95vh] w-[95vw]">
        <MapComponent />
        {/* <Testing /> */}
      </div>
    </div>
  );
}
