import * as React from 'react'

export const Nav = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-light'>
      <img src='/Logo.svg' alt='Logo' />

      <ul className='navbar-nav nav me-auto mb-2 mb-lg-0 nav-pills'>
        <li className='nav-item'>Home</li>
        <li className='nav-item'>About</li>
        <li className='nav-item'>Menu</li>
        <li className='nav-item'>Reservations</li>
        <li className='nav-item'>Order Online</li>
        <li className='nav-item'>Login</li>
      </ul>
    </nav>
  )
}

export default Nav
