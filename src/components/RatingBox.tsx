import { JSX } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'

import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import { type TestimonialData } from '../types'

export function RatingBox(props: Readonly<{ testimonialData: TestimonialData }>): JSX.Element {
  return (
    <Card
      className='rating-box'
      sx={{
        display: 'flex',
        maxWidth: 264,
        minWidth: 264,
        height: 264,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 2,
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px', minWidth: '232px' }}>
        <Rating value={props.testimonialData.rating} readOnly />
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
          <img src={`${props.testimonialData.photo}`} width='96px' alt={props.testimonialData.name} />
          <span className='rating'>{props.testimonialData.name}</span>
        </Box>
        <Typography variant='body1' color='text.secondary' sx={{ paddingBottom: '16px', maxWidth: '200px' }}>
          {props.testimonialData.comment}
        </Typography>
      </Box>
    </Card>
  )
}

export default RatingBox
