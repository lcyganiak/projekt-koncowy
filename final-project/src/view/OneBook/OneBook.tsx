import { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { getOneBook } from '../../services/books.service'
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Tooltip } from '@mui/material';

import { CardComponentBook } from '../../components/CardComponentBook/CardComponentBook'
export const OneBook: FC = () => {
    interface BookInterface {
        id: number,
        title: string,
        author: string,
        desc: string,
        years: number,
        rating: number[]
    }
    const [book, setBook] = useState<BookInterface>({} as BookInterface)
    let isEmpty: boolean = true
    const { id } = useParams()
    console.log(id)
    const getOneBookFetch = () => {
        if (id) {
            const book = getOneBook(id)
            book.then(item => {
                console.log(item.data)
                setBook(item.data)
            }).catch((err) => {
                console.error(err)
            })
        } else {
            isEmpty = false
        }
    }
    useEffect(() => {
        getOneBookFetch()
        // ten return 'sprząta po useEffect, 
        // uzywamy go kiedy faktycznie potrzebujemy, coś posprzatać.
        return () => {
            console.log('unmounts')
        }
    }, [])
    return (
        <CardComponentBook 
            title={book.title} 
            classCss={'vh100'} 
            author={book.author} 
            desc={book.desc}        
        >
            <Button size="small">dodaj ocenę</Button>
        </CardComponentBook>)
    
}
