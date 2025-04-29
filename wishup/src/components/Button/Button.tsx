import { Button as ButtonMui } from '@mui/material'
import classNames from 'classnames'
import styles from './Button.module.scss'

interface ButtonProps {
  size?: 'SM' | 'LG'
  color?: 'blue-100' | 'blue-200'
}

export function Button({
  size,
  color,
  children,
  ...props
}: React.PropsWithChildren<ButtonProps>) {
  const classes = classNames({
    [styles['SM']]: size === 'SM',
    [styles['LG']]: size === 'LG',
    [styles['blue-100']]: color === 'blue-100',
    [styles['blue-200']]: color === 'blue-200',
  })

  return (
    <ButtonMui className={classes} {...props}>
      {children}
    </ButtonMui>
  )
}
