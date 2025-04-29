import { Link as LinkMui } from '@mui/material'
import styles from './Link.module.scss'
import classNames from 'classnames'

interface LinkProps {
  variant?: 'bold'
  size?: 'SM' | 'LG'
  color?: 'blue-200'
  href?: string
  className?: string
}

export const Link = ({
  children,
  href,
  variant,
  size,
  color,
  className,
}: React.PropsWithChildren<LinkProps>) => {
  const classes = classNames(
    {
      [styles.link]: true,
      [styles['bold']]: variant === 'bold',
      [styles['LG']]: size === 'LG',
      [styles['blue-200']]: color === 'blue-200',
    },
    className,
  )

  return (
    <LinkMui href={href} underline="hover" className={classes}>
      {children}
    </LinkMui>
  )
}
