import Filter from './components/Filter'
import Countries from './components/Countries'
import CountryShowcase from './components/CountryShowcase'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);
  const [matchingCountries, setMatchingCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('Response ', response)
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
    const matchingCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
    console.log('Found matching countries ', matchingCountries)
    setMatchingCountries(matchingCountries, searchTerm);
  },[searchTerm, countries])

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleResultSelect = (countryName) => {
    setSearchTerm(countryName)
  }

  return (
    <div>
      <Filter searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} />
      {
        searchTerm !== '' && matchingCountries.length > 1 && matchingCountries.length <= 10 &&
          <Countries countries={matchingCountries} handleResultSelect={handleResultSelect} />
      }
      {
        searchTerm !== '' && matchingCountries.length > 10 &&
        <div>too many results, specify another filter</div>
      }
      {
        searchTerm !== '' && matchingCountries.length === 1 &&
        <CountryShowcase country={matchingCountries[0]} />
      }
    </div>
  );
}

export default App;
