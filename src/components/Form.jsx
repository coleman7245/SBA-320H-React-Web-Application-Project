import { useReducer } from 'react';
import '../styles/Form.css';

function Form({className='Form'}) {
    const [state, dispatch] = useReducer(reducer, {'city' : '', 'province' : '', 'country' : '', 'cityInput' : '', 'provinceInput' : '', 'countryInput' : ''});

    function reducer(state, action) {
        let newState = {...state};

        switch(action.type) {
            case 'SET_CITY':
                newState.cityInput = action.event.target.value;
                return newState;
            case 'SET_COUNTRY':
                newState.countryInput = action.event.target.value;
                return newState;
            case 'SET_PROVINCE':
                newState.provinceInput = action.event.target.value;
                return newState;
            case 'SUBMIT_FORM':
                action.event.preventDefault();
                newState.city = newState.cityInput;
                newState.province = newState.provinceInput;
                newState.country = newState.countryInput;
                newState.cityInput = '';
                newState.countryInput = '';
                newState.provinceInput = '';
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
                    <input type='text' onChange={(e) => dispatch({type : 'SET_CITY', event : e})} value={state.cityInput} placeholder='City'/>
                    <br />
                    <input type='text'  onChange={(e) => dispatch({type : 'SET_PROVINCE', event : e})} value={state.provinceInput} placeholder='State or Province' />
                    <br />
                    <input type='text'  onChange={(e) => dispatch({type : 'SET_COUNTRY', event : e})} value={state.countryInput} placeholder='Country' />
                    <br />
                    <button type='submit'>Submit</button>
                    <br />
                </label>
            </form>
            <div id='location'>
                {state.city} <br />
                {state.province} <br />
                {state.country}
            </div>
        </div>
    )
}

export default Form;