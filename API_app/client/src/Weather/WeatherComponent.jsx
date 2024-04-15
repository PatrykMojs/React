import React, {useState} from 'react';
import './WeatherComponent.css';
import DataWeatherComponent from './DataWeather/DataWeatherComponent';
import NavbarComponent from '../NavBar/NavbarComponent';

const WeatherComponent = () => {
  const [backgroundClass, setBackgroundClass] = useState('');

  const handleBackgroundClassChange = (newBackgroundClass) => {
    setBackgroundClass(newBackgroundClass);
  };
 
  return (
    <>
    <NavbarComponent/>
      <div className={`weatherBackground ${backgroundClass}`}>
        <div className='container'>
          <DataWeatherComponent onBackgroundClassChange={handleBackgroundClassChange} />
        </div>
      </div>
    </>
  );
};

export default WeatherComponent;