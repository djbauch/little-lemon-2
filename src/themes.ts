import { createTheme } from '@mui/material/styles'
import tokens from './designTokens'

const commonThemeElements = createTheme({

  typography: {
    // Titles
    h1: {
      fontFamily: tokens.serifFontFamily,
      fontSize: '64pt',
      fontWeight: 'bold' // 700
    },
    // Subtitles
    h2: {
      fontFamily: tokens.serifFontFamily,
      fontSize: '48pt',
      fontWeight: 'regular' // 400'
    },
    h3: {
      fontFamily: tokens.sansFontFamily,
      fontSize: '24pt',
      fontWeight: 'bold' // 700
    },
    h4: {
      fontFamily: tokens.sansFontFamily,
      fontSize: '20pt',
      fontWeight: 'bold' // 700
    },
    // Card titles
    h5: {
      fontFamily: tokens.sansFontFamily,
      fontSize: '18pt',
      fontWeight: 'bold' // 700
    },
    h6: {
      fontFamily: tokens.sansFontFamily,
      fontSize: '18pt',
      fontWeight: 'bold', // 700
      color: '#EE9972'
    },
    // Lead-text
    subtitle1: {
      fontFamily:tokens.sansFontFamily,
      fontWeight: 'regular', // 400
      fontSize: '40pt',
    },
    // Body
    body1: {
      fontFamily: tokens.sansFontFamily,
      fontSize: '16pt',
      fontWeight: 400, // regular
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: tokens.sansFontFamily,
      fontSize: '16pt',
      fontWeight: 'regular', // 400
      lineHeight: 1.5,
    },
    button: {
      fontFamily: tokens.sansFontFamily,
    },
    caption: {
      fontFamily: tokens.sansFontFamily,
    }
  }
})

export const lightTheme = createTheme({
  ...commonThemeElements,
  palette: {
    primary: {
      main: tokens.primary,
      dark: '#495e57',
    },
    secondary: {
      main: tokens.secondary,
      light: '#FBDABB',
    },
    background: {
      default: '#FFFFFF',
      paper: '#f4ce14',
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
  }
})

export const darkTheme = createTheme({
  ...commonThemeElements,
  palette: {
    primary: {
      main: tokens.primary,
      dark: '#495e57',
    },
    secondary: {
      main: tokens.secondary,
      light: '#FBDABB',
    },
    background: {
      default: '#000000',
      paper: '#495e57',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#495e57',
          borderRadius: '16px',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        },
      },
    },
  }
})


export default lightTheme