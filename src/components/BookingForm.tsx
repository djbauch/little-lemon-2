/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { DateTime } from 'luxon'
import {
  Button,
  Container,
  Typography,
  Box,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  TextField,
} from '@mui/material'
import { NumberField } from '@base-ui-components/react/number-field'
import { fetchAPI, submitAPI } from '../APIMock'
import styles from './BookingForm.module.scss'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { initialState, updateReservation } from '../features/reservation/reservationSlice'
import { useAppDispatch } from '../app/hooks'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const BookingForm = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [availableTimes, setAvailableTimes] = useState<string[]>([])

  // Validation schema for Formik
  const validationSchema = Yup.object({
    date: Yup.string().required('Please choose a date.'),
    time: Yup.string().required('Please choose a time.'),
    numberOfGuests: Yup.number()
      .min(1, 'Must be at least 1 guest.')
      .max(10, 'Maximum 10 guests allowed.')
      .required('Please specify number of guests.'),
    occasion: Yup.string().required('Please select an occasion.'),
  })

  const occasions = ['None', 'Birthday', 'Anniversary', 'Wedding', 'Graduation', 'Other']

  return (
    <Container maxWidth='sm'>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Reservation submitted:', values)
          if (submitAPI(values)) {
            console.log('Reservation successful')
            dispatch(updateReservation(values))
            navigate('/acknowledgement')
          } else {
            console.error('Reservation failed')
          }
          setSubmitting(false)
        }}
      >
        {({ values, setFieldValue, isSubmitting, errors, touched }) => (
          <Form>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                p: 3,
                backgroundColor: 'white',
                borderRadius: 8,
                boxShadow: 3,
              }}
            >
              <Typography variant='h5' align='center' gutterBottom>
                Reserve a Table
              </Typography>

              <Field name='date'>
                {({ field }: any) => (
                  <>
                    <label htmlFor='res-date'>Choose date</label>
                    <input
                      type='date'
                      id='res-date'
                      {...field}
                      onChange={(e) => {
                        setFieldValue('date', e.target.value)
                        const times = fetchAPI(DateTime.fromISO(e.target.value))
                        setAvailableTimes(times)
                      }}
                    />
                    <ErrorMessage name='date' component='div' className='Error' />
                  </>
                )}
              </Field>

              <Field name='time'>
                {({ field }: any) => (
                  <>
                    <InputLabel id='time-label' htmlFor='res-time'>
                      Choose time
                    </InputLabel>
                    <Select
                      id='res-time'
                      {...field}
                      value={values.time}
                      onChange={(e) => setFieldValue('time', e.target.value)}
                    >
                      {availableTimes.map((time) => (
                        <MenuItem key={time} value={time}>
                          {time}
                        </MenuItem>
                      ))}
                    </Select>
                    <ErrorMessage name='time' component='div' className='Error' />
                  </>
                )}
              </Field>

              <Field name='numberOfGuests'>
                {({ field }: any) => (
                  <>
                    <NumberField.Root
                      id='res-guests'
                      value={values.numberOfGuests}
                      defaultValue={1}
                      min={1}
                      max={10}
                      onValueChange={(value) => setFieldValue('numberOfGuests', value ?? 0)}
                      className={styles.Field}
                    >
                      <NumberField.ScrubArea className={styles.ScrubArea}>
                        <label htmlFor='res-guests' className={styles.Label}>
                          Number of guests
                        </label>
                      </NumberField.ScrubArea>
                      <NumberField.Group className={styles.Group}>
                        <NumberField.Decrement className={styles.Decrement}>
                          <RemoveIcon />
                        </NumberField.Decrement>
                        <NumberField.Input className={styles.Input} />
                        <NumberField.Increment className={styles.Increment}>
                          <AddIcon />
                        </NumberField.Increment>
                      </NumberField.Group>
                    </NumberField.Root>
                    <ErrorMessage name='numberOfGuests' component='div' className='Error' />
                  </>
                )}
              </Field>

              <Field name='occasion'>
                {({ field }: any) => (
                  <>
                    <InputLabel id='occasion-label' htmlFor='occasion'>
                      Occasion
                    </InputLabel>
                    <Select
                      id='occasion'
                      {...field}
                      value={values.occasion}
                      onChange={(e) => setFieldValue('occasion', e.target.value)}
                    >
                      {occasions.map((occasion) => (
                        <MenuItem key={occasion} value={occasion}>
                          {occasion}
                        </MenuItem>
                      ))}
                    </Select>
                    <ErrorMessage name='occasion' component='div' className='Error' />
                  </>
                )}
              </Field>

              <Button type='submit' variant='contained' disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Make your reservation'}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default BookingForm
