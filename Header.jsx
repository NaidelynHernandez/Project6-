import React from 'react';
import myImage from './Weather.png'; 
import '../index.css';

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <img src={myImage} style={{ width: '700px', height: '550px' }} />
      <p className="Description">Stay informed about the latest weather updates with our user-friendly platform. Easily search for your favorite cities and get accurate, real-time weather data, including temperature, conditions, and forecasts. Our visually appealing layout and intuitive design make it simple for you to access the information you need to plan your day. Whether you're preparing for a sunny outing or a rainy day, Weather Dashboard has you covered!</p>
    </header>
    
  );
};

export default Header;
