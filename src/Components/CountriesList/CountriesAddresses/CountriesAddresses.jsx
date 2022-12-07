import React from 'react'

const CountriesAddresses = ({addresses}) => {
  return (
    <div className='countries_addresses'>
        <h3>Fetched addresses from the following countries:</h3>
        {addresses.map(address => <div key={address.id} className='countries_addresses_item'>{address?.country}</div>)}
    </div>
  )
}

export default React.memo(CountriesAddresses);