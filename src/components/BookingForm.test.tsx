import BookingForm from './BookingForm'
import {render} from 'vitest-browser-react'
import { expect, test } from 'vitest'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { BrowserRouter } from 'react-router'
//import { page } from '@vitest/browser/context'

test('BookingForm renders', async () => {
  const screen = render(
  <Provider store={store}><BookingForm /></Provider>, {wrapper: BrowserRouter})
  const { getByLabelText, getByText } = screen
  const heading = getByText(/Reserve a Table/i).element() as HTMLElement
  const dateLabel = getByLabelText(/Choose date/i).element() as HTMLElement
  const timeLabel = getByLabelText(/Choose time/i).element() as HTMLElement
  const guestsLabel = getByLabelText(/Number of guests/i).element() as HTMLElement
  const occasionLabel = getByLabelText(/Occasion/i).element() as HTMLElement
  const submitButton = getByText(/Make your reservation/i).element() as HTMLElement
  expect(heading).toBeInTheDocument()
  expect(dateLabel).toBeInTheDocument()
  expect(timeLabel).toBeInTheDocument()
  expect(guestsLabel).toBeInTheDocument()
  expect(occasionLabel).toBeInTheDocument()
  expect(submitButton).toBeInTheDocument()
})