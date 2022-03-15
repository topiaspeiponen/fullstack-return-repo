
const Filter = (props) => {
    return (
        <div>
            filter the phonebook <input value={props.searchTerm} onChange={props.handleSearchTermChange} />
        </div>
    )
}

export default Filter;