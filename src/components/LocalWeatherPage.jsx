import { useState, useEffect } from 'react';

import Navbar from "./Navbar";
const BASE_URL = 'http://api.openweathermap.org/';

function LocalWeatherPage() {
    const [data, setData] = useState(null);

    async function getData(url, config={}) {
    
        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);

        }
        catch(e) {
            console.log(e);
        }
    
        return data;
    }

    useEffect(() => {getData(BASE_URL)}, data);

    return (
        <div>
            <Navbar />
        </div>
    )
}

export default LocalWeatherPage;