import * as React from 'react'
import { Grid2 as Grid } from '@mui/material'
import { NavLink } from 'react-router'
import FacebookIcon from '@mui/icons-material/Facebook'
import XIcon from '@mui/icons-material/X'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'
export const Footer = () => {
  return (
    <Grid container spacing={2} className='bounded'>
      <Grid size={3}>
        <img src='2025-02-25_8-01-47LL.png' />
      </Grid>
      <Grid size={3}>
        <h3>Doormat Nav</h3>
        <nav>
          <ul style={{ listStyle: 'none', textAlign: 'left', paddingLeft: 0 }}>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/menu'>Menu</NavLink>
            </li>
            <li>
              <NavLink to='/reservations'>Reservations</NavLink>
            </li>
            <li>
              <NavLink to='/order'>Order&nbsp;Online</NavLink>
            </li>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
          </ul>
        </nav>
      </Grid>
      <Grid size={3}>
        <h3>Contact</h3>
        <nav>
          <ul style={{ listStyle: 'none', textAlign: 'left', paddingLeft: 0 }}>
            <li>Address</li>
            <li>Phone</li>
            <li>Email</li>
          </ul>
        </nav>
      </Grid>
      <Grid size={3}>
        <h3>Social Media</h3>
        <nav>
          <ul style={{ listStyle: 'none', textAlign: 'left', paddingLeft: 0 }}>
            <li>
              <FacebookIcon  sx={{fontSize: 32}}/>
            </li>
            <li>
              <InstagramIcon sx={{fontSize: 32}} />
            </li>
            <li>
              <YouTubeIcon  sx={{fontSize: 32}} />
            </li>
            <li>
              <TwitterIcon  sx={{fontSize: 32}}/>
            </li>
          </ul>
        </nav>
      </Grid>
    </Grid>
  )
}

export default Footer
