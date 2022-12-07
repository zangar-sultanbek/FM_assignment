import React from 'react'

const CountriesTable = ({countries}) => {
    if(!countries.length) return;

    return (
        <div>
            {countries.map(country => <div key={country?.name?.official}>{country?.name?.official}</div>)}
        </div>
    )
}

export default React.memo(CountriesTable)