import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

export const Highlights = () => {
  return (
    <section className='highlights'>
      <h2>This week's specials!</h2>
      <Stack direction='row' spacing={4}>
        <Card sx={{ maxWidth: 264 }}>
          <CardMedia sx={{ height: 280, borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }} image='/greek salad.jpg' title='Greek Salad' />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Greek Salad
            </Typography>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished
              with crunchy garlic and rosemary croutons.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Order a delivery</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 264 }}>
          <CardMedia sx={{ height: 280, borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }} image='/bruchetta.svg' title='Bruchetta' />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Bruchetta
            </Typography>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and
              olive oil.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Order a delivery</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 264 }}>
          <CardMedia sx={{ height: 280, borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }} image='/lemon dessert.jpg' title='green iguana' />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lemon Dessert
            </Typography>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic
              as can be imagined.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Order a delivery</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      </Stack>
    </section>
  )
}

export default Highlights
