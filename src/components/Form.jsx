import '../styles/Form.css';

function Form({className='Form'}) {
    return (
        <div className={className}>
            <label>
                Enter your location
                <br />
                <input type='text' placeholder='City'/>
                <br />
                <input type='text' placeholder='Country' />
            </label>
        </div>
    )
}

export default Form;