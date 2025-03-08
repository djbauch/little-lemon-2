import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
export const About = () => {
  return (
    <>
      <Header />
      <section className='about' style={{marginBottom: '128px'}}>
        <Hero/>
      </section>
      <Footer />
    </>
  )
}

export default About
