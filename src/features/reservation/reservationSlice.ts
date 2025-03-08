
import { DateTime } from 'luxon'
import { createSlice } from '@reduxjs/toolkit'

// This part is redundant now. Before introducing Redux Toolkit, these were the types and actions used in the Reservation reducer
// The Reservation reducer is now embedded in the reservationSlice
export interface ReservationState {
  date: string
  availableTimes?: string[]
  time: string
  numberOfGuests: number
  occasion: string
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

export enum RAK {
  SetAvailableTimes = 'SET_AVAILABLE_TIMES',
  ChooseDate = 'CHOOSE_DATE',
  SetNumberOfGuests = 'SET_NUMBER_OF_GUESTS',
  SetOccasion = 'SET_OCCASION',
  SetTime = 'SET_TIME',
  Reset = 'RESET',
}

// Before using Redux Toolkit, the Reservation reducer was defined as a function
// The function takes the current state and an action, and returns the new state
export function reservationReducer(state: ReservationState, action: Action): ReservationState {
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

export const initialState: ReservationState = {
  date: DateTime.now().toISODate(),
  availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
  time: '',
  numberOfGuests: 1,
  occasion: 'None',
}

// The Reservation reducer is embedded in the reservationSlice for use with Redux Toolkit
// The reservationSlice is used in the BookingForm component
export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    updateReservation(state, action) {
      const { date, time, numberOfGuests, occasion } = action.payload
      state.date = date
      state.time = time
      state.numberOfGuests = numberOfGuests
      state.occasion = occasion
    }
  },
  selectors: {
    selectDate: (state) => state.date,
    selectAvailableTimes: (state) => state.availableTimes,
    selectTime: (state) => state.time,
    selectNumberOfGuests: (state) => state.numberOfGuests,
    selectOccasion: (state) => state.occasion,
  }
})

export const { updateReservation } = reservationSlice.actions
export const { selectDate, selectAvailableTimes, selectTime, selectNumberOfGuests, selectOccasion } = reservationSlice.selectors
