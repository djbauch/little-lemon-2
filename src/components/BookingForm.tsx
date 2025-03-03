import * as React from 'react'

interface BookingFormProps {
  availableTimes: string[]
  setAvailableTimes: React.Dispatch<React.SetStateAction<string[]>>
}

const BookingForm = (props: BookingFormProps) => {
  const { availableTimes } = props
  const [date, setDate] = React.useState(new Date().toDateString())
  const [time, setTime] = React.useState('availableTimes[0]')
  const [guests, setGuests] = React.useState(1)
  const [occasion, setOccasion] = React.useState('None')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Reservation submitted:', { date, time, guests, occasion })
  }

  return (
    <>
      <h1>Reserve a Table</h1>
      <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
        <label htmlFor='res-date'>Choose date</label>
        <input type='date' id='res-date' value={date} onChange={(e) => setDate(e.target.value) }/>
        <label htmlFor='res-time'>Choose time</label>
        <select id='res-time' value={time} onChange={(e) => setTime(e.target.value)}>
          {availableTimes.map((time: string) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label htmlFor='res-guests'>Number of guests</label>
        <input type='number' placeholder='1' min='1' max='10' id='res-guests' value={guests} onChange={e => setGuests(+e.target.value)} />
        <label htmlFor='occasion'>Occasion</label>
        <select id='occasion' value={occasion} onChange={(e) => setOccasion(e.target.value)}>
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
