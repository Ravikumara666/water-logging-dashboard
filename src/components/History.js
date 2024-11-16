// src/components/History.js

import React, { useState } from 'react';
import WaterLevelChart from './WaterLevelChart';
import '../styles/History.css'
// Import the WaterLevelChart component

const History = () => {
  const [activeTab, setActiveTab] = useState('History');

  // You should fetch real-time data from Firebase and pass it to the WaterLevelChart
  const firebaseData = {
    // Replace this with real data from Firebase
    // '1 day': { labels: ['12:00 AM', '1:00 AM', ...], values: [12, 15, ...] },
    // '1 week': { labels: ['Mon', 'Tue', , values:  },
    // '1 month': { labels: ['1 Nov', '2 Nov', ...], values: [14, 12, ...] },
  };

  const renderContent = () => {
    if (activeTab === 'History') {
      return <WaterLevelChart data={firebaseData} />;
    }
    return <div>Select a tab to view content</div>;
  };

  return (
    <div>
      <div className="tabs">
        <button
          className={activeTab === 'History' ? 'active' : ''}
          onClick={() => setActiveTab('History')}
        >
          History
        </button>
        {/* Add more buttons for other tabs if necessary */}
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default History;