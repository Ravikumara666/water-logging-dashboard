import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import database from './firebaseConfig';
import '../styles/WaterLevelStatus.css';

const WaterLevelStatus = () => {
  const [waterLevel, setWaterLevel] = useState(0);

  // Fetch the current water level data from Firebase
  useEffect(() => {
    const dataRef = ref(database, 'waterlevel/dates');
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const today = new Date().toISOString().split('T')[0];
        const latestData = data[today];
        if (latestData) {
          const latestTime = Object.keys(latestData).pop();
          setWaterLevel(latestData[latestTime]?.current || 0);
        }
      }
    });
  }, []);

  // Determine the active status and colors based on the water level
  let status = 'Safe';
  let activeClass = 'Safe'; // Default status is Safe

  if (waterLevel >= 50) {
    status = 'Danger';
    activeClass = 'Danger';
  } else if (waterLevel >= 35) {
    status = 'Critical';
    activeClass = 'Critical';
  } else if (waterLevel >= 20) {
    status = 'Warning';
    activeClass = 'Warning';
  }

  return (
    <div className="water-level-status">
      <h3>Water Level Status</h3>
      <div className="status-buttons">
        <button
          className={`status-button ${activeClass === 'Safe' ? 'active Safe' : ''}`}
        >
          Safe
        </button>
        <button
          className={`status-button ${activeClass === 'Warning' ? 'active Warning' : ''}`}
        >
          Warning
        </button>
        <button
          className={`status-button ${activeClass === 'Critical' ? 'active Critical' : ''}`}
        >
          Critical
        </button>
        <button
          className={`status-button ${activeClass === 'Danger' ? 'active Danger' : ''}`}
        >
          Danger
        </button>
      </div>
    </div>
  );
};

export default WaterLevelStatus;