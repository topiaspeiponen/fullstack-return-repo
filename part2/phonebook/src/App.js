import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      phone_number: '0402342011'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPNumber, setNewPNumber] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
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
        persons.map(person =>
            <div key={person.name}>{person.name} {person.phone_number}</div>
        )
      }
    </div>
  )

}

export default App