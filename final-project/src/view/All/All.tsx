import { useEffect, useContext, useState, FC } from 'react';
import { getBooks, getAuthors } from '../../services/books.service';
import { GlobalState } from '../../Store/GlobalStore';

// material ui
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Tooltip } from '@mui/material';

// style
import styles from './All.module.scss'

export const All: FC = () => {
  const global = useContext(GlobalState) // 1 wszystko puste
  const [allBooks, setAllBooks] = useState(global.globalBooks)  // 2 tablica globalBooks jest pusta 
  const [allAuthors, setAllAuthors] = useState(global.globalAuthors)
  const getAllBooks = () => {
    const books = getBooks()
    books
      .then(res => {
        const data = res.data
        global.globalGetBooks(data)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  const getAllAuthors = () => {
    const authors = getAuthors()
    authors
      .then(res => {
        const data = res.data
        global.globalGetAuthors(data)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  useEffect(() => {
    getAllBooks() // 3 akcja pobrania danych z BE
    getAllAuthors()

  }, [])
  useEffect(() => {
    console.log(global.globalBooks)
    setAllBooks(global.globalBooks) // 4 czynnośc 
    setAllAuthors(global.globalAuthors)
  }, [allBooks, allAuthors])


  console.log(allBooks)
  const howManyCards = allBooks.length <= 2 ? 6 : 4

  const booksWithNotaAuthors = allBooks.map(book => {
    const author = allAuthors.find(item => item.author.toUpperCase() === book.author.toUpperCase())
    const nota = author ? author.nota : 'Brak noty biograficznej'
    return { ...book, nota }
  })
  console.log(booksWithNotaAuthors)

  const xd = () => {
    // przykładowa funkcjia 
    console.log(1235)
  }

  const showCardWithBook: JSX.Element[] = booksWithNotaAuthors.map(item => {
    return (
      <Grid item xs={12} md={howManyCards} key={item.id}>
        <Card >
          <CardMedia
            className=''
            component="img"
            alt={`Okładka książki ${item.title}`}
            height="150"
            image='https://via.placeholder.com/150'
          />
          <CardContent className={styles.bodyCard}>
            <Typography variant="h5" component="h5">
              Tutuł: {item.title}
            </Typography>
            <Tooltip title={item.nota}>
              <Typography variant="h5" component="h5">
                Autor: {item.author.toUpperCase()}
              </Typography>
            </Tooltip>
            <Typography variant="body2" color="text.secondary">
              {item.desc}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={xd} size="small">dodaj ocenę</Button>
            <Button size="small">Pokaż szczegóły</Button>
          </CardActions>
        </Card>
      </Grid>)
  })
  return (
    <Grid container spacing={3}>
      {showCardWithBook}
    </Grid>
  )
}
