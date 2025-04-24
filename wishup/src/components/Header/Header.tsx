import { AppBar, Toolbar, Typography } from '@mui/material'
import star from '../../../public/images/Star.png'

export const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography>WISHUP</Typography>
        <img src={star} />
      </Toolbar>
    </AppBar>
  )
}
