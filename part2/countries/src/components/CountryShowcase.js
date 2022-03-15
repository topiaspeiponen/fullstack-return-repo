const CountryShowcase = ({country}) => {
    let languages = []
    // Loop through languages object
    for (const language in country.languages) {
        console.log('language ', language, country.languages[language])
        if (country.languages.hasOwnProperty(language)) {
            const newLanguage = country.languages[language];
            languages.push(newLanguage)
        }
    }

    return (
        <>
            <h2>{country.name.common}</h2>
            <div>capital {country.capital[0]}</div>
            <div>area {country.area}</div>
 
            <h3>languages:</h3>
            <ol>
                {
                    languages.map(language =>
                        <li key={language}>{language}</li>    
                    )
                }
            </ol>
            <img alt="Flag of the country" src={country.flags.png} />
        </>
    )
}

export default CountryShowcase;