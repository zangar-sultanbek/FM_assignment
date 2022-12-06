import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import '../Styles/AssignmentPage.css'
import CountriesForm from './CountriesForm/CountriesForm';
import CountriesList from './CountriesList/CountriesList';

const AssignmentPage = () => {
    const [countryCodes, setCountryCodes] = useState([]);
    console.log(countryCodes)

    const addCountryCode = useCallback(
        (countryCode) => countryCodes.includes(countryCode)
        ? alert(`The country code ${countryCode} is already present. Codes must be unique!`)
        : setCountryCodes(state => [...state, countryCode])
        , [countryCodes]
    );

  return (
    <div className='assignment_page'>
        <CountriesForm countryCodes={countryCodes} addCountryCode={addCountryCode}/>
        <CountriesList />
    </div>
  )
}

export default AssignmentPage