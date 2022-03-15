
const Countries = ({countries, handleResultSelect}) => {
    return (
        <div>
            {
                countries.map(country => 
                    <div key={country.name.common}>{country.name.common} <button key={country.name.common + '-btn'} onClick={() => handleResultSelect(country.name.common)}>show</button></div> 
                )
            }
        </div>
    )
}

export default Countries;