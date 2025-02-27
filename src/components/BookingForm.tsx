import * as React from 'react'

const BookingForm = () => {
  return (
    <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}}>
      <label htmlFor='res-date'>Choose date</label>
      <input type='date' id='res-date' />
      <label htmlFor='res-time'>Choose time</label>
      <select id='res-time'>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor='res-guests'>Number of guests</label>
      <input type='number' placeholder='1'min='1' max='10' id='guests' />
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
  )
}

export default BookingForm