import axios from 'axios'
// For local
const baseUrl = 'http://localhost:3001/api/persons'
// For build ver
//const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newRecord) => {
    const request = axios.post(baseUrl, newRecord)
    return request.then(response => response.data)
}

const update = (id, newRecord) => {
    const request = axios.put(`${baseUrl}/${id}`, newRecord)
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = axios.delete(baseUrl + '/' + id)
    return request.then(response => response.data)
}

const phonebookService = {getAll, create, update, remove}

export default phonebookService