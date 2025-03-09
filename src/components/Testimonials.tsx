import { useState } from 'react'
import { TestimonialData } from '../types'
import { Box, Typography } from '@mui/material'
import RatingBox from './RatingBox'
export const Testimonials = () => {
  const [testimonials] = useState<TestimonialData[]>([
    { rating: 5, name: 'John Doe', comment: 'Great service!', photo: 'john-doe.jpg' },
    { rating: 4, name: 'Jane Doe', comment: 'Good job!', photo: 'jane-doe.jpg' },
    { rating: 5, name: 'John Smith', comment: 'Excellent!', photo: 'john-smith.jpg' },
    {
      rating: 3,
      name: 'Jane Smith',
      comment: 'Could be better. It was too loud and there were too many people there.',
      photo: 'jane-smith.jpg',
    },
  ])
  return (
    <Box
      component='section'
      className='testimonials'
      sx={{ display: 'flex', flexDirection: 'column', padding: '16px', alignItems: 'center' }}
    >
      <Typography variant='h2'>Testimonials</Typography>
      <Box
        className='testimonials'
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(264px, 1fr))',
          gridGap: '16px',
          justifyContent: 'center',
          padding: '16px',
          alignItems: 'center',
          maxWidth: '1280px',
          width: '100%',
        }}
      >
        {testimonials.map((testimonial) => (
          <RatingBox key={testimonial.name} testimonialData={testimonial} />
        ))}
      </Box>
    </Box>
  )
}

export default Testimonials
