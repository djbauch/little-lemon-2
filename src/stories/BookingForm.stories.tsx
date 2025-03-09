// Storybook stories for BookingFormMUI
import { Meta, StoryObj } from '@storybook/react'
import BookingForm from '../components/BookingForm'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { BrowserRouter } from 'react-router'

const meta = {
  title: 'LittleLemon/Components/BookingForm',
  component: BookingForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Provider store={store}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </Provider>
    ),
  ],
} satisfies Meta<typeof BookingForm>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
