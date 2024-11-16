// src/components/VehicleStates.js
import React from 'react';
import '../styles/VehicleStates.css'; // Import CSS for styling

const VehicleStates = () => {
  return (
    <div className="vehicle-states">
      <h3>Vehicle States</h3>
      <div className="vehicle-levels">
        <div className="vehicle">
          <p>2-Wheeler</p>
          <span className="status safe">Safe</span>
        </div>
        <div className="vehicle">
          <p>4-Wheeler</p>
          <span className="status warning">Warning</span>
        </div>
        <div className="vehicle">
          <p>No Vehicles Allowed 🚫</p>
          <span className="status danger">Danger</span>
        </div>
      </div>
    </div>
  );
};

export default VehicleStates;