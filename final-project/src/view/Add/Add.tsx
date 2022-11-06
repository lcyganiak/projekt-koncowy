import { Box, Button, FormControl, FormHelperText, Input, InputLabel, TextField, TextFieldProps } from '@mui/material'
import  { FormEvent, FC, useRef, useState } from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs, { Dayjs } from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import styles from './Add.module.scss';
import uniqid from 'uniqid';

export const Add: FC = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-07'));
  
  const form = useRef<HTMLCollection>()
  // jeżli chcemy nadac typ useRef, to typujemy to co znajduje sie w 
  // kluczy current
  // form = {current: w którym znajduje się objekt html
//   }
// żeby operować map, filter czy innymi funkcjami tablicowymi 
// musimy form.current zamienić na tablice czyli Array.from(form.current)

  const createId = (uniqName: string) => {
    console.log(`${uniqid()} ${uniqName}`) // jak wyglada nasze id
    return `${uniqid()} ${uniqName}`
  }
  const submitBook = (event: FormEvent) => {
    event.preventDefault()
    console.log(event)
    console.log(form)
    if(form.current && form.current !== null) {
      const onlyElForm = Array.from(form.current).filter(item => {
        if(item.id.search('author') > - 1 
        || item.id.search('title') > - 1 
        || item.id.search('describe') > - 1 
        )  {
          return item
        }
      })
        let onlyHTMLSth = []
      for(let i = 0; form.current.length > i; i++) {
        // logika sprawdzania id 
        // push do tablicy onlyHTMLSth
      }
      console.log(onlyElForm)
      // storzenie obiektu na wzór 
      // const payload = {
      //   title: 'pobrane z inputa tytuł ',
      //   author: 'pobrane z inputa  autor',
      //   desc: 'pobrane z textarea   ',
      //   years: 'pobrane z dataPickera ',
      //   rating: ' tablica pusta bo nie mamy ratingu'
      // }

    }
    
  }
  const idAuthor = createId('author')
  const idTitle = createId('title')
  const iddescribe = createId('describe')
  return (
    <Box component="form" className={styles.blockPadding} ref={form} >
      <FormControl >
        <InputLabel htmlFor={idAuthor}>Autor Ksiązki</InputLabel>
        <Input id={idAuthor} aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">Podaj Autora książki</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor={idTitle}>Tytuł ksiązki</InputLabel>
        <Input id={idTitle} aria-describedby="my-helper-text"  />
        <FormHelperText id="my-helper-text">Podaj tytuł książki</FormHelperText>
      </FormControl>
      <TextField
        id={iddescribe}
        label="Opis ksiązki"
        variant="standard"
        multiline
        maxRows={10}
        helperText="Some important text"

      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          views={['year']}
          label="Rok wydania"
          className={styles.dataPicker}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </LocalizationProvider>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={styles.button}
        onClick={(event) => submitBook(event)}
      >
        zapisz
      </Button>
    </Box>
  )
}
// dodanie unikalnych ID done
// dodoanie id do pobieraonia z form done