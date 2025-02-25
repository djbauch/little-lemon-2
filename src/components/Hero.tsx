import * as React from 'react'

import styled from '@emotion/styled'

export const Button = styled.button`
  background-color: #f4ce14;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 32px;
  font-weight: regular;
  margin: 8px 2px;
  cursor: pointer;
`
export const Hero = () => {
  return (
    <section className='hero'>
      <section className='left-side'>
      <h1>Little Lemon</h1>
      <h2>Ipswich</h2>
      <div className='textblock'>
      <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist
      </p>
      </div>
      <Button>Reserve a Table</Button>
      </section>
      <section className='right-side'>

        <img src='/restauranfood720.jpg' height='1020px' alt='food on a tray'/>
        </section>
    </section>
  )
}

export default Hero
//We are a family owned Mediterranean restaurant, focused on traditional reciples served with a modern
//1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
//         10        20        30        40        50        60        70        80        90        100