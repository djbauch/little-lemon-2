import {useReducer, useState}  from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookingForm from '../components/BookingForm'

enum ReservationActionKind {
  SetAvailableTimes = 'SET_AVAILABLE_TIMES',
  ChooseDate = 'CHOOSE_DATE',
}

interface ReservationAction {
  type: ReservationActionKind.SetAvailableTimes
  payload: string[]
}

interface ChooseDateAction {
  type: ReservationActionKind.ChooseDate
  payload: Date
}
interface ReservationState {
  date: Date
  availableTimes: string[]
}

const initialState: ReservationState = {
  date: new Date(),
  availableTimes: [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ],
}

const initializeTimes = () => {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]
}

const updateTimes = () => {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00'
  ]
}
function reservationReducer(state: ReservationState, action: ReservationAction | ChooseDateAction): ReservationState {
  const { type, payload } = action

  switch (type) {
    case ReservationActionKind.SetAvailableTimes:
      return {...state, availableTimes: payload}
    case ReservationActionKind.ChooseDate:
      return state
    default:
      return state
  }
}

export const Reservations = () => {
  const [availableTimes, setAvailableTimes] = useState<string[]>([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ])

  return (
    <>
      <Header />
      <section className='reservations'>
        <h2>Reservations</h2>
        <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
      </section>
      <Footer />
    </>
  )
}

export default Reservations
