import { AppBar, Toolbar } from '@mui/material'
import star from '../../../public/images/Star.png'
import { Text } from '../Text'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <AppBar className={styles.header}>
      <Toolbar className={styles.toolbar}>
        <Text
          variant="juliusSansOneLG"
          color="blue-300"
          className={styles.logo}
        >
          WISHUP
        </Text>
        <img src={star} />
      </Toolbar>
    </AppBar>
  )
}
