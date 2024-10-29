import React from 'react';

function CityDropdown({ cities, onSelectCity }) {
  // Handle the change when a user selects a city
  const handleCityChange = (event) => {
    const selectedCityName = event.target.value;
    const selectedCity = cities.find((city) => city.name === selectedCityName);
    onSelectCity(selectedCity);
  };

  return (
    <div>
      <label htmlFor="city-select">Choose a city: </label>
      <select id="city-select" onChange={handleCityChange}>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CityDropdown;
