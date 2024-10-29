import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar'; 
import CityDropdown from './CityDropdown'; 
import WeatherList from './WeatherList'; 
import SummaryCard from './SummaryCard'; 
import WeatherChart from './WeatherChart'; 

const SearchPage = ({ cities, onSelectCity, weatherData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Handles search
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // dis Filters weather data based on the search term
  const filteredWeatherData = weatherData.filter((item) =>
    item.city_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Search City</h1>
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <CityDropdown cities={cities} onSelectCity={onSelectCity} />
      
      {filteredWeatherData.length === 0 && <p>No results found for "{searchTerm}"</p>}
      
      <SummaryCard weatherData={filteredWeatherData} />
      <WeatherList data={filteredWeatherData} />
      <WeatherChart data={filteredWeatherData} /> 
    </div>
  );
};

SearchPage.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectCity: PropTypes.func.isRequired,
  weatherData: PropTypes.array.isRequired,
};

export default SearchPage;


// // Code #2
// import React, { useState } from 'react';
// import SearchBar from './SearchBar'; 
// import CityDropdown from './CityDropdown'; 
// import WeatherList from './WeatherList'; 
// import SummaryCard from './SummaryCard'; 



// const SearchPage = ({ cities, onSelectCity, weatherData }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   // Handle search
//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };

//   //filters weather data based on the search term
//   const filteredWeatherData = weatherData.filter((item) =>
//     item.city_name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>Search City</h1>
//       <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
//       <CityDropdown cities={cities} onSelectCity={onSelectCity} />
      
    
//       <SummaryCard weatherData={filteredWeatherData} />
//       <WeatherList data={filteredWeatherData} />
      
//     </div>
//   );
// };

// export default SearchPage;

//CODE #1 
// src/components/SearchPage.js
// import React, { useState } from 'react';
// import SearchBar from './SearchBar'; 
// import CityDropdown from './CityDropdown'; 

// const SearchPage = ({ cities, onSelectCity, weatherData }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   // Handle search
//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };

//   return (
//     <div>
//       <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
//       <CityDropdown cities={cities} onSelectCity={onSelectCity} />
//     </div>
//   );
// };

// export default SearchPage;