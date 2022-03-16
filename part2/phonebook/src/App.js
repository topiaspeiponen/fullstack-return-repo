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
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
        const newPerson = {name: newName, number: newPNumber}
        const oldPersonID = persons.filter(person => person.name === newPerson.name)[0].id
        console.log('editing person ', newPerson)
        phonebookService
        .update(oldPersonID, newPerson)
        .then(response => {
          console.log('person edited response ', response)
          setNewName('');
          setNewPNumber('');
        })
        .then(() => {
          phonebookService
          .getAll()
          .then(persons => {
            setPersons(persons)
          })
        })
        .catch(error => {
          console.log('Error happened during update of existing person ', error)
        })
      }
    } else {
      const newPerson = {name: newName, number: newPNumber}
      phonebookService
      .create(newPerson)
      .then(response => {
        console.log('person added response ', response)
        setNewName('');
        setNewPNumber('');
      })
      .then(() => {
        phonebookService
        .getAll()
        .then(persons => {
          setPersons(persons)
        })
      })
      .catch(error => {
        console.log('Error happened during submission of new person ', error)
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

  const handlePersonDelete = (id) => {
    if (window.confirm(`delete ${persons.filter(person => person.id === id)[0].name}`)) {
      phonebookService
      .remove(id)
      .then(response => {
        console.log('person deleted response ', response)
        const newPersons = persons.filter(person => person.id !== id)
        console.log('new persons after delete ', newPersons)
        setPersons(newPersons)
      })
      .catch(error => {
        console.log('Error happened during delete ', error)
      })
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} />
      <h2>Add new</h2>
      <PersonForm handleSubmit={handleSubmit} newName={newName} newPNumber={newPNumber} handleNameChange={handleNameChange} handlePhoneNumberChange={handlePhoneNumberChange} />
      <h2>Numbers</h2>
      <Persons searchTerm={searchTerm} persons={persons} handlePersonDelete={handlePersonDelete} />
    </div>
  )

}

export default App