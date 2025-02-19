import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Import our custom CSS
import './scss/styles.scss'
import './index.css'
import '@fontsource-variable/karla'
import * as bootstrap from 'bootrap'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
