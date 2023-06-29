// src/Weather.js

import React, { useState } from 'react';
import './Weather.css';

const Weather = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:8000/getData/${location}`);
      const data = await response.json();
      setWeatherData(data);
	  console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
  
  

   <div className="weather-app">
      <div className="clouds"></div>
	  
	  
	  <div class="form-container">
		<div class="form">
      <h1>Weather App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {weatherData && (
        <div>
          <h2>Current Weather in {weatherData.location}</h2>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Condition: {weatherData.condition}</p>
          {/* Add more weather details as needed */}
        </div>
      )}
    </div>
	</div>
	</div>
  );
};

export default Weather;
