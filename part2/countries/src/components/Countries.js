
const Countries = ({countries}) => {
    return (
        <>
            {
                countries.map(country => 
                    <div key={country.fifa}>{country.name.common}</div> 
                )
            }
        </>
    )
}

export default Countries;