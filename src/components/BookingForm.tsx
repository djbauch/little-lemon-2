import { useEffect, useReducer } from 'react'
import { DateTime } from 'luxon'
import { TextField, Button, Container, Typography, Box, InputLabel, Select, MenuItem } from '@mui/material'
import { NumberField } from '@base-ui-components/react/number-field'
import { fetchAPI, submitAPI } from '../APIMock'
import styles from './BookingForm.module.css'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

interface ReservationState {
  date: string
  availableTimes: string[]
  time: string
  numberOfGuests: number
  occasion: string
}

enum RAK {
  SetAvailableTimes = 'SET_AVAILABLE_TIMES',
  ChooseDate = 'CHOOSE_DATE',
  SetNumberOfGuests = 'SET_NUMBER_OF_GUESTS',
  SetOccasion = 'SET_OCCASION',
  SetTime = 'SET_TIME',
  Reset = 'RESET',
}

interface ResetAction {
  type: RAK.Reset
  payload: null
}
interface ReservationAction {
  type: RAK.SetAvailableTimes
  payload: string[]
}

interface ChooseDateAction {
  type: RAK.ChooseDate
  payload: string
}

interface SetNumberOfGuestsAction {
  type: RAK.SetNumberOfGuests
  payload: number
}

interface SetTimeAction {
  type: RAK.SetTime
  payload: string
}

interface SetOccasionAction {
  type: RAK.SetOccasion
  payload: string
}

type Action =
  | ReservationAction
  | ChooseDateAction
  | SetNumberOfGuestsAction
  | SetOccasionAction
  | SetTimeAction
  | ResetAction

function reservationReducer(state: ReservationState, action: Action): ReservationState {
  const { type, payload } = action

  switch (type) {
    case RAK.SetAvailableTimes:
      return { ...state, availableTimes: payload }
    case RAK.ChooseDate:
      return { ...state, date: payload }
    case RAK.SetNumberOfGuests:
      return { ...state, numberOfGuests: payload }
    case RAK.SetOccasion:
      return { ...state, occasion: payload }
    case RAK.SetTime:
      return { ...state, time: payload }
    case RAK.Reset:
      return initialState
    default:
      return state
  }
}

const initialState: ReservationState = {
  date: DateTime.now().toISODate(),
  availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
  time: '',
  numberOfGuests: 1,
  occasion: 'None',
}

const BookingForm = () => {
  const [formState, dispatch] = useReducer(reservationReducer, initialState)

  useEffect(() => {
    const times = fetchAPI(DateTime.fromISO(formState.date))
    dispatch({ type: RAK.SetAvailableTimes, payload: times })
  }, [formState.date])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Reservation submitted:', formState.date, formState.time, formState.numberOfGuests, formState.occasion)
    const success = submitAPI(formState)
    if (success) {
      console.log('Reservation successful')
      dispatch({ type: RAK.Reset, payload: null })
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
          onChange={(e) => dispatch({ type: RAK.ChooseDate, payload: e.target.value })}
        />

        <InputLabel id='time-label' htmlFor='res-time'>
          Choose time
        </InputLabel>
        <Select
          id='res-time'
          labelId='time-label'
          value={formState.time}
          onChange={(e) => dispatch({ type: RAK.SetTime, payload: e.target.value })}
        >
          {formState.availableTimes.map((time: string) => (
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
          onValueChange={(value) => dispatch({ type: RAK.SetNumberOfGuests, payload: value ?? 0 })}
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
          onChange={(e) => dispatch({ type: RAK.SetOccasion, payload: e.target.value })}
        >
          {occasions.map((occasion: string) => (
            <MenuItem key={occasion} value={occasion}>
              {occasion}
            </MenuItem>
          ))}
        </Select>
        <input type='submit' value='Make your reservation' />
      </Box>
    </Container>
  )
}

export default BookingForm
