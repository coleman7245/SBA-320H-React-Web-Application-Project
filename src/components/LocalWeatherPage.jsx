import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from "./Navbar";
import Form from './Form.jsx';

function LocalWeatherPage({baseURL=''}) {
    const [data, setData] = useState(null);
    const {params} = useParams();
    // const options = {
    //     method : 'GET',
    //     x-api-key: 
    // }

    async function getData(url, config={}) {
    
        try {
            const response = await fetch(url, config);
            const data = await response.json();
            setData(data);

        }
        catch(e) {
            console.log(e);
        }
    
        return data;
    }

    if (baseURL)
        useEffect(() => {getData(baseURL)}, data);

    return (
        <div>
            <Navbar />
            <Form />
        </div>
    )
}

export default LocalWeatherPage;