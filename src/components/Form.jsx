import { useState, useReducer } from 'react';
import '../styles/Form.css';

function Form({dispatch, className='Form'}) {
    const [cityInput, setCityInput] = useState('');
    const [stateInput, setStateInput] = useState('');
    const [countryInput, setCountryInput] = useState('');

    async function getLocationData(e) {
        e.preventDefault();
    
        try {
            const geo_url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityInput},${stateInput},${countryInput}&limit=1&appid=`;
            const response = await fetch(geo_url);
            const geoData = await response.json();
            getWeatherData(geoData);
        }
        catch(e) {
            console.log(e);
        }
    }

    async function getWeatherData(geoData) {

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${geoData[0].lat}&lon=${geoData[0].lon}&appid=`;
            const response = await fetch(url);
            const weatherData = await response.json();
            dispatch({type: 'GET_WEATHER_DATA', payload : weatherData});
        }
        catch(e) {
            console.log(e);
        }
    }

    return (
        <div className={className}>
            <form name='weather-form' onSubmit={(e) => getLocationData(e)}>
                <label>
                    Enter your location
                    <br />
                    <input type='text' name='city' onChange={(e) => setCityInput(e.target.value)} value={cityInput} placeholder='City Name'/>
                    <br />
                    <input type='text' name='state-code'  onChange={(e) => setStateInput(e.target.value)} value={stateInput} placeholder='State Code' />
                    <br />
                    <input type='text' name='country-code' onChange={(e) => setCountryInput(e.target.value)} value={countryInput} placeholder='Country Code'/>
                    <br />
                    <button type='submit'>Submit</button>
                    <br />
                </label>
            </form>
        </div>
    )
}

export default Form;