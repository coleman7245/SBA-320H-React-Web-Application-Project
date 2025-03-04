import { useReducer } from 'react';
import '../styles/Form.css';

function Form({className='Form'}) {
    const [state, dispatch] = useReducer(reducer, {'city' : '', 'countryCode' : '', 'stateCode' : '', 'cityInput' : '', 'countryCodeInput' : '', 'stateCodeInput' : ''});

    function reducer(state, action) {
        let newState = {...state};

        switch(action.type) {
            case 'SET_CITY_NAME':
                newState.cityInput = action.event.target.value;
                return newState;
            case 'SET_COUNTRY_CODE':
                newState.countryCodeInput = action.event.target.value;
                return newState;
            case 'SET_STATE_CODE':
                newState.stateCodeInput = action.event.target.value;
                return newState;
            case 'SUBMIT_FORM':
                action.event.preventDefault();
                newState.city = newState.cityInput;
                newState.countryCode = newState.countryCodeInput;
                newState.stateCode = newState.stateCodeInput;
                newState.cityInput = '';
                newState.countryCodeInput = '';
                newState.stateCodeInput = '';
                return newState;
            default:
                return state;
        }
    }

    return (
        <div className={className}>
            <form onSubmit={(e) => dispatch({type : 'SUBMIT_FORM', event : e})}>
                <label>
                    Enter your location
                    <br />
                    <input type='text' onChange={(e) => dispatch({type : 'SET_CITY_NAME', event : e})} value={state.cityInput} placeholder='City Name'/>
                    <br />
                    <input type='text'  onChange={(e) => dispatch({type : 'SET_STATE_CODE', event : e})} value={state.stateCodeInput} placeholder='State Code' />
                    <br />
                    <input type='text' onChange={(e) => dispatch({type : 'SET_COUNTRY_CODE', event : e})} value={state.countryCodeInput} placeholder='Country Code'/>
                    <br />
                    <button type='submit'>Submit</button>
                    <br />
                </label>
            </form>
            <div id='location'>
                {state.city} <br />
                {state.stateCode} <br />
                {state.countryCode} <br />
            </div>
        </div>
    )
}

export default Form;