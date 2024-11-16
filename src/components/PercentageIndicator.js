// src/components/PercentageIndicator.js
import React from 'react';
import '../styles/PercentageIndicator.css';

const PercentageIndicator = () => {
  return (
    <div className="percentage-indicator">
      <div className="circle">
        <p>3%</p>
      </div>
      <p className="indicator-label">Under Pass Water Level</p>
    </div>
  );
};

export default PercentageIndicator;