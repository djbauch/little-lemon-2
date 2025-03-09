import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { Grid2 as Grid } from '@mui/material'

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
    <Stack
      sx={{ display: 'block', color: theme.palette.secondary.main, mt: 120, ml: 64 }}
    >
      <Grid container spacing={2} className='bounded'>
        <Grid size={6}>
          <Typography variant='h2'>This week's specials!</Typography>
        </Grid>
        <Grid size={4}>
          <StyledButton>Online Menu</StyledButton>
        </Grid>
      </Grid>
      <Stack direction='row' spacing={4} className='cards'>
        {MenuHighlights.map((menuCard) => (
          <MenuCard key={menuCard.label} {...menuCard} />
        ))}
      </Stack>
    </Stack>
  )
}

export default Highlights
