import { AppBar, Toolbar } from '@mui/material'
import styles from './Header.module.scss'
import { Logo } from '../Logo'

export const Header = () => {
  return (
    <AppBar className={styles.header}>
      <Toolbar className={styles.toolbar}>
        <Logo />
      </Toolbar>
    </AppBar>
  )
}
