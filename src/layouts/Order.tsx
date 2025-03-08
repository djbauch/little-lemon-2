import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export const Order = () => {
  return (
    <>
      <Header />
      <section className='order'>
        <ContactForm />
      </section>
      <Footer />
    </>
  )
}

export default Order
