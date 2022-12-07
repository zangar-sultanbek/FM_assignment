import React from 'react'

const CountriesList = ({addresses, countries}) => {
  if(!addresses) return <div>Fetch some addresses...</div>

  console.log(countries)

  return (
    <div>
      {addresses.map(address => <div key={address.id}>{address?.country}</div>)}

      {countries.length
      ? countries.map(country => <div key={country?.name?.official}><b>{country?.name?.official}</b></div>)
      : <div>No countries...</div>
      }
    </div>
  )
}

export default CountriesList