import React from 'react';

const SummaryCard = ({ weatherData }) => {
  if (!weatherData.length) return null;

  const totalCities = weatherData.length;
  const averageTemp =
    weatherData.reduce((total, item) => total + item.temp, 0) / totalCities;

  return (
    <div className="summary-card">
      <h2>Summary Statistics</h2>
      <p>Total Cities: {totalCities}</p>
      <p>Average Temperature: {averageTemp.toFixed(2)}°C</p>
    </div>
  );
};

export default SummaryCard;
