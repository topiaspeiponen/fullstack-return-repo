import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import phonebookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPNumber, setNewPNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

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
          setSuccessMessage(`${newPerson.name} was edited succesfully`)
          setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
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
          if (error.response.status === 404) {
            setErrorMessage(`Information of ${newPerson.name} has already been removed from the server`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          }
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
        setSuccessMessage(`${newPerson.name} was added succesfully`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
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
    const personToDelete = persons.filter(person => person.id === id)[0].name;
    if (window.confirm(`delete ${personToDelete}`)) {
      phonebookService
      .remove(id)
      .then(response => {
        console.log('person deleted response ', response)
        const newPersons = persons.filter(person => person.id !== id)
        console.log('new persons after delete ', newPersons)
        setPersons(newPersons)
        setSuccessMessage(`${personToDelete} was deleted succesfully`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      })
      .catch(error => {
        console.log('Error happened during delete ', error)
        if (error.response.status === 404) {
          setErrorMessage(`Information of ${personToDelete} has already been removed from the server`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        }
      })
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} type="success" />
      <Notification message={errorMessage} type="error" />
      <Filter searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} />
      <h2>Add new</h2>
      <PersonForm handleSubmit={handleSubmit} newName={newName} newPNumber={newPNumber} handleNameChange={handleNameChange} handlePhoneNumberChange={handlePhoneNumberChange} />
      <h2>Numbers</h2>
      <Persons searchTerm={searchTerm} persons={persons} handlePersonDelete={handlePersonDelete} />
    </div>
  )

}

export default App