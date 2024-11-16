// src/components/CurrentWeather.js
import React from 'react';
import '../styles/CurrentWeather.css'; // Import CSS for styling

const CurrentWeather = () => {
  return (
    <div className="current-weather">
      <div className="temperature">33°</div>
      <div className="weather-icon">🌦️</div> {/* Placeholder icon */}
      <p className="weather-label">Current</p>
    </div>
  );
};

export default CurrentWeather;