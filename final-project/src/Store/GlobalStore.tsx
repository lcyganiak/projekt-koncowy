import {useState, createContext, FC } from 'react'
// import { GlobalStateInterface, AuthorInterface, BookInterface, GlobalStoreInterface } from './HelperInterFace'

interface BookInterface {
  id: number,
  title: string,
  author: string,
  desc: string,
  years: number,
  rating: number[]
}

interface AuthorInterface {
  name: string,
  books: string[],
}

interface GlobalStateInterface {
  globalBooks: BookInterface[],
  globalAuthors: AuthorInterface[],
  globalGetBooks: (data: BookInterface[]) => void
  globalGetAuthors: (data: AuthorInterface[]) => void
}

interface GlobalStoreInterface {
  children : JSX.Element | JSX.Element[]
}

export const GlobalState = createContext<GlobalStateInterface>({
    globalBooks: [],
    globalAuthors: [],
    globalGetBooks: () => {},
    globalGetAuthors: () => {}

})

export const GlobalStore:FC<GlobalStoreInterface> = (props) => {
const [books, setBooks] =useState<BookInterface[]>([])
const [authors, setAuthors] = useState<AuthorInterface[]>([])

const getBooks = (data: BookInterface[]) => {
  setBooks(data)
}

const getAuthors = (data: AuthorInterface[]) => {
  setAuthors(data)
}
  const providerValue = {
    globalBooks: books,
    globalAuthors: authors,
    globalGetBooks: getBooks,
    globalGetAuthors: getAuthors

  }
  return (
    <GlobalState.Provider value={providerValue}>
      {props.children}
    </GlobalState.Provider>
  )
}