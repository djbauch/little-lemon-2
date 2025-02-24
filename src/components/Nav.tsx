import * as React from 'react'
import { NavLink }  from 'react-router'

export const Nav = () => {
  return (
    <nav className='nav-bar'>
      <img src='/Logo.svg' alt='Logo' />

      <ul className='navbar-nav'>
        <li className='nav-item'>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/menu'>Menu</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/reservations'>Reservations</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/order'>Order&nbsp;Online</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/login'>Login</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
