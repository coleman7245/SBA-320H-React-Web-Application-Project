import { useState } from 'react';
import '../styles/Form.css';

function Form({className='Form'}) {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    function getCity(event) {
        setCity(event.target.value);
    }

    function getCountry(event) {
        setCountry(event.target.value);
    }

    function handleInput() {

    }

    return (
        <div className={className}>
            <label>
                Enter your location
                <br />
                <input type='text' onChange={() => getCity(e)} placeholder='City'/>
                <br />
                <input type='text'  onChange={() => getCountry(e)}  placeholder='Country' />
                <br />
                <button onClick={() => handleInput()}>Submit</button>
            </label>
        </div>
    )
}

export default Form;