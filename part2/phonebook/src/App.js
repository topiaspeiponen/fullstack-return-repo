import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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
      <Filter searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} />
      <h2>Add new</h2>
      <PersonForm handleSubmit={handleSubmit} newName={newName} newPNumber={newPNumber} handleNameChange={handleNameChange} handlePhoneNumberChange={handlePhoneNumberChange} />
      <h2>Numbers</h2>
      <Persons searchTerm={searchTerm} persons={persons} />
    </div>
  )

}

export default App