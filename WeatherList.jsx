import React from 'react';

const WeatherList = ({ data }) => {
  return (
    <div className="weather-list">
      {data.map((item, index) => (
        <div key={index} className="weather-card">
          <h3>{item.city_name}</h3>
          <p>Temperature: {item.temp}°C</p>
          <p>Weather: {item.weather.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherList;
