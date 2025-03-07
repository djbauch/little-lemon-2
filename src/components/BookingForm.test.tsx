import BookingForm from './BookingForm'
import { render } from 'vitest-browser-react'
//import { fireEvent, waitFor } from '@testing-library/react'
import { expect, describe, it } from 'vitest'
import { userEvent } from '@vitest/browser/context'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { BrowserRouter } from 'react-router'
import { page } from '@vitest/browser/context'

describe('BookingForm', () => {
  it('renders form correctly', async () => {
    const screen = render(
      <Provider store={store}>
        <BookingForm />
      </Provider>,
      { wrapper: BrowserRouter }
    )
    const { getByLabelText, getByText } = screen
    const heading = getByText(/Reserve a Table/i).element() as HTMLElement
    const dateLabel = getByLabelText(/Choose date/i).element() as HTMLElement
    //const timeLabel = getByLabelText(/Choose time/i).element() as HTMLElement
    const guestsLabel = getByLabelText(/Number of guests/i).element() as HTMLElement
    // const occasionLabel = getByLabelText(/Occasion/i).element() as HTMLElement
    const submitButton = getByText(/Make your reservation/i).element() as HTMLElement
    expect(heading).toBeInTheDocument()
    expect(dateLabel).toBeInTheDocument()
    //expect(timeLabel).toBeInTheDocument()
    expect(guestsLabel).toBeInTheDocument()
    //expect(occasionLabel).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })

  it('displays error messages for empty fields on submit', async () => {
    const screen = render(
      <Provider store={store}>
        <BookingForm />
      </Provider>,
      { wrapper: BrowserRouter }
    )
    const { getByText, getByRole } = screen
    const submitButton = getByRole('button', { name: /Make your reservation/i })

    await userEvent.click(submitButton)

    //expect(await getByText(/Please select a date./i)).toBeInTheDocument();
    const timeError = await getByText(/Please select a time./i)
    const timeElement = timeError.element() as HTMLElement
    expect(timeElement).toBeInTheDocument()
    //expect(await getByText(/Please enter the number of guests./i)).toBeInTheDocument();
    //expect(await getByText(/Please select an occasion./i)).toBeInTheDocument();
  })
})
