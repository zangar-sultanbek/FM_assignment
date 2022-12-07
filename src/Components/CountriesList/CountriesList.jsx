import React from 'react'
import CountriesAddresses from './CountriesAddresses/CountriesAddresses'
import '../../Styles/CountriesList/CountriesList.css'
import CountriesTable from './CountriesTable/CountriesTable'

const CountriesList = ({addresses, countries}) => {
  if(!addresses.length) return <div className='countries_list_empty'>Fetch some addresses...</div>

  return (
    <div className='countries_list'>
      <CountriesAddresses addresses={addresses} />
      <CountriesTable countries={countries}/>
    </div>
  )
}

export default CountriesList