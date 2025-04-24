import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          '--Paper-shadow': 'none',
          boxShadow: 'none',
        },
      },
    },
  },
})
