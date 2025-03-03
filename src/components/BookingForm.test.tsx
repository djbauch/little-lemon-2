import BookingForm from './BookingForm'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'

test('BookingForm renders', () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  const setAvailableTimes = jest.fn()
  const { getByText, getByLabelText } = render(<BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />)
  const heading = getByText(/Reserve a Table/i)
  const dateLabel = getByLabelText(/Choose date/i)
  const timeLabel = getByLabelText(/Choose time/i)
  const guestsLabel = getByLabelText(/Number of guests/i)
  const occasionLabel = getByLabelText(/Occasion/i)
  const submitButton = getByText(/Make your reservation/i)
  expect(heading).toBeInTheDocument()
  expect(dateLabel).toBeInTheDocument()
  expect(timeLabel).toBeInTheDocument()
  expect(guestsLabel).toBeInTheDocument()
  expect(occasionLabel).toBeInTheDocument()
  expect(submitButton).toBeInTheDocument()
})