import { Box, Grid2 as Grid, Typography } from '@mui/material'

import StyledButton from './StyledButton'
import { MenuCard, type MenuCardProps } from './MenuCard'
import { useTheme } from '@mui/material/styles'

const MenuHighlights: MenuCardProps[] = [
  {
    imageURL: '/greek salad.jpg',
    title: 'Greek Salad',
    label: 'Greek Salad',
    price: 12.99,
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    imageURL: '/bruchetta.svg',
    title: 'Bruchetta',
    label: 'Bruchetta',
    price: 5.99,
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    imageURL: '/lemon dessert.jpg',
    title: 'Lemon Dessert',
    label: 'Lemon Dessert',
    price: 5.0,
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
]

export const Highlights = () => {
  const theme = useTheme()
  return (
    <Box sx={{ display: 'block', color: theme.palette.secondary.main, textAlign: 'center', p: 2 }}>
      <Typography
        variant='h4'
        component='h2'
        sx={{ mb: 4, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' } }}
      >
        This week's specials!
      </Typography>

      <StyledButton>Online Menu</StyledButton>

      <Grid container spacing={2} justifyContent='center' sx={{ maxWidth: 1200, mx: 'auto' }}>
        {MenuHighlights.map((menuCard) => (
          <Grid key={menuCard.label}>
            <MenuCard {...menuCard} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Highlights
