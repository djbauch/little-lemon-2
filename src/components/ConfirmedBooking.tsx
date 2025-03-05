import {  Container, Typography, Box } from '@mui/material'
import {  useAppSelector } from '../app/hooks'
import { selectDate, selectTime, selectNumberOfGuests, selectOccasion } from '../features/reservation/reservationSlice'

const ConfirmedBooking = () => {
  const date = useAppSelector(selectDate)
  const time = useAppSelector(selectTime)
  const numberOfGuests = useAppSelector(selectNumberOfGuests)
  const occasion = useAppSelector(selectOccasion)
  return (
    <Container maxWidth='sm'>
      <Box className='acknowledgement'
        component='div'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          p: 3,
          borderRadius: 8,
          boxShadow: 3,
        }}
      >
        <Typography variant='h5' align='center' gutterBottom>
          Thanks for your reservation!
        </Typography>

        <Typography variant='body1' align='left' gutterBottom>
          We look forward to seeing you {' '}
          {numberOfGuests > 1
           ? numberOfGuests === 2
           ? 'and your guest '
           : `and your ${numberOfGuests - 1} guests `
           : ' '}
          on {date}
          {' '} at {time}
          {' '} We hope you enjoy spending your {' '}
          {occasion === 'None'
          ? ''
          : occasion + ' '}
          celebration with us
         </Typography>
      </Box>
    </Container>
  )
}

export default ConfirmedBooking
