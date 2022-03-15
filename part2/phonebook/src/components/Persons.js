
const Persons = (props) => {
    return(
        <>
            {
            props.searchTerm === '' 
            ? props.persons.map(person =>
                <div key={person.name}>{person.name} {person.number}</div>
              )
            : props.persons
                .filter(person => person.name.toLowerCase().includes(props.searchTerm.toLowerCase()))
                .map(results => 
                  <div key={results.name}>{results.name} {results.number}</div>  
                )
            }
        </>
    )
}

export default Persons;