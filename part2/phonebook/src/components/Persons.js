
const Persons = (props) => {
    return(
        <>
            {
            props.searchTerm === '' 
            ? props.persons.map(person =>
                <div key={person.name}>{person.name} {person.phone_number}</div>
              )
            : props.persons
                .filter(person => person.name.toLowerCase().includes(props.searchTerm.toLowerCase()))
                .map(results => 
                  <div key={results.name}>{results.name} {results.phone_number}</div>  
                )
            }
        </>
    )
}

export default Persons;