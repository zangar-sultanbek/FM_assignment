import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import '../../Styles/CountriesForm/CountriesForm.css'

const codeEntries = {
    MIN_CODE: 5,
    MAX_CODE: 20
}

const CountriesForm = ({addressCount, handleAddressCount}) => {
    const [countryCode, setCountryCode] = useState('');
    const inputRef = useRef(null);

    //Using regex to replace characters & symbols
    const handleCodeInput = ({target : {value}}) => setCountryCode(value.replace(/\D+/g, ''));

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        const parsedCountryCode = parseInt(countryCode);

        if(!parsedCountryCode) return inputRef.current.focus();
        if(parsedCountryCode < codeEntries.MIN_CODE) return alert(`The value is too small. Minimum required: ${codeEntries.MIN_CODE}`);
        if(parsedCountryCode > codeEntries.MAX_CODE) return alert(`The value is too large. Maximum available: ${codeEntries.MAX_CODE}`);

        handleAddressCount(countryCode);
        setCountryCode('');
    }

  return (
    <form onSubmit={handleFormSubmit} className='countries_form'>
        <div className='countries_form_result'>
            Address count: <span className={addressCount ? 'result_positive' : 'result_negative'}>{addressCount || 0}</span>
        </div>
        {/*Text type input instead of Number, so we could limit unpredictable behaviour of number inputs like entering special characters/letters*/}
        <label>
            Enter a number from {codeEntries.MIN_CODE} to {codeEntries.MAX_CODE}(both inclusive):
            <input 
            ref={inputRef}
            type={'text'} 
            placeholder='5-20'
            onChange={handleCodeInput}
            value={countryCode}/>
        </label>
        <div className="countries_form_actions">
            <button type='submit' className='submit_btn'>Start</button>
        </div>
    </form>
  )
}

export default CountriesForm