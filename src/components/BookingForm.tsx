import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { DateTime } from 'luxon'
import {
  Button,
  Container,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Select,
  Input,
  FormErrorMessage,
  Spinner,
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { fetchAPI, submitAPI } from '../APIMock'
import { useAppDispatch } from '../app/hooks'
import { initialState, updateReservation } from '../features/reservation/reservationSlice'

// Define the type for form values
interface FormValues {
  date: string
  time: string
  numberOfGuests: number
  occasion: string
}

// Validation schema using Yup
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
      console.log('Reservation submitted:', values)
      if (submitAPI(values)) {
        console.log('Reservation successful')
        dispatch(updateReservation(values))
        navigate('/acknowledgement')
      } else {
        console.error('Reservation failed')
      }
    },
  })

  // Fetch available times when date changes
  useEffect(() => {
    if (formik.values.date) {
      const times = fetchAPI(DateTime.fromISO(formik.values.date))
      setAvailableTimes(times)
    }
  }, [formik.values.date])

  const occasions = ['None', 'Birthday', 'Anniversary', 'Wedding', 'Graduation', 'Other']

  return (
    <Container maxW='md' py={6}>
      <form onSubmit={formik.handleSubmit}>
        <Box p={6} boxShadow='md' borderRadius='md' bg='#495e57' color='white'>
          <Heading size='lg' mb={4} textAlign='center'>
            Reserve a Table
          </Heading>

          {/* Date Field */}
          <FormControl mb={4} isInvalid={!!formik.errors.date && formik.touched.date}>
            <FormLabel htmlFor='date'>Choose date</FormLabel>
            <Input
              id='date'
              type='date'
              bg='#f8e28f'
              color='black'
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormErrorMessage color='red'>{formik.errors.date}</FormErrorMessage>
          </FormControl>

          {/* Time Field */}
          <FormControl mb={4} isInvalid={!!formik.errors.time && formik.touched.time}>
            <FormLabel htmlFor='time'>Choose time</FormLabel>
            <Select
              id='time'
              placeholder='Select time'
              value={formik.values.time}
              color='black'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </Select>
            <FormErrorMessage color='red'>{formik.errors.time}</FormErrorMessage>
          </FormControl>

          {/* Number of Guests Field */}
          <FormControl mb={4} isInvalid={!!formik.errors.numberOfGuests && formik.touched.numberOfGuests}>
            <FormLabel htmlFor='numberOfGuests'>Number of guests</FormLabel>
            <Input
              id='numberOfGuests'
              type='number'
              min={1}
              max={10}
              value={formik.values.numberOfGuests}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormErrorMessage>{formik.errors.numberOfGuests}</FormErrorMessage>
          </FormControl>

          {/* Occasion Field */}
          <FormControl mb={4} isInvalid={!!formik.errors.occasion && formik.touched.occasion}>
            <FormLabel htmlFor='occasion'>Occasion</FormLabel>
            <Select
              id='occasion'
              placeholder='Select occasion'
              value={formik.values.occasion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {occasions.map((occasion) => (
                <option key={occasion} value={occasion}>
                  {occasion}
                </option>
              ))}
            </Select>
            <FormErrorMessage color='red'>{formik.errors.occasion}</FormErrorMessage>
          </FormControl>

          {/* Submit Button */}
          <Button
            type='submit'
            colorScheme='teal'
            bg='#f4ce14'
            width='full'
            mt={4}
            isDisabled={!formik.isValid || formik.isSubmitting}
          >
            {formik.isSubmitting ? <Spinner size='sm' /> : 'Make your reservation'}
          </Button>
        </Box>
      </form>
    </Container>
  )
}

export default BookingForm
