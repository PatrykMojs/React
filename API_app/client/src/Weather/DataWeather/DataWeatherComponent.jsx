import React, {useState} from "react";
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import './DataWeatherComponent.css';

const DataWeatherComponent = ({ onBackgroundClassChange }) =>{
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = async () => {
        try {

            if(!city){
                setError('Podaj nazwę miasta!');
                return;
            }
            setLoading(true);

            const response = await axios.get(`http://localhost:5000/weather/${city}`);
            setWeatherData(response.data);
            setError('');
            setLoading(false);

            if(response.data){
                const backgroundClass = determineBackgroundClass(response.data);
                onBackgroundClassChange(backgroundClass);
            }

        } catch (error) {
            console.error('Błąd podczas pobierania danych z serwera:', error.message);
            setLoading(false);
            setError('Błąd podczas pobierania danych z serwera');
        }
    };

    const temp = (temperature) =>{
        return Math.floor((temperature-32)*(5/9));
    }

    const determineBackgroundClass = (weatherData) => {
        if (weatherData && weatherData.weather.length > 0) {
          const weather = weatherData.weather[0].main.toLowerCase();
      
          if (weather === 'rain') {
            return 'rain-weather-background';
          } else if (weather === 'clouds') {
            return 'clouds-weather-background';
          } else {
            return 'clear-weather-background';
          }
        }
    }

    return(
        <>
            <div className='formLocation'>
                <input type='text' placeholder='Wyszukaj miasto' value={city} onChange={(e) => setCity(e.target.value)} /> <br />
                <button onClick={fetchData} type='button'>Wyszukaj</button>
            </div>

            <div className='weather'>
                {loading ? (
                    <div className='loading'>
                        <label>
                            <h3>Trwa ładowanie danych</h3>
                            <BeatLoader color='#36D7B7' loading={true} size={30} />
                        </label>
                 </div>
                ): error ?(
                    <div className='error'>
                        <h3>{error}</h3>
                    </div>
                ): weatherData ?(
                    weatherData && (
                        <fieldset>
                            <legend>{weatherData.name}, {weatherData.sys.country}</legend>

                            <div className="containerDescription">

                                <div className='firstBox'>
                                    <p className='temp'>{temp(weatherData.main.temp)} °C</p>
                                </div>

                                <div className='secondBox'>
                                    <p>Odczuwalna tempreatura: {temp(weatherData.main.feels_like)} °C</p>
                                    <p>Minimalna temperatura: {temp(weatherData.main.temp_min)} °C</p>
                                    <p>Maksymalna temperatura: {temp(weatherData.main.temp_max)} °C</p>
                                </div>

                                <div className="thirdBox">
                                    <p>Wilgotność: {weatherData.main.humidity} %</p>
                                    <p>Zachmurzenie {weatherData.clouds.all}%</p>
                                    <p>Prędkość wiatru: {weatherData.wind.speed} m/s</p>
                                </div>

                            </div>
                        </fieldset>
                    )  
                ): (
                    <div className='error'>
                        <h3>Podaj nazwę miasta, które chcesz wyszukać</h3>
                    </div>
                )} 
            </div>
        </>
    );
};

export default DataWeatherComponent;