import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import DeliveryDining from '@mui/icons-material/DeliveryDining'
import styled from '@emotion/styled'
import Color from 'color'

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
        height: 620, // 🔥 Fixes card height for uniformity. This size will work all the
        // way back to iPhone 4 in portrait mode and minimize the number of times we'll
        // need a scroll bar.
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily: 'Karla, sans-serif, Arial, Helvetica',
        backgroundColor: bgColor.hex(),
        overflow: 'hidden', // 🔥 Prevents overflow
      }}
    >
      <CardMedia
        component='img'
        sx={{
          height: 264, // Fixed height for consistency
          width: 264, // Fixed width for consistency
          objectFit: 'cover', // Maintains aspect ratio and fills the area (change to 'contain' if you prefer no cropping)
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
        }}
        image={imageURL}
        title={title}
      />

      <CardContent
        sx={{
          backgroundColor: backgroundColor,
          color: textColor,
          flexGrow: 1, // 🔥 Makes this section grow to fill available space
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflowY: 'auto', // 🔥 Enables scrolling if text is too long
        }}
      >
        <NameAndPriceBox>
          <Typography gutterBottom variant='h5' component='p' color={textColor}>
            {label}
          </Typography>
          <Typography gutterBottom variant='h6' component='p' sx={{ color: '#EE9972' }}>
            ${price}
          </Typography>
        </NameAndPriceBox>
        <Typography
          variant='body2'
          sx={{
            color: textColor,
            flexGrow: 1, // 🔥 Makes description fill available space
            overflowY: 'auto', // 🔥 Scrolls if text is too long
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          backgroundColor: bgColor.hex(),
          justifyContent: 'flex-end',
        }}
      >
        <Button
          size='small'
          endIcon={<DeliveryDining />}
          sx={{
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
