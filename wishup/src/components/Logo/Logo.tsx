import { Text } from '../Text'
import styles from './Logo.module.scss'
import star from '/images/star.png'

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
        <img className={styles.star} src={star} />
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
