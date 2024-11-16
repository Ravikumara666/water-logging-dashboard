// src/components/Header.js
import React, { useState } from 'react';
import '../styles/Header.css';

// Import your main dashboard components
import SpeedMeter from './SpeedMeter';
import WaterLevelInfo from './WaterLevelInfo';
import WaterLevelStatus from './WaterLevelStatus';
import VehicleStates from './VehicleStates';
import PercentageIndicator from './PercentageIndicator';
import RangeMeter from './RangeMeter';
import HeadDisplay from './HeadDisplay';
import History from './History';

const Header = () => {
  const [activeSection, setActiveSection] = useState('Dashboard');

  // Temporary placeholder values for testing
  const currentLevel = 50; // Replace with actual state or prop
  const highestLevel = 80; // Replace with actual state or prop
  const lowestLevel = 20; // Replace with actual state or prop

  const renderSection = () => {
    switch (activeSection) {
      case 'Dashboard':
        return (
            <>
             <HeadDisplay/>
          <main className="dashboard">
            
            <SpeedMeter />
            <WaterLevelInfo current={currentLevel} highest={highestLevel} lowest={lowestLevel} />
            <WaterLevelStatus />
            {/* <SafeWaterLevels /> */}
            <VehicleStates />
            <PercentageIndicator />
            <RangeMeter />
          </main>
          </>
        );
      case 'History':
        return (
          <History/>
        );
      case 'Users':
        return (
          <div className="users-content">
            <h2>Users Section</h2>
            <p>This section will show user-related data or components.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
       
      <header className="header">
        <nav>
          <ul>
            <li
              className={`nav-item ${activeSection === 'Dashboard' ? 'active' : ''}`}
              onClick={() => setActiveSection('Dashboard')}
            >
              Dashboard
            </li>
            <li
              className={`nav-item ${activeSection === 'History' ? 'active' : ''}`}
              onClick={() => setActiveSection('History')}
            >
              History
            </li>
            <li
              className={`nav-item ${activeSection === 'Users' ? 'active' : ''}`}
              onClick={() => setActiveSection('Users')}
            >
              Users
            </li>
          </ul>
        </nav>
      </header>
      
      <main>{renderSection()}</main>
    </div>
  );
};

export default Header;