import React from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import '../Styles/AssignmentPage.css'
import CountriesForm from './CountriesForm/CountriesForm';
import CountriesList from './CountriesList/CountriesList';

const getUrlAddresses = (count) => `https://random-data-api.com/api/v2/addresses?size=${count}`
// const getUrlCountries = (name) => `https://restcountries.com/v3.1/name/${name.replaceAll(' ', '')}`
const getUrlCountries = (codes) => `https://restcountries.com/v3.1/alpha?codes=${codes.join(',')}`

const AssignmentPage = () => {
    const [addressCount, setAddressCount] = useState(null);
    const [addresses, setAddresses] = useState([]);
    const [countries, setCountries] = useState([]);
    const handleAddressCount = useCallback(
      (count) => setAddressCount(count), []
    );

    console.log(addresses)

    useEffect(
      () => {
        if(!addressCount) return;

        fetch(getUrlAddresses(addressCount))
        .then(res => res.json())
          .then(data => setAddresses(data))
        .catch(error => console.log(error.message))
      }, [addressCount]
    );

    useEffect(() => {
        if(!addresses.length) return;

        console.log(addresses.map(address => address?.country_code))

        fetch(getUrlCountries(addresses.map(address => address?.country_code)))
        .then(res => res.json())
          .then(data => setCountries(data))
        .catch(error => console.log(error.message))
    }, [addresses])

  return (
    <div className='assignment_page'>
        {/* <CountriesForm countryCodes={countryCodes} addCountryCode={addCountryCode}/> */}
        <CountriesForm addressCount={addressCount} handleAddressCount={handleAddressCount}/>
        <CountriesList addresses={addresses} countries={countries}/>
    </div>
  )
}

export default AssignmentPage