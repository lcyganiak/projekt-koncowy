import { FC } from 'react'
// material ui
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Tooltip } from '@mui/material';
import styles from './CardComponentBook.module.scss'


interface PropsCardComponentBook {
  title: string,
  classCss: string,
  nota?: string,
  author: string,
  desc: string,
  children?: JSX.Element | JSX.Element[]
}

export const CardComponentBook: FC<PropsCardComponentBook> = (
  {
    title,
    classCss,
    nota,
    author,
    desc,
    children
  }
) => {
  const tooltip = () => {
    return (
      nota ?
        <Tooltip title={nota}>
          <Typography variant="h5" component="h5">
            Autor: {author.toUpperCase()}
          </Typography>
        </Tooltip> : 
        <>
        <Typography variant="h5" component="h5">
          Autor: {author?.toUpperCase()}
        </Typography>
        </>
    )
  }
  
  return (
    <Card >
      <CardMedia
        className={styles[classCss] }
        component="img"
        alt={`Okładka książki ${title}`}
        height="150"
        image='https://via.placeholder.com/150'
      />
      <CardContent >
        <Typography variant="h5" component="h5">
          Tutuł: {title}
        </Typography>
        {tooltip()}
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
     
      {!!children} && 
      <CardActions>
        {children}
      </CardActions>
    </Card>
  )
}

// warunek ? true : false

 // !! zminieająna boola tj. pusta tablica let arr = [] !!arr to będzie false
 // mały JS śmieszek let obj = {}  !!obj da true