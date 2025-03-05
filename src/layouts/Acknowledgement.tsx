import * as React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ConfirmedBooking from '../components/ConfirmedBooking'

export const Acknowledgement = () => {

  return (
    <>
      <Header />
      <section className='confirmation'>
        <ConfirmedBooking  />
      </section>
      <Footer />
    </>
  )
}

export default Acknowledgement
