import React from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useState } from 'react'
import '../Styles/AssignmentPage.css'
import CountriesForm from './CountriesForm/CountriesForm';
import CountriesList from './CountriesList/CountriesList';

const getUrlAddresses = (count) => `https://random-data-api.com/api/v2/addresses?size=${count}`
const getUrlCountries = (name) => `https://restcountries.com/v3.1/name/${name.replaceAll(' ', '')}`

const AssignmentPage = () => {
    const [addressCount, setAddressCount] = useState(null);
    const [addresses, setAddresses] = useState([]);
    const [countries, setCountries] = useState([]);
    const handleAddressCount = useCallback(
      (count) => setAddressCount(count), []
    );
    const countriesMemo = useMemo(
      () => [...countries].sort((a, b) => b?.population- a?.population), [countries]
    );

    //For address fetching
    useEffect(
      () => {
        if(!addressCount) return;

        fetch(getUrlAddresses(addressCount))
        .then(res => res.json())
          .then(data => setAddresses(data))
        .catch(error => console.log(error.message))
      }, [addressCount]
    );
    //For country fetching, upon addresses being loaded
    useEffect(() => {
        if(!addresses.length) return;
        
        const fetchAllCountries = async () => {
          const fetches = [];
          //Promise.all() can't be used since some requests return 404(when country is not found)
          for(const address of addresses){
            const res = await fetch(getUrlCountries(address.country));

            //If country is not found, then push empty item
            if(res.status === 404){
              fetches.push({population: 0});
              console.log(`No results for: ${address.country}`)
              continue;
            }

            const data = await res.json();
            fetches.push(data[0]);
          }

          setCountries(fetches);
        }
        fetchAllCountries();
    }, [addresses])

    return (
      <div className='assignment_page'>
          <CountriesForm addressCount={addressCount} handleAddressCount={handleAddressCount}/>
          <CountriesList addresses={addresses} countries={countriesMemo}/>
      </div>
  )
}

export default AssignmentPage