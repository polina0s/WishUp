import classNames from 'classnames'
import { Text } from '../Text'
import styles from './Logo.module.scss'
import star from '/images/star.png'

interface LogoProps {
  size?: 'SM' | 'MD' | 'LG'
  className?: string
}

export const Logo = ({ size = 'LG', className }: LogoProps) => {
  const classes = classNames(
    {
      [styles['container']]: true,
    },
    className,
  )
  return (
    <>
      <div className={classes}>
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
