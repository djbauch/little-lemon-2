import * as React from 'react'

interface BookingFormProps {
  availableTimes: string[]
  setAvailableTimes: React.Dispatch<React.SetStateAction<string[]>>
}

const BookingForm = (props: BookingFormProps) => {
  const { availableTimes } = props
  return (
    <>
      <h1>Reserve a Table</h1>
      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
        <label htmlFor='res-date'>Choose date</label>
        <input type='date' id='res-date' />
        <label htmlFor='res-time'>Choose time</label>
        <select id='res-time'>
          {availableTimes.map((time: string) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label htmlFor='res-guests'>Number of guests</label>
        <input type='number' placeholder='1' min='1' max='10' id='guests' />
        <label htmlFor='occasion'>Occasion</label>
        <select id='occasion'>
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Wedding</option>
          <option>Graduation</option>
          <option>Other</option>
        </select>
        <input type='submit' value='Make your reservation' />
      </form>
    </>
  )
}

export default BookingForm
