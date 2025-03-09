import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { DateTime } from 'luxon'
import { Button, Container, Typography, TextField, MenuItem, CircularProgress, Paper } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { fetchAPI, submitAPI } from '../APIMock'
import { useAppDispatch } from '../app/hooks'
import { initialState, updateReservation } from '../features/reservation/reservationSlice'

interface FormValues {
  date: string
  time: string
  numberOfGuests: number
  occasion: string
}

const validationSchema = Yup.object({
  date: Yup.string().required('Please select a date.'),
  time: Yup.string().required('Please select a time.'),
  numberOfGuests: Yup.number()
    .min(1, 'At least 1 guest is required.')
    .max(10, 'Maximum of 10 guests allowed.')
    .required('Please enter the number of guests.'),
  occasion: Yup.string().required('Please select an occasion.'),
})

const BookingForm = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [availableTimes, setAvailableTimes] = useState<string[]>([])

  const formik = useFormik<FormValues>({
    initialValues: initialState,
    validationSchema,
    onSubmit: (values) => {
      if (submitAPI(values)) {
        dispatch(updateReservation(values))
        navigate('/acknowledgement')
      }
    },
  })

  useEffect(() => {
    if (formik.values.date) {
      setAvailableTimes(fetchAPI(DateTime.fromISO(formik.values.date)))
    }
  }, [formik.values.date])

  const occasions = ['None', 'Birthday', 'Anniversary', 'Wedding', 'Graduation', 'Other']

  return (
    <Container maxWidth='sm'>
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant='h5' align='center' gutterBottom>
          Reserve a Table
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            data-testid='date-input'
            fullWidth
            margin='normal'
            label='Choose date'
            type='date'
            slotProps={{ inputLabel: { shrink: true } }}
            {...formik.getFieldProps('date')}
            error={!!formik.errors.date}
            helperText={formik.errors.date}
          />
          <TextField
            fullWidth
            margin='normal'
            label='Choose time'
            select
            {...formik.getFieldProps('time')}
            error={!!formik.errors.time}
            helperText={formik.errors.time}
          >
            {availableTimes.map((time) => (
              <MenuItem key={time} value={time}>
                {time}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            margin='normal'
            label='Number of guests'
            type='number'
            slotProps={{
              input: {
                inputProps: { min: 1, max: 10 },
              },
            }}
            {...formik.getFieldProps('numberOfGuests')}
            error={!!formik.errors.numberOfGuests}
            helperText={formik.errors.numberOfGuests}
          />
          <TextField
            fullWidth
            margin='normal'
            label='Occasion'
            select
            {...formik.getFieldProps('occasion')}
            error={!!formik.errors.occasion}
            helperText={formik.errors.occasion}
          >
            {occasions.map((occasion) => (
              <MenuItem key={occasion} value={occasion}>
                {occasion}
              </MenuItem>
            ))}
          </TextField>
          <Button
            data-testid='submit-button'
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            sx={{ mt: 3 }}
          >
            {formik.isSubmitting ? <CircularProgress size={24} /> : 'Make your reservation'}
          </Button>
        </form>
      </Paper>
    </Container>
  )
}

export default BookingForm
