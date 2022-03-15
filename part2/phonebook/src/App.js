import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone_number: '0402342011' },
    { name: 'Ada Lovelace', phone_number: '39-44-5323523' },
    { name: 'Dan Abramov', phone_number: '12-43-234345' },
    { name: 'Mary Poppendieck', phone_number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPNumber, setNewPNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(persons, newName)
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      const newPersons = persons;
      console.log({name: newName, phone_number: newPNumber})
      setPersons(newPersons.concat({name: newName, phone_number: newPNumber}));
      setNewName('');
      setNewPNumber('');
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    console.log(event.target.value)
    setNewPNumber(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    console.log(event.target.value)
    setSearchTerm(event.target.value)
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter the phonebook <input value={searchTerm} onChange={handleSearchTermChange} />
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Add new</h2>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newPNumber} onChange={handlePhoneNumberChange}  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        searchTerm == '' 
        ? persons.map(person =>
            <div key={person.name}>{person.name} {person.phone_number}</div>
          )
        : persons
            .filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(results => 
              <div key={results.name}>{results.name} {results.phone_number}</div>  
            )


      }
    </div>
  )

}

export default App