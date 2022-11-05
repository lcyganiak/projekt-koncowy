import axios from 'axios';

const API = 'http://localhost:3004'

const getBooks = () => {
    const apiBooks = `${API}/books`
    return axios.get(apiBooks)
}
const getOneBook =(id: string) => {
    // do pobierania pojedyniczej ksiązki
    const apiOneBook = `${API}/books/${id}`
    return axios.get(apiOneBook)
}

const getAuthors = () => {
    const apiAuthors = `${API}/author`
    return  axios.get(apiAuthors)
}
export {
    getBooks,
    getOneBook,
    getAuthors
}