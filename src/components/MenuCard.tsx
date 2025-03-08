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
import './Menucard.module.scss'
import  Color from 'color'

export interface MenuCardProps {
  imageURL: string
  title: string
  label: string
  price: number
  description: string
  backgroundColor?: string
}
export const MenuCard = ({ imageURL, title, label, price, description, backgroundColor }: MenuCardProps) => {
  const NameAndPriceBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  `
  const bgColor = Color(backgroundColor ?? 'white')
  const textColor = bgColor.isDark() ? 'white' : 'black'
  return (
    <Card
      sx={{
        maxWidth: 264,
        minWidth: 264,
        justifyContent: 'flex-start',
        fontfamily: 'Karla, sans-serif, Arial, Helvetica',
        height: '100%',
        minHeight: '100%',
      }}
    >
      <CardMedia
        sx={{ height: 280, borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
        image={imageURL}
        title={title}
      />
      <CardContent sx={{ backgroundColor: backgroundColor }}>
        <NameAndPriceBox>
          <Typography gutterBottom variant='h5' component='p' color={textColor}>
            {label}
          </Typography>
          <Typography gutterBottom variant='h6' component='p' sx={{ color: '#EE9972' }}>
            ${price}
          </Typography>
        </NameAndPriceBox>
        <Typography variant='body2' sx={{ color: textColor, minHeight: '214px' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ backgroundColor: bgColor.hex() }}>
        <Button
          size='small'
          endIcon={<DeliveryDining />}
          sx={{
            alignSelf: 'flex-end',
            color: textColor,
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
  )
}
