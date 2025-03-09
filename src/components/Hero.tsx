import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

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
  const theme = useTheme()
  return (
    <Box component='section' sx={{ display: 'flex', bgcolor: theme.palette.primary.dark, py: 8, maxHeight: 960, minHeight: 960 }}>
      <section className='left-side'>
        <Typography variant='h1' sx={{color: theme.palette.primary.light }}>Little Lemon</Typography>
        <Typography variant='h2' sx={{ color: 'white'}}>Ipswich</Typography>
        <Box component='div' sx={{ display: 'block', width: '32em', maxWidth: '32em', mt: 0}}>
          <Typography sx={{ display: 'block', color: 'white', fontSize: '20pt', fontWeight: 'regular', maxWidth: '32em' }}>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist
          </Typography>
        </Box>
        <Button>Reserve a Table</Button>
      </section>
      <section className='right-side'>
        <img src='/restauranfood720.jpg' height='1020px' alt='food on a tray' />
      </section>
    </Box>
  )
}

export default Hero
//We are a family owned Mediterranean restaurant, focused on traditional reciples served with a modern
//1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
//         10        20        30        40        50        60        70        80        90        100
