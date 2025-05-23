import { Fab } from '@mui/material'
import classNames from 'classnames'
import styles from './ActionIcon.module.scss'

interface ActionIconProps {
  color?: 'transparent' | 'blue-100'
  size?: 'XS' | 'SM' | 'MD' | 'LG'
  className?: string
}

export const ActionIcon = ({
  size,
  color,
  children,
  className,
  ...props
}: React.PropsWithChildren<ActionIconProps>) => {
  const classes = classNames(
    {
      [styles['transparent']]: color === 'transparent',
      [styles['blue-100']]: color === 'blue-100',
      [styles['XS']]: size === 'XS',
      [styles['SM']]: size === 'SM',
      [styles['MD']]: size === 'MD',
      [styles['LG']]: size === 'LG',
    },
    className,
  )

  return (
    <Fab className={classes} {...props}>
      {children}
    </Fab>
  )
}
