import React, { useEffect, useState } from 'react';
import { ref, onValue, get, child } from 'firebase/database';
import database from './firebaseConfig';
import '../styles/WaterLevelInfo.css';

const WaterLevelInfo = () => {
  const [current, setCurrent] = useState(null);
  const [highest, setHighest] = useState(null);
  const [lowest, setLowest] = useState(null);

  useEffect(() => {
    const dataRef = ref(database, 'waterLevel/dates');

    // Listen for data changes
    onValue(dataRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const latestDate = Object.keys(data).sort().pop(); // Get the latest date
        const latestTime = Object.keys(data[latestDate]).sort().pop(); // Get the latest time
        const latestData = data[latestDate][latestTime]; // Retrieve the latest data

        // Update the state with the latest data
        setCurrent(latestData.current);
        setHighest(latestData.highest);
        setLowest(latestData.lowest);
      }
    });
  }, []);

  return (
    <div className="water-level-info">
      <div className="level-card current">
        <h4>Current</h4>
        <p>{current !== null ? `${current} cm` : 'Loading...'}</p>
      </div>
      <div className="level-card highest">
        <h4>Highest</h4>
        <p>{highest !== null ? `${highest} cm` : 'Loading...'}</p>
      </div>
      <div className="level-card lowest">
        <h4>Lowest</h4>
        <p>{lowest !== null ? `${lowest} cm` : 'Loading...'}</p>
      </div>
    </div>
  );
};

export default WaterLevelInfo;