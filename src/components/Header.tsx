import { useState, useEffect } from 'react'
import Nav from './Nav'
import { AppBar, Toolbar, Slide, useScrollTrigger } from '@mui/material'
export const Header = () => {
  useScrollTrigger()
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setShow(false) // Scrolling down
      } else {
        setShow(true) // Scrolling up
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <Slide in={show} direction='down'>
      <AppBar position='sticky' sx={{ backgroundColor: 'white', padding: 0 }}>
        <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: 'white' }}>
          <img src='/Logo.svg' alt='Logo' style={{ height: 40 }} />
          <Nav />
        </Toolbar>
      </AppBar>
    </Slide>
  )
}

export default Header
