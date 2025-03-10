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
    <Box
      component='main'
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Stacks on small screens, side-by-side on medium+
        alignItems: { xs: 'start', md: 'flex-start' }, // Top align when in row layout
        bgcolor: theme.palette.primary.dark,
        color: theme.palette.primary.main,
        py: 8,
        maxHeight: '96vh',
        // Removing fixed heights for natural responsiveness
      }}
    >
      <Box
        component='section'
        sx={{
          bgColor: theme.palette.primary.dark,
          flex: 1,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start', // Top alignment
          alignItems: { xs: 'flex-start', md: 'flex-start' },
          maxHeight: '80vh',
          marginLeft: '64px',
        }}
      >
        <Typography
          variant='h1'
          sx={{
            textAlign: 'left',
            color: theme.palette.primary.main,
            fontSize: { xs: '2rem', md: '3rem' }, // Responsive font size for title
          }}
        >
          Little Lemon
        </Typography>
        <Typography
          variant='h2'
          sx={{
            textAlign: 'left',
            color: 'white',
            fontSize: { xs: '1.5rem', md: '2rem' }, // Responsive font size for subtitle
          }}
        >
          Ipswich
        </Typography>
        <Box
          component='div'
          sx={{
            mt: 2,
            width: { xs: '90%', md: '32em' },
            maxWidth: '32em',
          }}
        >
          <Typography
            sx={{
              display: 'block',
              maxWidth: '32em',
              color: 'white',
              fontSize: { xs: '1rem', md: '20pt' },
              fontWeight: 'regular',
              textAlign: 'justify',
            }}
          >
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </Typography>
        </Box>
        <Button>Reserve a Table</Button>
      </Box>

      <Box
        component='section'
        sx={{
          flex: 1,
          p: 2,
          display: 'flex',
          alignItems: 'flex-start', // Ensures the image container is top-aligned
          justifyContent: 'center',
          bgcolor: 'transparent',
          width: { xs: '100%', md: '50%' },
        }}
      >
        <Box
          component='img'
          src='/restauranfood720.jpg'
          alt='food on a tray'
          sx={{
            width: { xs: '90%', md: 'auto' }, // Full width on small screens
            height: 'auto', // Maintain aspect ratio
            maxWidth: { xs: '100%', md: '500px' }, // Optionally constrain on larger screens
            maxHeight: { xs: '50vh', md: '90vh' }, // Optionally constrain on larger screens
            display: 'block',
            objectFit: 'contain', // Maintain aspect ratio
            borderRadius: '32px',
          }}
        />
      </Box>
    </Box>
  )
}

export default Hero

//We are a family owned Mediterranean restaurant, focused on traditional reciples served with a modern
//1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
//         10        20        30        40        50        60        70        80        90        100
