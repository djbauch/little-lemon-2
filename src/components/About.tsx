import { Grid2 as Grid } from '@mui/material'
import { Typography } from '@mui/material'

export const About = () => {
  return (
    <section className='about'>
      <Grid container spacing={2} className='bounded'>
        <Grid size={6}>
          <Typography variant='h1'>Little Lemon</Typography>
          <Typography variant='h2'>Ipswich</Typography>
          <div className='textblock'>
            <p>
              We are a family owned Mediterranean restaurant, focused on traditional reciples served with a modern twist
            </p>
          </div>
        </Grid>
        <Grid size={6}>
          <img src='/Mario and Adrian b.jpg' height='480px' alt='Mario and Adrian' />
        </Grid>
      </Grid>
    </section>
  )
}

export default About
