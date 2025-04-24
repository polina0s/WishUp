import classNames from 'classnames'
import styles from './Text.module.scss'

interface TextProps {
  variant?:
    | 'juliusSansOneXS'
    | 'juliusSansOneSM'
    | 'juliusSansOneMD'
    | 'juliusSansOneLG'
    | 'juliusSansOneXL'
    | 'montserratAlternatesSMRegular'
    | 'montserratAlternatesMDRegular'
    | 'montserratAlternatesLGRegular'
    | 'montserratAlternatesSMBold'
    | 'montserratAlternatesLGBold'
  color?: 'blue-200' | 'blue-300'
  className?: string
}

export const Text = ({
  children,
  variant,
  color,
  className,
  ...props
}: React.PropsWithChildren<TextProps>) => {
  const textClass = classNames(
    {
      [styles['juliusSansOneXS']]: variant === 'juliusSansOneXS',
      [styles['juliusSansOneSM']]: variant === 'juliusSansOneSM',
      [styles['juliusSansOneMD']]: variant === 'juliusSansOneMD',
      [styles['juliusSansOneLG']]: variant === 'juliusSansOneLG',
      [styles['juliusSansOneXL']]: variant === 'juliusSansOneXL',
      [styles['montserratAlternatesSMRegular']]:
        variant === 'montserratAlternatesSMRegular',
      [styles['montserratAlternatesMDRegular']]:
        variant === 'montserratAlternatesMDRegular',
      [styles['montserratAlternatesLGRegular']]:
        variant === 'montserratAlternatesLGRegular',
      [styles['montserratAlternatesSMBold']]:
        variant === 'montserratAlternatesSMBold',
      [styles['montserratAlternatesLGBold']]:
        variant === 'montserratAlternatesLGBold',
      [styles['blue-200']]: color === 'blue-200',
      [styles['blue-300']]: color === 'blue-300',
    },
    className,
  )

  return (
    <p
      className={textClass}
      {...(props as React.HTMLAttributes<HTMLParagraphElement>)}
    >
      {children}
    </p>
  )
}
