import * as React from 'react'

export const Nav = () => {
  return (
    <nav className='nav-bar'>
      <img src='/Logo.svg' alt='Logo' />

      <ul className='navbar-nav nav me-auto mb-2 mb-lg-0 nav-pills'>
        <li className='nav-item'>
          <a href='#home'>Home</a>
        </li>
        <li className='nav-item'>
          <a href='about'>About</a>
        </li>
        <li className='nav-item'>
          <a href='#menu'>Menu</a>
        </li>
        <li className='nav-item'>
          <a href='#reservations'>Reservations</a>
        </li>
        <li className='nav-item'>
          <a href='#order'>Order&nbsp;Online</a>
        </li>
        <li className='nav-item'>
          <a href='#login'>Login</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
