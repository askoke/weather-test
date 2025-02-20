import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import { createMockServer } from './createMockServer';
import WeatherCard from './components/WeatherCard';

if(process.env.NODE_ENV === 'development'){
  createMockServer();
}

function App() {
  const [selected, setSelected] = useState([]);

  const selectCity = (city) => {
    setSelected([city, ...selected]);
  }

  return (
    <div className="App">
      <h1>Weather Application</h1>
      <Search onSelectItem={selectCity} />

      <div data-testid="my-weather-list">
        {selected && selected.map((city) => 
          <div
            key={`${city.lat}-${city.lon}`}>
            {city.name}
          </div>
        )}
      </div>
      <WeatherCard city={selectCity} />
    </div>
  );
}

export default App;