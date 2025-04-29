import { Text } from '../Text'
import styles from './Logo.module.scss'
import star from '/images/star.png'

interface LogoProps {
  size?: 'SM' | 'MD' | 'LG'
}

export const Logo = ({ size = 'LG' }: LogoProps) => {
  return (
    <>
      <div className={styles.container}>
        <Text
          {...(size === 'SM' && { variant: 'juliusSansOneXS' })}
          {...(size === 'MD' && { variant: 'juliusSansOneSM' })}
          {...(size === 'LG' && { variant: 'juliusSansOneLG' })}
          className={styles.logo}
        >
          WISHUP
        </Text>

        <img
          {...(size === 'SM' && { className: styles['star--SM'] })}
          {...(size === 'MD' && { className: styles['star--LG'] })}
          src={star}
        />
      </div>
    </>
  )
}
