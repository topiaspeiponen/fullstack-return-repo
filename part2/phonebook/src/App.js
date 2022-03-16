import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phonebookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPNumber, setNewPNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    phonebookService
    .getAll()
    .then(persons => {
      console.log('persons ', persons)
      setPersons(persons)
    })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(persons, newName)
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      const newPerson = {name: newName, number: newPNumber}
      const newPersons = persons.concat(newPerson);
      phonebookService
      .create(newPerson)
      .then(response => {
        console.log(response)
        setPersons(newPersons);
        setNewName('');
        setNewPNumber('');
      })
      
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