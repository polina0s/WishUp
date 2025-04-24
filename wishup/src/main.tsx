import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.scss'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { theme } from './styles/theme'
import { CssBaseline, StyledEngineProvider } from '@mui/material'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <RouterProvider router={router} />
      </StyledEngineProvider>
    </ThemeProvider>
  </StrictMode>,
)
