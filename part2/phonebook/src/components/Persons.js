
const Persons = (props) => {
    return(
        <>
            {
            props.searchTerm === '' 
            ? props.persons.map(person =>
                <div key={person.name}>{person.name} {person.number} <button key={person.id + 'btn'} onClick={() => props.handlePersonDelete(person.id)}>delete</button></div>
              )
            : props.persons
                .filter(person => person.name.toLowerCase().includes(props.searchTerm.toLowerCase()))
                .map(results => 
                  <div key={results.name}>{results.name} {results.number} <button key={results.id + 'btn'} onClick={() => props.handlePersonDelete(results.id)}>delete</button></div>  
                )
            }
        </>
    )
}

export default Persons;