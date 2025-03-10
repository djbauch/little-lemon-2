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
      component="section"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, side-by-side on medium+
        bgcolor: theme.palette.primary.dark,
        py: 8,
        // Consider removing fixed heights or making them responsive
        // maxHeight: 960,
        // minHeight: 960,
      }}
    >
      <Box
        component="section"
        className="left-side"
        sx={{
          flex: 1,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h1" sx={{ color: theme.palette.primary.light }}>
          Little Lemon
        </Typography>
        <Typography variant="h2" sx={{ color: 'white' }}>
          Ipswich
        </Typography>
        <Box
          component="div"
          sx={{
            display: 'block',
            width: '32em',
            maxWidth: '32em',
            mt: 0,
          }}
        >
          <Typography
            sx={{
              display: 'block',
              color: 'white',
              fontSize: '20pt',
              fontWeight: 'regular',
              maxWidth: '32em',
              textAlign: 'justify',
              textJustify: 'distribute',
            }}
          >
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist
          </Typography>
        </Box>
        <Button>Reserve a Table</Button>
      </Box>

      <Box
        component="section"
        className="right-side"
        sx={{
          flex: 1,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Use Box as an img to better control styling */}
        <Box
          component="img"
          src="/restauranfood720.jpg"
          alt="food on a tray"
          sx={{
            width: { xs: '100%', md: 'auto' }, // Full width on mobile, auto on larger screens
            height: 'auto',
            maxWidth: '100%', // Ensure it never overflows its container
            // Optionally, add objectFit if you want to control cropping behavior
            // objectFit: 'cover',
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
