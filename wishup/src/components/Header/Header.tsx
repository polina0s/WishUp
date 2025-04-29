import {
  AppBar,
  Divider,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import styles from './Header.module.scss'
import { Logo } from '../Logo'
import { Link } from '../Link'
import profile from '/images/profile.png'
import classNames from 'classnames'
import { ActionIcon } from '../ActionIcon'

export const Header = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))

  if (isMobile) {
    return (
      <>
        <AppBar className={classNames(styles.header, styles['header--mobile'])}>
          <Toolbar className={styles.toolbar}>
            <Logo size="SM" />
            <ActionIcon color="transparent">
              <img src={profile} alt="Profile" />
            </ActionIcon>
          </Toolbar>
        </AppBar>
      </>
    )
  }

  if (isTablet) {
    return (
      <>
        <AppBar
          className={classNames(styles.header, styles['header--desktop'])}
        >
          <Toolbar className={styles.toolbar}>
            <Logo size="MD" />
            <div className={styles.login}>
              <Link href="#" size="LG">
                log in
              </Link>
              <Divider
                orientation="vertical"
                variant="middle"
                className={styles.divider}
              />
              <Link href="#" size="LG">
                sing up
              </Link>
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
          <Link href="#" size="LG">
            log in
          </Link>
          <Divider
            orientation="vertical"
            variant="middle"
            className={styles.divider}
          />
          <Link href="#" size="LG">
            sing up
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  )
}
