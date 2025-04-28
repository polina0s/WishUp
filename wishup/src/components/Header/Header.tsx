import {
  AppBar,
  Divider,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import styles from './Header.module.scss'
import { Logo } from '../Logo'
import { MyLink } from '../Link'
import profile from '../../../public/images/profile.png'
import classNames from 'classnames'

export const Header = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  if (isMobile) {
    return (
      <>
        <AppBar className={classNames(styles.header, styles['header--mobile'])}>
          <Toolbar className={styles.toolbar}>
            <Logo variant="SM" />
            <div className={styles.login}>
              <img src={profile} alt="Profile" />
            </div>
          </Toolbar>
        </AppBar>
      </>
    )
  }

  return (
    <AppBar className={classNames(styles.header, styles['header--desktop'])}>
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
