import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
// Import our custom CSS
import './scss/styles.scss'
//import './index.css'
import '@fontsource-variable/karla'
//import * as bootstrap from 'bootstrap'
import App from './layouts/App.tsx'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { BrowserRouter, Routes, Route } from 'react-router'
import About from './layouts/About.tsx'
import Login from './layouts/Login.tsx'
import Menu from './layouts/Menu.tsx'
import Order from './layouts/Order.tsx'
import Reservations from './layouts/Reservations.tsx'

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
      fontSize: '64pt',
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: 'Markazi Text Variable, Georgia, serif',
      fontSize: '48pt',
      fontWeight: 'regular',
    },

    h3: {
      fontFamily: 'Karla, system-ui, Avenir, Helvetica, Arial, sans-serif',
      fontSize: '24pt',
      fontWeight: 'bold',
    },
    h4: {
      fontFamily: 'Karla, system-ui, Avenir, Helvetica, Arial, sans-serif',
    },
    // Card Title
    h5: {
      fontFamily: 'Karla, system-ui, Avenir, Helvetica, Arial, sans-serif',
      fontSize: '18pt',
      fontWeight: 'bold',
    },
    h6: {
      fontFamily: 'Karla, system-ui, Avenir, Helvetica, Arial, sans-serif',
      fontSize: '18pt',
      fontWeight: 'bold',
      color: '#EE9972',
    },
    body1: {
      fontFamily: 'Karla, system-ui, Avenir, Helvetica, Arial, sans-serif',
    },
    body2: {
      fontFamily: 'Karla, system-ui, Avenir, Helvetica, Arial, sans-serif',
      fontSize: '16pt',
      fontWeight: 'regular',
    },
    subtitle1: {
      fontFamily: 'Markazi Text Variable, Georgia, serif',
      fontWeight: 'regular',
      fontSize: '40pt',
    },
    button: {
      fontFamily: 'Karla, system-ui, Avenir, Helvetica, Arial, sans-serif',
    },
    caption: {
      fontFamily: 'Karla, system-ui, Avenir, Helvetica, Arial, sans-serif',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        },
      },
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/reservations' element={<Reservations />} />
          <Route path='/order' element={<Order />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
