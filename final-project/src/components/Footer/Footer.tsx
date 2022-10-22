import {FC} from 'react'
import { Grid } from '@mui/material'
export const Footer:FC = () => {
    return (
        <footer className=''>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <ul>
                    <li>All ....</li>
                    <li>Add .....</li>
                    <li>Home</li>
                    <li>Najlepsza .....</li>
                  </ul>
                </Grid>
                <Grid item xs={12} md={4}>
                    <p>Zadzwoni do trówrcy 72728282828</p>
                </Grid>
                <Grid item xs={12} md={4}>
                    <p>Lorem. xs4</p>
                </Grid>
            </Grid>

   
        </footer>



    )
}
