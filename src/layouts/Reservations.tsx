import * as React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookingForm from '../components/BookingForm'
export const Reservations = () => {
  return (
    <>
      <Header />
      <section className='reservations'>
        <h2>Reservations</h2>
        <BookingForm />
      </section>
      <Footer />
    </>
  )
}

export default Reservations
