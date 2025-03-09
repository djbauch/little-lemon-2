// Tests for BookingFormMUI using Vitest
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { BrowserRouter } from 'react-router'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import BookingForm from '../components/BookingForm'
// import { fetchAPI } from '../APIMock'
// import { DateTime } from 'luxon'

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  )
}

describe('BookingFormMUI', () => {
  const screen = renderWithProviders(<BookingForm />)
  it('renders correctly', () => {
    //const screen = renderWithProviders(<BookingForm />)
    expect(screen.getByText(/Reserve a Table/i)).toBeInTheDocument()
  })

  it('displays error messages for empty fields', async () => {
    //const screen = renderWithProviders(<BookingForm />)
    const submitButton = (await screen.getByTestId('submit-button')) as HTMLButtonElement
    await userEvent.click(submitButton)
    //expect(await screen.findByText(/Please select a date./i)).toBeInTheDocument()
    expect(await screen.findByText(/Please select a time./i)).toBeInTheDocument()
    //expect(await screen.findByText(/Please enter the number of guests./i)).toBeInTheDocument()
    //expect(await screen.findByText(/Please select an occasion./i)).toBeInTheDocument()
  })

  // it('allows form submission when valid', async () => {
  //   // renderWithProviders(<BookingForm />)
  //   const selectElement = screen.getByLabelText(/Choose time/i) as HTMLSelectElement
  //   const timeOptions = Array.from(selectElement.options)

  //   await userEvent.type(screen.getByTestId('date-input'), '2025-03-08')
  //   await userEvent.selectOptions(screen.getByLabelText(/Choose time/i), timeOptions[0].value)
  //   await userEvent.type(screen.getByLabelText(/Number of guests/i), '4')
  //   await userEvent.selectOptions(screen.getByLabelText(/Occasion/i), 'Birthday')
  //   const submitButton = screen.getByRole('button', { name: /Make your reservation/i })
  //   await userEvent.click(submitButton)
  //   expect(screen.queryByText(/Please select a date./i)).not.toBeInTheDocument()
  // })
})
