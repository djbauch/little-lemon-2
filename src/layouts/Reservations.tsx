import Header from '../components/Header'
import Footer from '../components/Footer'
import BookingForm from '../components/BookingForm'

export const Reservations = () => {
  return (
    <>
      <Header />
      <section
        className='reservations'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
          padding: '20px',
        }}
      >
        <BookingForm />
      </section>
      <Footer />
    </>
  )
}

export default Reservations
