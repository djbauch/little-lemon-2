import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { DateTime } from 'luxon'
import { Button, Container, Typography, Box, InputLabel, Select, MenuItem } from '@mui/material'
import { NumberField } from '@base-ui-components/react/number-field'
import { fetchAPI, submitAPI } from '../APIMock'
import styles from './BookingForm.module.scss'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import {
  initialState,
  updateReservation,
} from '../features/reservation/reservationSlice'

import { useAppDispatch } from '../app/hooks'

const BookingForm = () => {
  const dispatch = useAppDispatch()
  const [formState, setFormState] = useState(initialState)
  const navigate = useNavigate()
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const times = fetchAPI(DateTime.fromISO(formState.date))
    setFormState({ ...formState, availableTimes: times })
  }, [formState.date])

  useEffect(() => {
    if (success) {
      navigate('/acknowledgement')
    }
  }, [success])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Reservation submitted:', formState.date, formState.time, formState.numberOfGuests, formState.occasion)
    if (submitAPI(formState)) {
      console.log('Reservation successful')
      dispatch(updateReservation(formState))
      setSuccess(true)
    } else {
      console.error('Reservation failed')
    }
  }

  const occasions = ['None', 'Birthday', 'Anniversary', 'Wedding', 'Graduation', 'Other']
  return (
    <Container maxWidth='sm'>
      <Box
        component='form'
        onSubmit={handleSubmit}
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
        <label htmlFor='res-date'>Choose date</label>
        <input
          type='date'
          id='res-date'
          value={formState.date.toString()}
          onChange={(e) => setFormState({ ...formState, date: e.target.value })}
        />

        <InputLabel id='time-label' htmlFor='res-time'>
          Choose time
        </InputLabel>
        <Select
          id='res-time'
          labelId='time-label'
          value={formState.time}
          onChange={(e) => setFormState({ ...formState, time: e.target.value })}
        >
          {formState.availableTimes!.map((time: string) => (
            <MenuItem key={time} value={time}>
              {time}
            </MenuItem>
          ))}
        </Select>

        <NumberField.Root
          id='res-guests'
          value={formState.numberOfGuests}
          defaultValue={1}
          min={1}
          max={10}
          onValueChange={(value) => setFormState({ ...formState, numberOfGuests: value ?? 0 })}
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

        <InputLabel id='occasion-label' htmlFor='occasion'>
          Occasion
        </InputLabel>
        <Select
          id='occasion'
          labelId='occasion-label'
          value={formState.occasion}
          onChange={(e) => setFormState({ ...formState, occasion: e.target.value })}
        >
          {occasions.map((occasion: string) => (
            <MenuItem key={occasion} value={occasion}>
              {occasion}
            </MenuItem>
          ))}
        </Select>
        <Button type='submit' variant='contained'>
          Make your reservation
        </Button>
      </Box>
    </Container>
  )
}

export default BookingForm
