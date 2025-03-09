import { Box, Grid2 as Grid, Typography } from '@mui/material'

export const About = () => {
  return (
    <Box component='section' sx={{ bgcolor: 'background.paper', py: 8, display: 'block'}}>
      <Grid container spacing={2} className='bounded'>
        <Grid size={6}>
          <Typography variant='h1'>Little Lemon</Typography>
          <Typography variant='h2'>Ipswich</Typography>
          <Box component='div' sx={{ display: 'block', width: '32em', maxWidth: '32em', mt: 0 }}>
            <p>
              We are a family owned Mediterranean restaurant, focused on traditional reciples served with a modern twist
            </p>
          </Box>
        </Grid>
        <Grid size={6}>
          <img src='/Mario and Adrian b.jpg' height='480px' alt='Mario and Adrian' />
        </Grid>
      </Grid>
    </Box>
  )
}

export default About
