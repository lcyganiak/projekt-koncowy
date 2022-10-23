import { FC } from 'react'
import { Grid } from '@mui/material'
import style from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const Footer: FC = () => {
	return (
		<footer>
			<div className={style.footer}>
				<span>Developed by M.K. | </span>
               
			</div>
			<div className={style.icon}>
			</div>
		</footer>
	)
}
