import { useState } from 'react'
import { NavLink } from 'react-router'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'

export const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open)
  }

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Menu', path: '/menu' },
    { label: 'Reservations', path: '/reservations' },
    { label: 'Order Online', path: '/order' },
    { label: 'Login', path: '/login' },
  ]

  return (
    <>
      <IconButton
        edge='start'
        color='inherit'
        aria-label='menu'
        sx={{ display: { xs: 'flex', md: 'none' } }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton component={NavLink} to={item.path} onClick={toggleDrawer(false)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component='nav'
        sx={{
          display: { xs: 'none', md: 'flex' },
          gap: 2,
        }}
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              padding: '8px 16px',
            }}
          >
            {item.label}
          </NavLink>
        ))}
      </Box>
    </>
  )
}

export default Nav
