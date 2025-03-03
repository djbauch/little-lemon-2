import React, { JSX, useReducer } from 'react'

// Define types for form state and action
type FormState = {
  name: string
  email: string
  message: string
}

type Action = { type: 'UPDATE_FIELD'; field: keyof FormState; value: string } | { type: 'RESET' }

// Reducer function with typed state and actions
const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      }
    case 'RESET':
      return {
        name: '',
        email: '',
        message: '',
      }
    default:
      return state
  }
}

export default function ContactForm(): JSX.Element {
  const [formState, dispatch] = useReducer(formReducer, {
    name: '',
    email: '',
    message: '',
  })

  // Event handler with typed event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name as keyof FormState,
      value: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form Submitted:', formState)
    dispatch({ type: 'RESET' })
  }

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md'>
      <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block text-sm font-medium mb-1'>Name</label>
          <input
            type='text'
            name='name'
            value={formState.name}
            onChange={handleChange}
            className='w-full p-2 border rounded-md'
          />
        </div>
        <div>
          <label htmlFor='email' className='block text-sm font-medium mb-1'>
            Email
          </label>
          <input
            type='email'
            name='email'
            value={formState.email}
            onChange={handleChange}
            className='w-full p-2 border rounded-md'
          />
        </div>
        <div>
          <label htmlFor='message' className='block text-sm font-medium mb-1'>
            Message
          </label>
          <textarea
            name='message'
            value={formState.message}
            onChange={handleChange}
            className='w-full p-2 border rounded-md'
          ></textarea>
        </div>
        <button type='submit' className='w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'>
          Submit
        </button>
      </form>
    </div>
  )
}
