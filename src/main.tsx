import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
// Import our custom CSS
import './scss/styles.scss'
//import './index.css'
import '@fontsource-variable/karla'
//import * as bootstrap from 'bootstrap'
import App from './App.tsx'
import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#f4ce14',
      dark: '#495e57',
    },
    secondary: {
      main: '#EE9972',
      light: '#FBDABB',
    },
    background: {
      default: '#FFFFFF',
      paper: '#f4ce14',
    },
  },
  typography: {
    fontFamily: 'Karla, system-ui, Avenir, Helvetica, Arial, sans-serif',
    h1: {
      fontFamily: 'Markazi Text Variable, Georgia, serif',
    },
    h2: {
      fontFamily: 'Karla',
    },
    h3: {
      fontFamily: 'Karla',
    },
    h4: {
      fontFamily: 'Karla',
    },
    h5: {
      fontFamily: 'Karla',
    },
    h6: {
      fontFamily: 'Karla',
    },
    body1: {
      fontFamily: 'Karla',
    },
    body2: {
      fontFamily: 'Karla',
    },
    subtitle1: {
      fontFamily: 'Markazi Text Variable, Georgia, serif',
      fontWeight: 'regular',
      fontSize: '40pt',
    },
    button: {
      fontFamily: 'Karla',
    },
    caption: {
      fontFamily: 'Karla',
    }
  }
})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <App />
  </StrictMode>
)
