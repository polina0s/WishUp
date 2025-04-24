import { AppBar, Divider, Toolbar } from '@mui/material'
import styles from './Header.module.scss'
import { Logo } from '../Logo'
import { MyLink } from '../Link'

export const Header = () => {
  return (
    <AppBar className={styles.header}>
      <Toolbar className={styles.toolbar}>
        <Logo />
        <div className={styles.login}>
          <MyLink href="#" size="LG">
            log in
          </MyLink>
          <Divider
            orientation="vertical"
            variant="middle"
            className={styles.divider}
          />
          <MyLink href="#" size="LG">
            sing up
          </MyLink>
        </div>
      </Toolbar>
    </AppBar>
  )
}
