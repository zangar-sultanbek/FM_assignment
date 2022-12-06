import React from 'react'
import { useState } from 'react'
import '../../Styles/CountriesForm/CountriesForm.css'

const codeEntries = {
    MIN_CODE: 5,
    MAX_CODE: 20
}

const CountriesForm = ({countryCodes, addCountryCode}) => {
    const [countryCode, setCountryCode] = useState('');

    //Using regex to replace characters & symbols
    const handleCodeInput = ({target : {value}}) => setCountryCode(value.replace(/\D+/g, ''));

    const handleCodeAdd = (e) => {
        e.preventDefault();
        
        const parsedCountryCode = parseInt(countryCode);
        if(parsedCountryCode < codeEntries.MIN_CODE) return alert(`The value is too small. Minimum required: ${codeEntries.MIN_CODE}`);
        if(parsedCountryCode > codeEntries.MAX_CODE) return alert(`The value is too large. Maximum available: ${codeEntries.MAX_CODE}`);
        addCountryCode(parsedCountryCode)
        setCountryCode('');
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(123)
    }   


  return (
    <form onSubmit={handleFormSubmit} className='countries_form'>
        <div className='countries_form_result'>
            Selected countries: 
            [   <span className={countryCodes.length ? 'result_positive' : 'result_negative'}>
                    {countryCodes.length ? countryCodes.join(',') : 'Empty...'}
                </span> ]
        </div>
        <label>
            Enter a number from {codeEntries.MIN_CODE} to {codeEntries.MAX_CODE}(both inclusive):
            <input 
            type={'text'} 
            placeholder='5-20'
            onChange={handleCodeInput}
            value={countryCode}/>
        </label>
        <div className="countries_form_actions">
            <button type='button' onClick={handleCodeAdd} className='add_btn'>Add</button>
            <button type='submit' className='submit_btn'>Submit</button>
        </div>
    </form>
  )
}

export default CountriesForm