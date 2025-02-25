import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { Grid2 as Grid } from '@mui/material'
import DeliveryDining from '@mui/icons-material/DeliveryDining'
import styled from '@emotion/styled'
import StyledButton from './StyledButton'

export const Highlights = () => {
  const NameAndPriceBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  `

  return (
    <Stack className='highlights'>
      <Grid container spacing={2} className='bounded'>
        <Grid size={6}>
          <Typography variant='h2'>This week's specials!</Typography>
        </Grid>
        <Grid size={4}>
          <StyledButton>Online Menu</StyledButton>
        </Grid>
      </Grid>
      <Stack direction='row' spacing={4} className='cards'>
        <Card sx={{ maxWidth: 264 }}>
          <CardMedia
            sx={{ height: 280, borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
            image='/greek salad.jpg'
            title='Greek Salad'
          />
          <CardContent>
            <NameAndPriceBox>
              <Typography gutterBottom variant='h5' component='p'>
                Greek Salad
              </Typography>
              <Typography gutterBottom variant='h6' component='p'>
                $12.99
              </Typography>
            </NameAndPriceBox>
            <Typography variant='body2' sx={{ color: 'text.secondary', minHeight: '214px' }}>
              The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished
              with crunchy garlic and rosemary croutons.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant='text'
              size='small'
              endIcon={<DeliveryDining />}
              sx={{
                alignSelf: 'flex-end',
                color: 'black',
                borderColor: 'primary.main',
                '&:hover': {
                  color: 'primary.dark',
                  borderColor: 'primary.dark',
                },
              }}
            >
              Order a delivery
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 264, justifyContent: 'flex-start' }}>
          <CardMedia
            sx={{ height: 280, borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
            image='/bruchetta.svg'
            title='Bruchetta'
          />
          <CardContent>
            <NameAndPriceBox>
              <Typography gutterBottom variant='h5' component='p'>
                Bruchetta
              </Typography>
              <Typography gutterBottom variant='h6' component='p'>
                $5.99
              </Typography>
            </NameAndPriceBox>
            <Typography variant='body2' sx={{ color: 'text.secondary', minHeight: '214px' }}>
              Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and
              olive oil.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button
              size='small'
              endIcon={<DeliveryDining />}
              sx={{
                alignSelf: 'flex-end',
                color: 'black',
                borderColor: 'primary.main',
                '&:hover': {
                  color: 'primary.dark',
                  borderColor: 'primary.dark',
                },
              }}
            >
              Order a delivery
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 264 }}>
          <CardMedia
            sx={{ height: 280, borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
            image='/lemon dessert.jpg'
            title='green iguana'
          />
          <CardContent>
            <NameAndPriceBox>
              <Typography gutterBottom variant='h5' component='p'>
                Lemon Dessert
              </Typography>
              <Typography gutterBottom variant='h6' component='p'>
                $5.00
              </Typography>
            </NameAndPriceBox>
            <Typography variant='body2' sx={{ color: 'text.secondary', minHeight: '214px' }}>
              This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic
              as can be imagined.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size='small'
              endIcon={<DeliveryDining />}
              sx={{
                color: 'black',
                borderColor: 'primary.main',
                '&:hover': {
                  color: 'primary.dark',
                  borderColor: 'primary.dark',
                },
              }}
            >
              Order a delivery
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </Stack>
  )
}

export default Highlights
