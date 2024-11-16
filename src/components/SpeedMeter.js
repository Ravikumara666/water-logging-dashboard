import React, { useEffect, useState } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import { ref, onValue } from 'firebase/database';
import database from './firebaseConfig'; // Ensure this is the correct Firebase config file
import '../styles/SpeedMeter.css';

const SpeedMeter = () => {
  const [currentLevel, setCurrentLevel] = useState(0);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]; // Today's date in YYYY-MM-DD format
    const dataRef = ref(database, `waterLevel/dates/${today}`);

    // Set up a listener for real-time data from Firebase
    onValue(dataRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const timestamps = Object.keys(data).sort(); // Sort timestamps
        const latestTime = timestamps[timestamps.length - 1]; // Get the latest timestamp
        const latestData = data[latestTime];

        if (latestData && typeof latestData.current === 'number') {
          console.log("Updating current level to:", latestData.current); // Debugging output
          setCurrentLevel(latestData.current); // Update state with the latest water level
        }
      } else {
        console.log("No data available for today.");
      }
    });
  }, []);

  return (
    <div className="speed-meter">
      <ReactSpeedometer
        maxValue={100}
        value={currentLevel} // Dynamic value from Firebase
        needleColor="#444"
        startColor="#3AB4F2"
        endColor="#D9376E"
        textColor="#000"
        width={300}
        height={200}
        customSegmentStops={[0, 10, 25, 40, 60, 100]} // Custom segment stops
        segmentColors={['#3AB4F2', '#FFA500', '#FFC107', '#FF5722', '#D9376E']} // Colors for each segment
        currentValueText={`Water Level: ${currentLevel} cm`}
      />
      <p className="meter-label">Water Level: {currentLevel} cm</p>
    </div>
  );
};

export default SpeedMeter;