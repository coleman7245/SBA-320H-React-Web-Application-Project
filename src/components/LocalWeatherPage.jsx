import { useState, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/LocalWeatherPage.css';

import Navbar from "./Navbar";
import Form from './Form.jsx';
import reducer from '../reducer.js';

function LocalWeatherPage({baseURL='', baseGeoURL=''}) {
    const [state, dispatch] = useReducer(reducer, null);

    return (
        <div className='local-weather-page'>
            <Navbar />
            <Form dispatch={dispatch} /> <br />
            {state && (
                <div>
                    <p>
                        weather : {state.weather[0].description}
                    </p>
                </div>
            )}
        </div>
    )
}

export default LocalWeatherPage;