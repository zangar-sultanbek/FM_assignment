import React from 'react';
import {v4} from 'uuid';

const columns = ['Population', 'Capital', 'Languages'];

const CountriesTable = ({countries}) => {
    if(!countries.length) return;

    return (
        <div className='countries_table'>
            <div className="countries_table_columns">
                {columns.map(column => <div key={column} className='countries_table_column'>{column}</div>)}
            </div>

            <div className="countries_table_rows">
            {countries.map(country => 
                <div key={v4()} className='countries_table_row'>
                    <div>{country?.population}</div>
                    <div>{country?.capital ? country.capital.join(', ') : 'No capital data'}</div>
                    <div>{country?.languages ? Object.values(country?.languages).join(', ') : 'No language data'}</div>
                </div>)}
            </div>
        </div>
    )
}

export default React.memo(CountriesTable)