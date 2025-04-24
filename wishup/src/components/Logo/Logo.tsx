import { Text } from '../Text'
import styles from './Logo.module.scss'
import star from '../../../public/images/Star.png'

interface LogoProps {
  variant?: 'SM' | 'MD' | 'LG'
}

export const Logo = ({ variant = 'LG' }: LogoProps) => {
  if (variant === 'SM') {
    return (
      <div className={styles.container}>
        <Text
          variant="juliusSansOneXS"
          color="blue-300"
          className={styles.logo}
        >
          WISHUP
        </Text>
        <img src={star} />
      </div>
    )
  }

  if (variant === 'MD') {
    return (
      <div className={styles.container}>
        <Text
          variant="juliusSansOneSM"
          color="blue-300"
          className={styles.logo}
        >
          WISHUP
        </Text>
        <img src={star} />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Text variant="juliusSansOneLG" color="blue-300" className={styles.logo}>
        WISHUP
      </Text>
      <img src={star} />
    </div>
  )
}
