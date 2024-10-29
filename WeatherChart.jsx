import React from 'react';
//https://recharts.org/en-US/guide/getting-started
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const WeatherChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No weather data available for charting.</p>;
  }

  const chartData = data.map((item) => ({
    name: item.city_name, //X Axis
    temp: item.temp,      //Y Axis
  }));

  return (
    <div>
      <h2>Weather Temperature Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temp" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;
