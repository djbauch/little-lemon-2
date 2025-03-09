import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
// Import our custom CSS
import './scss/styles.scss'
//import './index.css'
import '@fontsource-variable/karla'
//import * as bootstrap from 'bootstrap'
import App from './layouts/App.tsx'
import { ThemeProvider } from '@emotion/react'
import { BrowserRouter, Routes, Route } from 'react-router'
import About from './layouts/About'
import Login from './layouts/Login'
import Menu from './layouts/Menu'
import Order from './layouts/Order'
import Reservations from './layouts/Reservations'
import Acknowledgement from './layouts/Acknowledgement'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { lightTheme as theme} from './themes.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/reservations' element={<Reservations />} />
            <Route path='/acknowledgement' element={<Acknowledgement />} />
            <Route path='/order' element={<Order />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
