import { Box, useMediaQuery } from '@mui/material'
import { Logo } from '../Logo'
import styles from './Footer.module.scss'
import { ActionIcon } from '../ActionIcon'
import youtube from '/images/youtube.png'
import instagram from '/images/instagram.png'
import facebook from '/images/facebook.png'
import x from '/images/x.png'
import pinterest from '/images/pinterest.png'
import { Link } from '../Link'
import vingrette from '/images/vignette.png'
import { theme } from '../../styles/theme'
import classNames from 'classnames'

export const Footer = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  if (isMobile) {
    return (
      <Box
        component="footer"
        className={classNames(styles.container, styles['container--mobile'])}
      >
        <Logo size="MD" />
        <Box>
          <ActionIcon
            color="transparent"
            className={styles['socialIcon--mobile']}
          >
            <img src={youtube} alt="YouTube" />
          </ActionIcon>
          <ActionIcon
            color="transparent"
            className={styles['socialIcon--mobile']}
          >
            <img src={instagram} alt="Instagram" />
          </ActionIcon>
          <ActionIcon
            color="transparent"
            className={styles['socialIcon--mobile']}
          >
            <img src={facebook} alt="Facebook" />
          </ActionIcon>
          <ActionIcon
            color="transparent"
            className={styles['socialIcon--mobile']}
          >
            <img src={x} alt="X" />
          </ActionIcon>
          <ActionIcon
            color="transparent"
            className={styles['socialIcon--mobile']}
          >
            <img src={pinterest} alt="Pinterest" />
          </ActionIcon>
        </Box>
        <Box className={styles['navigation--mobile']}>
          <Link size="SM" className={styles.navigationLink}>
            Home
          </Link>
          <Link size="SM" className={styles.navigationLink}>
            About Us
          </Link>
          <Link className={styles.navigationLink}>Privacy Policy</Link>
        </Box>
        <img
          src={vingrette}
          alt="WishUp"
          className={styles['vingrette--mobile']}
        />
      </Box>
    )
  }

  return (
    <Box component="footer" className={styles.container}>
      <Logo size="LG" className={styles.logo} />
      <Box className={styles.social}>
        <ActionIcon color="transparent" className={styles.socialIcon}>
          <img src={youtube} alt="YouTube" />
        </ActionIcon>
        <ActionIcon color="transparent" className={styles.socialIcon}>
          <img src={instagram} alt="Instagram" />
        </ActionIcon>
        <ActionIcon color="transparent" className={styles.socialIcon}>
          <img src={facebook} alt="Facebook" />
        </ActionIcon>
        <ActionIcon color="transparent" className={styles.socialIcon}>
          <img src={x} alt="X" />
        </ActionIcon>
        <ActionIcon color="transparent" className={styles.socialIcon}>
          <img src={pinterest} alt="Pinterest" />
        </ActionIcon>
      </Box>
      <Box className={styles.navigation}>
        <Link className={styles.navigationLink}>Home</Link>
        <Link className={styles.navigationLink}>About Us</Link>
        <Link className={styles.navigationLink}>Privacy Policy</Link>
      </Box>
      <img src={vingrette} alt="WishUp" />
    </Box>
  )
}
