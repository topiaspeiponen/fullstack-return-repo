import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPersons = persons;
    console.log({name: newName})
    setPersons(newPersons.concat({name: newName}));
    setNewName('');
  };

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person =>
            <div key={person.name}>{person.name}</div>
        )
      }
    </div>
  )

}

export default App