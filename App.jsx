import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'// REACT ROUTER!
import { Link } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SearchPage from './components/SearchPage';
import SummaryCard from './components/SummaryCard';
import WeatherList from './components/WeatherList';
import CityDropdown from './components/CityDropdown'; // Custom component for the city dropdown

const API_KEY = 'ac0b5cd857d84874be343d9c35b039b4';

const cities = [
  { name: 'Raleigh', lat: 35.7796, lon: -78.6382 },
  { name: 'New York', lat: 40.7128, lon: -74.0060 },
  { name: 'Los Angeles', lat: 34.0522, lon: -118.2437 },
  // Add more cities if you want
];

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherbit.io/v2.0/current?lat=${selectedCity.lat}&lon=${selectedCity.lon}&key=${API_KEY}`
        );
        const data = await response.json();
        setWeatherData(data.data);
        setFilteredData(data.data); // Initialize filtered data with all data
      } catch (error) {
        console.error('Error fetching weather data', error);
      }
    };

    fetchWeatherData();
  }, [selectedCity]);


  const routes = useRoutes([
    {
        path: '/',
        element: <Header title="Weather Dashboard" />,
    },
    {
        path: '/SearchPage',
        element: (
            <SearchPage 
                cities={cities} 
                onSelectCity={setSelectedCity} 
                weatherData={weatherData} 
            />
        ),
    },
]);





  // return (
  //   <div>
  //     <Header title="Weather Dashboard" />
  //     <CityDropdown cities={cities} onSelectCity={setSelectedCity} />
  //     <SummaryCard weatherData={weatherData} />
  //     <WeatherList data={filteredData} />
  //   </div>
  // );

    return( 
        <div className="App">
          

            <nav>
              <Link to="/">Home</Link> | 
              <Link to="/SearchPage">Search </Link>
            </nav>

            {routes}
        </div>
    )
}

export default App;
