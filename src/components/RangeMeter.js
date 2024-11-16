// src/components/RangeMeter.js
import React from 'react';
import '../styles/RangeMeter.css';

const RangeMeter = () => {
  return (
    <div className="range-meter">
      <h3>Water Level Range</h3>
      <input type="range" min="0" max="100" value="20" className="slider" />
      <div className="range-values">
        <span>0 cm</span>
        <span>50 cm</span>
        <span>100 cm</span>
      </div>
    </div>
  );
};

export default RangeMeter;